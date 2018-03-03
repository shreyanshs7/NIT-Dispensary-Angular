import { Time } from "@angular/common";

export class Medicine {
    constructor(
        public id:number,
        public name:string,
        public price:number,
        public quantity:number
    ){}
}

export class Appointment {

    constructor(
        public id:number,
        public name:string,
        public issue_type:string,
        public medical_issue:string,
        public date:Date,
        public time:Time
    ){}

}
