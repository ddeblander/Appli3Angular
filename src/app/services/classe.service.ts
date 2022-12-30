import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Classe} from "../entities/classe.entities";


@Injectable({providedIn:"root"})
export class ClasseService
{
  private host = environment.host;

  constructor(private http: HttpClient) {}
  getClasse(id:number): Observable<Classe>
  {
    return this.http.get<Classe>(this.host + '/classe/' +id);
  }
  getAllClasses(): Observable<Classe[]>
  {
    return this.http.get<Classe[]>(this.host + '/classe/all');
  }
  searchClasseUnique(sigle: string,specialite:string):
    Observable<Classe[]>{
    return this.http.get<Classe[]>(this.host +
      '/cours/'+sigle+'/'+specialite+'/');
  }

  searchClasse(sigle: string): Observable<Classe[]>{
    return this.http.get<Classe[]>(this.host + '/classe/sigle=' + sigle);
  }
  deleteClasse(c: Classe): Observable<void>{
    return this.http.delete<void>(this.host + '/classe/' + c.id);
  }
  save(c: Classe): Observable<Classe>{
    return this.http.post<Classe>(this.host + '/classe/', c);
  }
  updateClasse(id:number,c: Classe): Observable<Classe>{
    return this.http.put<Classe>(this.host + '/classe/' + id, c);
  }

}

