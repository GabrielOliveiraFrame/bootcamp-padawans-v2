import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-redirect-create-event',
  templateUrl: './redirect-create-event.component.html',
  styleUrls: ['./redirect-create-event.component.css']
})
export class RedirectCreateEventComponent implements OnInit {

  userName!: any;
  update$!: Observable<any>;

  constructor(private store: Store<{updateRequest: boolean}>) { }

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

}
