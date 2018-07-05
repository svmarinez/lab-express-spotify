var SpotifyWebApi = require('spotify-web-api-node');

// Remember to paste here your credentials
var clientId = 'ca5229943c5341b5bcd9b7455eae2152',
    clientSecret = '8a09a1ba8f5344f39d530a2201d578e2';

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});

const express = require('express');
const app = express();
const hbs = require('hbs');
const morgan = require('morgan');

app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'hbs');

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/layouts/index.hbs');
    res.render('/')
  });

  app.listen(3000, () => {
    console.log('Listening on port 3000!');
  });