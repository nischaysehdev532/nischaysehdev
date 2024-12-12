import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css', './left-sidebar.component-responsive.css']
})


export class LeftSidebarComponent {
  emailId = "nischaysahdevoo8@gmail.com"
  private window: any
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
  }

  /**
   * messageTo which leads to send to email message
   */
  public messageTo() {
    window.location.href = "mailto:nischaysahdevoo8@gmail.com?subject = Feedback&body = Message";

  }
}
