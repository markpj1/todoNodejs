var configValues = require('./config');

module.exports = {
    getDbConnectionString: function () {
        return 'mongodb://' + configValues.uname + ':' +
        configValues.pwd + '@ds153765.mlab.com:53765/mark_test' 
    }
}
