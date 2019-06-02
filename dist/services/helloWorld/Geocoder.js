"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const OpenCageDataProvider_1 = require("./providers/OpenCageDataProvider");
exports.getPlacesByName = (q) => __awaiter(this, void 0, void 0, function* () {
    if (q.length < 3) {
        return {
            type: "FeatureCollection",
            features: []
        };
    }
    return yield OpenCageDataProvider_1.getPlaces(q);
});
//# sourceMappingURL=Geocoder.js.map