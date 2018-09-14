import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import axios from 'axios';

export interface DialogData {
}

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.css']
})
export class AdminProjectsComponent implements OnInit {
  name: string;
  serialNumber: string;
  attachment: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  openDialog() {
    this.dialog.open(DialogDataProjects, {
      data: { name: this.name, serialNumber: this.serialNumber, attachment: this.attachment }
    });
  }

}


@Component({
  selector: 'dialog-data-projects',
  templateUrl: 'dialog-data-projects.html',
})
export class DialogDataProjects {
  name: string;
  serialNumber: string;
  attachment: string;

  constructor(
    public dialogRef: MatDialogRef<AdminProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  alo(e) {
    this.name = e.target.value;
  };
  alo2(e) {
    this.serialNumber = e.target.value;
  };
  Add() {
    axios.post('/addProject', { name: this.name, serialNumber: this.serialNumber })
      .then(function () {
        console.log('done');
      })
      .catch(function (err) {
        throw err;
      })
  }

}