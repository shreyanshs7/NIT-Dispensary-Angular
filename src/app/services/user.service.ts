import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get("https://nitrr-dispensary.herokuapp.com/user/api");
  }

  getUserDetail(id){
    return this.http.get("https://nitrr-dispensary.herokuapp.com/user/detail_angular/"+id+"/");
  }
}
