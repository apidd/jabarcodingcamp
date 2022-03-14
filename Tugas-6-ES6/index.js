// Soal 1
let luas = (panjang,lebar) => panjang * lebar
let keliling = (panjang,lebar) => 2 * (panjang+lebar)

console.log(luas(8,5), keliling(8,5))

// Soal 2
const newFunction = (firstName, lastName) => {
    firstName
    lastName
    return {
        fullName(){
            console.log(firstName + " " + lastName)
        }
    }  
}
newFunction("William", "Imoh").fullName() 

// Soal 3
const newObject = {
    firstName: "Mohammad",
    lastName: "Rafid",
    address: "Jalan Kalitanjung",
    hobby: "playing football",
  }

  const {firstName, lastName, address, hobby} = newObject
  console.log(firstName, lastName, address, hobby)

// Soal 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]

console.log(combined)

// Soal 5
const planet = "earth" 
const view = "glass" 
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`
console.log(before)