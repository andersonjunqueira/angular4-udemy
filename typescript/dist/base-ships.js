"use strict";
exports.__esModule = true;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpToHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
