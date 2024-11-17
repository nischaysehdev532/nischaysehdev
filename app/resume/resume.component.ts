import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css', './resume.component-responsive.css']
})
export class ResumeComponent {
  buttonName = "Resume"

  constructor(@Inject(DOCUMENT) private document: Document) {

  }
  public downloadResume(): void {
    let anchorTagElement = document.createElement("a");
    anchorTagElement.href = "Nischay_Sehdev_Resume.pdf"
    anchorTagElement.download = "true";
    anchorTagElement.click();
  }
}
