#!/usr/bin/env node
var pkd = require('./App');

(async () => {
var data = await pkd(process.argv[2] || 'github');
console.log('\n Last Day : ' + data.yesterday + ' Downloads \n '+ '\n Last Week : ' + data.lastweek + ' Downloads \n ' + '\n Last Year : ' + data.lastyear + ' Downloads \n ')
})();
