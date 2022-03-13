// function jumlah_kata(){
//     var kalimat = kalimat_1
//     var kata = kalimat.split(" ")
//     return kata.length
// }

// var kalimat_1 ="Halo nama saya Muhammad Iqbal Mubarok"
// var kalimat_2 ="Saya Iqbal"
// var kalimat_3 ="Saya Muhammad Iqbal Mubarok"

// console.log(jumlah_kata(kalimat_1))
// console.log(jumlah_kata(kalimat_2))
// console.log(jumlah_kata(kalimat_3))


function jumlah_kata(kalimat){
    var kata = kalimat.split(" ")
    return kata.length
}

var kalimat_1 ="Halo nama saya Muhammad Rafid"
var kalimat_2 ="Saya Rafid"
var kalimat_3 ="Saya Muhammad Rafid"

console.log(jumlah_kata(kalimat_1))
console.log(jumlah_kata(kalimat_2))
console.log(jumlah_kata(kalimat_3))
