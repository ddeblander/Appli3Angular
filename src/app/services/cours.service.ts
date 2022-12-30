import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cours} from "../entities/cours.entities";


@Injectable({providedIn:"root"})
export class CoursService
{
  private host = environment.host;

  constructor(private http: HttpClient) {}
  getCours(idcours:number): Observable<Cours>
  {
    return this.http.get<Cours>(this.host + '/cours/' +idcours);
  }
  getAllCours(): Observable<Cours[]>
  {
    return this.http.get<Cours[]>(this.host + '/cours/all');
  }
  searchCoursUnique(code: string,intitule:string):
    Observable<Cours[]>{
    return this.http.get<Cours[]>(this.host +
      '/cours/'+code+'/'+intitule+'/');
  }

  searchCours(intitule: string): Observable<Cours[]>{
    return this.http.get<Cours[]>(this.host + '/cours/intitule=' + intitule);
  }
  deleteCours(c: Cours): Observable<void>{
    return this.http.delete<void>(this.host + '/cours/' + c.idcours);
  }
  save(c: Cours): Observable<Cours>{
    return this.http.post<Cours>(this.host + '/cours/', c);
  }
  updateCours(idCours:number,c: Cours): Observable<Cours>{
    return this.http.put<Cours>(this.host + '/cours/' + idCours, c);

  }

}

