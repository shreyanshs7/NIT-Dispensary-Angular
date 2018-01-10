import { Component, OnInit } from '@angular/core';
import { InventoryServiceService } from '../services/inventory-service.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public medicines: Array<any> = [];

  constructor(private service: InventoryServiceService) { }

  ngOnInit() {
    this.getMedicines();
  }

  getMedicines(){
    this.service.getMedicineDetails().subscribe(
      data => {
        
        if(data['success']){
          this.medicines = data['medicine_list'];
          console.log(this.medicines);
        }
      }
    );
  }

}
