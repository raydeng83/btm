import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../shared/services/landing-fix.service';

@Component({
  selector: 'app-demo',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class DemoComponent implements OnInit, OnDestroy {

  constructor(
    private fix: LandingFixService
  ) { }

  ngOnInit() {
    this.fix.addFix();
  }
  ngOnDestroy() {
    this.fix.removeFix();
  }

}
