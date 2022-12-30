import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CoursService} from "../../services/cours.service";
import {SalleService} from "../../services/salle.service";

@Component({
  selector: 'app-new-salle',
  templateUrl: './new-salle.component.html',
  styleUrls: ['./new-salle.component.css']
})
export class NewSalleComponent
{
  salleFormGroup?: FormGroup;
  submitted = false;
  id:number|null=null;
  constructor(private fb: FormBuilder, private salleService: SalleService) {
  }
  ngOnInit() : void {
    this.salleFormGroup = this.fb.group({
      sigle: ["", Validators.required],
      capacite: ["", Validators.required],

    });
  }
  onSaveSalle() {
    this.submitted = true;
    if (this.salleFormGroup?.invalid) {
      alert("invalide")
      return; }

    this.salleService.save(this.salleFormGroup?.value).subscribe(data =>
      {alert('sauvegarde ok');this.id=data.id},
      err => {
        alert(err.headers.get("error"));
      });
  }

}
