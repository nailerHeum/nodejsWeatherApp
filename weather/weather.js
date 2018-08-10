const request = require('request');

var getWeather = (lat, lng) => {request({
  url: `https://api.darksky.net/forecast/390814fc5c1036bb028af2c10ce62316/${lat},${lng}`,
  json: true
  }, (error, response, body) => {
    if (error){
      console.log('Unable to connect the dark sky server.')
    } else if (response.statusCode === 400){
      console.log('Unable to fetch weather');
    } else if (response.statusCode === 200){
      console.log(body.currently.temperature);
    }
  });
};

module.exports.getWeather = getWeather;