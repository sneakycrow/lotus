// Entry file for enabling ES6 
require('babel-register')({
	presets: ['env']
})

module.exports = require('./server.js');