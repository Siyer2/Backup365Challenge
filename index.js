"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateChecker = void 0;
const fs = __importStar(require("fs"));
class DuplicateChecker {
    constructor(fileName) {
        const phoneNumbers = Array.from(fs.readFileSync(fileName, 'utf8').toString().split('\n'));
        this.initialPhoneNumbers = phoneNumbers;
    }
    /**
     * Returns an array of duplicates
     * @returns array of duplicates
     */
    getDuplicatesFromFile() {
        const duplicates = this.getDuplicates(this.initialPhoneNumbers);
        this.uniquePhoneNumbers = duplicates;
        return duplicates;
    }
    /**
     * Print the duplicates
     * @param phoneNumbers
     */
    printDuplicates() {
        if (this.uniquePhoneNumbers) {
            this.uniquePhoneNumbers.forEach((phoneNumber) => {
                const lineNumber = this.getLineNumber(phoneNumber, this.initialPhoneNumbers);
                console.log(`${phoneNumber} on line ${lineNumber} is a duplicate`);
            });
        }
        else {
            console.log("Unique phone numbers has not been set");
        }
    }
    /**
     * Return an array of duplicate entries
     * @param phoneNumbers
     */
    getDuplicates(phoneNumbers) {
        return phoneNumbers.filter((e, i, a) => a.indexOf(e) !== i);
    }
    /**
     * Return the line number of phoneNumber in phoneNumbers
     * @param phoneNumber - The number to check
     * @param phoneNumbers - The numbers to check against
     */
    getLineNumber(phoneNumber, phoneNumbers) {
        const index = phoneNumbers.findIndex((number) => {
            return number === phoneNumber;
        });
        return index + 1;
    }
}
exports.DuplicateChecker = DuplicateChecker;
let duplicates = new DuplicateChecker('files/twoDupsFile.txt');
;
duplicates.getDuplicatesFromFile();
duplicates.printDuplicates();
