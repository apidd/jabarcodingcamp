// Soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

var a = pertama.substring(0, 5, 12, 18);
var b = pertama.substring(12, 19);
var c = kedua.substring(0, 8);
var d = kedua.substring(8, 18).toUpperCase();

console.log(a.concat(b, c, d));

// Soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

kataPertama = Number(kataPertama);
kataKedua = Number(kataKedua);
kataKetiga = Number(kataKetiga);
kataKeempat = Number(kataKeempat);

jumlah = (kataPertama + kataKedua) * (kataKeempat - kataKetiga);
console.log(jumlah);

// Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); 
var kataKetiga = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24); 
var kataKelima = kalimat.substring(25, 31); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);