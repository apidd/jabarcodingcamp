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
