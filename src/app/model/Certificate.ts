export enum CATEGORY {
    TECHNICAL,
    COMMUNICATION
}
export class Certificate {
    private certificateName: string;
    private certificateCategory: CATEGORY;
    private certifiedBy: string;
    private certificateUrl: string
    private digitalcertificateImagePath: string
    private cerificateDetails: Array<String>
    private constructor(certificateName: string, certificateCategory: CATEGORY, certifiedBy: string, certificateUrl: string, digitalcertificateImagePath: string, cerificateDetails: Array<String>) {
        this.certificateName = certificateName;
        this.certificateCategory = certificateCategory;
        this.certifiedBy = certifiedBy;
        this.certificateUrl = certificateUrl
        this.digitalcertificateImagePath = digitalcertificateImagePath;
        this.cerificateDetails = cerificateDetails;
    }

    /**
     * getCertificateName
     */
    public getCertificateName(): string {
        return this.certificateName;
    }

    /**
     * getCertificateCategory
     */
    public getCertificateCategory(): CATEGORY {
        return this.certificateCategory;
    }

    /**
     * getCertified
     */
    public getCertifier(): string {
        return this.certifiedBy;
    }

    /**
     * getCertificateUrl
     */
    public getCertificateUrl(): string {
        return this.certificateUrl;
    }

    /**
     * getDigitalCertificateImageUrl
     */
    public getDigitalCertificateImageUrl(): string {
        return this.digitalcertificateImagePath == undefined ? "blank_certificate_image.png" : this.digitalcertificateImagePath;
    }

    static Builder = class {
        private certificateName: string;
        private certificateCategory = CATEGORY.TECHNICAL;
        private certifiedBy: string;
        private certificateUrl: string
        private digitalcertificateImagePath = "blank_certification_image";
        private cerificateDetails: Array<String> = [];
        constructor(certificateName: string, certifiedBy: string, certificateUrl: string) {
            this.certificateName = certificateName;
            this.certifiedBy = certifiedBy;
            this.certificateUrl = certificateUrl;
        }

        public setCertificationCategory(certificateCategory: CATEGORY): any {
            this.certificateCategory = certificateCategory;
            return this;
        }

        public setDigitalcertificateImagePath(digitalcertificateImagePath: string): any {
            this.digitalcertificateImagePath = digitalcertificateImagePath;
            return this;
        }


        public setcertificateDetails(certificateDetails: Array<String>): any {
            this.cerificateDetails = certificateDetails;
            return this;
        }

        public build(): Certificate {
            return new Certificate(this.certificateName, this.certificateCategory, this.certifiedBy, this.certificateUrl, this.digitalcertificateImagePath, this.cerificateDetails);
        }
    }
}