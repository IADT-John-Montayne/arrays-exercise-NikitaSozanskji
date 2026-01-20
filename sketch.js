//creat array
let names =["Bob","Devid","Mary"]
console.log(names)

//overwrite value in array
names[1]="Cooler Devid"
console.log(names)

//array lenght
console.log(names.length)

// .push add value to the end of array
names.push("Nikita")
console.log(names)

// .pop delete the last value in the array
names.pop()
console.log(names)

// .unshift add value to the the start of the array
names.unshift("Nikita")
console.log(names)

// .shift remove the first value in the array
names.shift()
console.log(names)

//loop to show all values in the array
for (let i=0; i<names.length;i++)
	console.log(names[i])

//loof with for...of 
for (let name of names)
	console.log(name)

//find item 
console.log(names.indexOf("Mary"))
console.log(names.indexOf("Nikita"))//-1 not finded

// .slice cut few values to another array
let names2 = names.slice(1,2)
console.log(names2)

/// .splice remove in a range
console.log(names)
names.splice(1,1)
console.log(names)

// .splice remove in a range and replace
let names3 =["Bob","Devid","Mary"]
console.log(names3)
names3.splice(1,1,"Cooler Devid")
console.log(names3)

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
