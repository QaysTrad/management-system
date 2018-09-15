import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import Axios from 'axios';

//global variable to send the data to other component
export var jackel = {}
// this interface to send data to the dialog if it's required
export interface DialogData {
}

@Component({
  selector: 'app-user-projects',
  templateUrl: './user-projects.component.html',
  styleUrls: ['./user-projects.component.css']
})
@Input()
export class UserProjectsComponent implements OnInit {
  proData = [];
  projectName = ""
  dataSource = [];
  displayedColumns: string[] = ['projectName', 'employees', 'equipment', 'fromDate', 'toDate'];

  constructor(public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.projectData(this.proData);
  }
  
  //this function to open the login dialog
  openDialog() {
    this.dialog.open(DialogDataLogin);
  }
  
  //this function to retreve the data from the server
  projectData(proData = []) {
    Axios.get('/getProject')
      .then((data) => {
        for (var i = 0; i < data.data.length; i++) {
          proData.push(data.data[i])
        }
        this.dataSource = this.proData;
      })
      .catch((err) => {
        throw err;
      })
  }
  //this function to go to th user details page and send the id and name of te project that been selected
  nextPage(id, name) {
    this.router.navigate(['user-details']);
    jackel = { id: id, name: name }
  }
}

//this is login dialog
@Component({
  selector: 'dialog-data-login',
  templateUrl: 'dialog-data-login.html',
})
export class DialogDataLogin {
  constructor(
    public dialogRef: MatDialogRef<UserProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  login(name = '', password = '') {
    if (name.length === 0 && password.length === 0) {
      alert('please fill the inputs')
    } else if (name === 'admin' && password === 'admin') {
      this.router.navigate(['admin-equipment']);
    }
  }
}
