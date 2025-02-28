function outer() {

    let count = 0;
    return () => ++count;
}

const counter = outer()
console.log(counter())
console.log(counter())  
// example require$$2
    
{ var scoped = 3}
console.log(scoped) // 3
{ const scopedB = 5 } // Cannot access 'scopedB' before initialization
console.log(scopedB) 
const scopedB = 5 
console.log(scopedB) //5
{ var scopedC = 3}
console.log(scopedC)//3
const scopedC = 5 //Identifier 'scopedC' has already been declared
if (scopedC === 5) {
    let v = scopedC
 console.log(v)   
}
 console.log(v) //ReferenceError: v is not defined
const array = [ 1, 2, 3 ]

 for (let vartest = 0; vartest < array.length; vartest++) {
    const element = array[vartest];
 }
console.log(vartest)
 
const arrayb = [ 1, 2, 3 ]

 for (var vartest = 0; vartest < arrayb.length; vartest++) {
    const element = arrayb[vartest];
 }
console.log(vartest)
 // _________________________________________________
var batata 
function increment() {
    batata=++batata
}
console.log(batata) //undefined
increment()
console.log(batata) //NaN
function decrement() {
    batata=--batata
}
console.log(batata)//NaN
decrement()
console.log(batata)//NaN
decrement()
console.log(batata)//NaN
// _________________________________________________

var batata =0
function increment() {
    batata=++batata
}

increment()
console.log(batata) //1
function decrement() {
    batata=--batata
}
console.log(batata)//1
decrement()
console.log(batata)//0
decrement()
console.log(batata)//-1

// _________________________________________________
const batata =0
function increment() {
    batata=++batata
}

increment() //Assignment to constant variable.

const luckNumber = 13
var badNumber = 1
var number=1
function ands() {
    const luckNumber = 14
    const badNumber = 11
    console.log(luckNumber)
    console.log(badNumber)
         console.log(number)
}
ands()
// _________________________________________________
for (var it = 0; it < 2; it++)
console.log(it)
console.log(it)
console.log(it)

// _________________________________________________

for (let it = 0; it < 2; it++)
console.log(it)
console.log(it)

// _________________________________________________
function tesxte() {
    let b=1
    for (var it = 0; it < 3; it++)
        if(b) {
            it++  
                    console.log(it)
        }
        console.log(it)
}
tesxte()