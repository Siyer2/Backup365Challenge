"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = require("../index");
describe('Get duplicates', function () {
    it('Empty file', function () {
        let duplicates = new index_1.DuplicateChecker('files/emptyFile.txt');
        ;
        chai_1.assert.deepEqual(duplicates.getDuplicatesFromFile(), []);
    });
    it('2 duplicates', function () {
        let duplicates = new index_1.DuplicateChecker('files/twoDupsFile.txt');
        ;
        chai_1.assert.deepEqual(duplicates.getDuplicatesFromFile(), ['48990221', '14630105']);
    });
});
