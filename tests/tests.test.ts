import { assert } from 'chai';
import {
    DuplicateChecker
} from '../index';

describe('Get duplicates', function () {
    it('Empty file', function () {
        let duplicates = new DuplicateChecker('files/emptyFile.txt');;
        assert.deepEqual(
            duplicates.getDuplicatesFromFile(), 
            []
        );
    });
    it('2 duplicates', function () {
        let duplicates = new DuplicateChecker('files/twoDupsFile.txt');;
        assert.deepEqual(
            duplicates.getDuplicatesFromFile(), 
            ['48990221', '14630105']
        );
    });
});