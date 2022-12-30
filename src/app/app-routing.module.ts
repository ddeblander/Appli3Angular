import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClasseComponent} from "./components/classe/classe.component";
import {CoursComponent} from "./components/cours/cours.component";
import {NewCoursComponent} from "./components/new-cours/new-cours.component";
import {SalleComponent} from "./components/salle/salle.component";
import {NewClasseComponent} from "./components/new-classe/new-classe.component";
import {NewSalleComponent} from "./components/new-salle/new-salle.component";

const routes: Routes = [
  {path:'classe', component: ClasseComponent},
  {path:'newClasse', component: NewClasseComponent},
  {path:'cours', component: CoursComponent},
  {path:'newCours', component: NewCoursComponent},
  {path:'salle', component: SalleComponent},
  {path:'newSalle', component: NewSalleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
