String.prototype.toJadenCase = function () {
  var str = this.toString(); // make input a string
  var word = str.toLowerCase().split(" "); // split the string into array of words(a,b,c) and make it all lowercase to start with
  var result = ''; // create empty string for end result

  for (var i = 0; i < word.length; i++) { // go over all words.
    var letters = word[i].split(''); // split each word into letters.
    letters[0] = letters[0].toUpperCase(); // make first letter of ea word (words[i]) uppercase
    word[i] = letters.join(""); // when done join together letters to word again.
  }
  result = word.join(' '); // then make our result equal to our words joined together now as uppercase
  return result; // and end by returning the output
};


function transposeTwoStrings(arr){
  var str = this.toString();
  var word = str.split(" ");
  var result = '';

  for (var i = 0; i < word.length; i++) {
    var letters = word[i].split('');
    
  }
};



function fizzBuzzCustom(stringOne = 'fizz', stringTwo = 'buzz', numOne = 5, numTwo = 3) { //create function with default arg
  var array = []; // create empty array

  for (var i = 1; i <= 100; i++) {


    if (i % numOne === 0) {
      array.push(stringOne); // if divisible by 3, remove the number, and insert Fizz
    }else if (i % numTwo === 0) {
      array.push(stringTwo); // if divisible by 5, remove number at index of 0 ( do -1 as index start at 0) then add buzz
    }else if (i % numOne === 0 && i % numTwo === 0) {
    array.push(stringTwo);// if divisible by 3 and 5, add fizzbuzz
    }else { array.push(i); } //push number to array
    }};



    function fizzBuzzCustom(stringOne = 'fizz', stringTwo = 'buzz', numOne = 5, numTwo = 3) { //create function with default arg

for (var index = 1; index <= 100; index++) {
    switch (true) {

        case (index % numTwo === 0 && index % numOne === 0):
            console.log (stringOne + stringTwo);
            break;
      case (index % numOne === 0):
            console.log  (stringOne);
            break;
      case (index % numTwo === 0):
          console.log  (stringTwo);
          break;

        default:
            console.log(index);
            break;
    }
}
    };


    function fizzBuzzCustom(stringOne = 'fizz', stringTwo = 'buzz', numOne = 5, numTwo = 3) { //create function with default arg

for (var index = 1; index <= 100; index++) {

        if (index % numTwo === 0 && index % numOne === 0){
            console.log (stringOne + stringTwo);

        } else if (index % numOne === 0) {
            console.log  (stringOne);

        }else if (index % numTwo === 0) {
          console.log  (stringTwo);

        } else {
            console.log(index);
        }
    }
    };



function minFunc(stringOne, stringTwo, numOne, numTwo) {
  var array [];
}
minFunc()[15] // skal returne 16 for os


function makePerson(name2, age2) {
  var name = name2;
  var age = age2;

  return {
    name: name,
    age: age
  };
};
makePerson("aske", 12) // returner Object {name: "aske", age: 12}


function fizzBuzzCustom(stringOne = 'fizz', stringTwo = 'buzz', numOne = 3, numTwo = 5) {//create function with default arg


for (var i=1; i <= 100; i++)
{
    if ((i-1) % numOne === 0 && i % numTwo === 0)
        console.log(stringOne + stringTwo);
   else if ((i-1) % numTwo === 0)
        console.log(stringOne);
    else if ((i-1) % numOne == 0)
        console.log(stringTwo);
    else
        console.log(i);
}
};



function makeGamePlayer(stringOne = 'fizz', stringTwo = 'buzz', numOne = 3, numTwo = 5) {
  // Define desired object
  var obj = {
    name:  name,
    totalScore: totalScore,
    gamesPlayed: gamesPlayed
  };
  // Return it
  return obj;
}


function fizzBuzzCustom(stringOne = 'fizz', stringTwo = 'buzz', numOne = 3, numTwo = 5) {//create function with default arg
var array = []; // create empty array

    for (var i = 1; i <= 100; i++) {
        array.push(i);//push number to array

        if ((i-1) % numOne === 0) {
          array.push(stringOne);
        }

        if ((i-1) % numTwo === 0) {
          array.push(stringTwo);
        }
        if ((i-1) % numOne && (i-1) % numTwo === 0) {
          array.push(stringOne + stringTwo);
        }
    }

    console.log(array); // print the array when done.
};



function Fizzbuzz(fizz, buzz, 3, 5){
  fizzBuzzCustom()[15]                         // returns 16 < does this mean it should count as index, or ?
fizzBuzzCustom()[44]                         // returns "FizzBuzz" (45 is divisible by 3 and 5)
fizzBuzzCustom('Hey', 'There')[25]         // returns 26
fizzBuzzCustom('Hey', 'There')[11]         // returns "Hey" (12 is divisible by 3)
fizzBuzzCustom("What's ", "up?", 3, 7)[80] // returns "What's " (81 is divisible by 3)
}


function jadenString() {
  for (var i = 0; i < string.length; i++) {
    //for every first letter in each word, go uppercase
  }
}

//example list = [1, 2, 3, 4, 1, 1, 1]
if(collection == null) {
    alert("Please insert valid list")};


function mostFrequentItemCount(collection) {
var count = 0; // set initial count
var maxCount = 0; // set initial maxCount
for (var i = 0; i < collection.length; i++) {//go over entire list
  for (var o = i; o < collection.length; o++) {//make counter to go over list starting from i index
    if (collection[o] == collection[i]) {//if o == j increase our count.
      count++;
    }
  }
  if (count > maxCount) { //if count is bigger than our maxCount, go make our maxCount = count
    maxCount = count;
  }
  count = 0; // reset count after ea number in list.
}
return maxCount; // return maxCount when done.
};


function createPhoneNumber(number){
    var st = number.toString();
    for (var i =0; i < st.length; i++) {
        if(st[i] === 0) {
            st[i] = "(" + st[i];
        } else if (st[i] == 3)//add one as we now got another index from 0=( {
          st[i] += ")";
        } else if (st[i] == 8) {//+2 to index
          st[i] += "-";
        } else
    }
    return st;
}



function createPhoneNumber(number){
var str = num.toString();
var result = [];

for(var i=0; i<str.length; i++)
  {
    if((str[i] === 0))
     {
      result.push('(', str[i]);
    } else if ((str[i] === 2)) {
      result.push(')'), str[i]);
    } else if ((str[i] === 5)) {
      result.push('-'), str[i]);
    }
    else
     {
      result.push(str[i]);
     }
  };
