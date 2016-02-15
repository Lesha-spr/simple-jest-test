var someRequire = require('./someRequire.js');

module.exports = {
    someMethod: function(someArg) {
        return !!someArg;
    },

    someCompositeMethod: function(someArg) {
        return someRequire(someArg);
    }
};