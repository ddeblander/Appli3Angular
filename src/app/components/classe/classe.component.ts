import {Component, OnInit} from '@angular/core';
import {CoursService} from "../../services/cours.service";
import {Router} from "@angular/router";
import {Classe} from "../../entities/classe.entities";
import {ClasseService} from "../../services/classe.service";

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit
{
classes?: Classe[];
constructor(private classeService: ClasseService, private router:
  Router) { }

ngOnInit(): void { }

onSearch(value: any) {
  if(value.intitule=="")
  {
    this.classeService.getAllClasses().subscribe( data => {this.classes=data});
  }
  else {
    this.classeService.searchClasse(value.intitule).subscribe(
      data => {
        this.classes = data
      });
  }
}
onNewClasse()
{
  this.router.navigateByUrl('newClasse');
}
onDelete(c: Classe) {
  let v = confirm('êtes vous sûr de vouloir supprimer ? ');
  if (v) {
    this.classeService.deleteClasse(c).subscribe(
      {
        next: data => {
          this.onSearch(c);
        },
        error: err => { alert(err.headers.get("error")); }
      }
    );
  }
}
onEdit(c: Classe)
{
  this.router.navigateByUrl('editClasse/'+c.id);
}
}
