export enum PRODUCT_TYPE {
    FUN_PRODUCTS = "FUN_PRODUCTS",
    PRODUCTS = "PRODUCTS"
}
export class Product {
    private productType: PRODUCT_TYPE
    private productName: string
    private productDescription: string
    private productUrl: string
    private productLaunchDate: Date
    private productCoverImage: Array<string>
    private productTechStack: Array<string>
    private constructor(productType, productName, productDescription, productUrl, productLaunchDate, productCoverImage, productTectStack) {
        this.productType = productType;
        this.productName = productName
        this.productDescription = productDescription
        this.productUrl = productUrl
        this.productLaunchDate = productLaunchDate;
        this.productCoverImage = productCoverImage;
        this.productTechStack = productTectStack;
    }


    public getProductName(): string {
        return this.productName;
    }

    public getProductDescription(): string {
        return this.productDescription;
    }

    public getProductUrl(): string {
        return this.productUrl;
    }

    public getProductLaunchDate(): string {
        return this.hasProductLaunched(this.productLaunchDate) ? ("Launched") : ("Launching soon");
    }

    public getProductCoverImagesUrl(): Array<string> {
        return this.productCoverImage;
    }

    public getProductCoverImageUrl(): string {
        return this.productCoverImage[0];
    }

    public getProductType(): PRODUCT_TYPE {
        return this.productType;
    }
    private hasProductLaunched(date: Date): boolean {
        let currentDate = new Date();
        if (currentDate.getFullYear() > date.getFullYear()) {
            return true;
        } else if (currentDate.getMonth() > date.getMonth()) {
            return true;
        }
        else if (currentDate.getDay() > date.getDay()) {
            return true;
        }
        return false;
    }

    public getProductTechStack(): Array<string> {
        return this.productTechStack;
    }

    static Builder = class {
        productName: string
        productDescription: string
        productUrl: string
        productLaunchDate: Date = undefined
        productCoverImages: Array<string> = new Array<string>();
        productType = PRODUCT_TYPE.PRODUCTS
        productTectStack: Array<string>;
        constructor(productName: string, productDescription: string, productUrl: string) {
            this.productName = productName
            this.productDescription = productDescription
            this.productUrl = productUrl
        }

        public setproductLaunchDate(productLaunchDate: Date): any {
            this.productLaunchDate = productLaunchDate
            return this;
        }

        public setproductCoverImage(productCoverImages: Array<string>): any {
            this.productCoverImages = productCoverImages
            return this;
        }

        public setProductType(productType: PRODUCT_TYPE): any {
            this.productType = productType;
            return this;
        }

        public setProductTechStack(productTechStack: Array<string>): any {
            this.productTectStack = productTechStack;
            return this;
        }

        public build(): Product {
            return new Product(this.productType, this.productName, this.productDescription, this.productUrl, this.productLaunchDate, this.productCoverImages, this.productTectStack)
        }

    }
} 