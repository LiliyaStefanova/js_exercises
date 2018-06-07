const grabARandomBeer = () => {

    fetch("https://api.punkapi.com/v2/beers/random")
        .then(response => response.json())
        .then(beers => {
            //this API endpoint returns array containing one element only
            const beer = beers[0];
            const nameElement = document.createElement("h2");
            nameElement.textContent = beer.name;
            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = beer.description;
            const beerElement = document.getElementById("beer");
            //clear out previous entries
            beerElement.innerHTML = "";
            beerElement.appendChild(nameElement);
            beerElement.appendChild(descriptionElement);
        })
        .catch(err => console.log(err.message));

};

document.getElementById("grabButton").addEventListener("click", e => {
    grabARandomBeer();
});