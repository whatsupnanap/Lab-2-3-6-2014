/*alert("JavaScript works!");
Nana Tanaka
SDI 1403
Lab2*/

//my variables
var bunnysName = "Prince Venchenzo Bunbun Cottontail";
var bunnysNickname = "\"bunbun\"";
var bunnysAge = 13;
var hop = true;

//my output

console.log("I got a bunny!!");
console.log("His name is " + bunnysName + " a.k.a " + bunnysNickname + ".");


//ここで新しい歳をおぼえさせる。だからconsole.logがいる。ないとでない。
bunnysAge = bunnysAge + parseInt(prompt("put number of the weeks that passed since Feb 23, 2014", "Add a week every sunday "))
console.log("He is only " + bunnysAge + "weeks");


//console.log("He is only " + (bunnysAge + parseInt(prompt("put number of the weeks that passed since Feb 23, 2014", "Add a week every sunday "))) + "weeks");

console.log("It is " + hop + " that he can hop!");


hop = confirm("Can he eat veggies?");
console.log("It is " + hop + " that he can eat veggies, " + "because he is " + bunnysAge + " weeks now");






