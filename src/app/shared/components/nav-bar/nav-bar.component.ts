import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  show!: boolean;

  constructor() { }

  ngOnInit(): void {
    const storage = localStorage.getItem('userName');

    storage ? this.show = true : this.show = false;
  }

}
