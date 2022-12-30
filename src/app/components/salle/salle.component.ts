import { Component } from '@angular/core';

import {Router} from "@angular/router";
import {Salle} from "../../entities/salle.entities";
import {SalleService} from "../../services/salle.service";

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent
{
  salles?: Salle[];
  constructor(private salleService: SalleService, private router:
    Router) { }

  ngOnInit(): void { }

  onSearch(value: any) {
    if(value.intitule=="")
    {
      this.salleService.getAllSalle().subscribe( data => {this.salles=data});
    }
    else {
      this.salleService.searchSalle(value.intitule).subscribe(
        data => {
          this.salles = data
        });
    }
  }
  onNewClient()
  {
    this.router.navigateByUrl('newSalle');
  }
  onDelete(s: Salle) {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.salleService.deleteSalle(s).subscribe(
        {
          next: data => {
            this.onSearch(s);
          },
          error: err => { alert(err.headers.get("error")); }
        }
      );
    }
  }
  onEdit(s: Salle)
  {
    this.router.navigateByUrl('editSalle/'+s.id);
  }
}
