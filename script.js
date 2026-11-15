const destinations = [
{
category: "beach",
name: "Maldives Beach",
image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
description: "Enjoy beautiful blue water and white sandy beaches."
},
{
category: "beach",
name: "Bali Beach",
image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
description: "Experience the beauty of Bali beaches."
},
{
category: "temple",
name: "Angkor Wat",
image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb",
description: "Explore the ancient temples of Cambodia."
},
{
category: "temple",
name: "Japanese Temple",
image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
description: "Discover traditional Japanese architecture."
},
{
category: "country",
name: "Pakistan",
image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9",
description: "Explore the beautiful landscapes of Pakistan."
},
{
category: "country",
name: "Switzerland",
image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
description: "Discover beautiful mountains and nature."
}
];

function searchDestination() {
const input = document.getElementById("searchInput").value.toLowerCase().trim();
const results = document.getElementById("results");


results.innerHTML = "";

if (!input) {
    alert("Please enter beach, temple or country!");
    return;
}

const filtered = destinations.filter(item =>
    item.category.includes(input) || item.name.toLowerCase().includes(input)
);

if (filtered.length === 0) {
    results.innerHTML = "<h2>No recommendations found!</h2>";
    return;
}

filtered.forEach(item => {
    results.innerHTML += `
        <div class="result-card">
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
        </div>
    `;
});


}

function clearSearch() {
document.getElementById("searchInput").value = "";
document.getElementById("results").innerHTML = "";
}
