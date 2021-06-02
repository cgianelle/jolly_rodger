class JollyRoger {
  // --Map flag configuration internally
  constructor (flagConfiguration = {}) {
    this.featureFlags = JSON.parse(JSON.stringify(flagConfiguration))
  }

  // --If featureName is not found in the map, then it will return undefined
  isFeatureEnabled (featureName) {
    return this.featureFlags[featureName]
  }

  setFeature (featureName, isFeatureEnabled) {
    this.featureFlags[featureName] = isFeatureEnabled
  }

  removeFeature (featureName) {
    return featureName in this.featureFlags ? delete this.featureFlags[featureName] : false
  }
}

exports.JollyRoger = JollyRoger
