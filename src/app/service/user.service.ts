import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private api = "http://localhost:3000";
  constructor(private http:HttpClient) { }

  getAll():Observable<User[]>{
    return  this.http.get<User[]>(this.api+"/user/");
  }
  getById(id:any):Observable<User>{
    return  this.http.get<User>(this.api+"/user/"+id);
  }

  deleteUser(id :any){
    return this.http.delete(this.api+"/user/"+id);
  }

  addUser(user :User){
    return this.http.post(this.api+"/user/", user);
  }
  updatUser(id:any,user :User){
    return this.http.put(this.api+"/user/"+id,user);
  }
}
