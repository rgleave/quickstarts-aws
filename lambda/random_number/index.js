// this lambda function can be called from API gateway without passing any parameters
'use strict';

console.log('Loading this super cool function');

exports.handler = (event, context, callback) => {
    let min = 1;    
    let max = 10;   
    
    let generatedNumber = Math.floor(Math.random() * max) + min;
    

    callback(null, generatedNumber);  
   
};