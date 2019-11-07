"use strict";
/* global describe */
/* global it */
/* global assert */
/* global checkForSum */

describe("checkForSum function", function() {
    it("correctly sees when a sum can be found", function() {
        assert.deepEqual(checkForSum([3, 5, 8, 4], 9),[5,4]);
    });
    it("correctly sees when a sum cannot be found", function() {
        assert.deepEqual(checkForSum([3, 5, 8, 4], 15), []);
    });

});