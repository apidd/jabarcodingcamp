// Soal 1
var nilai = "75"

if( nilai >= "85"){
    console.log("A")
} else if( nilai >= "75" && nilai < "85"){
    console.log("B")
} else if( nilai >= "65" && nilai < "75"){
    console.log("C")
} else if( nilai >= "55" && nilai < "65"){
    console.log("D")
} else if( nilai < "55"){
    console.log("E")
}

// Soal 2
var tanggal = 24
var bulan = 7
var tahun = 2004

var strTgl = String(tanggal)
var strThn = String(tahun)

switch(bulan){
    case 1: bulan = 'Januari'; break; 
    case 2: bulan = 'Februari'; break;
    case 3: bulan = 'Maret'; break;
    case 4: bulan = 'April'; break;
    case 5: bulan = 'Mei'; break;
    case 6: bulan = 'juni'; break;
    case 7: bulan = 'Juli'; break;
    case 8: bulan = 'Agustus'; break;
    case 9: bulan = 'September'; break;
    case 10: bulan = 'Oktober'; break;
    case 11: bulan = 'November'; break;
    case 12: bulan = 'Desember';
}
console.log(strTgl, bulan, strThn)

// Soal 3
var segitiga = ''
for( var a=1; a<=3; a+=1){
    for( var b=1; b<=1; b+=1){
        segitiga+="#"
    }
    console.log(segitiga)
}

// Soal 4
var m = 7

for (var a = 1; a <= m; a++){
    if(a % 3 === 1){
        console.log(a+ " - I love programming")
    } else if(a % 3 === 2){
        console.log(a + " - I love Javascript")
    } else {
        console.log(a+ " - I love VueJS")
        console.log("=".repeat(a))
    }
}