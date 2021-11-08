import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayImage: any = true;
  displayVideo_1: any = false;
  displayVideo_2: any = false;
  displayVideo_3: any = false;
  
  image1Click(){
    this.displayImage = false;
    this.displayVideo_1 = true;
  }
  image2Click(){
    this.displayImage = false;
    this.displayVideo_2 = true;
  }
  image3Click(){
    this.displayImage = false;
    this.displayVideo_3 = true;
  }
  closeVideo(){
    this.displayImage = true;
    this.displayVideo_1 = false;
    this.displayVideo_2 = false;
    this.displayVideo_3 = false;
  }

  
}
