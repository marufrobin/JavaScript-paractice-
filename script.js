/***************************************
 * Variable and Data types
 */

/*
console.log("Hello World! from the script.");
// String variable
var firstName ='Maruf';
console.log(firstName);

var lastName = 'Robin';
console.log(lastName);

// Number variable
var age = '23';
console.log(firstName+' '+lastName+' '+' is '+age+' Years old.')

//boolean 
var isAlive = true;
console.log('Is '+firstName+' '+lastName+' alive: '+isAlive);

var job =null ;
console.log(job);
*/

/***************************************
 * Variable mutation and tyope coercion
 */
/*
var firstName ='Maruf';

var lastName = 'Robin';

var age = '23';
// type coercion
console.log(firstName+' '+lastName+' '+' is '+age+' Years old.')

var job, isMarrid;
job = 'Engineer';
isMarrid = false;
console.log(firstName+' '+lastName+' is a'+age+' years old '+job+'. Is he Married? '+isMarrid);

// Varivable mutation
age = 'twenty three';
job = 'Drive';

alert(firstName+' '+lastName+' is a'+age+' years old '+job+'. Is he Married? '+isMarrid);

lastName = prompt('what is your last name: ');
alert(firstName+' '+lastName);
*/

/***************************************
 * Basic operators
 */
/*
 //Math
var biggerNumber, firstNumber, lastNumber;

firstNumber = 2020;
lastNumber = 20;

console.log(firstNumber + lastNumber);
console.log(firstNumber - lastNumber);
console.log(firstNumber / lastNumber);
console.log(firstNumber * lastNumber);

//Logical Operators
biggerNumber = firstNumber > lastNumber;
console.log(biggerNumber);

//typeof operator
console.log(typeof biggerNumber);
console.log(typeof firsNumber);
console.log(typeof lastNumber);
var x;
console.log(typeof x);
*/

/***************************************
 * Operator Precedence
 */
//Multiple Operators
/*
var now= 2020;
var yearJhon= 1989;
var adultAge = 18;

var isAdultAge = now - yearJhon >= adultAge;
console.log(isAdultAge);
//Grouping
var ageJhon = now - yearJhon;
var ageMark = 35;
var avrage = (ageJhon + ageMark) / 2;
console.log(avrage);

//Multiple Assignment 
var x ,y;
//Assignment operators work right to left 
//means first y=26 and then x= 26 (beacuse x=y=26)
x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 //32 - 6 = 26
console.log(x , y);

x = x * 2;
x *= 2;
console.log(x);

x = x + 1;
x += 1;
x++;
x--;
*/
/***************************************
 * challenge -- 1
 */

/*
var massMark, massjhon, markHight, jhonHight;

massMark = prompt('Mark Mass(kg): ');
markHight = prompt('Mark height(meters):');

massjhon = prompt('Jhon Mass(kg): ');
jhonHight = prompt('Jhon Height(meters): ');

var jhonBMI = massjhon / (jhonHight * jhonHight); 
console.log('Jhon BMI: '+jhonBMI);

var markBMI = massMark / (markHight * markHight);
console.log('Mark BMI: '+ markBMI);

console.log("Is Mark's BMI higher than Jhon's BMI? ");
console.log(markBMI > jhonBMI);
*/

/***************************************
 * if else Operator
 */
/*
var massMark, massjhon, markHight, jhonHight;

massMark = prompt('Mark Mass(kg): ');
markHight = prompt('Mark height(meters):');

massjhon = prompt('Jhon Mass(kg): ');
jhonHight = prompt('Jhon Height(meters): ');

var jhonBMI = massjhon / (jhonHight * jhonHight); 
console.log('Jhon BMI: '+jhonBMI);

var markBMI = massMark / (markHight * markHight);
console.log('Mark BMI: '+ markBMI);

if (markBMI > jhonBMI) {
    console.log("Mark's BMI is higher than Jhon's");
} else if(jhonBMI > markBMI) {
    console.log("Jhon's BMI is higher than Mark's");
}else{
    console.log("Mark's BMI and Jhon's BMI are Equal.");
}
*/
/***************************************
 * Ternary Operator and Switch Statements
 */

//  var firstName = 'Robin';
//  var age = 15;

//  //Boolean ? if part  : else part
//  age >= 18 ? console.log(firstName+ ' Drinks beer.'): console.log(firstName+ 'Drinks Juice.');

/***************************************
 * Coding Challenge -2
 */
/*
//Jhon Team Score
var jhonTeamAverageScore ,jhonMatch1, jhonMatch2, jhonMatch3;

jhonMatch1 = parseInt(prompt('Match-1 for Jhon Team:'));
jhonMatch2 = parseInt(prompt('Match-2 for Jhon Team:'));
jhonMatch3 = parseInt(prompt('Match-3 for Jhon Team:'));

jhonTeamAverageScore = (jhonMatch1 + jhonMatch2 + jhonMatch3) / 3;


//Mike Team Score
var mikeTeamAverageScore ,mikeMatch1, mikeMatch2, mikeMatch3;

mikeMatch1 = parseInt(prompt('Match-1 for Mike Team:'));
mikeMatch2 = parseInt(prompt('Match-2 for Mike Team:'));
mikeMatch3 = parseInt(prompt('Match-3 for Mike Team:'));

mikeTeamAverageScore = (mikeMatch1 + mikeMatch2 + mikeMatch3) / 3;

//Mary Team Score
var maryTeamAverageScore ,maryMatch1, maryMatch2, maryMatch3;

maryMatch1 = parseInt(prompt('Match-1 for Mary Team:'));
maryMatch2 = parseInt(prompt('Match-2 for Mary Team:'));
maryMatch3 = parseInt(prompt('Match-3 for Mary Team:'));

maryTeamAverageScore = (maryMatch1 + maryMatch2 + maryMatch3) / 3;

console.log("Jhon's Team Average Score: "+jhonTeamAverageScore);

console.log("Mike's Team Average Score: "+mikeTeamAverageScore);

console.log("Mary's Team Average Score: "+maryTeamAverageScore);

if (jhonTeamAverageScore > mikeTeamAverageScore && jhonTeamAverageScore > maryTeamAverageScore) {
    console.log("Jhon's Team Wins with Average Score: "+jhonTeamAverageScore);
} else if(mikeTeamAverageScore > jhonTeamAverageScore && mikeTeamAverageScore > maryTeamAverageScore){
    console.log("Mike's Team Wins with Average Score: "+mikeTeamAverageScore);
}else if(maryTeamAverageScore > jhonTeamAverageScore && maryTeamAverageScore > mikeTeamAverageScore){
    console.log("Mary's Team Wins with Average Score: "+maryTeamAverageScore);    
}else{
    console.log("Jhon , Mike , Mary's Team Score Same.");
}
*/
/***************************************
 * Functions
 */
/*
function calculateAge(birthYear) {
    return 2020 - birthYear;
}
// var ageJhon = calculateAge(prompt('Birth Year.'));
// console.log(ageJhon);

function yearUntillRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
      console.log(firstName+ ' retires in '+retirement+' years.');
    } else {
        console.log(firstName+' already retired.');
    }
}

yearUntillRetirement(prompt('Birth Year: '), prompt('First Name: '));
yearUntillRetirement(prompt('Birth Year: '), prompt('First Name: '));
yearUntillRetirement(prompt('Birth Year: '), prompt('First Name: '));
*/

/***************************************
 * Functions Statements and Expressions
 */
/**
//Function decalaretion

function whatYouDO(job, firstName) {
    return firstName+ 'profession is '+job;
}

//Function expression
var whatYouDo = function (job, firstName) {
    return firstName + ' profession is ' + job;
}

console.log(whatYouDo('Developer', 'Maruf'));
*/
/***************************************
 * Array
 */
/*
//intitalize new array
var nnam = ['Robin', 'Maruf', 'Ahmed'];
console.log(nnam);
console.log(nnam.length);
//Mutate array data
nnam[0] = 'Maruf';
nnam[1] = 'Ahmed';
nnam[2] = 'Robin';
nnam[nnam.length] = 'Bapare';
console.log(nnam);
//Different data type 
var jhon = ['Maruf', 'Robin', 1997, 'Developer', false]
jhon.push('Blue');
jhon.unshift('Mr.')
console.log(jhon);
jhon.pop();
console.log(jhon);
jhon.shift();
console.log(jhon);
console.log(jhon.indexOf(1997));\
*/
/***************************************
 * Coding Challenge - 3
 */
/*
function calculateTip(bill) {
    if (bill <= 50) {
        return tip = bill * 0.2;
    } else if(bill >50 && bill < 200){
        return tip = bill * 0.15;
    }else{
        return tip = bill * 0.1;
    }
}
var bill1, bill2, bill3;
bill1 = parseInt(prompt('Bill form resturent 1: '));

bill2 = parseInt(prompt('Bill form resturent 2: '));

bill3 = parseInt(prompt('Bill form resturent 3: '));

var tip1, tip2, tip3;

tip1 = calculateTip(bill1);
tip2 = calculateTip(bill2);
tip3 = calculateTip(bill3);

var allTip = [tip1, tip2, tip3];
console.log(allTip);
var totalBill1 = tip1 + bill1;
var totalBill2 = tip2 + bill2;
var totalBill3 = tip3 + bill3;
var totalTip = [totalBill1, totalBill2, totalBill3];
console.log(totalTip)
*/
/***************************************
 * Objects and porperties
 */

/*
//Object literal

var jhon = {
    firstName: 'Robin',
    lastName: 'Maruf',
    birthYear: 1997,
    family: ['muzib','rashida','tina'],
    job: 'developer',
    isMarried: false,
};
console.log(jhon.firstName);

console.log(jhon['lastName'])
var x ='birthYear';
console.log(jhon[x])

jhon.job = 'designer';
jhon['isMarried'] = true;
console.log(jhon)


//new Object syntax
var jane = new Object();

jane.firstName = 'Jane';
jane.lastName = 'smith';
jane.birthYear = 1997;

console.log(jane);
*/
/***************************************
 * Objects and method
 */
/*
var jhon = {
    firstName: 'Robin',
    lastName: 'Maruf',
    birthYear: 1997,
    family: ['muzib','rashida','tina'],
    job: 'developer',
    isMarried: false,
    calAge: function () {
        return 2020 - this.birthYear;
    }
};

console.log(jhon.calAge());
*/

/***************************************
 * Coding Challenge -4
 */
/*
var mark = {
    firsName: 'Mark',
    mass: 90,
    height: 1.56,
    bmiCal: function (){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

mark.bmiCal();
console.log(mark);
*/
/***************************************
 * Loops and iteration
 */
/*
var jhon = ["Maruf", "Robin", 1997, "Developer", false];

for (var i = 0; i < jhon.length; i++) {
  console.log(jhon[i]);
}

var i =0;

while (i < jhon.length) {
    console.log(jhon[i]);
    i++;
}
*/

/***************************************
 * Coding Challenge -5
 */
/*
var jhon = {
  fullName: "jhon smith",
  bill: [124, 48, 268, 180, 42],
  calculateTip: function () {
    this.tip = [];
    this.finalvalues = [];

    for (var index = 0; index < this.bill.length; index++) {
      var bill = this.bill[index];
      var precentage;
      if (bill[index] < 50) {
        precentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        precentage = 0.15;
      } else {
        precentage = 0.1;
      }
      this.tip[index] = bill * precentage;
      this.finalvalues[index] = bill + bill * precentage;
    }
  },
};

var mark = {
  fullName: "Mark Smith",
  bill: [77, 375, 110, 45],
  calculateTip: function () {
    this.tip = [];
    this.finalvalues = [];

    for (var index = 0; index < this.bill.length; index++) {
      var bill = this.bill[index];
      var precentage;
      if (bill[index] < 100) {
        precentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        precentage = 0.1;
      } else {
        precentage = 0.25;
      }
      this.tip[index] = bill * precentage;
      this.finalvalues[index] = bill + bill * precentage;
    }
  },
};

function calculateAvgTip(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

jhon.calculateTip();
mark.calculateTip();


jhon.average = calculateAvgTip(jhon.tip);

mark.average = calculateAvgTip(mark.tip);
*/
/***************************************
 * 'This' Keyword
 */

// console.log(this);
/*
calculateAge(1997);

function calculateAge(year) {
  console.log(2020 - year);
  console.log(this);
}

var jhon = {
  name: "Jhon",
  yearOfBirth: 1990,
  calculateAge: function () {
    console.log(this);
    console.log(2020 - this.yearOfBirth);
  },
};

jhon.calculateAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1984,
};

mike.calculateAge = jhon.calculateAge;
mike.calculateAge();
*/

/***
 * 5. Funtion Constructor
 */
/*
var jhon = {
  name: "Jhon",
  yearOfBirth: 1990,
  job: "teacher",
};

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

var robin = new Person("Robin", 1995, "Student");
console.log(robin);

Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth);
};

robin.calculateAge();

Person.prototype.firstName = 'Maruf';


console.log(robin.firstName)

*/


/**
 * object.create
 
var personProto = {
  calculateAge: function () {
    console.log(2020 - this.yearOfBirthday);

    
  }
}

var jhon = Object.create(personProto);
//one way to add object in the contructor
jhon.name = 'Jhon';
jhon.job = 'teacher';
jhon.yearOfBirthday = 1995;

//another way to add object in the constructor

var jane = Object.create(personProto,
  {
    name: { value: 'Jane'},
    yearOfBirthday: {value: 1991},
    job: {value: 'student'}
  })
*/
  var robin = {
    name:"Robin",
    job : "student",
    birthYear : 1995,
    calculateAge : function () {
      var age = 2020 - this.birthYear;
      console.log(age);
      
    }
  }