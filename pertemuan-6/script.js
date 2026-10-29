function helloWord() {
  // kode eksekusi
  console.log("hello word");
}

helloWord();

function looping(a) {
  for (let i = 1; i <= a; i++) {
    console.log("mobil " + i);
  }
}

looping(10);

// function  parameter dan argumen perkalian pengurangan pembagian dan luas rumus persegi panjang
function pertambahan(a, b) {
  console.log("Hasil Pertambahan:", a + b);
}

function perkalian(a, b) {
  console.log("Hasil Perkalian:", a * b);
}

function pengurangan(a, b) {
  console.log("Hasil Pengurangan:", a - b);
}

function pembagian(a, b) {
  console.log("Hasil Pembagian:", a / b);
}
//Rumus Geometri
function luasPersegi(sisi) {
  let luas = sisi * sisi;
  console.log("Luas Persegi:", luas);
}
console.log;
pertambahan(10, 5);
perkalian(10, 5);
pengurangan(10, 5);
pembagian(10, 5);
//argumen persegi
luasPersegi(6);
