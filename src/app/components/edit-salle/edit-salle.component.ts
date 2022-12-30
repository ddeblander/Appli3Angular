import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CoursService} from "../../services/cours.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SalleService} from "../../services/salle.service";

@Component({
  selector: 'app-edit-salle',
  templateUrl: './edit-salle.component.html',
  styleUrls: ['./edit-salle.component.css']
})
export class EditSalleComponent
{
  salleFormGroup?: FormGroup;
  submitted = false;
  id:number;
  constructor(private salleService: SalleService,private fb:
    FormBuilder,activatedRoute : ActivatedRoute, private routeur:Router)
  {
    this.id= activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.salleService.getSalle(this.id).subscribe(
      salle =>{this.salleFormGroup = this.fb.group({
        idCours: [salle.id, Validators.required],
        sigle: [salle.sigle, Validators.required],
        capacite: [salle.capacite, Validators.required],


      })
      });
  }
  onUpdateSalle(): void {
    this.submitted = true;
    if (this.salleFormGroup?.invalid) { return; }
    this.salleService.updateSalle(this.id,this.salleFormGroup?.value).subscribe(data => {alert('maj ok')},
      err => {
        alert(err.headers.get("error"));
      });
    // obligé d'envoyer l'ID puis Cours sinon l'ID est undifined
  }
  onReturn():void
  {
    this.routeur.navigateByUrl('/salle');
  }
}
