import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EventsService } from 'src/app/shared/services/events.service';

@Component({
  selector: 'app-events-card',
  templateUrl: './events-card.component.html',
  styleUrls: ['./events-card.component.css']
})
export class EventsCardComponent implements OnInit {

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
