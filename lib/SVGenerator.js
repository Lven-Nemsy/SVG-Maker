class SVGenerator {
    constructor(){
        this.logo ='';
        this.logoShape = '';
    }
    render () {
        return `<svg width="200" height="250" version="1.1" 
        xmlns="http://www.w3.org/2000/svg">${this.logo}${this.logoShape}</svg>` 
    };
    newLogo (logo, logoColor){
        this.logo = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${logoColor}">${logo}</text>`;
    };
    newShapeColor (logoShape){
        this.logoShape = logoShape.render();
    }
}

module.exports = SVGenerator;