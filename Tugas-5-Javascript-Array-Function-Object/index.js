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
function hitung(a,b){
    hasilTambah = a + b
    return hasilTambah
}

// memanggil fungsi
var nilai1 = 0
var nilai2 = 1
var nilai3 = 2
var nilai4 = 3
var nilai5 = 5
var hasil0 = hitung(nilai1, -2)
var hasil1 = hitung(nilai1, nilai1)
var hasil2 = hitung(nilai1, nilai3)
var hasil3 = hitung(nilai4, nilai2)
var hasil5 = hitung(nilai5, nilai4)

console.log(hasil0)
console.log(hasil1)
console.log(hasil2)
console.log(hasil3)
console.log(hasil5) 