class JollyRoger {
    //--Map flag configuration internally
    constructor(flagConfiguration) {
        this.flags = flagConfiguration
    }

    featureIsEnabled(featureName) {
        return this.flags[featureName];
    }
}

exports.JollyRoger = JollyRoger;