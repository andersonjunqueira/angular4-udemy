"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad('typescript examples', 39, '='));
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpToHyperspace();
var mf = new starfighters_1.MilleniumFalcon();
mf.jumpToHyperspace();
console.log(mf.cargoContainers);
console.log(mf.hiddenContainers);
var goodForTheJob = function (ship) {
    console.log("This ship is " + (ship.cargoContainers > 2 ? 'good' : 'no good') + " for the job");
};
goodForTheJob(mf);
