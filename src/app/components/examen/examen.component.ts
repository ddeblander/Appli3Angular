import { Component } from '@angular/core';
import {Classe} from "../../entities/classe.entities";
import {ClasseService} from "../../services/classe.service";
import {Router} from "@angular/router";
import {Salle} from "../../entities/salle.entities";
import {subscribeOn} from "rxjs";

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent
{
  classes?: Classe[];

  salles?: Salle[];
  constructor(private classeService: ClasseService, private router:
    Router) { }

  ngOnInit(): void {
  }

  onSearch(value: any) {

      this.classeService.searchClasseBySpecialite(value.specialite).subscribe(
        data => {
          this.classes = data;
          console.log("il charge  dans le truc d'examen");

          if(this.salles?.length !=0)
          {
            this.salles=[];
          }
          this.classes?.forEach((classe, index, object) => {
            console.log("il passe dans le truc d'examen");

            // @ts-ignore
            if (this.salles?.indexOf(classe.salle) < 0)
            {
              this.salles?.push(classe.salle)
            }
          });

        });



  }



}
