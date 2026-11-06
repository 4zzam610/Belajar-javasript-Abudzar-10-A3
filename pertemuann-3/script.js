//konversi tipe data

let angka = 200
let konverAngka = String(angka)

console.log(konverAngka)
console.log(typeof konverAngka)


//tahun
let tahun ='2026';

console.log(tahun + 4)

//nilai falsy

console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(''));        // false (string kosong / empty string)
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false


//nilai truthy
console.log(Boolean("reza"))   // true
console.log(Boolean(0))        // false
console.log(Boolean("true"))   // true

//operator artimatika
let a = 10;
let b = 3;

//pertambahan
let penjumlahan = a + b;
console.log('Penjumlahan (10 + 3) =', penjumlahan); // 13

//pengurangan
let pengurangan = a - b;
console.log('Pengurangan (10 - 5) =', pengurangan); // 7

//perkalian
let perkalian = a * b;
console.log('Perkalian (10 * 3) =', perkalian); // 30


//pembagian
let pembagian = a / b;
console.log('Pembagian (10 / 3) =', pembagian); // 3.3333333333333335

//modulus / sisa bagi
let modulus = a % b;
console.log('Modulus / Sisa Bagi (10 % 3) =', modulus); // 1

//perpangkatan
let pangkat = a ** b;
console.log('Perpangkatan (10 ** 3) =', pangkat); // 1000

//operator penugasan
let x = 10;
console.log('Nilai awal x =', x); // Output: 10

x += 5; // Sama dengan: x = x + 5
console.log('Setelah x += 5, nilai x =', x); // Output: 15

x -= 3; // Sama dengan: x = x - 3
console.log('Setelah x -= 3, nilai x =', x); // Output: 12

x *= 2; // Sama dengan: x = x * 2
console.log('Setelah x *= 2, nilai x =', x); // Output: 24

x /= 4; // Sama dengan: x = x / 4
console.log('Setelah x /= 4, nilai x =', x); // Output: 6

x %= 4; // Sama dengan: x = x % 4
console.log('Setelah x %= 4, nilai x =', x); // Output: 2

x **= 3; // Sama dengan: x = x ** 3
console.log('Setelah x **= 3, nilai x =', x); // Output: 8

//operator perbandingan
let c = 10;
let d = 5;
let e = '10';
console.log('Apakah c sama dengan d?', c === d); // false
console.log('Apakah c tidak sama dengan d?', c !== d); // true
console.log('Apakah c lebih besar dari d?', c > d); // true
console.log('Apakah c lebih kecil dari d?', c < d); // false
console.log('Apakah c lebih besar atau sama dengan d?', c >= d); // true
console.log('Apakah c lebih kecil atau sama dengan d?', c <= d); // false

