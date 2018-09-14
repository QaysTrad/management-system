import { Component, OnInit, Inject } from '@angular/core';
import Axios from 'axios';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
}

@Component({
  selector: 'app-admin-employees',
  templateUrl: './admin-employees.component.html',
  styleUrls: ['./admin-employees.component.css']
})
export class AdminEmployeesComponent implements OnInit {

empData = [];

  constructor(private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getEmploy(this.empData)
  }

  openDialog() {
    this.dialog.open(DialogDataEmployees);
  }

  updateDialog(employName, nationality, jobTitle) {
    this.dialog.open(DialogDataUpdateEmployees,{
      data: {employName: employName, nationality: nationality, jobTitle: jobTitle}
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
    
    getEmploy(empData = []){
      Axios.get('/getEmp')
      .then((data) => {
        for(var i=0;i < data.data.length;i++){
          empData.push(data.data[i])
        }
      })
      .catch((err) => {
        throw err;
      })
    }
    
    deleteEmp(id){
      Axios.post('/deleteEmploy',{id})
      .then(() => {
        console.log('done');
      })
      .catch((err) => {
        console.log(err);
      })
    }
}


@Component({
  selector: 'dialog-data-employees',
  templateUrl: 'dialog-data-employees.html',
})
export class DialogDataEmployees {
  constructor(
    public dialogRef: MatDialogRef<AdminEmployeesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  Add(id = '', name = '', nationality = '', JobTitle = '') {
    Axios.post('/addEmp', { id, name, nationality, JobTitle })
      .then(() => {
        alert("the data has been saved <3");
      })
      .catch((err) => {
        throw err;
      })
  }
}

@Component({
  selector: 'dialog-data-update-employees',
  templateUrl: 'dialog-data-update-employees.html',
})
export class DialogDataUpdateEmployees {
  constructor(
    public dialogRef: MatDialogRef<AdminEmployeesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  Update(){
    console.log('aaaa')
  }
}