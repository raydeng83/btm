import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class LandingFixService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  public addFix() {
    this.document.documentElement.classList.add('landing');
    this.document.body.classList.add('landing');
  }
  public removeFix() {
    this.document.documentElement.classList.remove('landing');
    this.document.body.classList.remove('landing');
  }

}
