import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CoursService} from "../../services/cours.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ClasseService} from "../../services/classe.service";

@Component({
  selector: 'app-edit-classe',
  templateUrl: './edit-classe.component.html',
  styleUrls: ['./edit-classe.component.css']
})
export class EditClasseComponent
{
  classeFormGroup?: FormGroup;
  submitted = false;
  id:number;
  constructor(private classeService: ClasseService,private fb:
    FormBuilder,activatedRoute : ActivatedRoute,private router:
    Router)
  {
    this.id= activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.classeService.getClasse(this.id).subscribe(
      classe =>{this.classeFormGroup = this.fb.group({
        idCours: [classe.id, Validators.required],
        sigle: [classe.sigle, Validators.required],
        specialite: [classe.specialite, Validators.required],
        annee: [classe.annee, Validators.required],
        nbEleves: [classe.nbEleves, Validators.required],
        salle: [classe.salle, Validators.required],

      })
      });
  }
  onUpdateClasse(): void {
    this.submitted = true;
    if (this.classeFormGroup?.invalid) { return; }
    this.classeService.updateClasse(this.id,this.classeFormGroup?.value).subscribe(data => {alert('maj ok')},
      err => {
        alert(err.headers.get("error"));
      });
    // obligé d'envoyer l'ID puis Cours sinon l'ID est undifined
  }
  onReturn():void
  {
    this.router.navigateByUrl('/classe');
  }
}
