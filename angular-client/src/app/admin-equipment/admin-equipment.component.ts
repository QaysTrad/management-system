import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import Axios from 'axios';

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

  openDialog() {
    this.dialog.open(DialogDataEquipment);
  }

  updateDialog(id) {
    this.dialog.open(DialogDataUpdateEquipment, {
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

  deteleEquip(id){
    Axios.post('/deteleEquip', {id})
    .then(() => {
      console.log('done');
    })
    .catch((err) => {
      throw err;
    })
  }
}

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

 uploadImage = (event) => {
    let img = event.target.files[0];
    let that = this
    let fileReader = new FileReader();
    fileReader.readAsDataURL(img);
    fileReader.onload = function (e) {
      that.image = e.target.result;
    }
  }

  Add(name, serialNumber) {
    Axios.post('/addEquip', { name, serialNumber , image:this.image})
      .then(function () {
        console.log('done');
      })
      .catch(function (err) {
        throw err;
      })
  }
}

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
  Update(id, name, serialNumber){
    Axios.post('/updateEquip',{id :id, name:name , serialNumber:serialNumber })
    .then(() => {
      console.log('done update');
    })
    .catch((err) => {
      throw err;
    })
  }
}