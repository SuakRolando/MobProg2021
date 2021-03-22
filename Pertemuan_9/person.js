// Export
let fullName = "Rolando Suak"

let person = {
    firstName: "Jhon",
    lastName: "Doe",
    age: 17,
}

let display = (firstName, lastName) => {
     console.log(`Hello ${firstName} ${lastName}`);
};

/*
Bisa juga export langsung semua 
export {fullName, person, display};
*/

//export as 
export {fullName as namaLengkap, person as orang, display as tampilkan}