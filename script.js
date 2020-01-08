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
/*var markmass, johnmass, markheight , johnheight, markBMI, jonhBMI;

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
*/
/*************************************************************
 * IF-ESLE Statement  
*/
/*
var firstname = 'john';
var civilStatus = 'Single';

if (civilStatus === 'married'){
    console.log(firstname + 'is married ');

}
else {
    console.log(firstname + ' will hopefully marry soon');

}
var ismarried = true;
if (ismarried){
    console.log(firstname + ' is married ');

}
else {
    console.log(firstname + ' will hopefully marry soon');

}

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

if (markBMI < jonhBMI){
    console.log('Mark has a higher BMI than John.');
}
else{
    console.log('john\' BMI is heiher than marks ')
}
*************************************************************/
/******************************************
 * Boolean Logic
 */
/*
var firstname = prompt('what\'s the name.' );
var age = prompt('what is the Age of '+firstname+':');

if (age<13){
    //console.log(firstname + ' is a boy.');
    alert(firstname + ' is a boy.');
}
else if(age >= 13 && age<20){//between 13 and 20 === age >=13 and age<20 
    //console.log(firstname + ' is a teenager.');
    alert(firstname + ' is a teenager.');
}
else if (age >=20 && age <30){
    //console.log(firstname + ' is a young man.');
    alert(firstname + ' is a young man.');
}
else{
    //console.log(firstname + ' is a Man.');
    alert(firstname + ' is a Man.');
}
*/
/***************************************
 * The Ternary Operator and Switch Statements
 */
/*
var firstname= prompt('Whats the Name: ');
var age = prompt('What\'s the age:');
//Ternary Operator 
age >= 18 ? alert(firstname +' Drinks beer.')
: alert(firstname+ ' Drinks juice. ');

// var Drinks = age>= 18 ? 'Beer' : 'Juice';
// console.log(Drinks);
/// Switch Statements
var job = prompt('What is Job: ');
switch(job) {//IN '()' we put what we want to test
    case 'teacher'://for any of 'teacher' or 'instrtuctor'alet will same
    case 'instructor':
        alert(firstname+' teaches kids how to code.');
        break;
    case('designer'):
        alert(firstname+' is a designer.');
        break;
    case('driver'):
        alert(firstname+' is driver');
        break;
    default:
        alert(firstname+' do something else.');
        break;
}
*/
/*
var firstname = prompt('what\'s the name.' );
var age = prompt('what is the Age of '+firstname+':');

switch(true){
    case(age<13):
        alert(firstname + ' is a boy.');
        break;
    case(age >= 13 && age < 20):
        alert(firstname + ' is a teenager.');
        break;
    case(age >=20 && age<30):
         alert(firstname + ' is a young man.');
         break;
    default:
        alert(firstname + ' is a Man.');
        break;

}*/
/*
if (age<13){
    //console.log(firstname + ' is a boy.');
    alert(firstname + ' is a boy.');
}
else if(age >= 13 && age<20){//between 13 and 20 === age >=13 and age<20 
    //console.log(firstname + ' is a teenager.');
    alert(firstname + ' is a teenager.');
}
else if (age >=20 && age <30){
    //console.log(firstname + ' is a young man.');
    alert(firstname + ' is a young man.');
}
else{
    //console.log(firstname + ' is a Man.');
    alert(firstname + ' is a Man.');
}*/

/*******************************************
 * Truthy and Falsy values and equality operators
 */
/*
 var height;

 height =23;
 if (height || height === 0){//"===" for strick condition
     console.log('variable is defined: '+height);
 }
 else{
    console.log('variable is NOT defined.');
 }

 //euqality operators
 if (height == '23'){//convert the 23 into number to compare
    console.log('the == operator does type coerction!');
 }
 */
/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. 
In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team

2. Decide which teams wins in average (highest average score), and print the winner to the console.
   Also include the average score in the output.

3. Then change the scores to show different winners.
   Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points.
 Like before, log the average winner to the console.
  HINT: you will need the && operator to take the decision.
   If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*****************************
* CODING CHALLENGE 2
*/
/*
var john_avrg_points, mark_avrg_points, mary_avrg_points;
john_avrg_points= (116+94+123)/3;
mark_avrg_points= (116+94+123)/3;
mary_avrg_points= (116+94+123)/3;


if (john_avrg_points > mark_avrg_points && john_avrg_points > mary_avrg_points){
    console.log('John Team Wins in Average Points: '+john_avrg_points);
}
else if(mark_avrg_points > john_avrg_points && mark_avrg_points > mary_avrg_points){
    console.log('Mark Team Wins in Average Points: '+mark_avrg_points);
}
else if(mary_avrg_points > john_avrg_points && mary_avrg_points > mark_avrg_points){
    console.log('Mary Team Wins in Average Points: '+mary_avrg_points);
}
else{
    console.log('Both Team has the Same Average Points. '+'Mark Team Average Points: '+mark_avrg_points+' John Team Average Points: '+john_avrg_points+' Mary Team Average Points: '+mary_avrg_points);
}
************************************************************/
/***********************************************************
 * Function
 */
/*
function calculateAge(birthYear){
    return 2020- birthYear;

}
// var Robin = calculateAge(prompt("what year was Robin Born: "));
// alert('Robin Age: '+ Robin);

// var Jhon = calculateAge(1997);
// var mike = calculateAge(1995);
// var jane = calculateAge(1998);
// alert('Jhon Age: '+Jhon);
// alert('Mike Age: '+mike);
// alert('Jane Age: '+jane);

function yearUntillretire(Year, firstname){
    var age = calculateAge (Year);//calling calculateAge function within this function

    alert(firstname+' Age: '+age)
    var retire = 65 - age;
    var wasRetire = age - 65; 
    if(retire > 0){
        alert(firstname+ ' Retire in '+retire+ ' years.');
    }
    else{
        alert(firstname+' was retire in: '+ wasRetire+' years ago.');
    }


 }
// yearUntillretire(1995, 'Robin');
// yearUntillretire(1996, 'Maruf');
// yearUntillretire(1997, 'Ahmed');
// yearUntillretire(1998, 'Marlin');
// yearUntillretire(1971, 'Mozibur');
yearUntillretire(prompt('Birth Year: '), prompt('Firstname: '));
*********************************************************/
/*******************************************************
 * Function Statments and Expression
 */
//Function declaration
// function whatdoyoudo(job, firstname){

// }

//Function expression
var whatdoyoudo=  function(job, firstname){
    switch(job){
        case 'teacher':
            return firstname+' how to code.';
        case 'driver':
            return firstname+' how to drive.';
        case 'designer':
            return firstname+' design beautifull website.';
        default:
            return firstname+ ' jobless.';
        
    }
}
