import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckExistingService {

  constructor(private http: HttpClient) { }

  checkExistingData(value: string, name: string){
    return this.http.get(environment.API_ONG_URL).pipe(
      map((data: any) =>{
        return Object.keys(data).map(function(key) {
          return data[key][name] == value ? true : false;
        });
      }),
      map((data: any) => {
        return data.filter((e: any) => {
          return e == true;
        })
      })
    )
  }
}
