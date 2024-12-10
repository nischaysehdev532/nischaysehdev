import { Component } from '@angular/core';
import { FrontPageDescriptionComponent } from '../front-page-description/front-page-description.component';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [FrontPageDescriptionComponent],
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css', "./front-page.component-responsive.css"]
})
export class FrontPageComponent {

}
