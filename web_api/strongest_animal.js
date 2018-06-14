document.querySelector("form").addEventListener("submit", e=> {
    //Cancel default behaviour which is to send a synchronous POST request
    e.preventDefault();
    //Create a FormData object
    const formData = new FormData(e.target);
    //Send form data to the server with an asynchronous POST request
    fetch("http://localhost:3000/animals", {
        method:"POST",
        body: formData
    })
        .then(response => response.text())
        .then(result => {
            document.getElementById("result").textContent = result;
        })
        .catch(err => console.log(err));

});