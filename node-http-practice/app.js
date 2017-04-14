var request=require("request");
request.get("http://codeforgeek.com",function(error,response,body){
           if(error){
                 console.log(error);
           }else{
                 console.log(response);
         }
});