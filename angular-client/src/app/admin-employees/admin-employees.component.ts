import { Component, OnInit, Inject } from '@angular/core';
import Axios from 'axios';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// this interface to send data to the dialog if it's required
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

    //this function to open the add employee dialog
    openDialog() {
        this.dialog.open(DialogDataEmployees);
    }

    //this function to open the update employee dialog
    updateDialog(id) {
        this.dialog.open(DialogDataUpdateEmployees, {
            data: { id: id }
        });
    }

    //this function to out from the page
    logout() {
        this.router.navigate(['home'])
    }

    //this function to retreve the data from the server
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

    //this function to delete an employee from the server
    deleteEmp(id) {
        Axios.post('/deleteEmploy', { id })
            .then(() => {
                console.log('done');
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

// this the add dialog
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
    //this function to add an employee from the server
    Add(name = '', nationality = '', JobTitle = '') {
        Axios.post('/addEmp', { name, nationality, JobTitle })
            .then(() => {
                alert("the data has been saved <3");
            })
            .catch((err) => {
                throw err;
            })
    }
}

// this the update dialog
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
    //this function to update an employee from the server
    Update(id, name, nationality, jobTitle) {
        Axios.post('/updateEmp', { id, name, nationality, jobTitle })
            .then(() => {
                console.log('done');
            })
            .catch((err) => {
                throw err;
            })
    }
}