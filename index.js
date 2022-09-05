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







