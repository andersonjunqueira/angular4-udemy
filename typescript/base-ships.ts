class Spacecraft {

    constructor(public propulsor: string) {
        this.propulsor = propulsor;
    }

    jumpToHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`);
    }

}

interface Containership {
    cargoContainers: number;
}

export {
    Spacecraft, Containership
}