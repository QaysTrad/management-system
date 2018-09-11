import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 jackel  = ''
  constructor() { }

  ngOnInit() {
  }
alo(e){
	this.jackel = e.target.value;

};

qays(){
	axios.post('/login',{name:this.jackel})
	.then(function () {
		console.log('done');
	})
	.catch(function(err){
		throw err;
		})
}
}
