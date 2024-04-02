import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marque } from '../model/marque';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  private api = "http://localhost:3000";
  constructor(private http:HttpClient) { }

  getAll():Observable<Marque[]>{
    return  this.http.get<Marque[]>(this.api+"/marque/");
  }
  getById(id:any):Observable<Marque>{
    return  this.http.get<Marque>(this.api+"/marque/"+id);
  }

  deleteMarque(id :any){
    return this.http.delete(this.api+"/marque/"+id);
  }

  addMarque(marque :Marque){
    return this.http.post(this.api+"/marque/", marque);
  }
  updatMarque(id:any,marque :Marque){
    return this.http.put(this.api+"/marque/"+id,marque);
  }
}
