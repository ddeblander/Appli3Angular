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
classesCapacite?: Classe[];
classe?: Classe;
index:number;
constructor(private classeService: ClasseService, private router:
  Router) { this.index=0;}

ngOnInit(): void {
}

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
// Code examen exercice2
  onSearchByCapacite(value2: any) {
    console.log("valeur : "+ value2.capacite);
    if(value2.capacite==0)
    {
      //this.classeService.getAllClasses().subscribe( data => {this.classes=data});
    }
    else {
      this.classeService.getAllClasses().subscribe(data => {

        this.classesCapacite = data



      });
      if(this.classes?.length !=0)
      {
        this.classes=[];
      }
      this.classesCapacite?.forEach((classe, index, object) => {
        console.log("il passe dedans");
        if (classe.nbEleves <= value2.capacite) {
          this.classes?.push(classe)
          console.log("il passe dans le if valeur :"+value2.capacite);
        }
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
