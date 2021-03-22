//Exercise 3
//1. Class

// class Orang{
//     constructor(nama, umur){
//         this.nama = nama;
//         this.umur = umur;
//     }
//     bekera(){
//         console.log(`${this.nama} sedang bekerja seperti biasa`);
//     }
// };

// const user1 = new Orang("Rolando","19 Tahun");
// user1.bekera();

//2. Inheritance
class Orang{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    tidur(){
        console.log(`${this.nama} sedang tidur`);
    }
    makan(){
        console.log(`${this.nama} sedang makan`);
    }
};

class Pelajar extends Orang{
    constructor(nama, umur, namaSekolah){
        super(nama, umur);
        this.namaSekolah = namaSekolah;
    }
    belajar(){
        console.log(`${this.nama} belajat di ${this.namaSekolah}`);
    }
};

const user = new Pelajar("Jhon","17","Unklab");
console.log(user);
user.belajar();