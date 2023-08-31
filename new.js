const request = require('request');

const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log(response.statusCode);
  }
});
