// OOP in JavaScript
//1. Object Literal
// let mobil = {
//     merk : 'Toyota',
//     warna : 'Merah',
//     nyalakanMobil : function () {
//         console.log(`Mobil merek ${this.merk} sudah menyala`);
//     },
// };
// let mobil2 = {
//     merk : 'Honda',
//     warna : 'Merah',
//     nyalakanMobil : function () {
//         console.log(`Mobil merek ${this.merk} sudah menyala`);
//     },
// };
// mobil.nyalakanMobil();
// mobil2.nyalakanMobil();

//2. Object Class
class Mobile{
    constructor(merk, warna){
        this.merk = merk;
        this.warna = warna;
    }
    nyalakanMobil () {
        console.log(`Mobil merek ${this.merk} sudah menyala`);
    }
};

// const mobil1 = new Mobile("Jazz", "Putih");
// const mobil2 = new Mobile("Avanza", "Hitam");
// Mobile.nyalakanMobil();
// Mobile.nyalakanMobil();

//3. Inheritance
class Toyota extends Mobile{
    constructor(merk, warna, mesin){
        super(merk, warna);
        this.mesin = mesin;
    }
    //Overridding
    nyalakanMobil () {
        console.log(`Mobil merek ${this.merk} denga mesin ${this.mesin} sudah menyala`);
    }
    matikanMesin(){
        console.log(`Mobil merek ${this.merk} sudah dimatikan`);
    }
};

const agya = new Toyota("Agya", "Putih", "1000cc");
const ayla = new Toyota("Ayla","Hitam","2000cc");

agya.nyalakanMobil();
ayla.nyalakanMobil();
agya.matikanMesin();
ayla.matikanMesin();


class Button extends Comment{
    componentDidMount(){
        
    }   
    constructor(){

    }
}