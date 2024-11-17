import { CommonModule, DOCUMENT, Location } from '@angular/common';
import { Component, Inject } from '@angular/core';
import * as products from '../database/ProductDB';
import { AnimationUtility } from '../utitlity/AnimationUtility';
import { ComponentUtility } from "../utitlity/componentUtility";

const MAX_HEIGHT = "1240px"
const HEIGHT = "800px"

const RESPONSIVE_MAX_HEIGHT = "1000px"
const RESPONSIVE_HEIGHT = "600px"

@Component({
  selector: 'app-digital-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './digital-products.component.html',
  styleUrls: ['./digital-products.component.css', './digital-products.component-responsive.css']
})
export class DigitalProductsComponent {
  title = " Digital Products"
  products: products.ProductDB
  animationUtility: AnimationUtility;
  utility: ComponentUtility
  productViewLimit: number = 2;
  label = "Show more"
  window: Window
  constructor(@Inject(Location) private location: Location, @Inject(DOCUMENT) public document: Document) {
    this.animationUtility = new AnimationUtility();
    this.utility = new ComponentUtility();
    this.products = new products.ProductDB()
  }

  public visitToProject(productUrl: string): void {
    this.location.go(productUrl)
  }

  /**
   * loadMoreProducts()
   */
  public loadMoreProducts() {
    if (this.products.getCount() > this.productViewLimit) {
      this.document.getElementById("Digital-Products-Page").style.height = this.getMaxHeight();
      this.productViewLimit = this.products.getCount();
      this.label = "Show less"
    } else {
      this.productViewLimit = 2;
      this.document.getElementById("Digital-Products-Page").style.height = this.getOriginamHeight();
      this.label = "Show more"
    }
    this.applyFadeInAnimation();
    setTimeout(() => {
      this.removeFadeInAnimation();
    }, 1000);
  }

  /**
   * getHeight
   */
  public getMaxHeight() {
    return this.document.body.offsetWidth > 415 ? MAX_HEIGHT : RESPONSIVE_MAX_HEIGHT;
  }

  /**
   * getHeight
   */
  public getOriginamHeight() {
    return this.document.body.offsetWidth > 415 ? HEIGHT : RESPONSIVE_HEIGHT;
  }

  private applyFadeInAnimation(): void {
    for (let index = 0; index < this.products.getCount(); index++) {
      this.document.getElementsByClassName("product")[index].classList.add("fade-in-animtion");
    }
  }

  private removeFadeInAnimation(): void {
    for (let index = 0; index < this.products.getCount(); index++) {
      this.document.getElementsByClassName("product")[index].classList.remove("fade-in-animtion")
    }
  }

}
