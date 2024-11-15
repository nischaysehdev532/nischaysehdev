import { Component } from '@angular/core';
import * as workExperiences from '../database/WorkExperienceDB'
import { WorkExperience } from '../model/WorkExperience';
import { AnimationUtility } from '../utitlity/AnimationUtility';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-work-description',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './work-description.component.html',
  styleUrls: ['./work-description.component.css', './work-description.component-responsive.css']
})
export class WorkDescriptionComponent {
  pageTitle = "What I've worked"
  workExperienceIndex: number = 0;
  workExperiencesList = new workExperiences.WorkExperienceDB();
  animationUtility = new AnimationUtility();
  currentStyles: Record<string, boolean> = {}

  public willModify(organizationName: String): boolean {
    return organizationName == this.getOrganizationName();
  }

  public getOrganizationsNames(): Array<String> {
    return this.workExperiencesList.getOrganizationsList()
      .map(workExperience => workExperience.organizationName);
  }

  public getOrganizationName(): String {
    return this.workExperiencesList.getWorkExperience(this.workExperienceIndex).organizationName;
  }

  public getOrganizationDuration(): string {
    return this.workExperiencesList.getWorkExperience(this.workExperienceIndex).getStartDate() + " - " +
      this.workExperiencesList.getWorkExperience(this.workExperienceIndex).getEndDate();
  }

  public getJobResponsibilities(): Array<string> {
    return this.workExperiencesList.getWorkExperience(this.workExperienceIndex).getJobResponsibilities();
  }

  public getOrganizationWebUrl(): string {
    return this.workExperiencesList.getWorkExperience(this.workExperienceIndex).getOrganizationWebUrl()
  }

  public getOrganizationImageUrl() {
    return this.workExperiencesList.getWorkExperience(this.workExperienceIndex).getImageUrl()
  }

  public showPreviousWorkExperience(): void {
    if (this.workExperienceIndex > 0) {
      this.animationUtility.fadeInAnimation(new Array<string>("organization-title-container", "jobDescription", "oragnization-image"))
      --this.workExperienceIndex;
    }
  }
  public showNextWorkExperience(): void {
    if (this.workExperienceIndex < this.workExperiencesList.worExperiences.length - 1) {
      this.animationUtility.fadeInAnimation(new Array<string>("organization-title-container", "jobDescription", "oragnization-image"))
      ++this.workExperienceIndex
    }
  }
  public reachTo(): void {
    window.location.href = this.workExperiencesList[this.workExperienceIndex].getOrganizationWebUrl();
  }


  public getDesignation() {
    return this.workExperiencesList.getWorkExperience(this.workExperienceIndex).designation;
  }

  public fillOrganizationDetails(organizationName: String) {
    this.animationUtility.fadeInAnimation(new Array<string>("organization-title-container", "jobDescription", "oragnization-image"))
    this.workExperienceIndex = this.workExperiencesList.getOrganizationsList().map(workExperience => workExperience.organizationName).indexOf(organizationName);
  }

}

