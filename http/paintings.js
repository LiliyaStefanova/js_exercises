function loadPaintingInfoIntoTable(){
    const paintingLink = "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json";
    fetch(paintingLink)
        .then(response => response.json())
        .then(paintingsArray => {
            paintingsArray.forEach(painting => {
                createDomElement(painting);
            });
        })
        .catch(err => console.log(err.message));
}

function createDomElement(paintingObject){
    const rowElement = document.createElement("tr");
    const nameCellElement = document.createElement("td");
    nameCellElement.textContent = paintingObject.name;
    rowElement.appendChild(nameCellElement);
    const yearCellElement = document.createElement("td");
    yearCellElement.textContent = paintingObject.year;
    rowElement.appendChild(yearCellElement);
    const artistCellElement = document.createElement("td");
    artistCellElement.textContent = paintingObject.artist;
    rowElement.appendChild(artistCellElement);
    document.getElementById("paintings").appendChild(rowElement);
}

window.onload = loadPaintingInfoIntoTable;

