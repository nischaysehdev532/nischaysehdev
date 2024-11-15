import { AfterViewInit, Directive, ElementRef, Inject, Injectable, viewChild } from '@angular/core';
import { Component } from '@angular/core';
import { ResumeComponent } from '../resume/resume.component';
import { DOCUMENT, NgClass } from '@angular/common';
import { AnimationUtility } from '../utitlity/AnimationUtility';
import { ComponentUtility } from '../utitlity/componentUtility';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ResumeComponent, NgClass],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', 'navbar.component-resposive.css']
})

export class NavbarComponent {
  public navlinks: string[] = [];
  public socialLinksImagesPath: string[] = [];
  public responsiveNavbarFlag: boolean;
  public animationUtility = new AnimationUtility();
  public webUrl: string;
  public utility: ComponentUtility
  constructor(@Inject(DOCUMENT) protected document: Document) {
    this.navlinks = ["About-Me", "Work-Experience", "Digital-Products", "Contact-Me"];
    this.socialLinksImagesPath = ["github-icon.png", "facebook-icon.png", "instagram-icon.png", "linkedin-icon.png", "x.png"];
    this.document.defaultView.window.addEventListener("scroll", this.applyNavbarAnimation)
    this.webUrl = "www.nischaysehdev.com";
    this.utility = new ComponentUtility();
  }


  public applyNavbarAnimation(): void {
    let scrollY = this.document.defaultView.window.scrollY
    let navbar = this.document.getElementById("navbar-section")
    if (scrollY > 0) {
      navbar.classList.add("navbar-scroll");
    }
    else {
      navbar.classList.remove("navbar-scroll");
    }
  }


  protected reachTo(event: Event): void {
    let bodyElement = this.document.getElementsByTagName("body")[0];
    bodyElement.style.height = "auto"
    bodyElement.style.overflowY = "auto"
    let element = event.target as Element;
    let page = element.id.replace("-navlink", "");
    let pageId = page + "-Page";
    this.utility.visitToSection(pageId);
    this.responsiveNavbarFlag = false
  }

  public showHideNavbar(): void {
    if (!this.responsiveNavbarFlag) {
      this.responsiveNavbarFlag = true;
      this.applyFadeInAnimation();
      setTimeout(() => {
        this.removeFadeInAnimation();
      }, 1000);
      this.utility.applyBlurEffect(this.document);
    }
    else {
      this.responsiveNavbarFlag = false
      this.applyFadeInAnimation();
      setTimeout(() => {
        this.removeFadeInAnimation();
      }, 1000);
      this.utility.resetBlurEffect(this.document);
    }

  }

  private applyFadeInAnimation(): void {
    this.document.getElementsByClassName("show-navlink-section-responsive")[0].classList.add("fade-in-animtion");
  }

  private removeFadeInAnimation(): void {
    this.document.getElementsByClassName("show-navlink-section-responsive")[0].classList.remove("fade-in-animtion")
  }

  public visitHome(): void {
    this.document.defaultView.location.href = this.webUrl;
  }
}

