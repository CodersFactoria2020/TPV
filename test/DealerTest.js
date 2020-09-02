'use strict'
const expect = require("chai").expect;
let chai = require('chai');
chai.use(require('chai-json'));
const dealer = require("../app/Dealer");


describe('Dealer module', () => {

    describe('"function requesdata"', () => {

        it('should export a function', () => {
            expect(dealer.up).to.be.a('function')
        })

        it('should return a Promise', () => {
            const usersUpResult = dealer.up()
            expect(usersUpResult.then).to.be.a('Function')
            expect(usersUpResult.catch).to.be.a('Function')
        })
    })
})