import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent} from './main/main.component';
import { AdminEquipmentComponent, DialogDataEquipment } from './admin-equipment/admin-equipment.component';
import { AdminEmployeesComponent } from './admin-employees/admin-employees.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { UserProjectsComponent } from './user-projects/user-projects.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

const appRoutes: Routes = [
  { path: '',
    component: HomeComponent
  }, 
  {
    path:'main',
    component: MainComponent
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
    UserDetailsComponent,
    DialogDataEquipment
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule
  ],
  exports: [
   BrowserModule,
   BrowserAnimationsModule,
   NoopAnimationsModule,
   MatButtonModule,
   MatCheckboxModule,
   MatInputModule,
   MatIconModule,
   MatDialogModule,
   MatToolbarModule
   ],
  entryComponents: [AdminEquipmentComponent, DialogDataEquipment],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
