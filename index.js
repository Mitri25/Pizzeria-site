
const testButtton = document.getElementById("testButton");
// testButtton.addEventListener("click", () => testButton.value = "clicked");
// testButtton.addEventListener("click", () => alert("You clicked"));
testButtton.addEventListener("click", () => {
    if (testButton.value == "button") {
        testButtton.value = "done";
    }
    else if (testButton.value == "done") {
        testButtton.value = "button";
    }
});



// HTML for headers
const header = document.querySelector('.header')
fetch('/html/header.html')
    .then(content => content.text())
    .then(data => {
        header.innerHTML = data
    });



// HTML for footers
const footer = document.querySelector('.footer-container')
fetch('/html/footer.html')
    .then(content => content.text())
    .then(data => {
        footer.innerHTML = data
    });

