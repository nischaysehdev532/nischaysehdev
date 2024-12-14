import { DOCUMENT, NgClass } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { CertificationsComponent } from '../certifications/certifications.component';
import { ComponentUtility } from '../utitlity/componentUtility';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgClass, CertificationsComponent],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css', './about-me.component-responsive.css']
})
export class AboutMeComponent {
  private content = ` <div class="page-title">
        <div class="navnumber" id="subHeadingSerial">01.</div>{{this.getPageTitle()}}
    </div>
    <div class="content" id="aboutMeContentContainer">
        A professional Software Engineer who is passionate about creating innovative end-to-end digital
        products which become live on the internet and run in these modern days efficiently. I am the one
        who likes to play roles in each aspect of technology by which I can realize my dream independently
        and build innovative products.
        <br><br>
        I have completed Bachelors of Computer Application(BCA) from <div class="underline" id="ignou"
            (click)="visitIgnouUniversity()">
            Indira Gandhi National Open University</div>. Also completed an advance
        diploma in computer application from <div class="underline" id="nielit" (click)="visitNielitUnivserity()">
            National Institute of
            Electronics and Information Technology(NIELIT)</div>. Currently, pursuing Master of Computer Application
        from
        IGNOU.
        <br><br>
        I have also completed some certifications. Please visit to my <div class="underline"
            (click)="showCertificates()">
            certifications</div> for more information.
        An enthusiastic Software Engineer who is always eager to learn new things and build new things.
        Please take a look at my recent <div class="underline" id="projects">products</div> to find to a
        reason to work with me.
        <br><br>
        If having any exciting opportunity but haven't found the right person? Ping me by <a class="underline"
            id="aboutMeContentMail" href="mailto:nischaysahdevoo8@gmail.com">clicking</a>
        here. I will be happy to respond.
    </div>`

  private aboutMePageTitle = " About Me";
  private window: Window
  private ignouWebUrl = "http://www.ignou.ac.in/";
  private utility: ComponentUtility
  private nielitWebUrl = "https://www.nielit.gov.in/";
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
    this.window.addEventListener("scroll", this.reveal)
    this.utility = new ComponentUtility();
  }


  public visitNielitUnivserity(): void {
    let anchorTagElement = this.document.createElement('a');
    anchorTagElement.href = this.nielitWebUrl;
    anchorTagElement.target = "_blank";
    anchorTagElement.click()
  }

  public visitIgnouUniversity(): void {
    let anchorTagElement = this.document.createElement('a');
    anchorTagElement.href = this.ignouWebUrl;
    anchorTagElement.target = "_blank";
    anchorTagElement.click()
  }


  public reveal(): void {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
      else {
        reveals[i].classList.remove("active");
      }
    }
  }

  public showCertificates(): void {
    this.document.getElementById("app-certifications").style.display = "grid";
    this.document.getElementById("About-Me-Page").style.display = "none"
    this.utility.applyBlurEffect(this.document)
  }

  public getPageTitle(): string {
    return this.aboutMePageTitle;
  }

  public visitToProductsSection(): void {
    this.utility.visitToSection("Digital-Products-Page");
  }
}