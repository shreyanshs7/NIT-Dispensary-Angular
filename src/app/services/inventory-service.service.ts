import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class InventoryServiceService {

  constructor(private http: HttpClient) { }

  getMedicineDetails(){
    return this.http.get<any>("http://127.0.0.1:8000/inventory/api/");
  }

}
