const apiUrl ="https://api.github.com/users/";
const lookupContent = document.getElementById("lookup").textContent;
document.getElementById("button").addEventListener("click", e => {
    updateUserData(lookupContent);
});

const updateUserData = (userName) => {
    fetch("https://api.github.com/users/LiliyaStefanova")
    .then(response => response.json())
    .then(profile => {
            
            const imageElement = document.createElement("img");
            imageElement.src = profile.avatar_url;
            const userNameElement = document.createElement("p");
            userNameElement.textContent = profile.name;
            const websiteElement = document.createElement("a");
            websiteElement.href = profile.bio;
            const userInfoElement = document.getElementById("userInfo");
            userInfoElement.appendChild(imageElement);
            userInfoElement.appendChild(userNameElement);
            userInfoElement.appendChild(websiteElement);
    })
    .error(err => console.log(err));
};
