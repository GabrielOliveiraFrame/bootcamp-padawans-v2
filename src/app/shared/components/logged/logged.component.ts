import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  ongName!: any;

  constructor() { }

  ngOnInit(): void {
    this.ongName = window.localStorage.getItem('userName');
  }

  closeLog(){
    window.localStorage.removeItem('userName');
    window.location.reload();
  }

}
