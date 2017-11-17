import { Spacecraft, Containership } from './base-ships';
import { MilleniumFalcon } from './starfighters';

import * as _ from 'lodash';
console.log(_.pad('typescript examples', 39, '='));

let ship = new Spacecraft('hyperdrive');
ship.jumpToHyperspace();

let mf = new MilleniumFalcon();
mf.jumpToHyperspace();

console.log(mf.cargoContainers);
console.log(mf.hiddenContainers);

let goodForTheJob = (ship: Containership) => {
    console.log(`This ship is ${ship.cargoContainers > 2 ? 'good' : 'no good'} for the job`);
}

goodForTheJob(mf);