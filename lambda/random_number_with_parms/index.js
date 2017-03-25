// this lambda function expects to receive a json document in the following format:
// {
//   "min": 1,
//   "max": 100
// }

'use strict';

console.log('Loading this new function that supports a query string');

exports.handler = (event, context, callback) => {
    let min = parseInt(event.min);    // passed in as parameter within url query string
    let max = parseInt(event.max);   // passed in 
    
    let generatedNumber = Math.floor(Math.random() * max) + min;
    

    callback(null, generatedNumber);  
   
};