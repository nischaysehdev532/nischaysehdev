
export class WorkExperience {
    organizationName: String
    organizationWorkStartingDate = new Date()
    organizationEndDate = new Date()
    jobResponsibilities: Array<string>
    organizationImageUrl: string
    organizationWebUrl: string
    designation: string
    private constructor(organizationName: string, organizationWorkStartingDate: string, jobResponsibilities: Array<string>, organizationWebUrl: string, organizationEndDate: string, organizationImageUrl: string, designation: string) {
        this.organizationName = organizationName
        this.organizationWorkStartingDate = this.convertStringToDate(organizationWorkStartingDate);
        this.jobResponsibilities = jobResponsibilities;
        this.organizationWebUrl = organizationWebUrl;
        this.organizationEndDate = this.convertStringToDate(organizationEndDate);
        this.organizationImageUrl = organizationImageUrl;
        this.designation = designation;
    }


    /**
     * getStartDate
     */
    public getStartDate(): string {
        return this.convertDateToString(this.organizationWorkStartingDate);
    }

    /**
     * getEndDate
     */
    public getEndDate(): string {
        return this.organizationEndDate == undefined ? "Present" : this.convertDateToString(this.organizationEndDate)
    }

    /**
     * convertDateToString
     */
    public convertStringToDate(dateAsString: string): Date {
        if (dateAsString == "") {
            return undefined;
        }
        let year = this.getYearFromString(dateAsString);
        let month = this.getMonthFromString(dateAsString);
        let date: Date = new Date()
        date.setFullYear(year, month);
        return date;
    }

    private convertDateToString(date: Date): string {
        enum MONTH {
            Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sept, Oct, Nov, Dec
        };
        let month = Object.values(MONTH)[date.getMonth() - 1];
        return month + " " + date.getFullYear();
    }
    public getYearFromString(date: string): number {
        return Number.parseInt(date.substring(0, 4))
    }

    public getMonthFromString(date: string): number {
        return Number.parseInt(date.substring(5, 7))
    }

    /**
     * getImageUrl
     */
    public getImageUrl(): string {
        // return this.organizationImageUrl == undefined ? this.organizationName.replaceAll(" ", "") + "_logo.jpg" : "No Image supported yet";
        return this.organizationName.replaceAll(" ", "") + "_logo.jpg";
    }

    /**
     * getOrganization
     */
    public getOrganizationWebUrl() {
        return this.organizationWebUrl;
    }

    public getJobResponsibilities() {
        return this.jobResponsibilities;
    }

    public getDesignation() {
        return this.designation;
    }

    static builder = class {
        organizationName: string
        organizationWorkStartingDate: string
        organizationEndDate: string = ""
        jobResponsibilities: Array<string>
        organizationImageUrl: string = ""
        organizationWebUrl: string
        designation: string
        constructor(organizationName: string, organizationWorkStartingDate: string, jobResponsibilities: Array<string>, organizationWebUrl: string, designation: string) {
            this.organizationName = organizationName
            this.organizationWorkStartingDate = organizationWorkStartingDate
            this.jobResponsibilities = jobResponsibilities;
            this.organizationWebUrl = organizationWebUrl;
            this.designation = designation;
        }

        /**
         * setOrganizationEndDate
         */
        public setOrganizationEndDate(organizationEndDate: string) {
            this.organizationEndDate = organizationEndDate;
            return this;
        }

        /**
         * setImageUrl
         */
        public setImageUrl(organizationImageUrl: string) {
            this.organizationImageUrl = organizationImageUrl;
            return this;
        }

        public build(): WorkExperience {
            return new WorkExperience(this.organizationName, this.organizationWorkStartingDate, this.jobResponsibilities, this.organizationWebUrl, this.organizationEndDate, this.organizationImageUrl, this.designation);
        }
    }
}
