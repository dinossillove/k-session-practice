"use strict";
const form = document.querySelector("#addItem");
const inputItem = document.querySelector("#item-input");
const cartList = document.querySelector("#cart-list");
const toggleTheme = document.querySelector(".toggle-theme");
const formWrapper = document.querySelector(".form-wrapper");
const headerForm = document.querySelector("#header-form");
const labelInput = document.querySelector("#name-label");
let theme = localStorage.getItem("theme");
toggleTheme.addEventListener("click", function () {
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
        document.body.style.backgroundColor = "black";
        formWrapper.style.border = "1px solid white";
        headerForm.style.color = "white";
        labelInput.style.color = "white";
    }
    else {
        localStorage.setItem("theme", "light");
        document.body.style.backgroundColor = "white";
        formWrapper.style.border = "1px solid black";
        headerForm.style.color = "black";
        labelInput.style.color = "black";
    }
});
// event listern
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputValue = inputItem.value.trim();
    if (inputValue == "") {
        alert("Nama barang tidak boleh kosong!");
    }
    else {
        //membuat elemn baru yaitu elemen li
        const newElement = document.createElement("li");
        //tambahkan classs item-list dii elemen li yang baru dibuat
        newElement.classList.add("item-list");
        newElement.innerHTML = `
        <p>${inputValue}</p>
        <button class ="delete-item" onclick="deleteItem(this)">hapus</button>
        `;
        cartList.appendChild(newElement);
        inputItem.value = ""; // buat haspus hasil inputan
    }
});
function deleteItem(element) {
    const confirmDialog = confirm("Apakah anda yakin ingin menghapus item ini?");
    if (!confirmDialog)
        return;
    const selectedItem = element.parentElement;
    console.log(selectedItem);
    selectedItem.remove();
}
