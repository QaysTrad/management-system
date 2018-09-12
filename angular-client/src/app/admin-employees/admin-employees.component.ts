import { Component, OnInit , Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import axios from 'axios';

export interface DialogData {
  name: string;
  serialNumber: string;
  attachment: string;
}

@Component({
  selector: 'app-admin-employees',
  templateUrl: './admin-employees.component.html',
  styleUrls: ['./admin-employees.component.css']
})
export class AdminEmployeesComponent implements OnInit {
name: string;
serialNumber: string;
attachment: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {

  }

openDialog() {
    this.dialog.open(DialogDataEmployees, {
        data: {name: this.name, serialNumber: this.serialNumber , attachment: this.attachment}
    });
  }

equipData(){
    axios.get('/getEquip')
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  })
}

}

@Component({
  selector: 'dialog-data-employees',
  templateUrl: 'dialog-data-employees.html',
})
export class DialogDataEmployees {
    name: string;
  serialNumber: string;
  attachment: string;
  
  constructor(
    public dialogRef: MatDialogRef<AdminEmployeesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

   onNoClick(): void {
    this.dialogRef.close();
  }

  alo(e){
  this.name = e.target.value;
};
alo2(e){
  this.serialNumber = e.target.value;
};
Add(){
  axios.post('/addEquip',{name:this.name, serialNumber:this.serialNumber})
  .then(function () {
    console.log('done');
  })
  .catch(function(err){
    throw err;
    })
}

}