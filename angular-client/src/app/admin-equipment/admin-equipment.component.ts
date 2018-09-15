import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import Axios from 'axios';

// this interface to send data to the dialog if it's required
export interface DialogData {
}

@Component({
  selector: 'app-admin-equipment',
  templateUrl: './admin-equipment.component.html',
  styleUrls: ['./admin-equipment.component.css']
})
export class AdminEquipmentComponent implements OnInit {
  equipData = [];
  constructor(private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getEquip(this.equipData)
  }

  //this function to open the add equipment dialog
  openDialog() {
    this.dialog.open(DialogDataEquipment);
  }

  //this function to open the update equipment dialog
  updateDialog(id) {
    this.dialog.open(DialogDataUpdateEquipment, {
      data: { id: id }
    });
  }

  //this function to out from the page
  logout() {
    this.router.navigate(['home'])
  }

  //this function to retreve the data from the server
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

  //this function to delete an equipment from the server
  deteleEquip(id) {
    Axios.post('/deteleEquip', { id })
      .then(() => {
        console.log('done');
      })
      .catch((err) => {
        throw err;
      })
  }
}

// this the add dialog
@Component({
  selector: 'dialog-data-equipment',
  templateUrl: 'dialog-data-equipment.html',
})
export class DialogDataEquipment {
  image = '';
  constructor(
    public dialogRef: MatDialogRef<AdminEquipmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  //this function to upload picture from the user
  uploadImage = (event) => {
    let img = event.target.files[0];
    let that = this
    let fileReader = new FileReader();
    fileReader.readAsDataURL(img);
    fileReader.onload = function (e) {
      that.image = e.target.result;
    }
  }

  //this function to add an equipment from the server
  Add(name, serialNumber) {
    Axios.post('/addEquip', { name, serialNumber, image: this.image })
      .then(function () {
        console.log('done');
      })
      .catch(function (err) {
        throw err;
      })
  }
}

// this the update dialog
@Component({
  selector: 'dialog-data-update-equipment',
  templateUrl: 'dialog-data-update-equipment.html',
})
export class DialogDataUpdateEquipment {

  constructor(
    public dialogRef: MatDialogRef<AdminEquipmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  //this function to update an equipment from the server
  Update(id, name, serialNumber) {
    Axios.post('/updateEquip', { id: id, name: name, serialNumber: serialNumber })
      .then(() => {
        console.log('done update');
      })
      .catch((err) => {
        throw err;
      })
  }
}