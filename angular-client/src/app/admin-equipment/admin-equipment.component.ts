import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import axios from 'axios';

export interface DialogData {
  name: string;
  serialNumber: string;
  attachment: string;
}

@Component({
  selector: 'app-admin-equipment',
  templateUrl: './admin-equipment.component.html',
  styleUrls: ['./admin-equipment.component.css']
})
export class AdminEquipmentComponent implements OnInit {
  name: string;
  serialNumber: string;
  attachment: string;
  equip = new Array();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.equipData();
  }

  openDialog() {
    this.dialog.open(DialogDataEquipment, {
      data: { name: this.name, serialNumber: this.serialNumber, attachment: this.attachment }
    });
  }

  equipData() {
    axios.get('/getEquip')
      .then(function (data) {
        console.log(data.data);
      })
      .catch(function (err) {
        console.log(err);
      })
  }
  deleteEquip(id) {
    axios.post('/deleteEquip', { id: id })
      .then(() =>
        console.log('done'))
      .catch((err) =>
        console.log('err', err))
  }
}

@Component({
  selector: 'dialog-data-equipment',
  templateUrl: 'dialog-data-equipment.html',
})
export class DialogDataEquipment {
  name: string;
  serialNumber: string;
  attachment: string;

  constructor(
    public dialogRef: MatDialogRef<AdminEquipmentComponent>,
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
    axios.post('/addEquip', { name: this.name, serialNumber: this.serialNumber })
      .then(function () {
        console.log('done');
      })
      .catch(function (err) {
        throw err;
      })
  }

}