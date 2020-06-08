const request = require('request');

request({
    url: 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js',
    json: true
}, (err, response, body) => {
    console.log(body)
})