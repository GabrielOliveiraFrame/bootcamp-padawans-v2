import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignUpFormModel } from '../models/sign-up-form-model';

@Injectable({
  providedIn: 'root'
})
export class OngsService {

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
