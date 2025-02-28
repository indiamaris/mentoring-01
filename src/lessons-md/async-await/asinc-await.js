





const randomNames = {
  name1: "Oliver",
  name2: "Sophia",
  name3: "Liam"
};

const b = Object.entries(randomNames)
console.log(b)
const bFrom = Array.from(randomNames)
console.log(bFrom)
const Cspread = [ ... randomNames ] 
console.log(Cspread) //TypeError: randomNames is not iterable
const str = '12345'
console.log([...str])


