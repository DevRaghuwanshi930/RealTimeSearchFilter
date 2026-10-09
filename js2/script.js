let btn = document.querySelector("#btn");
let body = document.querySelector("body")

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        body.style.backgroundColor = "white"
        btn.innerText = "Light Mode";
    } else {
        body.style.backgroundColor = "black"
        btn.innerText = "Dark Mode";
    }
});