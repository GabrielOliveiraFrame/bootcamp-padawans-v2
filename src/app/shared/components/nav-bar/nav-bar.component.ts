import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  show!: boolean;
  success$!: Observable<any>;
  storage!: any;

  constructor(private store: Store<{updateRequest: boolean}>) { }

  ngOnInit(): void {
    this.storage = localStorage.getItem('userName');

    this.storage ? this.show = true : this.show = false;

    this.success$ =  this.store.pipe(
      select('updateRequest')
    )

    this.success$.subscribe(data => {
      if(data.updateNavRequest) {
        this.storage = localStorage.getItem('userName');

        this.storage ? this.show = true : this.show = false;
      }
    })

  }

}
