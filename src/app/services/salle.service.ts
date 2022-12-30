import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Salle} from "../entities/salle.entities";


@Injectable({providedIn:"root"})
export class SalleService
{
  private host = environment.host;

  constructor(private http: HttpClient) {}
  getSalle(id:number): Observable<Salle>
  {
    return this.http.get<Salle>(this.host + '/salle/' +id);
  }
  getAllSalle(): Observable<Salle[]>
  {
    return this.http.get<Salle[]>(this.host + '/salle/all');
  }
  /*searchSalleUnique(code: string,intitule:string):
    Observable<Salle[]>{
    return this.http.get<Salle[]>(this.host +
      '/cours/'+code+'/'+intitule+'/');
  }*/

  searchSalle(sigle: string): Observable<Salle[]>{
    return this.http.get<Salle[]>(this.host + '/salle/sigle=' + sigle);
  }
  deleteSalle(c: Salle): Observable<void>{
    return this.http.delete<void>(this.host + '/salle/' + c.id);
  }
  save(c: Salle): Observable<Salle>{
    return this.http.post<Salle>(this.host + '/salle/', c);
  }
  updateSalle(c: Salle): Observable<Salle>{
    return this.http.put<Salle>(this.host + '/salle/' + c.id, c);
  }

}

