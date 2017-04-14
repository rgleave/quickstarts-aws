console.log('starting function')
exports.handler = function(e, ctx, callback) {

  var api_key = process.env.apiKey;
  var domain = process.env.domain;
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  var data = {
    from: 'Lambda <lambda@test.com>',
    to: 'robertjaygleave@gmail.com',
    subject: 'Hello',
    text: 'This e-mail was send by Lambda on a defined schedule.'
  };

  mailgun.messages().send(data, function (error, body) {
    callback(error, body);
  });  
}