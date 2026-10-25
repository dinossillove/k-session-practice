var name = "Chika";
const pi = 3.14;
let isGraduated = true;
let umur = "123456";
let umur2 = 123456;
let password = "123456";

let student = {
  nim: 123456,
  nama: "Aisyah",
  email: "aisyah@example.com",
};

let cars = [
  { name: "mcLaren", price: 2000000 },
  { name: "Porsche", price: 3000000 },
  { name: "Ferrari", price: 4000000 },
];

// console.log(product[product.length - 1]);
// console.log(student);
// console.log(cars[2].name);

// let age = 17;
// if (age >= 17) {
//   console.log("Anda boleh membuat KTP.");
// } else {
//   console.log("Anda belum boleh membuat KTP.");
// }

// let price = 200000;

// if (price > 200000) {
//     console.log("Diskon 20%");
// }else if (price < 50000) {
//     console.log("Diskon 10%");
// }else{
//     console.log("Anda tidak mendapatkan diskon");
// }

// let email = "chika@gmail.com";
// let role = "admin

// if (email == "admin@gmail.com" ||  role == "admin"){
//     console.log("Anda boleh mengakses dahsboar");
// }else{
//     console.log("anda tidak boelhe mengakses");
// }

// let product = ["Miyako", "Sharp", "Polytron", "Panasonic"];
// for (let   i = 0; i<=product.length ; i++){
//     console.log("Nama produk: " +product[i]);
// }

function greeting() {
  console.log("ello");
}

function calculateTriangle(a, t) {
  let result = (a * t) / 0.5;
  return result;
}

// greeting();
calculateTriangle(10, 10);

function auth(email, role) {
  if (email == "admin@gmail.com" || role == "admin") {
    console.log("Anda boleh mengakses dahsboar");
  } else {
    console.log("anda tidak boelhe mengakses");
  }
}

auth("admin@gmail.com", "admin");

//return digunakan untuk menyimoan hasiln dari function ke dalam sebuah variabel;
function login(){
    return false;
}

let isLoggedIn = login();

if (isLoggedIn){
    console.log ("Anda sudah login");
}else {
    console.log("Anda belum login");
}


// for (let   i = 2020; i<=2025 ; i++){
//     console.log("Atahun ke- " + i);
// }
