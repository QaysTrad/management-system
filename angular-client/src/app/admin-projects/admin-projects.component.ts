import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import Axios from 'axios';

export interface DialogData {
}

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.css']
})
export class AdminProjectsComponent implements OnInit {
  proData = [];
  
  constructor(private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.projectData(this.proData)
  }

  openDialog() {
    this.dialog.open(DialogDataProjects);
  }
  updateDialog(id){
    this.dialog.open(DialogDataUpdateProjects, {
      data: {id: id}
    });
  }

  logout() {
    Axios.get('/logout')
      .then(() => {
        this.router.navigate(['home'])
      })
      .catch((err) => {
        throw err;
      })
  }
  
  projectData(proData = []){
    Axios.get('/getProject')
    .then((data) => {
      for(var i = 0 ; i<data.data.length;i++){
        proData.push(data.data[i])
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  deleteProject(id){
    Axios.post('/deletePro', {id})
    .then(() => {
      console.log('deleted');
    })
    .catch((err) => {
      throw err; 
    })
  }
}

@Component({
  selector: 'dialog-data-projects',
  templateUrl: 'dialog-data-projects.html',
})
export class DialogDataProjects {

  constructor(
    public dialogRef: MatDialogRef<AdminProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  Add(id, name, type, from, to) {
    Axios.post('/addProject', { id, name, type, from, to })
      .then(() => {
        console.log('done');
      })
      .catch((err) => {
        throw err;
      })
  }
}

@Component({
  selector: 'dialog-data-update-projects',
  templateUrl: 'dialog-data-update-projects.html',
})
export class DialogDataUpdateProjects {

  constructor(
    public dialogRef: MatDialogRef<AdminProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  Update(id, name, type, from, to){
       Axios.post('/updateProject', { id, name, type, from, to })
      .then(() => {
        console.log('done');
      })
      .catch((err) => {
        throw err;
      })
  }
}