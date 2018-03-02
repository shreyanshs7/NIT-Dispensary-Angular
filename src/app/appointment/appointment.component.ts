import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { moveIn , fallIn ,moveInLeft} from '../animations/router.animations';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  animations: [moveIn(), fallIn(),moveInLeft()],
  //host: {'[@moveIn]': ''}
})
export class AppointmentComponent implements OnInit {
  state: string = '';
  public appointments = [];

  public appDetail  = [];
  appSearch:string = "";
  alertMessage  = [];
  alertShow : boolean = false;
  p : number = 1;
  

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
  
  
 }

}
