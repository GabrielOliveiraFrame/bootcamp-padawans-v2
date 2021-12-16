import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setUpdateNavTrue } from 'src/ngrx';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  ongName!: any;
  success$!: Observable<any>;
  success!: boolean;

  constructor(private store: Store<{updateRequest: boolean}>) { }

  ngOnInit(): void {
    this.ongName = localStorage.getItem('userName');

    this.success$ =  this.store.pipe(
      select('updateRequest')
    )

    this.success$.subscribe(data => this.success = data.updateNavRequest)
  }

  closeLog(){
    localStorage.removeItem('userName');
    this.store.dispatch(setUpdateNavTrue());
  }

}
