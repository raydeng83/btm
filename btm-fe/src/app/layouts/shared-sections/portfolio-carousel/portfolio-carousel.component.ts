import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-portfolio-carousel',
  templateUrl: './portfolio-carousel.component.html',
  styleUrls: ['./portfolio-carousel.component.scss']
})
export class PortfolioCarouselComponent implements OnInit {
  
  public carouselOptions: NguCarousel;
  public portfolios = [{
    photo: 'assets/images/2.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Est atque tenetur',
  }, {
    photo: 'assets/images/3.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Sapiente est atque tenetur',
  }, {
    photo: 'assets/images/1.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Quasi quaerat aut',
  }, {
    photo: 'assets/images/3.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Quasi quaerat aut nam',
  }, {
    photo: 'assets/images/1.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Quasi quaerat aut',
  }, {
    photo: 'assets/images/2.jpg',
    text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus 
    vitae dignissimos, sapiente est atque tenetur`,
    title: 'Adipisci quas repellat sed',
  }]
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
  }

}
