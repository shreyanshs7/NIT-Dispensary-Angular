import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public appointments: Array<any> = [];

  public appDetail : Array<any> = [];

  alertMessage : Array<any> = [];
  alertShow : boolean = false;
  p : number = 1;
  show:boolean = true;

  constructor(private service: AppServiceService) { }

  ngOnInit() {
    this.service.getAppointment().subscribe(
      response => {
        if(response['success']){
          this.appointments = response['appointment_list'];
        console.log(this.appointments);
        }
        
      }
    );
  }

  alertMessageShow(){
    this.alertShow = false;
  }

  markTreated(id:number){
    this.service.appointmentTreated(id).subscribe(
      (response:any) => {
        this.alertMessage = response;
      }
      
    );
    console.log(this.alertMessage);
    this.alertShow = true;
  }

  showAppointments(){
    this.show = !this.show;
  }

 public getAppDetails(id:number){
    console.log(id);
  this.service.appointmentDetails(id).subscribe(
    response => {
      
      if(response['success']){
        this.appDetail = response['appointment_detail'];
        console.log(this.appDetail);
      }
    }
    
  );
  this.show = !this.show;
  
 }

}
