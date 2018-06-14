var fetch = require("node-fetch");
// const apiUrl = "https://thejsway-server.herokuapp.com/api/countries";
const apiUrl = "http://localhost:3000/api/countries";
const payload = {
    "name": "Lily",
    "countries": [
        {
            "name": "France",
            "year": 2013
        },
        {
            "name": "The Netherlands",
            "year": 2017
        },
        {
            "name": "Germany",
            "year": 2016
        }
    ]
};
fetch(apiUrl,
    {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(err => console.log(err));