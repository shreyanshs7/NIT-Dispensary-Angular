import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { NgxPaginationModule } from 'ngx-pagination';
import { InventoryServiceService } from './services/inventory-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UsersComponent } from './users/users.component';
import { UserService } from '../app/services/user.service';


const appRoutes: Routes = [
  {
    path : '',
    component : AppointmentComponent
  },
  {
    path : 'inventory',
    component : InventoryComponent
  },
  {
    path : 'users',
    component : UsersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AppointmentComponent,
    AppPipePipe,
    InventoryComponent,
    UsersComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
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
  schemas: [ NO_ERRORS_SCHEMA ],
  exports : [RouterModule],
  providers: [AppServiceService,InventoryServiceService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
