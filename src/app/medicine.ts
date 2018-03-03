import { Time } from "@angular/common";

export interface Medicine {
         id:number,
         name:string,
         price:number,
         quantity:number
   
}

export interface Appointment {

         id:number,
         name:string,
         issue_type:string,
         medical_issue:string,
         date:Date,
         time:Time


}
