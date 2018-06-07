const api_url = "https://thejsway-server.herokuapp.com/api/articles";

fetch(api_url)
.then(response => response.json())
.then(articles => {
    articles.forEach(article => {
        const titleElement = document.createElement("h3");
        titleElement.textContent = article.title;
        const contentElement = document.createElement("p");
        contentElement.textContent = article.content;
        const articlesElement = document.getElementById("articles");
        articlesElement.appendChild(titleElement);
        articlesElement.appendChild(contentElement);
    });
})
.catch(err => console.log(err.message));