import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-front-page-description',
  standalone: true,
  imports: [],
  templateUrl: './front-page-description.component.html',
  styleUrls: ['./front-page-description.component.css', './front-page-description.component-responsive.css']
})
export class FrontPageDescriptionComponent {
  greetLine = "Hi, my name is"
  name = "Nischay Sehdev."
  tagline = "I builds innovative digital things."
  description = 'A Full-Stack focused Software Engineer specializing in building end-to-end exciting, complex and innovative digital things which float on the internet successfully.'
  buttonValue = "Wanna work with me"
  constructor(@Inject(DOCUMENT) private document: Document) {

  }
  public wantToHireMe() {
    this.document.getElementById("contact-form").style.display = "grid"
  }


}
