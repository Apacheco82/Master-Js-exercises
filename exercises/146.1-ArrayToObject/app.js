function transformFirstAndLast(array) {

 let obj = {}

 let key = array[0]

 let value = array[array.length-1]

 obj[key] = value

 return obj
}
let output = transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])
console.log(output); // { Queen: "Beyonce" }