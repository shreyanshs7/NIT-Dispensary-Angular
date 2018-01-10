import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppServiceService } from './app-service.service';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppPipePipe } from './pipes/app-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { InventoryComponent } from './inventory/inventory.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { InventoryServiceService } from './services/inventory-service.service';


const appRoutes: Routes = [
  {
    path : '',
    component : AppointmentComponent
  },
  {
    path : 'inventory',
    component : InventoryComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AppointmentComponent,
    AppPipePipe,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports : [RouterModule],
  providers: [AppServiceService,InventoryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
