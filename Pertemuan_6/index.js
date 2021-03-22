//Nama : Suak Rolando Hance
//NIM  : S21910305
// Exercise#1

//Arrays Exercise
let people = ["Greg", "Mary", "Devon", "James"];

//NO 1
for (let i =cd0; i < people.length; i++) {
    console.log(people[i]);
}

//No 2
people.forEach(function (data) {
    console.log(data)
  });

//No 3
people.shift();
console.log(people);
  
//No 4
people.pop();
console.log(people);

//No 5
people.unshift("Matt");
console.log(people);

//No 6
people.push("Rolando");
console.log(people);

//No 7
let i;
for (i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (i="Mary") {
        break;
    } 
}

//No 8
let copy = people.slice(2);
console.log(copy);

//No 9
let people1 = ["Greg", "Mary", "Devon", "James"];

people1.splice(2, 1, "Elizabeth", "Artie");
console.log(people1);

//No 10
let withBob = ["Bob"];

let newPeople = people1.concat(withBob);
console.log(newPeople);

//Object Exercise

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//No 1
programming.languages.push ("Go");
console.log(programming.languages);

//No 2
programming.difficulty = 7;
console.log(programming.difficulty);

//No 3
delete programming.jokes;
console.log(programming.jokes);

//No 4
programming.isFun = true;
console.log(programming.isFun);

//No 5
let newLanguages = programming.languages.map(function (value, index) 
{
    return index, value;
    
});
console.log(newLanguages);
