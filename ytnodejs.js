// below is my Youtube notes on NodeJS basics
    // my first application in NodeJS on here will be a "ToDo app" ?


function sayHi() {
  console.log("greetings Master. what software selection do you wish for today?");
  console.log(" because studying around the clock is essential");
  console.log("(me) i would like to use 'nodejs', javascript, html  and Atom text editor.");
// keep studying and i'm bound to get a job
alert("this is a basic program for complete newbies/ nothing big");
}
sayHi();


// Global Object: "is seperate from the function code above" FYI .
//its the window(only in browser?) object/w/it i can access "properties" , and "methods" (alert(), scroll, ) etc..
 // example is below


     console.log('i like NodeJS programming');
          // setTimeout: exacutes a function after the amount of time that i set beforehand
          //ex
          setTimeout(function(){
          console.log('6 seconds have passed'); // results will appear in the console
},6000);



// below i am going to run a number every 2 sec in the console
var time = 0;

var timer = setInterval(function(){
  time += 2;// every 2 seconds it updates by two in the console
  console.log(time + ' seconds have passed');// 2 sec have passed
  if (time > 8){ //this makes program only go to 100 or whatever # chosen by me
    clearInterval(timer);
  }
}, 2000);// 2000 miliseconds
    //  cntrl c stops program in its tracks



    //below is " function expression's" notes
var myGoal = function() {
  console.log('you wll be a great programmer if you study a lot');
}
  myGoal();


// below is "Modules" and "Require" : // figure out how to apply this later (when does it apply?)
// as well as an example of a module program (utilities counter?)

    var counter = function(arr) {// i can use this when i want something to be counted "just type module in console"
      return 'there are ' + arr.length + 'elements in this array';
    };

          module.exports = counter;// now accessable outside module? when required

                                           // kyle, cam, christian == 3
    /* now i must console.log it*/      console.log(counter(['kyle', 'cam', 'christian']));  // called it into the above "array"
          // this section is not done yet/(finish these later(all "Modules notes"))

      // below is "Creating a server" :
       var http = require('http');
       var server = http.createServer(function(req, res) {
         console.log('request was made: ' + req.url);


         //this function is used to get a "request, or a response" from the new server
        //  response headers is BELOW


         res.writeHead(200, { 'content-type' : 'Javascript'});
        //this is most likely incorrect syntax
         res.end = console.log("Hack the planet");// headers and res body itself
     });


      server.listen(3000, '127.0.0.1');
       console.log('now listening to above code(port?)');

      // below is "Streams & Buffers" :

    //  "stores data in a certain spot temporarily
    //   for a chunk of data being transfered from one spot-another"

      // buffer is filled w/data , then passed along

  //   can only transfer small bits of data at a time



        //   "streams and buffers" increase performance in the "application"
              //   also to transfer "data" w/streams in "Nodejs"


              // below is "Readable streams" :  " it won't run in the console fyi "
              var http = require('http');
              var fs = require('fs');

              var  myReadStream = fs.createReadStream(_dirname + 'sideproj.js');// or the file i choose, or utf8 ?"readStream" = optional
            /*is this optional? */  var myWriteStream = fs.createWriteStream(_dirname + 'sideproj.js'); // "writeStream " = optional
               myReadStream.on('data' , function(chunk){

                 console.log("the 1st chunk was recieved");
                 console.log(chunk);
              /*is this also optional?*/   myWriteStream.write(chunk);
               });


               // below is "pipes" :
