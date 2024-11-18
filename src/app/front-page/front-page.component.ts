import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { SocialNetworkLinksComponent } from '../social-network-links/social-network-links.component';
import { FrontPageDescriptionComponent } from '../front-page-description/front-page-description.component';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [NavbarComponent, LeftSidebarComponent, SocialNetworkLinksComponent, FrontPageDescriptionComponent],
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css', "./front-page.component-responsive.css"]
})
export class FrontPageComponent {

}
