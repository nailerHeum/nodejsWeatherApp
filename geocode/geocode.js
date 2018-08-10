const request = require('request');
const weather = require('../weather/weather.js');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
    }, (error, response, body) => {
      if (error) {
      callback('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unalbe to find the address');
    } else if (body.status === 'OK') {
      var lat = body.results[0].geometry.location.lat;
      var lng = body.results[0].geometry.location.lng;
      callback(undefined, {
        address : body.results[0].formatted_address,
        latitude : body.results[0].geometry.location.lat,
        longitude : body.results[0].geometry.location.lng
      }, weather.getWeather(lat, lng));
    } else {
      console.log(body.status);
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;
