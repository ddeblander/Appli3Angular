import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CoursService} from '../../services/cours.service';
import {Cours} from "../../entities/cours.entities";

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  cours?: Cours[];
  constructor(private coursService: CoursService, private router:
    Router) { }

  ngOnInit(): void { }

  onSearch(value: any) {
    if(value.intitule==""|| value==null)
    {
      this.coursService.getAllCours().subscribe( data => {this.cours=data});
    }
    else {
      this.coursService.searchCours(value.intitule).subscribe(
        data => {
          this.cours = data
        });
    }
  }
  onNewClient()
  {
    this.router.navigateByUrl('newCours');
  }
  onDelete(c: Cours) {
    let v = confirm('êtes vous sûr de vouloir supprimer ? ');
    if (v) {
      this.coursService.deleteCours(c).subscribe(
        {
          next: data => {
            this.onSearch(null);
          },
          error: err => { alert(err.headers.get("error")); }
        }
      );
    }
  }
  onEdit(c: Cours)
  {
    this.router.navigateByUrl('editCours/'+c.idcours);
  }
}
