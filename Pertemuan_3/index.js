console.log("Hello World");

//JS Variable (membuat tempat petimpanan data)
//var Hello = "Hello World";          //ES 5

//Deklarasi variable
let hello = "hello world";          //ES 6  (bisa ditimpa/diganti)
let age = 231;                      //integer, dll
let apakahSudahenikah = true;       //boolean
let alamat;                         //belum di define
const birth = 2000;                 //ES 6

//menampilkan isi dari variable
console.log(hello);     
console.log(birth);           

//string operations
let namaDepan = "ando";
let namaBelakang = "Suak";
let namaLengkap = namaDepan + " " + namaBelakang + ". Usia saya adalah " + age;     //jika string dan number digabungkan maka tipe data akan menjadi string

console.log(namaLengkap);

//operator aritmatika (kali bagi dan kurang sama saja)
let bilangan1 = 10;
let bilangan2 = 3;

console.log(bilangan1 + bilangan2);

//assigment operator
//adition operator (kali,bagi,kurang,modulus,dll sama saja)
let bilangan = 10;
bilangan += 5;

console.log(bilangan);
//relational operatot (pembandingan)
console.log(10 == "10");        //loose equality (hanya membandingkan nilainya saja)
console.log(10 === "10");       //Strict Equality (membandingkan mulai dari nilai serta tipe datanya)

// ternary operator
const hasil = 10 % 2 === 0 ? "Genap" : "Ganjil"     //sama dengan kondisi if else tunggal
console.log(hasil);

// operator logika (&&, ||, !)
let bilangan10 = 6;
let bilangan11 = 4;

console.log(bilangan10 === 6 && bilangan11 === 4);

//function
//1. function declaration
function ucapSalam() {
    return "Selamat Siang";     //return nilai harus membuat satu variable utk meyimpan nilai yang akan di return
}
let salam = ucapSalam();
console.log(salam);
/*
    function ucapSalam(){
        return "Selamat Siang"
    }
    console.log(ucapSalam());
*/

//2. function expresion
let ucapSalam2 = function(){
    console.log("Selamat pagi");
};
ucapSalam2();

//parameter & argument
function perkalian(angka1, angka2){
    return angka1 * angka2;
}
console.log(perkalian(2, 6))