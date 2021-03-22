//JavaScript Module

//Export dan Import
//import
/*
import { fullName, person, display } from "./person.js";

console.log(fullName, person);
display(person);
*/

//import as
import { namaLengkap, orang, tampilkan } from "./person.js";

console.log(namaLengkap, orang);
tampilkan(orang);

//Import Default
import Input, { color } from "./TextInput/index.js";

console.log(Input);
console.log(color);