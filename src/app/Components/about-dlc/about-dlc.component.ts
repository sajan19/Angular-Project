import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-dlc',
  templateUrl: './about-dlc.component.html',
  styleUrls: ['./about-dlc.component.scss']
})
export class AboutDlcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageObject = [
  
    {
      image: 'https://dxaurk9yhilm4.cloudfront.net/images/6244/What_we_do_footer_carousel1_190805_141752_397186feb8bd51bb37bc24fc2b9b500f.jpg',
      thumbImage: 'https://dxaurk9yhilm4.cloudfront.net/images/6244/What_we_do_footer_carousel1_190805_141752_397186feb8bd51bb37bc24fc2b9b500f.jpg',
      title: 'Focus on family',
      p:'Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive.'
    },
    {
      image:'https://dxaurk9yhilm4.cloudfront.net/images/170/What_we_do_footer_carousel2_397186feb8bd51bb37bc24fc2b9b500f.jpg',
      thumbImage:'https://dxaurk9yhilm4.cloudfront.net/images/170/What_we_do_footer_carousel2_397186feb8bd51bb37bc24fc2b9b500f.jpg',
      title:'Incomparable experiences',
      p:'World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service.'
    },
    {
      image:'https://dxaurk9yhilm4.cloudfront.net/images/529/Kukio-map1_190710_083646_397186feb8bd51bb37bc24fc2b9b500f.JPG',
      thumbImage:'https://dxaurk9yhilm4.cloudfront.net/images/529/Kukio-map1_190710_083646_397186feb8bd51bb37bc24fc2b9b500f.JPG',
      title:'Inspired by land',
      p:'Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience.'
    },
    {
      image:'https://dxaurk9yhilm4.cloudfront.net/images/191/grass_397186feb8bd51bb37bc24fc2b9b500f.jpg',
      thumbImage:'https://dxaurk9yhilm4.cloudfront.net/images/191/grass_397186feb8bd51bb37bc24fc2b9b500f.jpg',
      title:'Sustainable future',
      p:'Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability.'
    },
    {
      image:'https://dxaurk9yhilm4.cloudfront.net/images/558/GallatinFork0217_Bedroom02_397186feb8bd51bb37bc24fc2b9b500f.jpg',
      thumbImage:'https://dxaurk9yhilm4.cloudfront.net/images/558/GallatinFork0217_Bedroom02_397186feb8bd51bb37bc24fc2b9b500f.jpg',
      title:'Luxury bespoke homes',
      p:'Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.'
    },
    {
      image:'https://dxaurk9yhilm4.cloudfront.net/images/170/What_we_do_footer_carousel2_397186feb8bd51bb37bc24fc2b9b500f.jpg',
      thumbImage:'https://dxaurk9yhilm4.cloudfront.net/images/170/What_we_do_footer_carousel2_397186feb8bd51bb37bc24fc2b9b500f.jpg',
      title:'Incomparable experiences',
      p:'Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive.'
    }
    // {
    //   image:'',
    //   thumbImage:'',
    //   title:'',
    //   p:''
    // }
  ];
}
