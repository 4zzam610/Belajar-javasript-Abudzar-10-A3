console.log("Hello World");

let myname = "jum'at";
let address = "Jl. Raya";
let a = "5";

let b = "6";

let c = a * b;

//number
let z = 10;
console.log(typeof c);
console.log(`nama saya ${myname} dan alamat saya ${address}`);
console.log(a * b);
console.log(myname);
console.log(typeof z);

//bolean
let isTrue = true;
console.log(typeof isTrue);

//null & undefined
let VarOne = null;
let VarTwo;
console.log(typeof VarOne);
console.log(typeof VarTwo);
// array
const array = ["spageti", "ayam geprek", "telur dadar"];
array.push("nasi goreng");
array.push("nasi uduk");
array.push(1);
array.pop("spageti");
console.log(array[4]);
console.log(`nama saya ${myname} dan alamat saya ${address} dan saya suka makan ${array[1]}`);

//tuliskan variabel dengan 5 data disimpan di array dan tampilkan data tersebut seolah olah
//cerita yang berkaitan diri data itu menggunakan document.write()
let dataDiri = ["Azzam", "Bandung", "fotografi", 24, "fotografer profesional"];

document.write("<h2>Kisah Perjalanan Mengejar Impian</h2>");

document.write("<p>Perkenalkan, nama saya <b>" + dataDiri[0] + "</b>. </p>");

document.write(
  "<p>Saat ini saya tinggal di kota <b>" +
    dataDiri[1] +
    "</b>, sebuah tempat yang penuh dengan inspirasi visual di setiap sudutnya. </p>",
);

document.write(
  "<p>Di usia yang menginjak <b>" +
    dataDiri[3] +
    "</b> tahun ini, saya menghabiskan sebagian besar waktu luang saya untuk mendalami dunia <b>" +
    dataDiri[2] +
    "</b>. </p>",
);

document.write(
  "<p>Bagi saya, kamera bukan sekadar alat, melainkan jembatan untuk mewujudkan impian terbesar saya, yaitu menjadi seorang <b>" +
    dataDiri[4] +
    "</b> yang karyanya bisa dikenal oleh dunia.</p>",
);
//unshift
array.unshift("bakso");
console.log(array[0]); // bakso

//includes
console.log(array.includes("nasi goreng"));
console.log(array.includes("pizza"));

//join
console.log(array.join(", "));

let mydata = {
  name: "Azzam",
  address: "Bandung",
  age: 16,
  food: ["spageti", "ayam geprek", "telur dadar"],
};
mydata.hobi = "ngaji";
console.log(mydata.food[1]);
//tuliskan variabel dengan 7 data di object dan tampilkan data tersebut
//seolah olah
//cerita yang berkaitan diri data itu menggunakan ducument.(write)
//tuliskan variabel dengan 7 data di object dan tampilkan data tersebut
//seolah olah
//cerita yang berkaitan diri data itu menggunakan ducument.(write)
const adzmart = {
  nama: "Adzmart",
  lokasi: "Pondok Tahfidz Plus Abudzar",
  jamBuka: "08.00",
  jamTutup: "16.00",
  produkLaris: "mie instan",
  harga: 3500,
  pelanggan: "santri",
};

document.write("<h2>Adzmart Pondok Abudzar</h2>");
document.write("<p>Di " + adzmart.lokasi + " ada sebuah toko bernama " + adzmart.nama + ".</p>");
document.write(
  "<p>Toko ini buka jam " +
    adzmart.jamBuka +
    " sampai jam " +
    adzmart.jamTutup +
    ", setelah santri selesai kegiatan sore.</p>",
);
document.write(
  "<p>Produk yang paling laris adalah " +
    adzmart.produkLaris +
    " dengan harga Rp" +
    adzmart.harga +
    ".</p>",
);
document.write("<p>Pembelinya kebanyakan " + adzmart.pelanggan + ".</p>");

// Contoh Kode NaN (Not a Number)
let bukanAngka = Number("Halo");      // Mengonversi string bukan angka
let hasilBagiNol = 0 / 0;             // Operasi matematika yang tidak valid
let hasilKaliUndefined = 5 * undefined; // Mengalikan angka dengan undefined

// Contoh Kode Infinity (Tak Terhingga)
let positifTakTerhingga = 1 / 0;      // Pembagian angka positif dengan 0
let negatifTakTerhingga = -1 / 0;     // Pembagian angka negatif dengan 0

console.log(bukanAngka);              // NaN
console.log(hasilBagiNol);            // NaN
console.log(hasilKaliUndefined);      // NaN
console.log(positifTakTerhingga);     // Infinity
console.log(negatifTakTerhingga);     // -Infinity

let nama = prompt("Masukkan nama Anda");
console.log(nama);
