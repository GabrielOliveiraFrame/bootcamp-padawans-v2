import { OngsService } from './../../services/ongs.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sing-ongs-card',
  templateUrl: './sing-ongs-card.component.html',
  styleUrls: ['./sing-ongs-card.component.css']
})
export class SingOngsCardComponent implements OnInit {

  ongsList!: Observable<any>;

  constructor(private ongsService: OngsService) { }

  ngOnInit(): void {
    this.getOngs();
  }

  getOngs(){
    this.ongsList = this.ongsService.getAll();
  }

}
