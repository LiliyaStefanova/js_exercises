// const fetch = require("node-fetch");

//demonstrating the use of promises and how they can be chained together
let languageList = [];
function fetchTexFile() {
    fetch(
        "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt"
    )
        .then((response) => response.text())
        .then((languages) => {
            languageList = languages.split(";");
            const languageListElement = document.getElementById("languageList");
            languageList.forEach((language) => {
                const languageElement = document.createElement("li");
                languageElement.textContent = language;
                languageListElement.appendChild(languageElement);
            });
        })
        .catch((err) => console.log(err.message));
}

window.onload  = fetchTexFile;





