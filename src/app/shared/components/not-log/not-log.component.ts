import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { OngsService } from '../../services/ongs.service';

@Component({
  selector: 'app-not-log',
  templateUrl: './not-log.component.html',
  styleUrls: ['./not-log.component.css']
})
export class NotLogComponent implements OnInit {
  signUpSuccess: boolean = false;

  constructor(
    private router: Router,
    private ongsService: OngsService
  ) { }

  ngOnInit(): void {
    this.ongsService.createdOng.subscribe((data) => {
      data ? this.signUpSuccess = true : null;
    });
  }

  navigate(){
    this.router.navigate(['public/sign-up']);
  }
}
