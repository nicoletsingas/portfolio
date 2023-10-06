import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private viewportScroller: ViewportScroller){}

  onClickScroll(elementId: string){
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
