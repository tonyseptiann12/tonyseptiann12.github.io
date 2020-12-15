// var angka = prompt('masukkan angka: ');
// if (angka % 2 === 0) {
//   alert(angka + ' bilangan GENAP');
// } else if (angka % 2 === 1) {
//   alert(angka + ' bilangan GANJIL');
// } else {
//   alert(angka + ' bukan ANGKA');
// }

for (var i = 1; i <= 10; i++) {
  if (i <= 6 && i !== 5) {
    console.log('angkot ' +i+ ' sedang beroperasi');
  } else if (i === 8 || i === 10 || i === 5) {
    console.log('angkot ' +i+ ' sedang lembur');
  } else {
    console.log('angkot ' +i+ ' sedang tidak beroperasi');
  }

}
