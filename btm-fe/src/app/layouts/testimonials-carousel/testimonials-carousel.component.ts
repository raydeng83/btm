import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-testimonials-carousel',
  templateUrl: './testimonials-carousel.component.html',
  styleUrls: ['./testimonials-carousel.component.scss']
})
export class TestimonialsCarouselComponent implements OnInit {
  public carouselOptions: NguCarousel;
  public testimonials = [{
    photo: 'assets/images/user-thumb-1.jpg',
    text: `“Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius, atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora. ”`,
    title: 'Jenaa Meg',
    subtitle: 'Manager'
  }, {
    photo: 'assets/images/user-thumb-2.jpg',
    text: `"Amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora Lorem ipsum dolor sit."`,
    title: 'Tim Creed',
    subtitle: 'Sr. Dev'
  }, {
    photo: 'assets/images/user-thumb-3.jpg',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora."`,
    title: 'Miley Cyprus',
    subtitle: 'Dev Head'
  }, {
    photo: 'assets/images/user-thumb-4.jpg',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora."`,
    title: 'Jimmy Clay',
    subtitle: 'CEO'
  }]
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
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
