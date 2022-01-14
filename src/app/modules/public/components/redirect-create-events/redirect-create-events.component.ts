import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-redirect-create-events',
  templateUrl: './redirect-create-events.component.html',
  styleUrls: ['./redirect-create-events.component.css']
})
export class RedirectCreateEventsComponent implements OnInit {

  userName!: any;
  update$!: Observable<any>;

  constructor(
    private store: Store<{updateRequest: boolean}>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');

    this.update$ =  this.store.pipe(
      select('updateRequest')
    )

    this.update$.subscribe(data => {
      if(data.updateNavRequest){
        this.userName = localStorage.getItem('userName');
      }
    })
  }

  navigate() {
    this.router.navigate(['/private/create-event']);
  }

}
