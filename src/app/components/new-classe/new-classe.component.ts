import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CoursService} from "../../services/cours.service";
import {ClasseService} from "../../services/classe.service";

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
  constructor(private fb: FormBuilder, private classeService: ClasseService) {
  }
  ngOnInit() : void {
    this.classeFormGroup = this.fb.group({
      sigle: ["", Validators.required],
      specialite: ["", Validators.required],
      annee: ["", Validators.required],
      nbEleves: ["", Validators.required],
      salle: ["", Validators.required],

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

}
