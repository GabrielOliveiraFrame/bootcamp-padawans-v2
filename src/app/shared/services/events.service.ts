import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EventFormModel } from '../models/event-form-model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${environment.API_EVENT_URL}?_sort=start,hour&_order=desc,asc`);
  }

  createEvent(event: EventFormModel){
    return this.http.post(environment.API_EVENT_URL, event);
  }
}
