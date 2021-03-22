//1. Callback

//NO a

let mandi = () => {
    console.log("Mandi");
};

//No b

// let sarapan = () => {
//     setTimeout(function () {
//       console.log("Sarapan tertunda 3 detik");
//     }, 3000);
// };

//No c

let berangkatSekolah = () => {
    console.log("Berangkat Sekolah");
}

//No d

// mandi();
// sarapan();
// berangkatSekolah();

//No e
let sarapan = (callback) => {
    setTimeout(function () {
      console.log("Sarapan tertunda 3 detik");
      callback();
    }, 3000);
};

//No f
// mandi();
// sarapan(berangkatSekolah);

//2. Promise

//No a
const helloWorld = () =>{
    return new Promise((callback) => {
        setTimeout(function callback(resolve) {
            resolve ("Hello World");  
        }, 2000)
    }
    )
};

helloWorld();

//No b

const massages = async() => {
    let helloWorld = () => "Hello World";
    msg = await helloWorld();
    console.log(msg);
};

massages();

//3. Fetch

const ambilDataUser = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        return response.json();
    })
    .then(function(users){
        console.log(users);
    });
}

ambilDataUser();



  