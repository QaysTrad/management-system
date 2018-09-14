import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import Axios from 'axios';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  droppedEmp = [];
  droppedEquip = [];
  empData = [];
  equipData = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.getEmploy(this.empData);
    this.getEquip(this.equipData);
  }

  openDialog() {
    this.dialog.open(DialogDataLogin2);
  }

  getEquip(equipData = []) {
    Axios.get('/getEquip')
      .then((data) => {
        for (var i = 0; i < data.data.length; i++) {
          equipData.push(data.data[i]);
        }
      })
      .catch((err) => {
        throw err;
      })
  }

  getEmploy(empData = []) {
    Axios.get('/getEmp')
      .then((data) => {
        for (var i = 0; i < data.data.length; i++) {
          empData.push(data.data[i])
        }
      })
      .catch((err) => {
        throw err;
      })
  }
  onItemDropEmp(e: any) {
    // Get the dropped data here
    this.droppedEmp.push(e.dragData);
  }
  onItemDropEquip(e: any) {
    // Get the dropped data here
    this.droppedEquip.push(e.dragData);
  }

  save(){
  }
}

