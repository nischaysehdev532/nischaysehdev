import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT, KeyValue } from '@angular/common';

@Component({
  selector: 'app-social-network-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-network-links.component.html',
  styleUrls: ['./social-network-links.component.css', 'social-network-links.component-responsive.css']
})
export class SocialNetworkLinksComponent {
  private visibleNonVisisbleFlag = false
  public socialLinks = {
    "Github": {
      href: "https://github.com/NischaySehdev",
      imageUrl: "github-icon.png"
    },
    "Facebook": {
      href: "https://www.facebook.com/nischay.sehdev",
      imageUrl: "facebook-icon.png"
    },
    "Insta": {
      href: "https://www.instagram.com/nischay_sehdev/",
      imageUrl: "instagram-icon.png"
    },
    "LinkedIn": {
      href: "https://www.linkedin.com/in/nischaysehdev/",
      imageUrl: "linkedin-icon.png"
    },
    "X": {
      href: "https://x.com/SehNisch",
      imageUrl: "x-icon.png"
    }
  }

  /**
   *
   */
  constructor(@Inject(DOCUMENT) private document: Document) {
  }
  public applyChanges(event: Event): void {
    this.changeColor(event);
    if (!this.visibleNonVisisbleFlag) {
      this.document.getElementById("options").style.display = "grid";
      this.visibleNonVisisbleFlag = true;
    }
    else {
      this.document.getElementById("options").style.display = "none";
      this.visibleNonVisisbleFlag = false
    }
  }

  public removeChanges(event: Event): void {
    this.revertColor(event);

  }
  public changeColor(event: Event) {
    let commandAsImageName = "-changed-color-icon.png";
    const element = event.target as Element
    let newImageName = element.getAttribute("src").replace('-icon.png', "") + commandAsImageName;
    element.setAttribute("src", newImageName);
  }

  public revertColor(event: Event) {
    let removeImageCommandAsString = "-changed-color-icon.png";
    const element = event.target as Element
    let newImageName = element.getAttribute("src").replace(removeImageCommandAsString, "");
    element.setAttribute("src", newImageName + "-icon.png");
  }
}
