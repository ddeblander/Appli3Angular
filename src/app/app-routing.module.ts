import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClasseComponent} from "./components/classe/classe.component";
import {CoursComponent} from "./components/cours/cours.component";
import {SalleComponent} from "./components/salle/salle.component";

import {NewClasseComponent} from "./components/new-classe/new-classe.component";
import {NewSalleComponent} from "./components/new-salle/new-salle.component";
import {NewCoursComponent} from "./components/new-cours/new-cours.component";

import {EditClasseComponent} from "./components/edit-classe/edit-classe.component";
import {EditCoursComponent} from "./components/edit-cours/edit-cours.component";
import {EditSalleComponent} from "./components/edit-salle/edit-salle.component";
import {HomeComponent} from "./components/home/home.component";

import {ExamenComponent} from "./components/examen/examen.component";

const routes: Routes = [
  {path:'classe', component: ClasseComponent},
  {path:'newClasse', component:NewClasseComponent },
  {path:'editClasse/:id', component:EditClasseComponent },

  {path:'cours', component: CoursComponent},
  {path:'newCours', component: NewCoursComponent},
  {path:'editCours/:idCours', component: EditCoursComponent},

  {path:'salle', component: SalleComponent},
  {path:'newSalle', component: NewSalleComponent},
  {path:'editSalle/:id', component: EditSalleComponent},

  {path:'', component: HomeComponent},

  {path:'examen', component: ExamenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
