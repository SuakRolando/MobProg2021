//Destructing Array

let arrPerson = ['Ando', 'Suak', 19, true];

//1.cara
//let [firstName, lastName, age, isMarried] = arrPerson;

//console.log(firstName, lastName, age, isMarried);

//2.Ambil sebagian item
let [firstName, ,age] = arrPerson

console.log(firstName, age);

//3.Deklarasi dan assigment terpisah
let tipe; //deklarasi terpisah
let mobil = ["Honda", "Jazz", "Merah"];

[, ,age] = mobil;
console.log(age);

//4.Default value
let motor = [];

let [merk = "kawasaki"] = motor;
console.log(merk);

//5.Rest operator
let pesawat = ["Garuda", "Boing", "Indonesia"];

let[Brand, ...rest] = pesawat;
console.log(Brand, rest);

//Destructing Object
let sekolah = {
    tingkat: "SMA",
    kelas: 10,
    jurusan: "IPA",
};

//1.Cara
let {tingkat,jurusan} = sekolah;
console.log(tingkat, jurusan);

//2.Ambil sebagian item
let { kelas } = sekolah;    //{kelas: class} - rename

console.log(kelas);

//3.Deklarasi dan assigment terpisah 
let tipee;
let rumah = {
    tipee: "Semi Permanen",
    ukuran: "10 x 12",
    dinding: "beton",
    tinggi: 15,
};

// ({tipee} = rumah);
// console.log(tipee);

//4.Default value

let {tinggi = 12} = rumah;
console.log(tinggi);

//5.Rest Operator
let {ukuran, ...objj} = rumah;

console.log(ukuran, rest);

//Penerapan
let display = ({tipee, dinding}) => `Rumah saya ${tipee} ${dinding}`;

console.log(display(rumah));