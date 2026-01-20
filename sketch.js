// //creat array
// let names =["Bob","Devid","Mary"]
// console.log(names)

// //overwrite value in array
// names[1]="Cooler Devid"
// console.log(names)

// //array lenght
// console.log(names.length)

// // .push add value to the end of array
// names.push("Nikita")
// console.log(names)

// // .pop delete the last value in the array
// names.pop()
// console.log(names)

// // .unshift add value to the the start of the array
// names.unshift("Nikita")
// console.log(names)

// // .shift remove the first value in the array
// names.shift()
// console.log(names)

// //loop to show all values in the array
// for (let i=0; i<names.length;i++)
// 	console.log(names[i])

// //loof with for...of 
// for (let name of names)
// 	console.log(name)

// //find item 
// console.log(names.indexOf("Mary"))
// console.log(names.indexOf("Nikita"))//-1 not finded

// // .slice cut few values to another array
// let names2 = names.slice(1,2)
// console.log(names2)

// /// .splice remove in a range
// console.log(names)
// names.splice(1,1)
// console.log(names)

// // .splice remove in a range and replace
// let names3 =["Bob","Devid","Mary"]
// console.log(names3)
// names3.splice(1,1,"Cooler Devid")
// console.log(names3)

//========================================================
//                   exercise
//========================================================

let basket =["apple","banana","orange"]

//log the first fruit
console.log(basket[0])

//log the last fruit
console.log(basket[basket.length-1])

//replace "banana" with "kivi"
replaceWhat=basket.indexOf("banana")
replaceToWhat="kivi"
for(let i=0; i<basket.length;i++)
	if (replaceWhat == i)
		basket[i]=replaceToWhat
console.log(basket)

//remove the last fruit
basket.pop()
console.log(basket)

// add "mango" to the start of the arry
basket.unshift("mango")
console.log(basket)

//loop throught busket
for (let fruit of basket)
	console.log(fruit)

//use a for loop to log every fruit in a frotmat
for(let i=0; i<basket.length;i++)
	console.log('Fruit '+ (i+1) +': '+basket[i])

//search
find="orange"
if(basket.indexOf(find)!=-1)
	console.log(find+' was found in place '+basket.indexOf(find))
else
	console.log(find+' was not found')

//copy path of the basket
console.log(basket)

let citrus =[]
if (basket.length%2!=0)
	citrus.push=basket[basket.length%2]
else
	citrus = basket.slice((basket.length/2-1),(basket.length/2+1))
console.log(citrus)

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
