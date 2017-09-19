/* eslint-env node, mocha */
/* global expect*/

import * as Utils from '../src/policy-helpers';

describe('Test-merge-example-policy', function () {
    'use strict';

    let variable;

    before(function () {

    });

    beforeEach(function () {
        variable = '';
    });

    afterEach(function () {

    });


    it('should be able to extract Chuck quotes', function () {

        // Given
        let quote = 'fake quote';
        let response = {
            body : {
                value : quote
            }
        };

        // When
        let q = Utils.extractChuckQuote(response);

        // Then
        expect(q).to.equal(quote);
    });

});
