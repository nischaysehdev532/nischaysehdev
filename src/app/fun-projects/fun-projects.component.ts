import { Component, Inject } from '@angular/core';
import { ProductDB } from '../database/ProductDB';
import { CommonModule, DOCUMENT } from '@angular/common';
import { AnimationUtility } from '../utitlity/AnimationUtility';
import { ComponentUtility } from '../utitlity/componentUtility';
const MAX_HEIGHT = "1540px"
const HEIGHT = "840px"

const RESPONSIVE_MAX_HEIGHT = "4500px"
const RESPONSIVE_MAX_HEIGHT_2 = "2700px"
const RESPONSIVE_HEIGHT = "2600px"
const RESPONSIVE_HEIGHT_2 = "1200px"
@Component({
  selector: 'app-fun-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fun-projects.component.html',
  styleUrls: ['./fun-projects.component.css', './fun-projects.component-responsive.css']
})
export class FunProjectsComponent {
  pageTitle = " Some projects for fun."
  products: ProductDB
  animationUtility: AnimationUtility
  componentUtility: ComponentUtility
  productViewLimit = 6
  buttonLabel = "Show more"
  height: number;

  /**
   *
   */
  constructor(@Inject(DOCUMENT) protected document: Document) {
    this.products = new ProductDB()
    this.animationUtility = new AnimationUtility()
    this.componentUtility = new ComponentUtility();
  }

  public loadMoreProducts() {
    if (this.products.getCount() > this.productViewLimit) {
      this.document.getElementById("funProjects").style.height = this.getMaxHeight();
      this.productViewLimit = this.products.getCount();
      this.applyFadeInAnimation();
      setTimeout(() => {
        this.removeFadeInAnimation();
      }, 1000);
      this.buttonLabel = "Show less"
    } else {
      this.productViewLimit = 6;
      this.document.getElementById("funProjects").style.height = this.getOriginamHeight();
      this.buttonLabel = "Show more"
    }
  }

  /**
   * getHeight
   */
  public getMaxHeight() {
    if (this.document.body.offsetWidth > 415 && this.document.body.offsetWidth < 1082) {
      return RESPONSIVE_MAX_HEIGHT_2;
    } else if (this.document.body.offsetWidth <= 415) {
      return RESPONSIVE_MAX_HEIGHT;
    }
    return MAX_HEIGHT;
  }

  /**
   * getHeight
   */
  public getOriginamHeight() {
    if (this.document.body.offsetWidth > 415 && this.document.body.offsetWidth < 1082) {
      return RESPONSIVE_HEIGHT_2;
    } else if (this.document.body.offsetWidth <= 415) {
      return RESPONSIVE_HEIGHT;
    }
    return HEIGHT;
  }

  private applyFadeInAnimation(): void {
    for (let index = 0; index < this.products.getCount(); index++) {
      this.document.getElementsByClassName("project")[index].classList.add("fade-in-animtion");
    }
  }

  private removeFadeInAnimation(): void {
    for (let index = 0; index < this.products.getCount(); index++) {
      this.document.getElementsByClassName("project")[index].classList.remove("fade-in-animtion")
    }
  }

}
