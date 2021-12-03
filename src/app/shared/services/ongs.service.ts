import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpFormModel } from '../models/sign-up-form-model';

@Injectable({
  providedIn: 'root'
})
export class OngsService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get('http://localhost:3000/ongs');
  }

  createOng(ong: SignUpFormModel){
    return this.http.post('http://localhost:3000/ongs', ong);
  }

  getByUser(user: string){
    return this.http.get(`http://localhost:3000/ongs?user=${user}`);
  }
}
