//Block Scoping
let judulBuku = "Harry Potter";

if (judulBuku === "Harry Potter") {
  let pengarang = "J.K. Rowling";
}

//console.log(pengarang); // Output ReferenceError: pengarang is not defined


const person = {
    name: "Jhon",
    age: 17,
    lastName: "doe",
};

// person.name = "Ando";
// person.addres = "Kiawa"
// console.log(person);

//Operator +
let kalimat = "Hallo nama saya" + person.name + " " + person.lastName + " "+ person.age + "tahun";
//String literal
let kalimat1 = `Hallo nama saya ${person.name} ${person.lastName}, Umur saya ${person.age+1}`;

console.log(kalimat);
console.log(kalimat1);

//Deklarasi Menggunakan Arrow Function

// fungsi dengan parameter
const operasiPenjumlahan = (bilangan1, bilangan2) => {
    const hasil =  bilangan1 + bilangan2;
    return hasil;
};
  
console.log(operasiPenjumlahan(3, 4)); // Output: 7
  
// fungsi yang tidak memiliki parameter
const namaJenisAnjing = () => {
    const anjing = ["Pug", "Bulldog", "Poodle"];
    return anjing[Math.floor(Math.random()*(anjing.length))];
}
console.log(namaJenisAnjing()); // Output: Pug (hasil random)

//Implicit return value
let manusia = (nama) => `Hi ${nama}`;
console.log(['Rolando']); //output: Hi Rolando

//Default parameter
let mobil = (merk = "Honda", warna = "Merah", cc = 3000) =>{
    return `Mobil ${merk} berwarna ${warna} dengan ${cc} CC`;
};
mobil("Toyota", "Hitam");
mobil();

    
// Rest Parameter & spread operator
//1. reast parameter
const display = (parm1, parm2, ...parms) => {
    console.log(parm1, parm2, parms);
};
display(1, 2, 3, 4, 5);

//2. Spread Operator

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combineArr = arr1.concat(arr2);     //ES5
console.log(combineArr);

let combinArr = [...arr1, ...arr2, 7];      //ES6
console.log(combinArr);