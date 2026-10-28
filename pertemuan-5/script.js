let laukPagi = "ayam goreng";

if (laukPagi === "ayam semur") {
  console.log("makan pagi dengan ayam semur");
} else {
  console.log("makan pagi dengan lauk lain");
}

// prompt

// angka
//
//cek suhu tubuh
// cek suhu tubuh
let suhu = 38.2;

if (suhu > 37.5) {
  console.log("suhu tubuh tinggi (demam)");
} else {
  console.log("suhu tubuh rendah");
}
//kategori bilangan  . berikan variabel angka = 5 . jika angka lebih besar dari 0 tampilkan "bilangan positif" jika angka lebih kecil tampilkan bilangan "bilangan negatif "
// kategori bilangan
// kategori bilangan
let nomor = 5;

if (nomor > 0) {
  console.log("bilangan positif");
} else if (nomor < 0) {
  console.log("bilangan negatif");
} else {
  console.log("bilangan nol");
}

// kode JavaScript menggunakan switch
//Variabel: nilai = "A"
//Jika "A" tampilkan "Sangat baik", "B" tampilkan "Baik",
//"C" tampilkan "Cukup", selain itu tampilkan "Perlu belajar lagi"
//Pakai console.log dan beri komentar bahasa Indonesia

// penilaian huruf
let nilai = "A";

switch (nilai) {
  case "A":
    console.log("Sangat baik");
    break;
  case "B":
    console.log("Baik");
    break;
  case "C":
    console.log("Cukup");
    break;
  default:
    console.log("Perlu belajar lagi");
}

//Buatkan kode JavaScript menggunakan switch.
//Variabel: hari = 3.
//Jika 1 tampilkan "Senin", 2 "Selasa", 3 "Rabu", 4 "Kamis",
//5 "Jumat", 6 "Sabtu", 7 "Minggu".
//Selain itu tampilkan "Hari tidak ditemukan".
//Pakai console.log dan beri komentar bahasa Indonesia.
// nama hari dari angka

let hari = 2;

switch (hari) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  default:
    console.log("Hari tidak ditemukan");
}
// versi dengan break
let makanan = "bakso";

switch (makanan) {
  case "nasi goreng":
    console.log("Pedas dan gurih");
    break;
  case "bakso":
    console.log("Berkuah hangat");
    break;
  case "sate":
    console.log("Dibakar dengan bumbu kacang");
    break;
  default:
    console.log("Makanan belum ada di daftar");
}
//tugas
// laporan kelas
//let nama = prompt("Masukkan nama (fakih / fajri / haidar):");

//switch (nama) {
// case "fakih":
//  alert("Madol pelajaran, dipanggil guru BK");
// break;
// case "haidar":
// alert("Kasus laptop hilang, masih diselidiki ");
//    break;
// case "fajri":
//   alert("Saksi kasus laptop, dimintai keterangan");
//  break;
//  default:
// alert("Nama yang anda input berati sholehh  ");
//}
//looping

//const hello = "Hello World";

//for (let i = 1; i < 10; i++) {
//console.log(hello);
//}
//gimana cara hello word yang angka ganjilnya aja
const hello = "Hello World";

for (let i = 1; i < 10; i++) {
  if (i % 2 !== 0) {
    console.log(`${hello} (angka ${i} - ganjil)`);
  } else {
  }
}
//mobil grab 1 -  10 dalam keadaan baik
for (let b = 1; b <= 10; b++) {
  if (b === 9) {
    console.log("mobil grab " + b + " dalam keadaan dibengkel");
  } else if (b == 2) {
    console.log("mobil grab " + b + " dalam keadaan dicuri");
  } else {
    console.log("mobil grab " + b + " dalam keadaan baik");
  }
}

let kapal = 1
do {
  console.log("kapal" + kapal "dalam keadaan baik")
  kapal++
}
while (kapal <= 10)
