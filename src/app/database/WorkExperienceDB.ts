import { WorkExperience } from "../model/WorkExperience";

export class WorkExperienceDB {
    worExperiences: Array<WorkExperience> = [];
    constructor() {
        this.worExperiences.push(new WorkExperience.builder(
            "Merkur Gaming India",
            "2022-05",
            ["As an internal stakeholder, managed a few 10's slot games where the responsibility was to design, develop, test and manage.",
                "Played mentor roles for changes/involvement of technologies which led to enhancement in the process of production.",
                "Involved in some domain framework re-creational activities which led to a decrease in the time estimation efforts by 50%."],
            "https://merkurgamingindia.com/", "Senior Software Engineer").build());

        this.worExperiences.push(new WorkExperience.builder(
            "Teleperformance",
            "2020-09",
            ["Worked as a Flipkart retailer in different departments.",
                "Responsible for handling overall customer concerns related to their E-commerce profile."],
            "https://www.teleperformance.com/", "Customer Support Executive").setOrganizationEndDate("2022-04").build());
    }

    /**
     * getWorkEx
     */
    public getWorkExperience(index) {
        return this.worExperiences[index];

    }

    /**
     * getOrganizationsList
     */
    public getOrganizationsList() {
        return this.worExperiences;
    }
}
