
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

