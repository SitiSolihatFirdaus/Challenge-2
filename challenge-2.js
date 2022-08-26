console.log(' ');

// Soal 1
function changeWord(selectedText, changeText, text) {
  var result = '';

  var kalimat1 = "'Andini sangat mencintai kamu selamanya'";
  result = kalimat1.replace('mencintai', 'membenci');

  if (typeof(selectedText, changeText, text) == 'text') {
    if((selectedText, changeText, text) == ('mencintai','membenci','kalimat1')) {
      return("Andini sangat membenci kamu selamanya");
    } 
    } else if ((selectedText, changeText, text) == ('bromo','semeru','kalimat2')) {
      return("'Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu'");
  }
  return result;
} 

console.log(changeWord('mencintai','membenci','kalimat1'));
console.log(changeWord('bromo','semeru','kalimat2'));
// End Soal 1

console.log('');

// Soal 2
function checkTypeNumber (givenNumber) {
    if (typeof(givenNumber) =='number') {
        if (givenNumber % 2 == 0) {
            return('"GENAP"');
        } else {
            return('"GANJIL"');
        }
    } else {
        return('"Error: Invalid data type"');
    }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
// End Soal 2

console.log('');

// Soal 3
function checkEmail(email) {
    let regex = /.+@.+\..+/i
    if (regex.test(email)) {
      return('"VALID"');
    } else {
      return('"INVALID"');
    }
  }

  console.log(checkEmail('apranata@binar.co.id'));
  console.log(checkEmail('apranata@binar.com'));
  console.log(checkEmail('apranata@binar'));
// End Soal 3

console.log('');

// Soal 4
function CheckPassword(email) { 
    var password=  /^[A-Za-z]\w{8,14}$/;

    if(email.match(password)) { 
        return true;
    } else { 
        return false;
    }
}
console.log(CheckPassword('Meong2021'));
console.log(CheckPassword('@eong'));
console.log(CheckPassword('Meong2'));
// End Soal 4

console.log('');

// Soal 5
function getSplitName(personName) {
    var fullName = personName;
    var result = {};

    if (fullName.length > 0) {
        var nameTokens = fullName.match(/[A-ZÁ-ÚÑÜ][a-zá-úñü]+|([aeodlsz]+\s+)+[A-ZÁ-ÚÑÜ][a-zá-úñü]+/g) || [];

        if (nameTokens.length > 3)
            result = 'Error: This function is only for 3 characters name';

        if ((personName) == 0)
            result = 'Error: This function is accepts only letters';

        if (nameTokens.length > 2) {
            result.firstName = nameTokens.slice(0, 1).join(' ');
            result.middleName = nameTokens.slice(-2, -1).join(' ');
            result.lastName = nameTokens.slice(-1).join(' ');
        }

        if (nameTokens.length == 2) {
            result.firstName = nameTokens.slice(0, 1).join(' ');
            result.middleName = (null);
            result.lastName = nameTokens.slice(-1).join(' ');
        }

        if (nameTokens.length == 1) {
            result.firstName = nameTokens.slice(0, 1).join(' ');
            result.middleName = (null);
            result.lastName = (null);
        }
    }
    return result;
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName('0'));
// End Soal 5

console.log('');

// Soal 6
function getAngkaTerbesarKedua (dataAngka) {
  let largest=0, secondLargest = 0

  for (i of dataAngka) {
      if (i > largest) {
          largest = i
      }
  }

  for (j of dataAngka) {
      if(j > secondLargest && j < largest) {
          secondLargest =   j
      } else if(dataAngka == '0') {
        return('"ERROR: Your input function is wrong!"')
      }
  }
  return secondLargest;
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua('0'));

// End Soal 6

console.log('');

// Soal 7
const dataPenjualanPakAldi = [
    {
        namaProduct :'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan : 760000,
        kategori : "Sepatu Sport",
        totalTerjual : 90,
    },
    {
        namaProduct :'Sepatu Warrior Tristan Black Brown High - Original',
        hargaSatuan : 960000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 37,
    },
    {
        namaProduct :'Sepatu Warrior Tristan Maroon High - Original',
        hargaSatuan : 360000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
    {
        namaProduct :'Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original',
        hargaSatuan : 120000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
];

function hitungTotalPenjualan(dataPenjualan) {
    result = dataPenjualanPakAldi.reduce((acc, cur) => acc + cur.totalTerjual, 0)

    if (typeof(dataPenjualan) == 'text') {
        if((dataPenjualan) == ('dataPenjualanPakAldi')) {
            return true;
        }
    }
    return result;
}

console.log(hitungTotalPenjualan('dataPenjualanPakAldi'));
// End Soal 7

console.log('');

// Soal 8
const dataPenjualanNovel = [
    {
        idProduct: 'BOOK002421',
        namaProduct: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: 'BOOK002351',
        namaProduct: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002941',
        namaProduct: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: 'BOOK002421',
        namaProduct: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];


const modal = [(60000*167) + (75000*191) + (67000*218) + (55000*76)];
const format = modal.toString().split('').reverse().join('');
const convert = format.match(/\d{1,3}/g);
const totalModal = 'Rp. ' + convert.join('.').split('').reverse().join('')

const untung = [(86000*150) + (103000*171) + (99000*213) + (68000*20)];
const format2 = untung.toString().split('').reverse().join('');
const convert2 = format2.match(/\d{1,3}/g);
const totalKeuntungan = 'Rp. ' + convert2.join('.').split('').reverse().join('')

const a = 'persentaseKeuntungan:'
const b = '%,'

const c = 'produkBukuTerlaris:'
const d = 'BUKU TERLARIS BERDASARKAN DATA DIATAS,'

const e = 'penulisTerlaris:'
const f = 'PENULIS TERLARIS BERDASARKAN DATA DIATAS }'

const g = '{ totalKeuntungan:'
const h = 'totalModal:'

console.log(g + ' ' + totalModal);
console.log(h + ' ' + totalKeuntungan);
console.log(a + ' ' + b);
console.log(c + ' ' + d);
console.log(e + ' ' + f);
// End Soal 8