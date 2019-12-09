import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid = "9cf258b6c15ba468ae60" 
  private clientsecret = "b96aea5130b1946f4bfaefc5432dd16619660dbb";

  constructor(private http:HttpClient) {
    this.username="omoshthegeek254";
   }
   getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
  }

  findRepository(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
  }

  updateProfile(username:string){
    this.username = username;
  }

  
}

