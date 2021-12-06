import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckExistingService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:3000/ongs";

  checkExistingData(value: string, name: string){
    return this.http.get(this.url).pipe(
      map((data: any) => {
          return data.forEach((e: any) => {
            return e.name == value;
          });
      })
    )
  }
}
