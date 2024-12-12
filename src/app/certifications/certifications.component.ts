import { Component, Inject } from '@angular/core';
import { CertificateDB } from '../database/CertificateDB';
import { AnimationUtility } from '../utitlity/AnimationUtility';
import { DOCUMENT } from '@angular/common';
import { ComponentUtility } from '../utitlity/componentUtility';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css', './certifications.component-responsive.css']
})
export class CertificationsComponent {
  private certificatesDB: CertificateDB;
  private certificateIndex: number = 0;
  animationUtility: AnimationUtility;
  private utility: ComponentUtility
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.certificatesDB = new CertificateDB();
    this.animationUtility = new AnimationUtility();
    this.utility = new ComponentUtility();
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

  public getCertificationPath() {
    return this.certificatesDB.getCertification(this.certificateIndex).getDigitalCertificateImageUrl();
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
    this.document.getElementById("app-certifications").style.display = "none"
    this.document.getElementById("About-Me-Page").style.display = "grid"
    this.utility.resetBlurEffect(this.document);
  }
}
