// const title = document.getElementById("title");
// const name = document.querySelector(".name");
// const image = document.querySelector(".image-wrapper img");
// const cars = document.querySelectorAll(".car-item");
// const section = document.querySelector("section");
// const button = document.getElementById("button-toggle-theme");
// title.innerText = "Contact List - Java Script";
// console.log(title.innerText);

// console.log(name.innerText);
// console.log(image);
// console.log(cars[0].innerText);


// title.style.color ="#ec42f5";
// title.style.fontSize = "70px";

// section.classList.add("main-content");

// let theme="light";

// button.addEventListener("click", function(){
//     if(theme=="light"){
//         document.body.style.backgroundColor="black";
//         document.body.style.color = "white";
//         theme="dark";
//     }else{
//         document.body.style.backgroundColor="white";
//         document.body.style.color = "black";
//         theme="light";
//     }
// });





const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");

    if (name.value.trim() === "" || phone.value.trim() === "") {
        alert("nama dan nomorhp jangan kosong");
        return;
    }

    console.log("Nama: " + name.value);
    console.log("Phone: " + phone.value);
});