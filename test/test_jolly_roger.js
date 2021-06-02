/* eslint-disable no-unused-expressions */
const { JollyRoger } = require('../index')
const { expect } = require('chai')

describe('Jolly Roger Feature Flag Tests', () => {
  it('Should create the JollyRoger class and validate ', () => {
    const theJollyRoger = new JollyRoger({ test: false, test2: true })
    expect(theJollyRoger.isFeatureEnabled('test')).to.be.false
    expect(theJollyRoger.isFeatureEnabled('test2')).to.be.true
  })

  it('What will happen if I forget to pass in a config block?', () => {
    const theJollyRoger = new JollyRoger()
    expect(theJollyRoger.isFeatureEnabled('test')).to.be.undefined
  })

  it('What will happen if I pass something other than a map into the class?', () => {
    const theJollyRoger = new JollyRoger('A String')
    expect(theJollyRoger.isFeatureEnabled('test')).to.be.undefined
  })

  it('Should not find anything when asked for a feature that has not been registered', () => {
    const theJollyRoger = new JollyRoger({})
    expect(theJollyRoger.isFeatureEnabled('test')).to.be.undefined
  })

  it('The value of a flag should be consistent with the value it had when creating an instance', () => {
    const config = { test: false }
    const theJollyRoger = new JollyRoger(config)
    config.test = true

    // --what will jolly roger say is the state of test?
    expect(theJollyRoger.isFeatureEnabled('test')).to.be.false
  })

  it('Should change the assigned value of a feature flag', () => {
    const theJollyRoger = new JollyRoger({ test: false, test2: true })
    theJollyRoger.setFeature('test', true)
    theJollyRoger.setFeature('test2', false)

    expect(theJollyRoger.isFeatureEnabled('test')).to.be.true
    expect(theJollyRoger.isFeatureEnabled('test2')).to.be.false
  })

  it('Should add a new feature and set its value', () => {
    const theJollyRoger = new JollyRoger({ test: false, test2: true })
    theJollyRoger.setFeature('test3', true)
    expect(theJollyRoger.isFeatureEnabled('test3')).to.be.true
  })

  it('Should remove a feature', () => {
    const theJollyRoger = new JollyRoger({ test: false, test2: true })
    expect(theJollyRoger.removeFeature('test')).to.be.true
    expect(theJollyRoger.isFeatureEnabled('test')).to.be.undefined
  })

  it('Should be able to remove a feature and not affect any other features', () => {
    const theJollyRoger = new JollyRoger({ test: false, test2: true })
    expect(theJollyRoger.removeFeature('test')).to.be.true
    expect(theJollyRoger.isFeatureEnabled('test2')).to.be.true
  })

  it('Should not be able to delete anything if it does not exist', () => {
    const theJollyRoger = new JollyRoger({ test: false, test2: true })
    expect(theJollyRoger.removeFeature('test3')).to.be.false
  })
})
