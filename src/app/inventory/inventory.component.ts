import { Component, OnInit } from '@angular/core';
import { InventoryServiceService } from '../services/inventory-service.service';
import { moveIn , fallIn ,moveInLeft} from '../animations/router.animations';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  animations: [moveIn(), fallIn(),moveInLeft()],
  //host: {'[@moveIn]': ''}
})
export class InventoryComponent implements OnInit {
  state: string = '';
  public medicines: Array<any> = [];

  public medicine: Array<any> = [] ;

  medId:number;

  constructor(private service: InventoryServiceService) { }

  ngOnInit() {
    this.getMedicines();
  }

  onSubmit(formData){
    console.log(formData);
    
    this.service.updateMedicine(formData,this.medId).subscribe(
      response => {
        console.log(response);
        if(response['success']){
          this.getMedicines();
        formData = null;
        }
        
      }
    );
    
    

  }
  

  editMedicine(id:number){
    this.medId = id;
    
    this.service.editMedicine(id).subscribe(
      response => {
        if(response['success']){
          this.medicine = response['medicine'];
          console.log(this.medicine);
        }
      }
    );
    
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
