import { Certificate } from "../model/Certificate";

export class CertificateDB {
    certificates: Array<Certificate> = [];
    constructor() {
        this.certificates.push(
            new Certificate.Builder(
                "Java(Basic)",
                "Hackerrank",
                "https://www.hackerrank.com/certificates/82d065de0e26").
                setDigitalcertificateImagePath("Java(Basic)_Certificate.jpg")
                .build());
        this.certificates.push(
            new Certificate.Builder(
                "AWS_Cloud_Essentials_Course_Certificate",
                "Amazon Web Services",
                "https://explore.skillbuilder.aws/").
                setDigitalcertificateImagePath("AWS_Cloud_Essentials_Course_Certificate.jpg")
                .build());
        this.certificates.push(
            new Certificate.Builder(
                "Spring 5 Basics with Spring Boot",
                "Infosys SpringBoard",
                "https://infyspringboard.onwingspan.com/web/en/app/toc/lex_auth_01296689056211763272_shared/overview").
                setDigitalcertificateImagePath("Spring 5 Basics with Spring Boot.jpg")
                .build());
    }


    public getCertification(index: number): Certificate {
        return this.certificates[index];
    }

    public getCertificatesCount(): number {
        return this.certificates.length;
    }
}