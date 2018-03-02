import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppServiceService {

  constructor(private http: HttpClient) { }

  
  getAppointment():Observable<any>{
  return this.http.get<any>('https://nitrr-dispensary.herokuapp.com/appointment/api/');
}

appointmentDetails(id:number){
 return this.http.get<any>("https://nitrr-dispensary.herokuapp.com/appointment/api/"+id+"/");
}

appointmentTreated(id:number){
  return this.http.get<any>("https://nitrr-dispensary.herokuapp.com/appointment/treated/"+id+"/");
}


}
