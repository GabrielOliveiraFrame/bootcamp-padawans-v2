import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {Toast} from 'bootstrap'

@Component({
  selector: 'app-back-end-msg',
  templateUrl: './back-end-msg.component.html',
  styleUrls: ['./back-end-msg.component.css']
})
export class BackEndMsgComponent implements OnInit {

  @Input()
  headerMsg!: string;

  @Input()
  bodyMsg!: string;

  @ViewChild('toast', {static: true}) toastEl!: ElementRef;

  toast!: Toast;

  constructor() { }

  ngOnInit(): void {
    this.toast = new Toast(this.toastEl.nativeElement,{});
    this.toast.show();
  }

}
