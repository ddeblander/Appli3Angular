import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CoursService} from "../../services/cours.service";

@Component({
  selector: 'app-edit-cours',
  templateUrl: './edit-cours.component.html',
  styleUrls: ['./edit-cours.component.css']
})
export class EditCoursComponent
{
  coursFormGroup?: FormGroup;
  submitted = false;
  idCours:number;
  constructor(private coursService: CoursService,private fb:
    FormBuilder,activatedRoute : ActivatedRoute, private routeur: Router)
  {
    this.idCours= activatedRoute.snapshot.params['idCours'];
  }
  ngOnInit(): void {
    this.coursService.getCours(this.idCours).subscribe(
      cours =>{this.coursFormGroup = this.fb.group({
        idCours: [cours.idcours, Validators.required],
        code: [cours.code, Validators.required],
        intitule: [cours.intitule, Validators.required],


      })
      });
  }
  onUpdateCours(): void {
    this.submitted = true;
    if (this.coursFormGroup?.invalid) { return; }
    this.coursService.updateCours(this.coursFormGroup?.value.idCours,this.coursFormGroup?.value).subscribe(data => {alert('maj ok')},
      err => {
        alert(err.headers.get("error"));
      });
    // obligé d'envoyer l'ID puis Cours sinon l'ID est undifined
  }
  onReturn():void
  {
    this.routeur.navigateByUrl('/cours');
  }
}
