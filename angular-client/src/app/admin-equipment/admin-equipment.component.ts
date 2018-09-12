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

  constructor(private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  logout() {
    Axios.get('/logout')
      .then(() => {
        this.router.navigate(['home'])
      })
      .catch((err) => {
        throw err;
      }
      )
  }
  openDialog() {
    this.dialog.open(DialogDataEquipment);
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private _sanitizer: DomSanitizer) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  Add(name, serialNumber) {
    Axios.post('/addEquip', { name: this.name, serialNumber: this.serialNumber })
      .then(function () {
        console.log('done');
      })
      .catch(function (err) {
        throw err;
      })
  }

}