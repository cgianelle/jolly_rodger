const {JollyRoger} = require('../index');
const {expect, assert} = require('chai');

describe('Jolly Roger Feature Flag Tests', ()=> {
    it('Should create the JollyRoger class and validate ', ()=> {
        const theJollyRoger = new JollyRoger({'test': false, 'test2': true});
        expect(theJollyRoger.featureIsEnabled('test')).to.be.false;
        expect(theJollyRoger.featureIsEnabled('test2')).to.be.true;
    });
});