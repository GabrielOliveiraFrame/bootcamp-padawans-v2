import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OngsService } from 'src/app/shared/services/ongs.service';

@Component({
  selector: 'app-sign-ongs-cards',
  templateUrl: './sign-ongs-cards.component.html',
  styleUrls: ['./sign-ongs-cards.component.css']
})
export class SignOngsCardsComponent implements OnInit {

  ongsList!: Observable<any>;

  constructor(private ongsService: OngsService) { }

  ngOnInit(): void {
    this.getOngs();
  }

  getOngs(){
    this.ongsList = this.ongsService.getAll();
  }

}
