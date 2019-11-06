"use strict";
/* global describe */
/* global it */
/* global assert */
/* global Employee */
/* global nameComparator */

describe("nameComparator", function() {
    it("Compares Employees by name", function() {
        assert.equal(employees.sort(nameComparator)[0].name,"Dave" );
        assert.equal(employees.sort(nameComparator)[1].name,"George");
        assert.equal(employees.sort(nameComparator)[2].name,"Richard" );
    });

    it("Compares Employees by Salary", function(){
        assert.equal(employees.sort(salaryComparator)[0].name,"Dave" );
        assert.equal(employees.sort(salaryComparator)[1].name,"Richard");
        assert.equal(employees.sort(salaryComparator)[2].name,"George");
    });

    it("Compares Employees by Hire Date", function(){
        assert.equal(employees.sort(hireDateComparator)[0].name,"George" );
        assert.equal(employees.sort(hireDateComparator)[1].name,"Dave");
        assert.equal(employees.sort(hireDateComparator)[2].name,"Richard");
    });


});