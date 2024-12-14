import { Product, PRODUCT_TYPE } from "../model/Product"

export class ProductDB {
    ProductList: Array<Product> = []
    constructor() {
        this.initializeProductValues();
        this.initializeFunProductValues();
    }

    private initializeProductValues(): void {
        this.ProductList.push(new Product.Builder("Pustakalaya Bhawan", "Pustakalaya Bhawan is an e-commerce platform creator, on which library owner not only manage their library but also can online their book store.This product creates an online bookstore by taking just a couple of things and a click! This product has everything which is required to start an online bookstore business to manage it effectively.The features in one - word are online shopping, inventory management, price management, platform management and many more.", "#")
            .setproductLaunchDate(new Date())
            .setproductLaunchDate(PRODUCT_TYPE.PRODUCTS)
            .setproductCoverImage(new Array<string>("Pustkalya-bhavan-image.png", "Pustkalya-bhavan-image.png", "Pustkalya-bhavan-image.png", "Pustkalya-bhavan-image.png", "Pustkalya-bhavan-image.png"))
            .build())
        this.ProductList.push(new Product.Builder("IGNOU - Helpdesk", `This project journey started with a hackathon which is organized by my university which opted for themes like E - portal for students, study materials management systems and many more, which have direct or indirect motives of providing good services to their
        students.The idea which was given to me and which was selected was a help desk which was capable of providing information like term results, assignment status, study material status, profile management, released notification and others which related to the students day to day requirements.`, "#")
            .setproductLaunchDate(new Date())
            .setproductLaunchDate(PRODUCT_TYPE.PRODUCTS)
            .setproductCoverImage(new Array<string>("Ignou-an-official-application-cover-image.png"))
            .build());
        this.ProductList.push(new Product.Builder("IGNOU - Helpdesk", `This project journey started with a hackathon which is organized by my university which opted for themes like E - portal for students, study materials management systems and many more, which have direct or indirect motives of providing good services to their
        students.The idea which was given to me and which was selected was a help desk which was capable of providing information like term results, assignment status, study material status, profile management, released notification and others which related to the students day to day requirements.`, "#")
            .setproductLaunchDate(new Date())
            .setproductLaunchDate(PRODUCT_TYPE.PRODUCTS)
            .setproductCoverImage(new Array<string>("Ignou-an-official-application-cover-image.png"))
            .build());

    }


    private initializeFunProductValues(): void {
        this.ProductList.push(new Product.Builder("Customer Management System", `A standalone customer management desktop
                application.It was designed to work collaboratively with e - commerce applications.It supports
                basic features like a status check, delivery status, return concerns, offer concerns, customer concerns etc.`, "https://github.com/NischaySehdev/CustomerManagementSystem")
            .setProductType(PRODUCT_TYPE.FUN_PRODUCTS)
            .setProductTechStack(`The UI is designed with the Java Swing component. For the database, ORM framework Hibernate is used with the MySQL`)
            .build());
        this.ProductList.push(new Product.Builder("Messenger", ` It contains restful apis for a social media application which provides user details like comments, share counts, likes counts, download counts etc`, "https://github.com/NischaySehdev/CustomerManagementSystem")
            .setProductType(PRODUCT_TYPE.FUN_PRODUCTS)
            .setProductTechStack("It is the system which provides APIs.")
            .build());
        this.ProductList.push(new Product.Builder("Keep clone", ` It contains restful apis for a social media application which provides user details like comments, share counts, likes counts, download counts etc`, "https://github.com/NischaySehdev/CustomerManagementSystem")
            .setProductType(PRODUCT_TYPE.FUN_PRODUCTS)
            .setProductTechStack("The UI is prepared by Angular...")
            .build());
        this.ProductList.push(new Product.Builder("Movie catalog", `It contains restful apis for movie catelog web application which provide detailed information for the movies for example movie ratings, cast, budget etc.`, "https://github.com/NischaySehdev/CustomerManagementSystem")
            .setProductType(PRODUCT_TYPE.FUN_PRODUCTS)
            .setProductTechStack("The UI is prepared by Angular...")
            .build());
        this.ProductList.push(new Product.Builder("Messenger", ` It contains restful apis for a social media application which provides user details like comments, share counts, likes counts, download counts etc`, "https://github.com/NischaySehdev/CustomerManagementSystem")
            .setProductType(PRODUCT_TYPE.FUN_PRODUCTS)
            .setProductTechStack("It is the system which provides APIs.")
            .build());
        this.ProductList.push(new Product.Builder("Keep clone", ` It contains restful apis for a social media application which provides user details like comments, share counts, likes counts, download counts etc`, "https://github.com/NischaySehdev/CustomerManagementSystem")
            .setProductType(PRODUCT_TYPE.FUN_PRODUCTS)
            .setProductTechStack("The UI is prepared by Angular...")
            .build());
        this.ProductList.push(new Product.Builder("Movie catalog", `It contains restful apis for movie catelog web application which provide detailed information for the movies for example movie ratings, cast, budget etc.`, "https://github.com/NischaySehdev/CustomerManagementSystem")
            .setProductType(PRODUCT_TYPE.FUN_PRODUCTS)
            .setProductTechStack("The UI is prepared by Angular...")
            .build());
        this.ProductList.push(new Product.Builder("Movie catalog", `It contains restful apis for movie catelog web application which provide detailed information for the movies for example movie ratings, cast, budget etc.`, "https://github.com/NischaySehdev/CustomerManagementSystem")
            .setProductType(PRODUCT_TYPE.FUN_PRODUCTS)
            .setProductTechStack("The UI is prepared by Angular...")
            .build());
        this.ProductList.push(new Product.Builder("Messenger", ` It contains restful apis for a social media application which provides user details like comments, share counts, likes counts, download counts etc`, "https://github.com/NischaySehdev/CustomerManagementSystem")
            .setProductType(PRODUCT_TYPE.FUN_PRODUCTS)
            .setProductTechStack("It is the system which provides APIs.")
            .build());
        this.ProductList.push(new Product.Builder("Keep clone", ` It contains restful apis for a social media application which provides user details like comments, share counts, likes counts, download counts etc`, "https://github.com/NischaySehdev/CustomerManagementSystem")
            .setProductType(PRODUCT_TYPE.FUN_PRODUCTS)
            .setProductTechStack("The UI is prepared by Angular...")
            .build());
        this.ProductList.push(new Product.Builder("Movie catalog", `It contains restful apis for movie catelog web application which provide detailed information for the movies for example movie ratings, cast, budget etc.`, "https://github.com/NischaySehdev/CustomerManagementSystem")
            .setProductType(PRODUCT_TYPE.FUN_PRODUCTS)
            .setProductTechStack("The UI is prepared by Angular...")
            .build());

    }
    /**
     * getProductsList
     */
    public getProductsList(): Array<Product> {
        return this.ProductList.filter(product => product.getProductType() == PRODUCT_TYPE.PRODUCTS);
    }

    /**
     * getFunProductsList
     */
    public getFunProductsList(): Array<Product> {
        return this.ProductList.filter(product => product.getProductType() == PRODUCT_TYPE.FUN_PRODUCTS);
    }

    /**
     * getProductsCount
     */
    public getCount(): number {
        return this.ProductList.length;
    }
}