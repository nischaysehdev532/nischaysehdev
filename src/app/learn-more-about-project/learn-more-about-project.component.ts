import { Component, Inject } from '@angular/core';
import { ComponentUtility } from '../utitlity/componentUtility';
import { DOCUMENT } from '@angular/common';
import { AnimationUtility } from '../utitlity/AnimationUtility';
import { Product } from '../model/Product';
import { ProductDB } from '../database/ProductDB';

@Component({
  selector: 'app-learn-more-about-project',
  standalone: true,
  imports: [],
  templateUrl: './learn-more-about-project.component.html',
  styleUrls: ['./learn-more-about-project.component.css', './learn-more-about-project.component-responsive.css']
})
export class LearnMoreAboutProjectComponent {
  utility: ComponentUtility
  animationUtility: AnimationUtility
  productImageIndex: number = 0;
  product: Product = new ProductDB().getProductsList()[0];
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.utility = new ComponentUtility();
    this.animationUtility = new AnimationUtility();
  }

  public previousImage(): void {
    if (this.productImageIndex > 0) {
      this.animationUtility.fadeInAnimation(new Array<string>("product-image"));
      --this.productImageIndex;
    }
  }

  public nextImage(): void {
    if (this.productImageIndex < this.utility.getProjuctImageUrl().length) {
      this.animationUtility.fadeInAnimation(new Array<string>("product-image"));
      ++this.productImageIndex;
    }
  }

  public getCurrentProductImageUrl(): string {
    return this.product.getProductCoverImagesUrl()[this.productImageIndex];
  }

  public getProductName(): string {
    return this.product.getProductName();
  }

  public getProductDescription(): string {
    return this.product.getProductDescription();
  }

  public closeProjectContainer(): void {
    this.document.getElementById("learnMoreAboutProjectContianer").style.display = "none"
    this.document.getElementById("About-Me-Page").style.display = "grid"
    this.utility.resetBlurEffect(this.document);
  }
}
