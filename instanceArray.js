/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
  this.securityQuestionAnswer = securityQuestionAnswer;
}

//Create an Array called 'users' that will store all our instances of User.

var users = ['name', 'email', 'pw', 'securityQuestionAnswer'];


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

var Tyler = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS', 'Honda');
var Cahlan = new User('Cahlan', 'cahlan@devmouna.in', 'iLoveHashtags', 'Toyota');
var Lenny = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup', 'Ford');

console.log('Tyler\'s information is ' + Tyler);
//Console.log all of Tylers information

  //code here

console.log('Lenny\'s information is ' + Lenny);
//Now console.log all of Lennys information

  //code here


//Now create another instance of User using your own information and then add that to your users array.

  //code here

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

  //code here
