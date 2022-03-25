"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
describe('Fetch Countries using axios', () => {
    it('should fetch all countries', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield __1.default.getAllCountries();
        expect(result.length).toEqual(250);
        expect(result).toBeInstanceOf(Array);
    }));
    it('should fetch all countries in a region', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield __1.default.getCountriesByRegion();
        expect(result.length).toEqual(59);
        expect(result).toBeInstanceOf(Array);
    }));
    it('should countries name', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield __1.default.getCountriesByName();
        expect(result.length).toEqual(2);
        expect(result).toBeInstanceOf(Array);
    }));
});
