import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminEquipmentComponent, DialogDataEquipment, DialogDataUpdateEquipment } from './admin-equipment/admin-equipment.component';
import { AdminEmployeesComponent, DialogDataEmployees, DialogDataUpdateEmployees } from './admin-employees/admin-employees.component';
import { AdminProjectsComponent, DialogDataProjects, DialogDataUpdateProjects } from './admin-projects/admin-projects.component';
import { UserProjectsComponent, DialogDataLogin } from './user-projects/user-projects.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgDragDropModule } from 'ng-drag-drop';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin-equipment',
    component: AdminEquipmentComponent
  },
  {
    path: 'admin-employees',
    component: AdminEmployeesComponent
  },
  {
    path: 'admin-projects',
    component: AdminProjectsComponent
  },
  {
    path: 'user-projects',
    component: UserProjectsComponent
  },
  {
    path: 'user-details',
    component: UserDetailsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminEquipmentComponent,
    AdminEmployeesComponent,
    AdminProjectsComponent,
    UserProjectsComponent,
    UserDetailsComponent,
    DialogDataEquipment,
    DialogDataUpdateEquipment,
    DialogDataEmployees,
    DialogDataUpdateEmployees,
    DialogDataProjects,
    DialogDataUpdateProjects,
    DialogDataLogin
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
    MatTableModule,
    FormsModule,
    MatCardModule,
    NgDragDropModule.forRoot()
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
    MatTableModule,
    FormsModule,
    NgDragDropModule,
    MatCardModule,
  ],
  entryComponents: [
    AdminEquipmentComponent,
    DialogDataEquipment,
    DialogDataEmployees,
    DialogDataProjects,
    DialogDataUpdateProjects,
    DialogDataUpdateEmployees,
    DialogDataUpdateEquipment,
    DialogDataLogin
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
