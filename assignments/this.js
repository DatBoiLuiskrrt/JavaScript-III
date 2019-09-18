/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.window binding 
So, I didn't quite go this but if a function is in the global scope and not inside an object the value of this inside of the function will be the window object because it is defined in the global scope.


* 2.Implicit Binding
 if calling a method now instead of the value being the window it is the object in which that function is defined.
* 
3.New Binding
 an empty array is created

* 4.explicit binding 
when doing explicit binding the arguments are passed as an array
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

var defaultBinding = function() {
    console.log(this);
 }
 
 defaultBinding();   

// Principle 2
function kanye(){
	console.log(this.parameter);
}

var obj = {
	parameter:69,
	kanye:kanye
};

obj.kanye();  
// code example for Implicit Binding

// Principle 3
function Luis() {        
    /*
       1- create a new object using the object literal 
       var this = {};
   */

  // 2- add properties and methods 
    this.name = 'Donkey';
    this.say = function () {
    return "I am " + this.name; 
   };

  // 3- return this;
}

var name = 'Ahmed';
var result = new Luis();
console.log(result.name);  

// code example for New Binding

// Principle 4
function greet() {
	console.log(this.name);
}

var person = {
	name:'Luis'
};

var greetPerson = greet.bind(person); 
greetPerson(); 
// code example for Explicit Binding