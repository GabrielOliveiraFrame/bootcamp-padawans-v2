import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignUpFormModel } from '../models/sign-up-form-model';

@Injectable({
  providedIn: 'root'
})
export class OngsService {
  [x: string]: any;
  createdOng = new EventEmitter<boolean>();
  static createdOng: any;

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(environment.API_ONG_URL);
  }

  createOng(ong: SignUpFormModel){
    return this.http.post(environment.API_ONG_URL, ong);
  }

  getByUser(user: string){
    return this.http.get(`${environment.API_ONG_URL}?user=${user}`);
  }
}
