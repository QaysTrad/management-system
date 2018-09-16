import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import Axios from 'axios';

// this interface to send data to the dialog if it's required
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

  //this function to open the add project dialog
  openDialog() {
    this.dialog.open(DialogDataProjects);
  }

  //this function to open the update project dialog
  updateDialog(id) {
    this.dialog.open(DialogDataUpdateProjects, {
      data: { id: id }
    });
  }

  //this function to out from the page
  logout() {
    this.router.navigate(['home'])
  }

  //this function to retreve the data from the server
  projectData(proData = []) {
    Axios.get('/getProject')
      .then((data) => {
        for (var i = 0; i < data.data.length; i++) {
          proData.push(data.data[i])
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  //this function to delete an project from the server
  deleteProject(id) {
    Axios.post('/deletePro', { id })
      .then(() => {
        console.log('deleted');
        window.location.reload();
      })
      .catch((err) => {
        throw err;
      })
  }
}

// this the add dialog
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

  //this function to add an project from the server
  Add(name = '', type = '', from = '', to = '') {
    Axios.post('/addProject', { name, type, from, to })
      .then(() => {
        console.log('done');
        window.location.reload();
      })
      .catch((err) => {
        throw err;
      })
  }
}

// this the update dialog
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

  //this function to update an project from the server
  Update(id, name, type, from, to) {
    Axios.post('/updateProject', { id, name, type, from, to })
      .then(() => {
        console.log('done');
        window.location.reload();
      })
      .catch((err) => {
        throw err;
      })
  }
}