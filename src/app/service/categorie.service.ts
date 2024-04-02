import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../model/categorie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CategorieService {
  private api = "http://localhost:3000";
  constructor(private http:HttpClient) { }

  getAll():Observable<Categorie[]>{
    return  this.http.get<Categorie[]>(this.api+"/categorie/");
  }
  getById(id:any):Observable<Categorie>{
    return  this.http.get<Categorie>(this.api+"/categorie/"+id);
  }

  deleteCategorie(id :any){
    return this.http.delete(this.api+"/categorie/"+id);
  }

  addCategorie(categorie :Categorie){
    return this.http.post(this.api+"/categorie/", categorie);
  }
  updatCategorie(id:any,categorie :Categorie){
    return this.http.put(this.api+"/categorie/"+id,categorie);
  }
}
