// Soal 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"]
daftarHewan.sort()
daftarHewan.forEach(function(hewan){
    console.log("" + hewan)
})

// Soal 2
function introduce(){
    return "Nama saya "+data.name+", umur saya "+data.age+", alamat saya di "+data.address+", dan saya punya hobby yaitu "+data.hobby
}

var data = {name : "Rafid" , age : 17 , address : "Jalan Kalitanjung" , hobby : "Gaming" }
 
var perkenalan = introduce(data)
console.log(perkenalan)

// Soal 3
var vokal = ["a", "i", "u", "e", "o"]
function hitung_huruf_vokal(a){
    var kata = 0
    for( b of a.toLowerCase()){
        if(vokal.includes(b)){
            kata++
        }
    }
    return kata
}

var hitung_1 = hitung_huruf_vokal("Muhammad")

var hitung_2 = hitung_huruf_vokal("Rafid")

console.log(hitung_1 , hitung_2)

// Soal 4
// var angka = [0, 1, 2, 3, 5]
// function hitung(){
//     if(angka = 0){
//         console.log(angka[0]+(-2))
//     } else if(angka = 1){
//         console.log( angka[1]-1)
//     } else if(angka = 2){
//         console.log(angka[2]+0)
//     } else if(angka = 3){
//         console.log(angka[3]+1)
//     } else {
//         console.log(angka[5]+3)
//     }
//     return angka
// }
// console.log(hitung())

// Soal 4
function hitung(angka = [0, 1, 2, 3, 5]) {
    var a = 0
    if(angka){
        console.log(0+(-2))
    } else if(angka){
        console.log(1-1)
    } else if(angka){
        console.log(2+0)
    } else if(angka){
        console.log(3+1)
    } else {
        console.log(5+3)
    }
    return a
  }
  console.log(hitung()) 