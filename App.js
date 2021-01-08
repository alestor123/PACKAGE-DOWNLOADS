var axios = require('axios');
module.exports = async name =>{
if(!name) throw Error('Name not found')
var year = await axios.get(`https://api.npmjs.org/downloads/point/last-year/${name}`)
var week = await axios.get(`https://api.npmjs.org/downloads/point/last-week/${name}`)
var day = await axios.get(`https://api.npmjs.org/downloads/point/last-day/${name}`)
return {
yesterday:day.data.downloads,
lastweek:week.data.downloads,
lastyear:year.data.downloads
}
}