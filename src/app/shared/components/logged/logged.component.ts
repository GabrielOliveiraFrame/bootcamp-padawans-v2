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
    localStorage.removeItem('userName');

    //para atualizar o componente mostrado
    location.reload();
  }

}
