import { Spacecraft, Containership } from './base-ships';

class MilleniumFalcon extends Spacecraft implements Smugglership {
    
    cargoContainers: number;
    hiddenContainers: number;

    constructor() {
        super('Hyperdrive')
        this.cargoContainers = 2;
        this.hiddenContainers = 4;
    }

    jumpToHyperspace() {
        if(Math.random() >= 0.5) {
            super.jumpToHyperspace();
        } else {
            console.log("jump failed");
        }
    }

}

interface Smugglership extends Containership {
    hiddenContainers: number;
}

export {
    MilleniumFalcon, Smugglership
}