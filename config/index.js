var configValues = require('./config');

module.exports = {
    getDbConnectionString: function () {
        return 'mongodb://' + configValues.uname + ':' +
        configValues.pwd + '@ds147985.mlab.com:47985/mark_test';
    }
};
