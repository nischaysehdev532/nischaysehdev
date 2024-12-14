const CHANGED_COLOR_IMAGE_NAME = "-changed-color-icon.png";

export class AnimationUtility {

    public changeColor(event: Event) {
        const element = event.target as Element
        let newImageName = element.getAttribute("src").replace('-icon.png', "") + CHANGED_COLOR_IMAGE_NAME;
        element.setAttribute("src", newImageName);
    }

    public revertColor(event: Event) {
        const element = event.target as Element
        let newImageName = element.getAttribute("src").replace(CHANGED_COLOR_IMAGE_NAME, "");
        element.setAttribute("src", newImageName + "-icon.png");
    }

    /**
     * 
     * @param childrens 
     */
    public fadeInAnimation(childrens: Array<string>): void {
        this.toogleFadeInAnimation(childrens);
        setTimeout(() => {
            this.toogleFadeInAnimation(childrens);
        }, 1000);
    }

    private toogleFadeInAnimation(childrens: Array<string>) {
        childrens.forEach(child => document.getElementById(child).classList.toggle("fade-in-animtion"))
    }
}