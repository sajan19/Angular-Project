import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageObject = [
  
  {
    image: 'https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    thumbImage: 'https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    title: 'North Shore Preserve'
  },
  {
    image: '../../../assets/slider/Slider_img1.jpg',
    thumbImage: '../../../assets/slider/Slider_img1.jpg',
    title: 'Mountaintop',
    subtitle: 'Cmon India'
  },
  {
    image: 'https://dxaurk9yhilm4.cloudfront.net/images/6944/Carousel_500x750_200612_084523_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    thumbImage: 'https://dxaurk9yhilm4.cloudfront.net/images/6944/Carousel_500x750_200612_084523_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    title: 'James Island'
  },
  {
    image: 'https://dxaurk9yhilm4.cloudfront.net/images/6894/IMG_00162-copy_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    thumbImage: 'https://dxaurk9yhilm4.cloudfront.net/images/6894/IMG_00162-copy_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    title: 'CostaTerra'
  },
  {
    image: 'https://dxaurk9yhilm4.cloudfront.net/images/6492/LM-Coco-Point-Barbuda-0266_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    thumbImage: 'https://dxaurk9yhilm4.cloudfront.net/images/6492/LM-Coco-Point-Barbuda-0266_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    title: 'Barbuda Ocean Club'
  },
  {
    image: 'https://dxaurk9yhilm4.cloudfront.net/images/188/driftwood-1_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    thumbImage: 'https://dxaurk9yhilm4.cloudfront.net/images/188/driftwood-1_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    title: 'Driftwood'
  },
  {
    image: 'https://dxaurk9yhilm4.cloudfront.net/images/6669/Troubadour_Andy-Carlson_Golf_October-2019_DJI_0172-copycrop_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    thumbImage: 'https://dxaurk9yhilm4.cloudfront.net/images/6669/Troubadour_Andy-Carlson_Golf_October-2019_DJI_0172-copycrop_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    title: 'Driftwood'
  },
  {
    image: 'https://dxaurk9yhilm4.cloudfront.net/images/6669/Troubadour_Andy-Carlson_Golf_October-2019_DJI_0172-copycrop_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    thumbImage: 'https://dxaurk9yhilm4.cloudfront.net/images/6669/Troubadour_Andy-Carlson_Golf_October-2019_DJI_0172-copycrop_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    title: 'Troubadour'
  },
  {
    image: 'https://dxaurk9yhilm4.cloudfront.net/images/206/Grande-carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    thumbImage: 'https://dxaurk9yhilm4.cloudfront.net/images/206/Grande-carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    title: 'Playa Grande'
  },
  {
    image: 'https://dxaurk9yhilm4.cloudfront.net/images/365/chileno-carousel_190704_100748_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    thumbImage: 'https://dxaurk9yhilm4.cloudfront.net/images/365/chileno-carousel_190704_100748_397186feb8bd51bb37bc24fc2b9b500f.jpg',
    title: 'Chileno Bay'
  }
];

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


