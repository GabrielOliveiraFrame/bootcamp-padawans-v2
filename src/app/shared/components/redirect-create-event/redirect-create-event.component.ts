import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect-create-event',
  templateUrl: './redirect-create-event.component.html',
  styleUrls: ['./redirect-create-event.component.css']
})
export class RedirectCreateEventComponent implements OnInit {

  userName!: any;

  constructor() { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
  }

}
