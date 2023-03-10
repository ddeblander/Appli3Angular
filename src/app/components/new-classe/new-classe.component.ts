import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CoursService} from "../../services/cours.service";
import {ClasseService} from "../../services/classe.service";
import {Salle} from "../../entities/salle.entities";
import {SalleService} from "../../services/salle.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-classe',
  templateUrl: './new-classe.component.html',
  styleUrls: ['./new-classe.component.css']
})
export class NewClasseComponent implements OnInit
{
  classeFormGroup?: FormGroup;
  submitted = false;
  id:number|null=null;
  salles?: Salle[];
  constructor(private fb: FormBuilder, private classeService: ClasseService, private salleService: SalleService, private routeur:Router) {
  }
  ngOnInit() : void {
    this.salleService.getAllSalle().subscribe( data => {this.salles=data});
    this.classeFormGroup = this.fb.group({
      sigle: ["", Validators.required],
      specialite: ["", Validators.required],
      annee: ["", Validators.required],
      nbEleves: ["", Validators.required],
      salle: ["", Validators.required],
// attention, n'arrive pas a créer une nouvelle classe à cause de la Liste déroulante.

    });

  }
  onSaveClasse() {
    this.submitted = true;
    if (this.classeFormGroup?.invalid) {
      alert("invalide")
      return; }

    this.classeService.save(this.classeFormGroup?.value).subscribe(data =>
      {alert('sauvegarde ok');this.id=data.id},
      err => {
        alert(err.headers.get("error"));
      });
  }
  onReturn():void
  {
    this.routeur.navigateByUrl('/classe');
  }

}
