// // ? ===========================
// // ?        FUNCTIONS
// // ? ============================

// console.log("** FUNC DECLARATION **")

// //* ORNEK1:
// //*******************************/
// //! Bir fonks deklare ettik
// //? void fonksiyon(return'u olmayan fonksiyon,diğer ifade cagrildi yere bir deger dondurmeyen fonskyon)
// //? parametresi olmayan fonksiyon

// // function topla() {
// //     let a = 5
// //     let b = 10
// //     let sonuc = a + b
// //     console.log(sonuc);
// // }

// topla()//! invoke, calling
// topla()

// for (let i = 0; i < 3; i++) {
//     topla()
// }

// //? parametreli fonksiyon tanımlaması
// // function carp(s1, s2) {
// //   console.log(s1 * s2)
// // }
// // let s1 = +prompt("S1:")
// // let s2 = +prompt("S2:")
// // carp(s2, s1)

// // carp(5, true)

// //? Ornek: Parametreli
// //? default parametre ile bos bırakılan parametre yerine bir deger atanmis olunur.

// function yazdir(lang = "Hello", name = "noname") {
//     console.log(`${lang} ${name}`);
// }

// yazdir("hello", "Ahmet")
// yazdir("Hallo", "Canan")
// yazdir()

//? veri donduren (return) fonksiyonlar.

// function bol(a, b) {
//     const res = a / b
//     return res
// }
// let sonuc = bol(10, 2)
// console.log("SONUC=", sonuc);

//? Ornek:Tek-Cift
//? Console'dan girilen bir sayinin tek veya cift oldgunu
//? hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar ile yaziniz.

// function tekVeyaCift(num) {
//     return num % 2 === 0 ? "CIFT" : "TEK"
// }

// const sayi = Number(prompt("Bir sayi giriniz:"))
// console.log(`${sayi} ${tekVeyaCift(sayi)}dır`);

// //? 1. Yöntemdeki fonksiyon konumu
// yaz()

// //? hoisted fonksiyon (Yukarı taşınıyor)
// function yaz() {
//     console.log("Merhaba");
// }

// yaz()
// yaz()

/// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** ARROW ****")

//* ORNEK: paramteresiz, donussuz
//***********************************************/
// yaz()  //! error

const yaz = () => console.log("Hello JS");
yaz()

//* ORNEK: paramterli, ve donus degerli
//***********************************************/
const kareAl = (num) => num * num
console.log("Kare:", kareAl(4));

//* ORNEK: birden fazla ifade(expression) icerirse
//***********************************************/

//? arrow fonksiyonlarda eger fonksiyon birden fazla islem icerirse
//? o zaman süslü parantez kullanilmasi gerekmektedir.
//? Süslü parantez kullanildiginda arrow fonksiyonlarinin otomatik
//? returning ozelligi kaybolour. Bu sebeple eger donus isteniyorsa
//? return kullanilmalidir.

const hesapla = (x, y) => {
    const toplam = x + y
    const carpim = x.y
    const sonuc = carpim / toplam
    return sonuc
}
console.log("SONUC:", hesapla(4, 2));

//* ORNEK: Doğum tarihini parametre olarak alan ve ana
//* programa yaşı hesaplayıp döndüren fonksiyonu yazınız.
//******************************************************/
const yasHesapla = (dob) => new Date().getFullYear() - dob

console.log("YAS:", yasHesapla(1990));

//* ORNEK: Silindir Hacmi
//******************************************/
//? pi*r*r*h

const silindirHacim = (r, h) => Math.PI * r * r * h
console.log(`Hacim=${silindirHacim(2, 3)}`);

//* ORNEK: Bir fonksiyon icerisinde baska fonksiyonlar cagrilabilir
//* (Hesap Makinası)
//**************************************************/
const topla = (a, b) => a + b
const cikar = (a, b) => a - b
const carp = (a, b) => a * b
const bol = (a, b) => a / b

const hesapMakinasi = (num1, num2, op) => {
    let result = 0
    switch (op) {
        case "+":
            result = topla(num1, num2)
            break
        case "-":
            result = cikar(num1, num2)
            break
        case "*":
            result = carp(num1, num2)
            break
        case "/":
            result = bol(num1, num2)
            break
        default:
            alert("Yanlış operatör girişi")
            break
    }

    return result
}

const num1 = +prompt("1. Sayı:")
const op = prompt("İşlemi giriniz: +,-,*,/:")
const num2 = +prompt("2. Sayı:")

console.log(`${num1}${op}${num2} = ${hesapMakinasi(num1, num2, op)}`)
