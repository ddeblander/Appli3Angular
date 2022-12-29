import {Salle} from "./salle.entities";

export interface Classe
{
  id:number;
  sigle:string;
  specialite:number;
  annee:number;
  nbEleves:number;
  salle:Salle;

}
