import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-back-end-msg',
  templateUrl: './back-end-msg.component.html',
  styleUrls: ['./back-end-msg.component.css'],
})
export class BackEndMsgComponent implements OnInit {

  @Input()
  headerMsg!: string;

  @Input()
  bodyMsg!: string;

  constructor( private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.toastr.success(this.bodyMsg, this.headerMsg);
  }

}
