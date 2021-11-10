import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menuBar: any = true;
  displayMenuBar: any = false;

  clickMenuBar(){
    this.menuBar = false;
    this.displayMenuBar = true;
  }

  closeVideo(){
    this.menuBar = true;
    this.displayMenuBar = false;

  }
}
