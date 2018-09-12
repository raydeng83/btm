import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
	isLinear = false;
  formGroup: FormGroup;
  secondFormGroup: FormGroup;

    public carouselOptions: NguCarousel;
  public testimonials = [{
    photo: 'assets/images/user-thumb-1.jpg',
    text: `“Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora.. ”`,
    title: 'Jhone Doe',
    subtitle: 'Product Manager'
  }]
  constructor(private _formBuilder: FormBuilder) { }

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

    this.formGroup = this._formBuilder.group({
    });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }

}
