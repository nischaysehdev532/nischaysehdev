import { Component, Inject, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkDescriptionComponent } from './work-description/work-description.component';
import { DigitalProductsComponent } from './digital-products/digital-products.component';
import { FunProjectsComponent } from './fun-projects/fun-projects.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetInTouchComponent } from "./get-in-touch/get-in-touch.component";
import { CertificationsComponent } from './certifications/certifications.component';
import { CertificateDB } from './database/CertificateDB';
import { AnimationUtility } from './utitlity/AnimationUtility';
import { DOCUMENT } from '@angular/common';
import { LearnMoreAboutProjectComponent } from "./learn-more-about-project/learn-more-about-project.component";
import { SocialNetworkLinksComponent } from './social-network-links/social-network-links.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule,
    SocialNetworkLinksComponent,
    FrontPageComponent,
    LeftSidebarComponent,
    AboutMeComponent,
    NavbarComponent,
    WorkDescriptionComponent,
    DigitalProductsComponent,
    FunProjectsComponent,
    GetInTouchComponent,
    LearnMoreAboutProjectComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component-responsive.css']

})
export class AppComponent {
  title = 'About-me';
  contactForm: FormGroup
  fullName: FormControl
  emailId: FormControl
  organizationName: FormControl
  purpose: FormControl
  attachment: FormControl
  certificatesDB: CertificateDB;
  certificateIndex: number = 0;
  animationUtility: AnimationUtility;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.certificatesDB = new CertificateDB();
    this.animationUtility = new AnimationUtility();
  }
  public closeContactForm(): void {
    document.getElementById("contact-form").style.display = "none";
  }
  contactFrom = new FormGroup({
    fullName: new FormControl('Test'),
    emailId: new FormControl('Test'),
    organizationName: new FormControl('Test'),
    purpose: new FormControl('Test'),
    attachment: new FormControl('Test'),
  });

  public onSubmit(): void {
    alert("Success")
  }

  public visitToCertificate(): void {
    window.location.href = this.getCertificateUrl();;
  }

  public showNextCertificate(): void {
    if (this.certificateIndex < this.certificatesDB.getCertificatesCount()) {
      this.animationUtility.fadeInAnimation(new Array<string>("certificate-image"));
      ++this.certificateIndex;
    }
  }

  public showPreviousCertificate(): void {
    if (this.certificateIndex > 0) {
      this.animationUtility.fadeInAnimation(new Array<string>("certificate-image"));
      --this.certificateIndex;
    }
  }

  public getCertificationName(): string {
    return this.certificatesDB.getCertification(this.certificateIndex).getCertificateName();
  }

  public getCertificateUrl(): string {
    return this.certificatesDB.getCertification(this.certificateIndex).getCertificateUrl();
  }

  public closeCertificateContainer(): void {
    this.document.getElementById("certificatesContainer").style.display = "none"
    this.document.getElementById("About-Me-Page").style.display = "grid"
    this.document.getElementById("navbar-section").style.filter = ""
  }


}
