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




