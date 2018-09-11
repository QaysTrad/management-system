import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AdminEquipmentComponent } from './admin-equipment/admin-equipment.component';
import { AdminEmployeesComponent } from './admin-employees/admin-employees.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { UserProjectsComponent } from './user-projects/user-projects.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

const appRoutes: Routes = [
  { path: '',
    component: MainComponent
  }, 
  {
    path:'main',
    component: HomeComponent
  },
  {
    path:'admin-projects',
    component:AdminEquipmentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    AdminEquipmentComponent,
    AdminEmployeesComponent,
    AdminProjectsComponent,
    UserProjectsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
   BrowserModule,
   BrowserAnimationsModule,
   NoopAnimationsModule,
   MatButtonModule,
   MatCheckboxModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
