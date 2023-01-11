import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClasseComponent } from './components/classe/classe.component';
import { CoursComponent } from './components/cours/cours.component';
import { SalleComponent } from './components/salle/salle.component';
import {MainMenuComponent} from "./components/main-menu/main-menu.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewClasseComponent } from './components/new-classe/new-classe.component';
import { NewCoursComponent } from './components/new-cours/new-cours.component';
import { NewSalleComponent } from './components/new-salle/new-salle.component';
import { EditCoursComponent } from './components/edit-cours/edit-cours.component';
import { EditClasseComponent } from './components/edit-classe/edit-classe.component';
import { EditSalleComponent } from './components/edit-salle/edit-salle.component';
import { HomeComponent } from './components/home/home.component';
import { ExamenComponent } from './components/examen/examen.component';

@NgModule({
  declarations: [
    AppComponent,
    ClasseComponent,
    CoursComponent,
    SalleComponent,
    MainMenuComponent,
    NewClasseComponent,
    NewCoursComponent,
    NewSalleComponent,
    EditCoursComponent,
    EditClasseComponent,
    EditSalleComponent,
    HomeComponent,
    ExamenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
