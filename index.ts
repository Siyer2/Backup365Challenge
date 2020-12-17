import * as fs from 'fs';

class DuplicateChecker {
    initialPhoneNumbers: string[];
    uniquePhoneNumbers?: string[];

    constructor(fileName: string) {
        const phoneNumbers = Array.from(fs.readFileSync(fileName, 'utf8').toString().split('\n'));
        this.initialPhoneNumbers = phoneNumbers;
    }
    
    /**
     * Returns an array of duplicates
     * @returns array of duplicates
     */
    getDuplicatesFromFile(): string[] {
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
    private getDuplicates(phoneNumbers: string[]): string[] {
        return phoneNumbers.filter((e, i, a) => a.indexOf(e) !== i);
    }

    /**
     * Return the line number of phoneNumber in phoneNumbers
     * @param phoneNumber - The number to check
     * @param phoneNumbers - The numbers to check against
     */
    private getLineNumber(phoneNumber: string, phoneNumbers: string[]): number {
        const index = phoneNumbers.findIndex((number) => {
            return number === phoneNumber
        });

        return index + 1;
    }
}

let duplicates = new DuplicateChecker('files/twoDupsFile.txt');;
duplicates.getDuplicatesFromFile();
duplicates.printDuplicates();

export {
    DuplicateChecker
}