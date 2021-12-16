import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  cardId!: any;
  events$!: Observable<any>;
  updateEvents$!: Observable<any>;

  constructor(
    private eventsService: EventsService,
    private store: Store<{updateRequest: boolean}>
  ) { }

  ngOnInit(): void {
    this.events$ = this.eventsService.getAll();

    this.updateEvents$ = this.store.pipe(
      select('updateRequest')
    )

    this.updateEvents$.subscribe(data => {
      if(data.updateEventsRequest){
        this.events$ = this.eventsService.getAll();
      }
    })
  }

  openSelectedCard(id: number){
    this.cardId = id;
  }

  closeSelectedCard(){
    this.cardId = null;
  }

}
