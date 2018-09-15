import { Component, OnInit } from '@angular/core';
import Axios from 'axios';
import { jackel } from '../user-projects/user-projects.component';
import { Router } from '@angular/router';

export interface DialogData {
}

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
  id = '';
  name = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.getEmploy(this.empData);
    this.getEquip(this.equipData);
    this.name = jackel['name'];
    this.id = jackel['id']
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
    if (this.droppedEmp.length === 0) {
      for (var i = 0; i < this.empData.length; i++) {
        if (e.dragData.name === this.empData[i].name) {
          this.droppedEmp.push(e.dragData);
          this.removeEmp(e.dragData, this.empData)
        }
      }
    } else {
      alert("there's already an Employee")
    }
  }
  onItemDropEquip(e: any) {
    // Get the dropped data here
    if (this.droppedEquip.length === 0) {
      for (var i = 0; i < this.equipData.length; i++) {
        if (e.dragData.name === this.equipData[i].name) {
          this.droppedEquip.push(e.dragData);
          this.removeEquip(e.dragData, this.equipData);
        }
      }
    } else {
      alert("there's already an Equipment")
    }

  }

  save(droppedEquip = [], droppedEmp = []) {
    Axios.post("/saveProject", { id: this.id, Employee: droppedEmp[0].name, Equipment: droppedEquip[0].name })
      .then(() => {
        console.log('done')
        this.router.navigate(['home']);
      })
      .catch((err) => {
        throw err;
      })
  }
  removeEquip(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }

  removeEmp(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
}
