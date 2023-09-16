import { NgModule } from '@angular/core';
import { AdminLayoutsModule } from './layouts/admin-layouts.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    AdminLayoutsModule,
    AdminRoutingModule
  ],
  exports: [
    AdminLayoutsModule,
    AdminComponent
  ],
  declarations: [
    AdminComponent,
    DashboardComponent
  ],
  providers: [],
})
export class AdminModule { }
