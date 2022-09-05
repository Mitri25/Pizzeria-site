// HTML for headers
const header = document.querySelector('.header-container')
fetch('/html/header.html')
    .then(content => content.text())
    .then(content => {
        header.innerHTML = content
    });



// HTML for footers
const footer = document.querySelector('.footer-container')
fetch('/html/footer.html')
    .then(content => content.text())
    .then(content => {
        footer.innerHTML = content
    });


// ------------------test button------------------

// const testButtton = document.getElementById("testButton");
// testButtton.addEventListener("click", () => testButton.value = "clicked");
// testButtton.addEventListener("click", () => alert("You clicked"));
// testButtton.addEventListener("click", () => {
//     if (testButton.value == "button") {
//         testButtton.value = "done";
//     }
//     else if (testButton.value == "done") {
//         testButtton.value = "button";
//     }
// });



//-----------------cart------------------

// const addToCart = document.getElementsByClassName('add-to-cart-button');


// for (var i = 0; i < addToCart.length; i++) {
//     addToCart[i].addEventListener('click', createCartItem);
// }

// function createCartItem() {
//     const cartList = document.getElementById('cart-list');
//     const createListItem = document.createElement('li');
//     cartList.appendChild(createListItem);


//     createListItem.innerHTML = `<p>pizza name test</p>
//                                 <p>priceeee</p>
//                                 <div>
//                                 <span>quantity:</span>
//                                 <input type="number" class="quantity" min="1" max="15" value="1">
//                                 </div>
//                                 <button class="remove-button">remove</button>`;

// }


// ------------------trying to test buttons-----------


const addToCart = document.querySelectorAll(".add-to-cart-button");


for (var i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click', changeColor);
}

// changeColor();

function changeColor() {
    let cartList = document.querySelector("#cart-list");
    let createListItem = document.createElement('li');

    let cartFirstChild = cartList.firstElementChild;
    cartFirstChild.style.backgroundColor = "red";

    // createListItem.innerHTML = `<p>pizza name test</p>`



}




