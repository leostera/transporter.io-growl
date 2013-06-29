var growl = require('growl');

module.exports = {
  publish: function (data) {
    growl(data.message, data.options);
  }
};