const getPlanetInfo = (number) => {
    const apiUrl= "https://swapi.co/api/planets";
    fetch(`${apiUrl}/${number}`)
        .then(response => response.json())
        .then(planet => {
            const numFilmsAppearedIn = planet.films.length;
            const nameElement = document.createElement("h3");
            nameElement.textContent = planet.name;
            const detailsElement = document.createElement("p");
            detailsElement.textContent = `Climate: ${planet.climate}. Population: ${planet.population}.
            Appears in: ${numFilmsAppearedIn} films`;

            const infoElement = document.getElementById("info");
            infoElement.innerHTML = '';
            infoElement.appendChild(nameElement);
            infoElement.appendChild(detailsElement);
        })
        .catch(err => console.log(err));
};
const linksElement = document.getElementById("links");
for(let i = 1; i<=10; i++){
    const linkElement = document.createElement("button");
    const separatorElement = document.createElement("span");
    separatorElement.textContent = "|";
    linkElement.textContent = i;
    linkElement.style.background = "none";
    linkElement.style.border = "none";
    linkElement.addEventListener("click", e => {
        getPlanetInfo(i);
    });

    linksElement.appendChild(linkElement);
    linksElement.appendChild(separatorElement);
}

