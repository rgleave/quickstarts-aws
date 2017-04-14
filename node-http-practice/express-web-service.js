// simple web service, using node and express
// note:  must install express first!
//
// to test:   http://localhost:3000/notes


var express = require('express')

// setup basic instance of Express 
var app = express()

// GENERIC ROUTING (all methods in one operation)
//
app.all('/balloon', function (req, res) {
  res.send('You did something with a baloon ...')
})

// SPECIFIC ROUTING by method
// default get route
app.get('/', function (req, res) {
  res.send('Simple routing program.  You can post, put or delete to /notes')
})

// notes route
app.get('/notes', function(req, res) {
  res.json({notes: "This is your notebook. Edit this to start saving your notes!"})
})

// default post route
app.post('/notes', function (req, res) {
  res.send('Got a POST request at /notes')
})

// default put route
app.put('/notes', function (req, res) {
  res.send('Got a PUT request at /notes')
})

// default delete route
app.delete('/notes', function (req, res) {
  res.send('Got a DELETE request at /notes')
})



// MODULAR ROUTING APPROACH
//
app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })

app.listen(3000)