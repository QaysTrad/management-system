import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent} from './main/main.component';
import { AdminEquipmentComponent, DialogDataEquipment } from './admin-equipment/admin-equipment.component';
import { AdminEmployeesComponent, DialogDataEmployees } from './admin-employees/admin-employees.component';
import { AdminProjectsComponent, DialogDataProjects } from './admin-projects/admin-projects.component';
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
import {MatTableModule} from '@angular/material/table';

const appRoutes: Routes = [
  { path: '',
    component: HomeComponent
  }, 
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'admin-equipment',
    component:AdminEquipmentComponent
  },
  {
    path:'admin-employees',
    component:AdminEmployeesComponent
  },
  {
    path:'admin-projects',
    component:AdminProjectsComponent
  },
  {
    path:'user-projects',
    component:UserProjectsComponent
  },
  {
    path:'user-details',
    component:UserDetailsComponent
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
    DialogDataEquipment,
    DialogDataEmployees,
    DialogDataProjects
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
    MatToolbarModule,
    MatTableModule
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
   MatToolbarModule,
   MatTableModule
   ],
  entryComponents: [AdminEquipmentComponent, DialogDataEquipment, DialogDataEmployees, DialogDataProjects],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
