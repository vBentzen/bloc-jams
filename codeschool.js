//kata - 
  function mostFrequentItemCount(collection)
  {
  function modeString(collection)
  {
      if (collection.length == 0)
          return null;

      var modeMap = {},
          maxEl = collection[0],
          maxCount = 1;

      for(var i = 0; i < collection.length; i++)
      {
          var el = collection[i];

          if (modeMap[el] == null)
              modeMap[el] = 1;
          else
              modeMap[el]++;

          if (modeMap[el] > maxCount)
          {
              maxEl = el;
              maxCount = modeMap[el];
          }
          else if (modeMap[el] == maxCount)
          {
              maxEl += '&' + el;
              maxCount = modeMap[el];
          }
      }
      return maxEl;
  }



function mostFrequentItemCount(collection)
{
    if(collection.length == 0)
        return null;
    var mostFrequentItemCountMap = {};
    var maxEl = collection[0], maxCount = 1;
    for(var i = 0; i < collection.length; i++)
    {
        var el = collection[i];
        if(mostFrequentItemCountMap[el] == null)
            mostFrequentItemCountMap[el] = 1;
        else
            mostFrequentItemCountMap[el]++;
        if(mostFrequentItemCountMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = mostFrequentItemCountMap[el];
        }
    }
    return maxCount;
};
// while loops

//1
num = 10
while (num > 0) {
  console.log(num);
  num--;
}

//ROADTRIP Part 2


//1-3 - Every month, the population will multiply by four!
//build a while loop that prints a message for one year’s worth of time.
var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while (monthNumber <= monthsToPrint) {
  numSheep = numSheep * 4;
	console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
  monthNumber++;
}

//For-loop

//1-4 - Create for loop that console.log all numbers from 10 to 1
for (var i = 10; i < 0; i--) {
  console.log(i)
}

//1-6 - Every month, the population will multiply by four!
//build a while loop that prints a message for one year’s worth of time.
numSheep = 4;
monthToPrint = 12;
for (var monthNumber = 1; monthNumber <= monthToPrint; monthNumber++) {
  numSheep*=4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

/* 1-7 design a system of two loops that turns each generator on in progression,
 and prints the new total of megawatts generated. first 4 = 62MW , last 15=124MW.
 they’d like the first loop to be a while loop handling the first 4 generators.
 Then, they’d like the second loop to be a for loop that handles the other 15 generators.
  Each output line should resemble the following lines, with adjusted values for the currentGen and totalMW.
  Example:
  Generator #1 is on, adding 62 MW, for a total of 62 MW!
  Generator #2 is on, adding 62 MW, for a total of 124 MW!*/
var currentGen = 1;
var totalGen = 19;
var totalMW = 0;
var badGenerator = 62;
var goodGenerator = 124;

while (currentGen <= 4) {
  totalMW+=62;
  console.log("Generator #" + currentGen + " is on, adding " + badGenerator +
  " MW, for a total of " + totalMW + " MW!");
  currentGen++;
}

for (var currentGen = 5; currentGen <= totalGen; currentGen++) {
  totalMW+=124;
  console.log("Generator #" + currentGen + " is on, adding " + goodGenerator +
  " MW, for a total of " + totalMW + " MW!");
}

//If else

//2-2 - create if else loop that prints numbers from 10 to 2 in descending order.

var num = 10;

while (num > 0) {
	if (num % 2 === 0) {
	  console.log(num);
	}
  num--;
}

//2-3 - pring message depending on boolean value (true or false )
var parkIsOpen = true;

if (parkIsOpen = true) {
  console.log("Welcome to the Badlands National Park! Try to enjoy your stay.");
}
else {
  console.log("Sorry, the Badlands are particularly bad today. We're closed!");
}


/*2-5 -
for any month the population climbs above 10000, half of the sheep will be sent away to other regions.
create a for loop and use else if to Removes half of the sheep population if the number of sheep rises above 10000.
and Print the number of sheep being removed to the console in the following format:
"Removing <number> sheep from the population."*/

var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (numSheep >= 10000) {
    numSheep/=2;
    console.log("Removing " + numSheep + " sheep from the population.");
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
};

/* 2-7 -
We’ve made a significant difference, but there are still too many sheep for the fragile Death Valley ecosystem.
The Rangers would like you to implement the following new plan for population reduction:
If the month is a multiple of 4, then find 75% of the sheep population. Log that value to the console in the format below.
Then, remove that value from the total number of sheep.
Otherwise, if the population is above 10000, find half of the sheep population.
Log that value to the console in the format below. Then, remove that value from the total number of sheep.
Use this format for logging sheep reduction:
"Removing <number> sheep from the population."
*/

var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (monthNumber % 4 === 0) {
    var removal = numSheep * .75;
    console.log("Removing " + removal + " sheep from the population.");
    numSheep-=removal;
  }

  else if (numSheep > 10000) {
    var removal = numSheep / 2;
    console.log("Removing " + removal + " sheep from the population.");
    numSheep-=removal;
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
};


/* 2-8
create program that shows what happens when only the even numbered turbines are turned on using a for loop.
With a set of complex conditional statements inside the loop, construct a way to only turn on even numbered turbines.
Generators 1 through 4 produce 62 MW.
Generators 5 through 19 produce 124 MW.
The output should follow this format:
Generator #1 is off.
Generator #2 is on, adding 62 MW, for a total of 62 MW!

We’ve given you some starting variables to use in your build. Within your loop, consider the possible scenarios when building your conditions:

The Generator provides 62 MW of power.
The Generator provides 124 MW of power.
The Generator is off.
*/

//1st Example
var totalGen = 19;
var totalMW = 0;
var badGenerator = 62;
var goodGenerator = 124;
var statusGenerator = "off";

for (var i = 1; i <= totalGen; i++) {
  if (i % 2 !== 0) {
    console.log("Generator #" + i + " is off.");
  }
  else if (i <= 4) {
    totalMW+=badGenerator
    console.log("Generator #" + i + " is on, adding " + badGenerator + " MW, for a total of " + totalMW + " MW!");
  }
  else if (i <= totalGen) {
    totalMW+=goodGenerator
    console.log("Generator #" + i + " is on, adding " + goodGenerator + " MW, for a total of " + totalMW + " MW!");
  }
};

//2nd Example
var totalGen = 19;
var totalMW = 0;
var badGenerator = 62;
var goodGenerator = 124;
var statusGenerator = "off";

for (var i = 1; i <= totalGen; i++) {
  if (i <= 4 && i % 2 == 0) {
    totalMW+=badGenerator
    console.log("Generator #" + i + " is on, adding " + badGenerator + " MW, for a total of " + totalMW + " MW!");
  }
  else if (i <= totalGen && i % 2 == 0) {
    totalMW+=goodGenerator
    console.log("Generator #" + i + " is on, adding " + goodGenerator + " MW, for a total of " + totalMW + " MW!");
  }
  else {
    console.log("Generator #" + i + " is off.");
  }
};


/* 3-5
Create a while loop that will continue to execute as long as the user has not entered the correct age.
 Inside the loop, provide a confirmation that the age has been entered correctly:
 "You entered <age>. Is this correct?"
 If that confirmation statement is correct, then set ageIsCorrect to true and alert the following message:
 "Great! Your age is logged as <age>."
 Otherwise, the loop should continue to prompt a user to enter their age and assign that value to the userAge variable:
 "What's your age, user?"
 */


 var userAge = prompt("What's your age, user?");
 var ageIsCorrect = false;

 while (ageIsCorrect == false) {
   if (confirm("You entered " + userAge + ". Is this correct?")) {
     ageIsCorrect = true;
     alert("Great! Your age is logged as " + userAge + ".");
   } else {
     userAge = prompt("What's your age, user?");
   }
 };

 /* 4-2
build a function declaration called multiplyTrio that takes in three parameters.
Inside the function, multiply the numbers together into one product, and return the result.
*/
 function multiplyTrio (a, b, c) {
	return a*b*c;
};

/* 4-4
Build a function declaration called maxOf2 that takes in two numbers and returns the greater value.
Be careful to think about the possibility of equality as well and return one of the numbers. */
//http://www.w3schools.com/jsref/jsref_max.asp
function maxOf2 (a, b) {
	return Math.max(a, b);
}

//Design a function that counts "E's" in a user-entered phrase
function  countE () {
  var phrase = prompt("Which phrase would you like to examine?");
  if (typeof(phrase) != "string" ) {
    alert("That's not a valid entry!");
    return false; // exit function
  } else {

    // create eCount equal to 0 as we dont know the amount of e's in phrase yet
    var eCount = 0
    //going over entire phrase starting at index[0]
    for (var index = 0; index < phrase.length; index++) {
      // Check to see if current index is either an "e" or an "E"
      if (phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E')
      // if the current index is an e or an E, then add it to the eCount
      eCount++;
    }
  }
  alert("There are " + eCount + " E's in \"" + phrase + "\".")
  return true;//exit function
};


/*4-7
Each sheep needs 2 lbs of ranger-provided food per day divided by Rangers
Build a function called feedPerRanger that takes in:
The current population of sheep.
The number of Park Rangers available during the day.
The function should alert the amount of feed that each Park Ranger should be responsible for on that day. The output should match the following format:
"Each Park Ranger should load <number> lbs of feed today." */

function feedPerRanger (numSheep, availRangers) {
  var neededFood = (numSheep * 2) / availRangers;
  alert("Each Park Ranger should load " + neededFood + " lbs of feed today.");
}

/* 4-8
Build a function named changePowerTotal that takes in four parameters:
The total power generated (a number)
The generator ID for the current generator (a number)
The generator status (a string that says "on" or "off")
The amount of power produced by the current generator (a number)
Your function should:
If the current generator is set to "on", then add to the total power generated.
Or if the current generator is set to "off", then remove from the total power generated.
return the total power generated.
alert the technician in the following formats:
For switching on: "Generator #2 is now on, adding 62 MW, for a total of 62 MW!"
For switching off: "Generator #2 is now off, removing 62 MW, for a total of 0 MW!"
*/

function changePowerTotal(total, currentGen, generatorStatus, powerProduced) {
  if (generatorStatus == "on") {
    total+=powerProduced;
    alert("Generator #" + currentGen + " is now " + generatorStatus + ", adding " + powerProduced + " MW, for a total of " + total + " MW!");
  }	else if (generatorStatus == "off") {
    total-=powerProduced;
    alert("Generator #" + currentGen + " is now " + generatorStatus + ", removing " + powerProduced + " MW, for a total of " + total + " MW!");
  }
  return total;
}

// Go over a array with numbers and log index and value
var numberList = [2, 5, 6, 1, 2, 3, 7, 8, 9, 4];
  for (var i = 0; i < numberList.length; i++) {
    console.log("The value in cell " + i " Is " + numberList[i]);
  }

// From array with numbers, count even numbers and erase odd
var numberList = [2, 5, 6, 1, 2, 3, 7, 8, 9, 4];
var evenCount = 0; // setting up starting up that is 0 as we havent started to count
for (var i = 0; i < numberList.length; i++) {
  if (numberList[i] % 2 == 0) {
    evenCount++
  }else {
    numberList[i] = undefined;
  }
}

//Using an array and functions to add a train passengers to a list.
var passengerList = [ ];
function addPassenger (name, list) {
  if (list.length == 0) {
    list.push(name);
  }else {
    for (var i = 0; i < list.length; i++) {
      //If any cells is empty we want to add passenger to first available.
      if (list[i] == undefined) {
        // incase cell is empty, we add name to that cell in list.
        list[i] = name;
        // then we return updated list and exit function
        return list;
        //incase we reach end of list and no open spot, we need to add passenger to end of list.
      } else if (i == list.length - 1) {
        list.push(name);
        return list;
      }
    }
  }
}
//Using an array and functions to delete a train passenger from list
function deletePassenger(name, list) {
  //check and log if list is empty.
  if(list.length == 0) {
    console.log("List is empty!");
  } else {
    // go over list with a for loop
    for (var i = 0; i < list.length; i++) {
      // if the name is on the list, make delete it (make it undefined)
      if(list[i] == name) {
        list[i] == undefined;
        //if job done, - return updated list and exit function
        return list;
        //if passenger cant be found, log so and exit.
      } else if (i == list.length -1) {
        console.log("Passenger not found!");
      }
    }
  }
  //return list and exit function if we cant find passenger or list is empty.
  return list;
}

/* 5-9
Build out the numStrings function using a for loop
that counts all of the strings in the array parameter called list.
Use a for loop to loop through the list array.
if typeof is equal to string, increase cound by 1 and then return the count. */

function numStrings(list) {
  var count = 0; //create count and start at 0

  for (var i = 0; i < list.length; i++) {//go thru list
    if (typeof list[i] === "string") {//if typeof list[i] is === "string"
      count+=1 // then add +1 to count
    }
  }
  return count; //update and return count, then exit function.
}


//ROADTRIP PART 3



// create annonymous function.
var runAway = function() {
  var toAlert = "";
  for (var i = 0; i < 5; i++) {
    toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
  }
  alert(toAlert);
};//We must close the function with ; , as it now runs (abit like local scope?)


/* 1 - 5
return correct message depending on fear level :
For fear levels less than 200 (i.e., fear < 200):
"Fear Level: LOW
Still wanna ride?"
For fear levels from 200 through 300 inclusive (i.e., fear >= 200 && fear <= 300):
"Fear Level: MEDIUM
Think you'll make it?" */
var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  if (fear < 200) {
    return confirm("Fear Level: LOW\n" +"Still wanna ride?");
  } else if (fear >= 200 && fear <= 300) {
    return confirm("Fear Level: MEDIUM\n" + " Think you'll make it?");
  }
};
function confirmRide(confirmToGo) {
  return confirmToGo();
}
// Call confirmRide with the fearMessage function
var startRide = confirmRide(fearMessage);

// build function.map that doubles each cell of an array
var numbers = [12, 4, 3, 5, 1, 2, 3, 8];
//goes over entire numbers, then the anonymous function will take in content
// of each cell and return doubled value to results.
var results = numbers.map(function (arrayCell) {return arrayCell * 2; } );

/* 1 - 9
create array called puzzlers, ea cell of array should contain a function,
and ea function should return a math line that takes in 1 parameter named input
Math formulas :
Returns 3 * input - 8
Returns (input + 2)3
Returns input2 - 9
Returns input % 4  */

//1st Example
var puzzlers = [
function(input) {
  return 3 * input - 8;
},
function(input) {
  return (input + 2) * (input + 2) * (input + 2);
},
function(input) {
  return (input * input) - 9;
},
function(input) {
  return input % 4;
}
];

//2nd e xample

var puzzlers = []; // create empty array
// assign 4 different index 0-3 to the 4 different math ways.
puzzlers[0] = function(input) { return 3 * input - 8; };
puzzlers[1] = function(input) { return (input + 2) * (input + 2) * (input + 2); };
puzzlers[2] = function(input) { return input * input - 9; };
puzzlers[3] = function(input) { return input % 4; };



//Create function that return anonymous functions idepending on userChoice
function adventureSelector(userChoice) {
  if (userChoice == 1) {
    return function () {
      alert("You selected the Vines of Doom!");
    };
  } else if (userChoice == 2) {
    return function () {
      alert("Looks like you want the Lake of Despair!");
    };
  } else {
    return function () {
      alert ("The Caves of Catastrophe!");
    };
  }
};


//1-13
var puzzlers = [
  function (a) { return 8*a - 10; },
  function (a) { return (a-3) * (a-3) * (a-3); },
  function (a) { return a * a + 4; },
  function (a) { return a % 5; }
];
var start = 2;

// build applyAndEmpty function expression here
var applyAndEmpty = function (input, queue) {
  var length = queue.length;
  for (var i = 0; i < length; i++) {
    input = queue.shift()(input);
  }
  return input;
};

alert(applyAndEmpty(start, puzzlers));

/* 2 - 5
Closures to the rescue!

They’ve started a function called warningMaker with a parameter called obstacle.
Within this function, return an anonymous function that displays a specific alert
message based on the specific obstacle encountered. Message format :
"Beware! There have been <obstacle> sightings in the Cove today!" */

function warningMaker(obstacle) {
  return function () {
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}

/* 2 - 6
Build a warning message by passing a "iceberg" obstacle as an argument into the warningMaker function.
Store the results in a new variable called icebergAlert.
Call the icebergAlert function to view the warning message.*/
function warningMaker(obstacle) {
  return function() {
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}
var icebergAlert = warningMaker("iceberg");
icebergAlert();

/* 2-7
pass a specific number and a specific location to the function, and have those values become
part of the alert message for the obstacle being passed into the warningMaker function.*/
function warningMaker(obstacle) {
  return function(number, location) { // set parameters
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " + location + "!"
    );
  };
}

//2-8 finished example of warning messages + called
function warningMaker(obstacle) {
  return function(number, location) {
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!");
  };
}

var killerPenguinAlert = warningMaker("killer penguin");
var polarBearAlert     = warningMaker("polar bear");
var icebergAlert       = warningMaker("iceberg");
var flashBlizzardAlert = warningMaker("flash blizzard");
var snowYetiAlert      = warningMaker("snow yeti");

killerPenguinAlert(6, "Ice Caves");
snowYetiAlert(1, "Blizzard beach");


/* 2- 11
he Dev Girls need you to store each location so that a list of danger zones
for each obstacle can be reported with every new warning.
Inside the warningMaker function:
Store each location in an array called zones.
Add each zone to the list string. */

function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    // push each location into zones array
   zones.push(location);
    // go over all zones startinfr om 0, and add add ea index (i) to our list. + a newline \n
    for (var i = 0; i < zones.length; i++) {
      list+= zones[i] + "\n";
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
           "Current danger zones are:\n" +
          list);
  };
}

/* 2 - 12
We already have a list of danger zones, and now the Dev Girls at the Cove want
you to add a number alongside each of the locations.
Using the zones array, push a sub-array containing both the location and number for each obstacle.
Inside the for loop, access those values from the zones array to add them to the list string.*/
function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    // push an array with location and number
    zones.push([location, number]); // we do [] inside of () to make it a array
    for (var i = 0; i < zones.length; i++) {
      // make it so for ea cell , it grabs the location[0] and nmber [1]
      list += zones[i][0] + " (" + zones[i][1] + ")" + "\n";
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          "Current danger zones are:\n" +
          list);
  };
}

//2-15

function makeTargetAssigner(sharks, targets) {
  // insert your code here
  return function (shark) {
    for ( var i = 0; i < sharks.length; i++) {
      if (sharks[i] == shark) {
         alert("Hey, " + shark + "!\n" +
              "There've been " + targets[i] +
              " sightings in our area!\n" +
              "Time to take care of business!");
      }
    }
  };
}
var getTargetFor = makeTargetAssigner(listOfSharks,
                                      listOfTargets);
getTargetFor("Ice Teeth");

/* 4 - 2
In the order listed, build three object literals
Within each object literal, create properties for type, capacity, and storedAt format:
Motorboat, 6, Ammunition Depot
Jet Ski, 1, Reef Dock
Submarine, 8, Underwater Outpost */
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: ["Ammunition Depot"] };
var vehicle2 = {type: ["Jet Ski"], capacity: 1, storedAt: ["Reef Dock"] };
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: ["Underwater Outpost"] };

/* 4 - 4
build a findVehicle function that will accept a vehicle name and list of vehicle objects,
and return the current storage location of the requested vehicle.

Put all the vehicle objects in a vehicles array. Use the array literal syntax and pass in each of the vehicle variable names.
Build a function expression assigned to a findVehicle variable,
which accepts name and list parameters for the name of the individual vehicle sought and the full array of vehicles.
Inside the findVehicle function, use a for loop to loop through all of the vehicles.
if the type of the current object in the list matches the name parameter, then return the current object’s storedAt location.
Call the findVehicle function and pass in the correct arguments to find the storage location of the "Submarine". */

var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// create vehicles array
var vehicles = [vehicle1, vehicle2, vehicle3];

// build findVehicle function expression
var findVehicle = function(name, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i].type == name) {
    	return list[i].storedAt;
    }
  }
};

// call findVehicle
findVehicle("Submarine", vehicles);


// add more properties to vehicles
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

vehicle1.capacity += 4;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity *= 2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true;

// add properties and assign values
vehicle1["# of weapons"] = 1;
vehicle2["# of weapons"] = 4;
vehicle3["# of weapons"] = 8;

/* 4 - 8
Goal is: complete the addRanger function that takes in location, name, skillz, and station
as parameters. Then we can pass in our lighthouseRock object as the location and start to add rangers.

As rangers are added, increment the number of rangers at the location using its numRangers property.

Add a property to the location using bracket notation that will be used to hold a
ranger object. Specifically, each property will be named ranger1, ranger2, ranger3, etc.
This will require string concatenation and the current value of the numRangers property.

Now that you have your ranger<number> property, assign an object literal to it that
contains properties for name, skillz, and station. Then assign values to those
properties using the parameters that we pass in.

Call your addRanger function three times with the appropriate arguments to
add the following rangers, in order, to the location: */

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 0
};

function addRanger(location, name, skillz, station) {
  // increment the number of rangers property
location.numRangers++;
  // add the ranger<number> property and assign a ranger object
  location["ranger" + location.numRangers] = {
//add object literal x3
    name: name,
    skillz: skillz,
    station: station
  };

}
// call addRanger three times to add the new rangers
addRanger(lighthouseRock, "nick Walsh", "magnification burn", 2);
addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);


//4 - 9

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location) {
  var list = "Avast, me hearties!\n" +
             "There be Pirates nearby! Stations!\n";

  for (var i = 1; i <= location.numRangers; i++) {
    var ranger = location["ranger"+i];
    var name = ranger.name;
    var superblinder = location.weaponBulbs[ranger.station-1][0];
    list += name + ", man the " + superblinder + "!\n";
  }

  alert(list);
}

// add critter to aquarium with this
var aquarium = {
Nemo: { type: "fish", species: "clownfish", length: 3.7 },
Marlin: { type: "fish", species: "clownfish", length: 4.1 },
Dory: { type: "fish", species: "blue tang", length: 6.2 },
Peach: { type: "echinoderm", species: "starfish", length: 5.3 },
"Coral Castle": { type: "environment", material: "coquina", moves: false },
"Dragon Statue": { type: "environment", material: "plastic", moves: false }

  function addCritter( container, name, type, species, length ){
    container[name] = {type: type, species: species, length: length};
  }
  addCritter: function ( name, type, species, length ){
    this[name] = {type: type, species: species, length: length};
  }//When called with this, addCritter says: Hey, aquarium! Make a new
  //property called name and assign to it a new Object with these properties!

}

// take out / delete something ( in this case from aquarium(aquairum.takeOut))
aquarium.takeOut = function ( name ) {
// as name will be "lost", we target the current object fish name, and creates
// a new name quals to the name in the object we look for.
this[name].name = name;
//make sure the object is reachable again and doesnt just dissapear for forever
// by assigning it to a new variable named temp
var temp = this[name];
//then we delete the targeted takeOut
delete this[name];
// and returns the temp ( the removed object that is now stored in temp)
return temp;
};

/* we can call a function prototype to count mulitple vars at once */
alert(canyonCows.countCattle("calf") + (valleyCows.countCattle("bull") +  (forestCows.countCattle("cow"));


/* Create a new variable and call a function on ea array list within the variable.*/
var numPriorityCows = canyonCows.countForBreeding() +
                      valleyCows.countForBreeding() +
                      forestCows.countForBreeding() +
                      badlandsCows.countForBreeding();
// call it

alert("Herd-merger has indicated " + numPriorityCows + " cows of top breeding priority.");


/* 5 - 7 */
var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function(connectedPost) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};

// create post1 and post2
var post1 = Object.create(genericPost);
var post2 = Object.create(genericPost);
// set where post should go(cordinates)
post1.x = -2;
post1.y = 4;
post2.x = 5;
post2.y = 1;
// modify the post properties
post1.postNum = 1;
post2.postNum = 2;
// connects them
post1.sendRopeTo(post2);
post2.sendRopeTo(post1);


/* 5 - 8

x: 0,
y: -3,
postNum: 8,
connectionsTo: 10

x: 6,
y: 8,
postNum: 9,
connectionsTo: 10

x: -2,
y: 3,
postNum: 10,
connectionsTo: 8, 9

Use Object.create and pass in genericPost as a prototype to create the new fence posts
listed above, and assign them to post8, post9, and post10 variables that match their respective postNum property.
After the posts have been created, use dot notation to assign all of the property values
listed above. You can use x, y, and postNum properties to set the values for each post.
Then use the sendRopeTo method to make the connections between posts.
Now we can add new properties for special fence posts. Posts with an even-numbered y coordinate
have a birdhouse, and therefore have a numBirds property initially set to 0.
Posts that are connected to post9, but are not post9, have a property of weathervane initially set to "N".
Posts with an even-numbered postNum have emergency lights, and therefore have a lightsOn property initially set to false.
*/

var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function(connectedPost) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};

// create post8, post9, and post10
var post8 = Object.create(genericPost);
var post9 = Object.create(genericPost);
var post10 = Object.create(genericPost);

// assign property values and make connections
post8.x = 0;
post8.y = -3;
post9.x = 6;
post9.y = 8;
post10.x = -2;
post10.y = 3;

post8.postNum = 8;
post9.postNum = 9;
post10.postNum = 10;

post8.sendRopeTo(post10);
post9.sendRopeTo(post10);
post10.sendRopeTo(post8, post9);


post9.numBirds = 0;
post10.weathervane = "N";
post8.lightsOn = false;
post10.lightsOn = false;


/* 5 - 9 */
function Fencepost (x, y, postNum) {
	this.x = x;
	this.y = y;
  this.postNum = postNum;
  this.connectionsTo= [];
  this.sendRopeTo = function (connectedPost) {
  	this.connectionsTo.push(connectedPost);
  };
}
