import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventFormModel } from '../models/event-form-model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get('http://localhost:3000/events');
  }

  createEvent(event: EventFormModel){
    return this.http.post('http://localhost:3000/events', event);
  }
}
