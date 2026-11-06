// ==============================================================================
//                    PROJECT SUBMISSION JAVASCRIPT (KELAS 10A)
//                     KUMPULAN SOAL CERITA & STUDI KASUS
//                         MATERI PERTEMUAN 1 - 7
// ==============================================================================
// Nama Siswa  : Azzam alghifary
// Kelas       : 10A
// Tanggal     : 5 Oktober 2023
//
// PETUNJUK:
// 1. Baca dengan seksama setiap narasi studi kasus dan instruksi yang diberikan.
// 2. Tuliskan kode jawabanmu langsung pada baris kosong di bawah komentar setiap soal!
// 3. Gunakan console.log() (atau alert/document.write jika diminta) untuk menampilkan hasil.
// 4. Buka file index.html di browser dan periksa tab Console (F12) untuk melihat output.
// ==============================================================================

// ==============================================================================
// BAGIAN 1: PERTEMUAN 1 (Variabel var, let, const, Output console.log, dan typeof)
// ==============================================================================

// Soal 1.1 (Studi Kasus: Pendaftaran Santri Baru):
// Seorang santri baru bernama "Azzam" mendaftar ke sekolah. Buatlah variabel:
// - `nis` (Nomor Induk Santri) bernilai "20261001" menggunakan 'const' (karena nomor induk tidak boleh berubah).
// - `namaSantri` bernilai "Azzam" menggunakan 'let'.
// - `umur` bernilai 16 menggunakan 'let'.
// Kemudian, tampilkan kalimat perkenalan ke console: "Santri bernama Azzam memiliki NIS 20261001 dan berumur 16 tahun".
// Tampilkan juga tipe data dari variabel `nis` dan `umur` menggunakan typeof di console!
const nis = "20261001";
let namaSantri = "Azzam";
let umur = 16;
console.log("Santri bernama " + namaSantri + " memiliki NIS " + nis + " dan berumur " + umur + " tahun");
console.log(typeof nis);
console.log(typeof umur);

// Soal 1.2 (Studi Kasus: Pembaruan Data Buku Perpustakaan):
// Di perpustakaan sekolah, awalnya jumlah buku matematika (`jumlahBuku`) dicatat sebanyak 25 eksemplar menggunakan 'let'.
// Pada hari berikutnya, datang kiriman buku baru sehingga jumlahnya bertambah menjadi 40.
// Ubah nilai variabel `jumlahBuku` menjadi 40, lalu cetak nilai terbarunya ke console dengan pesan: "Jumlah buku sekarang: 40"!
let jumlahBuku = 25;
jumlahBuku = 40;
console.log("Jumlah buku sekarang: " + jumlahBuku);

// Soal 1.3 (Studi Kasus: Eksperimen Aturan Variabel):
// Buat variabel `namaKota` menggunakan 'var' dengan nilai "Jakarta", lalu ubah nilainya menjadi "Bandung".
// Buat variabel `kodeNegara` menggunakan 'const' dengan nilai "IDN".
// Tuliskan komentar di bawahnya yang menjelaskan: Mengapa nilai `kodeNegara` tidak boleh diubah menjadi nilai lain?
var namaKota = "Jakarta";
namaKota = "Bandung";
const kodeNegara = "IDN";
// ==============================================================================
// BAGIAN 2: PERTEMUAN 2 (Tipe Data Primitif, Array, Object, null, undefined, & Input)
// ==============================================================================

// Soal 2.1 (Studi Kasus: Format Biodata Siswa dengan Template Literals):
// Buat variabel `namaLengkap` = "Hilmi", `alamat` = "Jl. Merdeka No. 10", dan `citaCita` = "Programmer".
// Tampilkan biodata tersebut ke console menggunakan template literals (backtick `) dengan format:
// "Halo, nama saya Hilmi, beralamat di Jl. Merdeka No. 10, dan bercita-cita menjadi Programmer."
let namaLengkap = "Hilmi";
let alamat = "Jl. Merdeka No. 10";
let citaCita = "Programmer";
console.log(`Halo, nama saya ${namaLengkap}, beralamat di ${alamat}, dan bercita-cita menjadi ${citaCita}.`);

// Soal 2.2 (Studi Kasus: Data Khusus Kosong - Null vs Undefined):
// Buat variabel `beasiswa` dengan nilai null (karena beasiswa belum diberikan secara sengaja).
// Buat variabel `catatanPelanggaran` tanpa memberikan nilai awal sama sekali (undefined).
// Cetak ke console tipe data dari masing-masing variabel tersebut menggunakan typeof!
let beasiswa = null;
let catatanPelanggaran;
console.log(typeof beasiswa);
console.log(typeof catatanPelanggaran);

// Soal 2.3 (Studi Kasus: Menu Makanan Kantin - Array & Method):
// Buat sebuah array `menuKantin` yang berisi 3 makanan: ['Ayam Geprek', 'Nasi Goreng', 'Mie Ayam'].
// Lakukan operasi berikut secara berurutan:
// 1. Tambahkan menu baru 'Soto Ayam' ke urutan terakhir menggunakan method .push().
// 2. Tambahkan lagi menu 'Bakso' menggunakan .push().
// 3. Hapus menu pertama ('Ayam Geprek') menggunakan method .shift() karena sudah habis terjual.
// 4. Cetak array `menuKantin` terbaru ke console dan tampilkan makanan favorit pada indeks ke-0!
let menuKantin = ["Ayam Geprek", "Nasi Goreng", "Mie Ayam"];
menuKantin.push("Soto Ayam");
menuKantin.push("Bakso");
menuKantin.shift();
console.log(menuKantin);
console.log("Makanan favorit: " + menuKantin[0]);

// Soal 2.4 (Studi Kasus: Profil Komprehensif Siswa - Object):
// Buat sebuah object bernama `profilSantri` yang memiliki properti:
// - nama: "Fahmi"
// - umur: 16
// - kelas: "10A"
// - hobi: ["Membaca", "Coding", "Futsal"] (array di dalam object)
// Tambahkan properti baru ke object tersebut: `asrama` dengan nilai "Gedung Al-Fatih".
// Tampilkan ke console: nama siswa dan hobi keduanya (indeks ke-1)!
let profilSantri = {
  nama: "Fahmi",
  umur: 16,
  kelas: "10A",
  hobi: ["Membaca", "Coding", "Futsal"]
};
profilSantri.asrama = "Gedung Al-Fatih";
console.log(profilSantri.nama);
console.log(profilSantri.hobi[1]);

// Soal 2.5 (Studi Kasus: Simulasi Input Usia Pengunjung):
// Tuliskan kode (boleh dalam bentuk komentar aktif atau langsung):
// Gunakan `prompt()` untuk meminta user memasukkan tahun lahir, ubah hasilnya menjadi tipe number menggunakan `parseInt()`.
// Hitung umur user (tahun sekarang 2026 dikurangi tahun lahir), lalu tampilkan hasilnya menggunakan `alert()`:
// "Umur Anda saat ini adalah: [hasil_umur] tahun"!
const tahunLahir = parseInt(prompt("Masukkan tahun lahir Anda:"), 10);
const umurPengunjung = 2026 - tahunLahir;
alert(`Umur Anda saat ini adalah: ${umurPengunjung} tahun`);

// ==============================================================================
// BAGIAN 3: PERTEMUAN 3 (Konversi Tipe Data, Truthy/Falsy, Aritmatika, Penugasan, & Perbandingan)
// ==============================================================================

// Soal 3.1 (Studi Kasus: Transaksi Struk Kasir - Konversi Tipe Data):
// Diberikan variabel `kodeTransaksi` = 1205. Ubah variabel tersebut menjadi string menggunakan .toString() lalu gabungkan dengan teks "TRX-", sehingga menjadi "TRX-1205".
// Diberikan juga variabel `stringHarga` = "45000". Ubah menjadi number menggunakan Number(), lalu tambahkan dengan 5000 (biaya admin). Cetak total akhir ke console!
let kodeTransaksi = 1205;
const kodeTransaksiTeks = "TRX-" + kodeTransaksi.toString();
console.log(kodeTransaksiTeks);
let stringHarga = "45000";
const totalHarga = Number(stringHarga) + 5000;
console.log(totalHarga);

// Soal 3.2 (Studi Kasus: Validasi Nilai Truthy dan Falsy):
// Buat pengecekan boolean dengan Boolean() untuk 5 nilai berikut di console:
// 1. Boolean(0)
// 2. Boolean("")
// 3. Boolean(null)
// 4. Boolean("Belajar JS")
// 5. Boolean(100)
// Tuliskan di console apakah masing-masing bernilai true (Truthy) atau false (Falsy)!
console.log("Boolean(0):", Boolean(0), "(Falsy)");
console.log('Boolean(""):', Boolean(""), "(Falsy)");
console.log("Boolean(null):", Boolean(null), "(Falsy)");
console.log('Boolean("Belajar JS"):', Boolean("Belajar JS"), "(Truthy)");
console.log("Boolean(100):", Boolean(100), "(Truthy)");

// Soal 3.3 (Studi Kasus: Belanja di Koperasi Sekolah - Operator Aritmatika):
// Siti membeli 4 buah buku tulis seharga Rp 5.000 per buku dan 2 buah pulpen seharga Rp 3.000 per pulpen.
// 1. Hitung total harga belanjaan Siti menggunakan perkalian (*) dan penjumlahan (+).
// 2. Koperasi memberikan diskon potongan harga sebesar Rp 2.500. Hitung total bayar akhir setelah diskon (-).
// 3. Siti membawa 17 permen untuk dibagikan kepada 4 temannya secara merata. Hitung sisa permen yang tidak habis terbagi menggunakan modulus (%)!
// 4. Tampilkan juga hasil dari 2 pangkat 5 (**) ke console!
const totalBelanjaSiti = (4 * 5000) + (2 * 3000);
const totalBayarSiti = totalBelanjaSiti - 2500;
const sisaPermen = 17 % 4;
console.log("Total belanja: Rp " + totalBelanjaSiti);
console.log("Total bayar setelah diskon: Rp " + totalBayarSiti);
console.log("Sisa permen: " + sisaPermen);
console.log("2 pangkat 5: " + (2 ** 5));

// Soal 3.4 (Studi Kasus: Buku Kas Tabungan - Operator Penugasan / Assignment):
// Tabungan awal Budi di dompet digital adalah Rp 50.000 (variabel `saldo = 50000`).
// Gunakan operator penugasan secara bertahap:
// 1. Budi mendapat uang saku tambahan Rp 25.000 (gunakan `+=`).
// 2. Budi membeli jajan seharga Rp 15.000 (gunakan `-=`).
// 3. Uang yang tersisa diinvestasikan dan menghasilkan keuntungan 2 kali lipat (gunakan `*=`).
// Tampilkan nilai saldo akhir Budi ke console!
let saldo = 50000;
saldo += 25000;
saldo -= 15000;
saldo *= 2;
console.log("Saldo akhir Budi: Rp " + saldo);

// Soal 3.5 (Studi Kasus: Verifikasi Ketat Sistem - Loose vs Strict Comparison):
// Diberikan variabel `skorA` = 10 (tipe number) dan `skorB` = '10' (tipe string).
// 1. Bandingkan `skorA == skorB` dan cetak hasilnya ke console (apa hasilnya dan mengapa?).
// 2. Bandingkan `skorA === skorB` dan cetak hasilnya ke console (apa hasilnya dan mengapa?).
// 3. Bandingkan `skorA !== skorB` dan cetak hasilnya ke console!
const skorA = 10;
const skorB = "10";
console.log(skorA == skorB);
console.log(skorA === skorB);
console.log(skorA !== skorB);

// ==============================================================================
// BAGIAN 4: PERTEMUAN 4 (Operator Logika &&, ||, !)
// ==============================================================================

// Soal 4.1 (Studi Kasus: Izin Pembuatan SIM Motor - Operator &&):
// Syarat membuat SIM C adalah usia minimal 17 tahun DAN dinyatakan lulus ujian praktek (lulusPraktek = true).
// Diketahui Rian berusia 18 tahun dan nilai lulusPraktek bernilai true.
// Tentukan apakah Rian berhak mendapatkan SIM menggunakan operator && dan simpan hasilnya di variabel `dapatSim`!
const usiaRian = 18;
const lulusPraktek = true;
const dapatSim = usiaRian >= 17 && lulusPraktek;
console.log(dapatSim);

// Soal 4.2 (Studi Kasus: Autentikasi Login Akun Ujian - Operator &&):
// Seorang siswa hanya dapat login ke ruang ujian jika username bernilai "siswa10A" DAN token bernilai "PAS2026".
// Jika seorang siswa menginput username = "siswa10A" dan token = "PAS2025", tentukan apakah status login berhasil menggunakan operator &&!
const username = "siswa10A";
const token = "PAS2025";
const loginBerhasil = username === "siswa10A" && token === "PAS2026";
console.log(loginBerhasil);

// Soal 4.3 (Studi Kasus: Tiket Masuk Edupark - Operator ||):
// Wahana wisata edukasi memberikan tiket masuk gratis jika pengunjung berusia balita (kurang dari 5 tahun) ATAU berstatus penyandang disabilitas (isDisabilitas = true).
// Jika seorang pengunjung berusia 4 tahun dan isDisabilitas = false, tentukan apakah pengunjung tersebut mendapatkan tiket gratis menggunakan operator ||!
const usiaPengunjung = 4;
const isDisabilitas = false;
const tiketGratis = usiaPengunjung < 5 || isDisabilitas;
console.log(tiketGratis);

// Soal 4.4 (Studi Kasus: Sistem Keamanan Laboratorium Komputer - Operator !):
// Alarm pengaman pintu lab akan menyala jika status pintu TIDAK terkunci (!isTerkunci).
// Jika saat ini variabel `isTerkunci` bernilai false (artinya pintu terbuka), tentukan apakah alarm berbunyi menggunakan operator NOT (!)!
const isTerkunci = false;
const alarmBerbunyi = !isTerkunci;
console.log(alarmBerbunyi);

// Soal 4.5 (Studi Kasus: Beasiswa Prestasi Sekolah - Kombinasi &&, ||, !):
// Santri berhak menerima beasiswa jika:
// Memiliki nilai rata-rata ujian minimal 90 ATAU memenangkan lomba tahfidz (juaraTahfidz = true),
// DAN santri tersebut TIDAK sedang menjalani sanksi pelanggaran asrama (!kenaSanksi).
// Jika Ahmad memiliki nilai ujian 92, juaraTahfidz = false, dan kenaSanksi = false, tentukan apakah Ahmad berhak menerima beasiswa!
const nilaiAhmad = 92;
const juaraTahfidz = false;
const kenaSanksi = false;
const berhakBeasiswa = (nilaiAhmad >= 90 || juaraTahfidz) && !kenaSanksi;
console.log(berhakBeasiswa);

// ==============================================================================
// BAGIAN 5: PERTEMUAN 5 (Unary, Percabangan if, if-else, if-else if, dan switch-case)
// ==============================================================================

// Soal 5.1 (Studi Kasus: Antrean Layanan Kesehatan - Operator Unary):
// Diberikan variabel `nomorAntrean` = 15.
// Lakukan proses pemanggilan berikutnya dengan increment (`++`), lalu tampilkan nilainya.
// Setelah itu, karena ada 1 orang yang membatalkan nomor antrean, lakukan decrement (`--`), lalu tampilkan nilainya!
let nomorAntrean = 15;
nomorAntrean++;
console.log(nomorAntrean);
nomorAntrean--;
console.log(nomorAntrean);

// Soal 5.2 (Studi Kasus: Pengecekan KKM Ujian - if - else):
// Diberikan variabel `nilaiUjian` = 73.
// Jika nilai minimal 75, tampilkan ke console: "Tuntas: Selamat, Anda Lulus KKM!".
// Selain itu, tampilkan: "Belum Tuntas: Silakan mengikuti remedial pekan depan!".
const nilaiUjian = 73;
if (nilaiUjian >= 75) {
  console.log("Tuntas: Selamat, Anda Lulus KKM!");
} else {
  console.log("Belum Tuntas: Silakan mengikuti remedial pekan depan!");
}

// Soal 5.3 (Studi Kasus: Klasifikasi Nilai Raport - if - else if - else):
// Diberikan variabel `skorAkhir` = 83.
// Buat percabangan untuk menentukan predikat huruf:
// - Jika skor >= 90, predikat = "A (Sangat Baik)"
// - Jika skor >= 80, predikat = "B (Baik)"
// - Jika skor >= 70, predikat = "C (Cukup)"
// - Selain itu, predikat = "D (Perlu Bimbingan)"
// Cetak predikat akhir ke console!
const skorAkhir = 83;
let predikat;
if (skorAkhir >= 90) {
  predikat = "A (Sangat Baik)";
} else if (skorAkhir >= 80) {
  predikat = "B (Baik)";
} else if (skorAkhir >= 70) {
  predikat = "C (Cukup)";
} else {
  predikat = "D (Perlu Bimbingan)";
}
console.log(predikat);

// Soal 5.4 (Studi Kasus: Sensor Pendeteksi Angka - Ganjil, Genap, atau Nol):
// Diberikan variabel `bilangan` = 14.
// Buat kondisi percabangan:
// - Jika bilangan === 0, cetak "Bilangan Nol"
// - Jika sisa bagi bilangan dengan 2 adalah 0 (`bilangan % 2 === 0`), cetak "Bilangan Genap"
// - Selain itu, cetak "Bilangan Ganjil"!
const bilangan = 14;
if (bilangan === 0) {
  console.log("Bilangan Nol");
} else if (bilangan % 2 === 0) {
  console.log("Bilangan Genap");
} else {
  console.log("Bilangan Ganjil");
}

// Soal 5.5 (Studi Kasus: Menu Hari Piket Asrama - switch - case):
// Diberikan variabel `nomorHari` = 3 (1 = Senin, 2 = Selasa, 3 = Rabu, 4 = Kamis, 5 = Jum'at, 6 = Sabtu, 7 = Ahad).
// Buatlah struktur switch-case:
// - case 1 s.d. 5: Tampilkan "Hari Sekolah dan Kegiatan Belajar"
// - case 6: Tampilkan "Hari Olahraga dan Kerja Bakti Lingkungan"
// - case 7: Tampilkan "Hari Kunjungan Orang Tua dan Istirahat"
// - default: Tampilkan "Nomor hari tidak valid (masukkan angka 1 - 7)"!
const nomorHari = 3;
switch (nomorHari) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Hari Sekolah dan Kegiatan Belajar");
    break;
  case 6:
    console.log("Hari Olahraga dan Kerja Bakti Lingkungan");
    break;
  case 7:
    console.log("Hari Kunjungan Orang Tua dan Istirahat");
    break;
  default:
    console.log("Nomor hari tidak valid (masukkan angka 1 - 7)");
}

// Soal 5.6 (Studi Kasus: Pengelompokan Kategori Makanan Sehat - switch case grouping):
// Diberikan variabel `pilihanMakanan` = "salad".
// Gunakan switch case dengan pengelompokan (grouping case):
// - Jika "salad" atau "jus buah" -> Tampilkan: "Pilihan Sangat Sehat: Kaya Nutrisi dan Vitamin!"
// - Jika "burger" atau "gorengan" -> Tampilkan: "Pilihan Kurang Sehat: Batasi konsumsi minyak dan lemak!"
// - default -> Tampilkan: "Menu makanan tidak terdaftar di database kantin sehat."
const pilihanMakanan = "salad";
switch (pilihanMakanan) {
  case "salad":
  case "jus buah":
    console.log("Pilihan Sangat Sehat: Kaya Nutrisi dan Vitamin!");
    break;
  case "burger":
  case "gorengan":
    console.log("Pilihan Kurang Sehat: Batasi konsumsi minyak dan lemak!");
    break;
  default:
    console.log("Menu makanan tidak terdaftar di database kantin sehat.");
}

// ==============================================================================
// BAGIAN 6: PERTEMUAN 6 (Perulangan for, while, do-while, & Percabangan di dalam Loop)
// ==============================================================================

// Soal 6.1 (Studi Kasus: Hitung Mundur Peluncuran Roket Sains - for loop mundur):
// Gunakan for loop untuk menampilkan hitungan mundur dari angka 10 sampai 1 ke console.
// Tepat setelah perulangan selesai, tampilkan pesan: "Roket Sains Berhasil Meluncur ke Angkasa!"!
for (let hitungMundur = 10; hitungMundur >= 1; hitungMundur--) {
  console.log(hitungMundur);
}
console.log("Roket Sains Berhasil Meluncur ke Angkasa!");

// Soal 6.2 (Studi Kasus: Pemanggilan Barisan Siswa Bernomor Ganjil - for loop & modulus):
// Guru memanggil siswa dengan nomor urut 1 sampai 15. Namun, guru hanya ingin memanggil siswa yang memiliki nomor urut GANJIL.
// Gunakan for loop dan seleksi kondisi modulus (i % 2 !== 0) untuk menampilkan:
// "Memanggil siswa nomor urut: [i]" ke console!
for (let nomorSiswa = 1; nomorSiswa <= 15; nomorSiswa++) {
  if (nomorSiswa % 2 !== 0) {
    console.log(`Memanggil siswa nomor urut: ${nomorSiswa}`);
  }
}

// Soal 6.3 (Studi Kasus: Inspeksi Armada Mobil Sekolah - for loop dengan kondisi bertingkat):
// Sekolah memiliki 10 mobil dinas (nomor 1 sampai 10).
// Buat perulangan for dari 1 sampai 10:
// - Jika mobil nomor 4: Tampilkan "Mobil 4 sedang berada di bengkel untuk servis rutin"
// - Jika mobil nomor 8: Tampilkan "Mobil 8 sedang dipinjam untuk keperluan dinas luar"
// - Selain itu: Tampilkan "Mobil [nomor] siap beroperasi mengantar santri"!
for (let nomorMobil = 1; nomorMobil <= 10; nomorMobil++) {
  if (nomorMobil === 4) {
    console.log("Mobil 4 sedang berada di bengkel untuk servis rutin");
  } else if (nomorMobil === 8) {
    console.log("Mobil 8 sedang dipinjam untuk keperluan dinas luar");
  } else {
    console.log(`Mobil ${nomorMobil} siap beroperasi mengantar santri`);
  }
}

// Soal 6.4 (Studi Kasus: Pengisian Galon Air Asrama - while loop):
// Volume awal air galon adalah 0 liter (variabel `volumeAir = 0`).
// Kapasitas maksimum galon adalah 5 liter.
// Gunakan `while` loop untuk mengisi galon liter demi liter (tambah 1 setiap putaran) selama `volumeAir < 5`.
// Cetak setiap penambahan liter ke console: "Mengisi air... saat ini volume: [volumeAir] Liter".
// Di luar loop, cetak: "Galon sudah terisi penuh!"!
let volumeAir = 0;
while (volumeAir < 5) {
  volumeAir++;
  console.log(`Mengisi air... saat ini volume: ${volumeAir} Liter`);
}
console.log("Galon sudah terisi penuh!");

// Soal 6.5 (Studi Kasus: Pemanasan Mesin Generator Listrik - do...while loop):
// Generator cadangan asrama harus melakukan pemanasan mesin minimal 1 kali putaran uji coba meskipun indikator `daya` awalnya bernilai 10.
// Buat variabel `daya = 10`.
// Gunakan `do...while` loop untuk mencetak "Mesin generator berhasil diuji pada putaran daya ke-[daya]" lalu naikkan daya (daya++),
// dengan kondisi while `daya < 10` (kondisi langsung bernilai false).
// Buktikan bahwa blok di dalam do tetap dijalankan minimal 1 kali!
let daya = 10;
do {
  console.log(`Mesin generator berhasil diuji pada putaran daya ke-${daya}`);
  daya++;
} while (daya < 10);

// ==============================================================================
// BAGIAN 7: PERTEMUAN 7 (Function: Deklarasi, Parameter, Default Parameter, & Geometri)
// ==============================================================================

// Soal 7.1 (Studi Kasus: Bel Pagi Otomatis - Function Sederhana):
// Buat sebuah function bernama `bunyikanBelSekolah()` tanpa parameter.
// Ketika fungsi dipanggil, fungsi tersebut akan mencetak pesan ke console:
// "Teng! Teng! Teng! Waktu belajar di kelas 10A telah dimulai. Harap tertib!"
// Panggil function tersebut 1 kali untuk mengujinya!
function bunyikanBelSekolah() {
  console.log("Teng! Teng! Teng! Waktu belajar di kelas 10A telah dimulai. Harap tertib!");
}
bunyikanBelSekolah();

// Soal 7.2 (Studi Kasus: Mesin Kasir Mini - Function Parameter Aritmatika):
// Buat 4 buah function yang masing-masing menerima dua parameter (a, b):
// 1. `tambah(a, b)` -> mencetak hasil penjumlahan a + b
// 2. `kurang(a, b)` -> mencetak hasil pengurangan a - b
// 3. `kali(a, b)`   -> mencetak hasil perkalian a * b
// 4. `bagi(a, b)`   -> mencetak hasil pembagian a / b
// Ujilah masing-masing function tersebut dengan angka contoh bebas (misal a = 20, b = 5)!
function tambah(a, b) {
  console.log(a + b);
}

function kurang(a, b) {
  console.log(a - b);
}

function kali(a, b) {
  console.log(a * b);
}

function bagi(a, b) {
  console.log(a / b);
}

tambah(20, 5);
kurang(20, 5);
kali(20, 5);
bagi(20, 5);

// Soal 7.3 (Studi Kasus: Putaran Lari Pagi - Function dengan Default Parameter):
// Buat sebuah function bernama `lariKelilingLapangan(jumlahPutaran = 3)`.
// Fungsi ini memiliki default parameter `jumlahPutaran` bernilai 3 jika tidak ada argumen yang dikirimkan.
// Di dalam function, lakukan perulangan dari 1 sampai `jumlahPutaran` untuk mencetak: "Lari putaran ke-[i] selesai!".
// Uji fungsi ini dua kali:
// 1. Panggil `lariKelilingLapangan()` tanpa mengirimkan argumen (akan menjalankan default 3 putaran).
// 2. Panggil `lariKelilingLapangan(5)` dengan mengirimkan argumen 5 putaran!
function lariKelilingLapangan(jumlahPutaran = 3) {
  for (let putaran = 1; putaran <= jumlahPutaran; putaran++) {
    console.log(`Lari putaran ke-${putaran} selesai!`);
  }
}

lariKelilingLapangan();
lariKelilingLapangan(5);

// Soal 7.4 (Studi Kasus: Konsultan Desain Lapangan - Function Rumus Bangun Datar):
// Buat dua buah function perhitungan bangun datar:
// 1. `hitungLuasPersegiPanjang(panjang, lebar)`: Menghitung luas (panjang * lebar), lalu cetak hasilnya ke console!
// 2. `hitungLuasSegitiga(alas, tinggi)`: Menghitung luas segitiga ((alas * tinggi) / 2), lalu cetak hasilnya ke console!
// Uji function persegi panjang dengan panjang = 10 dan lebar = 6.
// Uji function segitiga dengan alas = 12 dan tinggi = 8!
function hitungLuasPersegiPanjang(panjang, lebar) {
  console.log(panjang * lebar);
}

function hitungLuasSegitiga(alas, tinggi) {
  console.log((alas * tinggi) / 2);
}

hitungLuasPersegiPanjang(10, 6);
hitungLuasSegitiga(12, 8);

// Soal 7.5 (Studi Kasus Terpadu: Program Kasir Diskon Koperasi Sekolah):
// Buat sebuah function terpadu bernama `hitungTotalKoperasi(namaPelanggan, totalBelanja, isMember)`.
// Aturan diskon:
// - Jika `isMember` === true DAN `totalBelanja` >= 100000, pelanggan mendapat diskon 15% (totalBayar = totalBelanja * 0.85).
// - Jika `isMember` === true DAN `totalBelanja` < 100000, pelanggan mendapat diskon 5% (totalBayar = totalBelanja * 0.95).
// - Jika BUKAN member (`isMember` === false), tidak ada diskon (totalBayar = totalBelanja).
// Tampilkan ringkasan struk ke console menggunakan template literals:
// "Pelanggan: [namaPelanggan] | Member: [isMember] | Total Akhir: Rp [totalBayar]"
// Uji fungsi dengan 2 skenario:
// 1. hitungTotalKoperasi("Azzam", 120000, true)
// 2. hitungTotalKoperasi("Baim", 80000, false)
function hitungTotalKoperasi(namaPelanggan, totalBelanja, isMember) {
  let totalBayar = totalBelanja;

  if (isMember === true && totalBelanja >= 100000) {
    totalBayar = totalBelanja * 0.85;
  } else if (isMember === true) {
    totalBayar = totalBelanja * 0.95;
  }

  console.log(`Pelanggan: ${namaPelanggan} | Member: ${isMember} | Total Akhir: Rp ${totalBayar}`);
}

hitungTotalKoperasi("Azzam", 120000, true);
hitungTotalKoperasi("Baim", 80000, false);

// ==============================================================================
//                           AKHIR DARI SUBMISSION
//             Selamat Mengerjakan & Terus Semangat Belajar Javascript!
// ==============================================================================
