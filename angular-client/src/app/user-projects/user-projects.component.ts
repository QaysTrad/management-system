import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import Axios from 'axios';

export var jackel = {}
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

  openDialog() {
    this.dialog.open(DialogDataLogin);
  }

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
  nextPage(id, name) {
    this.router.navigate(['user-details']);
    jackel = { id: id, name: name }
  }
}

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
