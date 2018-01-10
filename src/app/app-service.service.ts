import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppServiceService {

  constructor(private http: HttpClient) { }

  
  getAppointment(){
  return this.http.get<any>('http://127.0.0.1:8000/appointment/api/');
}

appointmentDetails(id:number){
 return this.http.get<any>("http://127.0.0.1:8000/appointment/api/"+id+"/");
}

appointmentTreated(id:number){
  return this.http.get<any>("http://127.0.0.1:8000/appointment/treated/"+id+"/");
}


}
