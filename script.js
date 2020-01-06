// console.log('Hello world in consol!!!!!!!!!');

/*********************************** 
Variables and Data types 
*************************************/
/*var firstname = 'Maruf';
console.log(firstname);
var lastname = 'Robin';
var age = 22;
console.log(lastname);
console.log(age);

var fullage = true;
console.log(fullage);

var fullagef = false;
console.log(fullagef);
var job;
console.log(job);

job = 'teacher';
console.log(job);
var nullvalue;
nullvalue = null;
console.log(nullvalue);
// use "_ "for use number in variable 
var _3year = 3;
console.log(_3year);
***********************/

/****************************** 
//type coercion

var lastname = 'Robin';
var age = 22;
console.log(lastname +' '+ age );

var job , ismarried;
job = 'teacher';
ismarried = false;
console.log(lastname +' '+ age +' year old '+job+' Is he married? '+ismarried );

// Variavle mutation 
age = 'Twenty eight';
 job = 'Driver ';
 alert(lastname +' '+ age +' year old '+job+' Is he married? '+ismarried );
var firstname=  prompt('What is his First Name ?');
console.log(firstname +' '+ age +' year old '+job+' Is he married? '+ismarried );
*/
/****************************** 
 Basic operators
*/
/*var now, yearjohn,yearmark, agejohn, agemark;
 now= 2018;
agejohn= 28;
agemark = 33;

 yearjohn = now -agejohn;

 yearmark = now -agemark;
//Math operators
 console.log(yearjohn);
console.log(yearmark);

console.log(now + 2);
console.log(now - 2);
console.log(now * 2);
console.log(now / 2);
// Logical Operators
var johnOlder, markOlder ;

johnOlder = agejohn > agemark;
console.log('John is older than Mark: '+johnOlder);
markOlder = agemark > agejohn;
console.log('Mark is older than john: '+markOlder);

//typeof operator 
console.log(typeof johnOlder); //to find out the type of the operator 
console.log(typeof agejohn);
console.log(typeof 'Mark is older than john');
var x;
console.log(typeof x);
*****************************/


/****************************
 Operator proecedance
 */

 /*
 var now = 2020;
 var yearjohn= 1989;
 var fullage = 18;
 //Multiple operators 
 var isFullage = now - yearjohn>= fullage;
 console.log(isFullage);
//grouping 
 var agejohn, agemark, average;
 agejohn = now - yearjohn;
 agemark = 35;
 average = (agejohn + agemark) / 2;
 console.log(average);
// Multiple assignments
var x, y;
x = y = (3+5)*4-6; //8 * 4 -6// 32 - 6// 26 //y= 26

// normal works left to right like= 2+4+5
// In Assignments works like left to right like....
// here 1st we will get Y value 26 then.... 
// X will get the value from Y that is 26

console.log('X=',x ,'Y=', y);
// More operators
//  x= x+2;
x += 2;
 console.log('New X=',x); 
 //increment 
 x++;
 console.log('Increment X=',x);
*/
/**************************************
 * Coding Chalenge - 01
 */
 /*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

BMI = mass / height^2
(mass in KG and height in meter ).


1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
var markmass, johnmass, markheight , johnheight, markBMI, jonhBMI;

markmass = 78; //kg
markheight = 1.69;//meter

johnmass =92;
johnheight = 1.95;

// markBMI = markmass / markheight^2;
markBMI = markmass / (markheight * markheight);
console.log('Mark BMI: '+markBMI);
jonhBMI = johnmass/ (johnheight * johnheight);

// jonhBMI = johnmass/ johnheight^2;
console.log('Jhon BMI: '+jonhBMI);

var Mark_BMI_then_Jhon = markBMI > jonhBMI;
console.log('Mark has a higher BMI than John.:: '+Mark_BMI_then_Jhon);

/*************************************************************
 * IF-ESLE Statement  
*/