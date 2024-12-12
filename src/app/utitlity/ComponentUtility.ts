import { DOCUMENT } from "@angular/common";
import { Inject } from "@angular/core";
import { Product } from "../model/Product";
import { ProductDB } from "../database/ProductDB";

export class ComponentUtility {
    private product: Product = new ProductDB().getProductsList()[0];


    constructor() { }
    public getResizedHeight(productCount: number, productTotalCounts: number, document: Document): string {
        let currentHeight = Number.parseInt(document.getElementById("funProjects").style.height.replace("vh", ""));
        let responsiveHeight = Number.parseInt(document.getElementsByName("responsive-height")[0].style.height.replace("vh", ""));
        currentHeight += (productTotalCounts - productCount) * responsiveHeight;
        return currentHeight + "vh";
    }


    public resetBlurEffect(document: Document): void {
        document.getElementById("navbar-section").style.filter = ""
        document.getElementById("frontPageContainer").style.filter = ""
        document.getElementById("body").style.height = "auto"
    }

    public applyBlurEffect(document: Document): void {
        let bodyElement = document.getElementById("body");
        bodyElement.style.height = "100vh"
        bodyElement.style.overflowY = "hidden"
        document.getElementById("frontPageContainer").style.filter = "blur(30px)"
        document.getElementById("navbar-section").style.filter = "blur(30px)"
    }

    public visitToSection(pageId: string): void {
        let pageHeight = document.getElementById(pageId).offsetTop - 40;
        window.scrollBy(0, pageHeight - window.scrollY);
    }

    public learnMoreAboutProject(product: Product, document: Document): void {
        document.getElementById("learnMoreAboutProjectContianer").style.display = "grid";
        this.applyBlurEffect(document)
    }

    public getProjectTitle(): string {
        if (this.product != undefined) {
            return this.product.getProductName();
        }
        return ""
    }

    public getProjuctImageUrl(): Array<string> {
        if (this.product != undefined) {
            return this.product.getProductCoverImagesUrl();
        }
        return new Array()
    }

    public getProductDescription(): string {
        if (this.product != undefined) {
            return this.product.getProductDescription();
        }
        return ""
    }

    public getProductUrl(): string {
        if (this.product != undefined) {
            return this.product.getProductUrl();
        }
        return "";
    }

    public getProductTechnologyStack(): Array<string> {
        if (this.product != undefined) {
            return this.product.getProductTechStack();
        }
        return new Array();
    }


}