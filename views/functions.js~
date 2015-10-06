function cube(n){
	return n*n*n;
}
var cube = function(n){
	return n*n*n;	
}
alert(cube(2));

function foo1(a){
	a = 100;
	console.log("Inside the function a is: " + a);
}
function foo2(myObject){
	myObject.fname = "John";
}
function foo3(myObject){
	myObject = {fname:"Jane",lname:"Dizon",age:25};
}

var person = {
	fname: "Juan",
	lname: "Dela Cruz",
	age:50
};

function student(fname, lname, age){
	this.fname = fname;
	this.lname = lname;
	this.age = age;
	
	this.changeName = changeName;
	this.updateAge = updateAge;
}

function changeName(newFirstName, newLastName){
	this.fname = newFirstName;
	this.lname = newLastName;
}

function updateAge(newAge){
	this.age = newAge;
}

function car(plateNo, model, color){
	this.plateNo = plateNo;
	this.model = model;
	this.color = color;
	this.speed = 0;
	
	this.startCar = startCar;
	this.stopCar = stopCar;
	this.accelerate = accelerate;
	this.decelerate = decelerate;
	this.repaintCar = repaintCar;
}

function startCar(){
	this.speed = 10;
}

function stopCar(){
	this.speed = 0;
}

function accelerate(n){
	this.speed += n;
}

function decelerate(n){
	this.speed -= n;
}

function repaintCar(color){
	this.color = color;
}
