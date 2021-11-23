import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  ongName: string = 'OngBrasil';

  constructor() { }

  ngOnInit(): void {
  }

}
