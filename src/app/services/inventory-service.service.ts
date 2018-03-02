import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Headers } from '@angular/http';

@Injectable()
export class InventoryServiceService {

  constructor(private http: HttpClient) { }

  

   

  getMedicineDetails(){
    return this.http.get<any>("https://nitrr-dispensary.herokuapp.com/inventory/api/");
  }

  editMedicine(id:number){
    console.log(id);
    return this.http.get<any>("https://nitrr-dispensary.herokuapp.com/inventory/get_medicine_detail/"+id+"");
  }

  updateMedicine(formData:any,id:number){
   let headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post<any>("https://nitrr-dispensary.herokuapp.com/inventory/update/"+id+"",JSON.stringify(formData));
  }
}
