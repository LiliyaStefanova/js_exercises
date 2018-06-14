// const url = "https://thejsway-server.herokuapp.com/articles";
const url = "http://localhost:3000/articles";
document.querySelector("form").addEventListener("submit", e=> {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch(url, {
        method:"POST",
        body:formData
    })
        .then(response => response.text())
        .then(result => {
            const confirmElement = document.createElement("p");
            confirmElement.textContent = result;
            const resultElement = document.getElementById("result");
            resultElement.appendChild(confirmElement);
        })
        .catch(err => console.log(err));
});