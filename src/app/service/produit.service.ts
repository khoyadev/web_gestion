import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ProduitService {
  private api = "http://localhost:3000";
  constructor(private http:HttpClient) { }

  getAll():Observable<Produit[]>{
    return  this.http.get<Produit[]>(this.api+"/produit/");
  }
  getById(id:any):Observable<Produit>{
    return  this.http.get<Produit>(this.api+"/produit/"+id);
  }

  deleteProduit(id :any){
    return this.http.delete(this.api+"/produit/"+id);
  }

  addProduit(produit :Produit){
    return this.http.post(this.api+"/produit/", produit);
  }
  updatProduit(id:any,produit :Produit){
    return this.http.put(this.api+"/produit/"+id,produit);
  }
}
