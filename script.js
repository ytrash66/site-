const animeList = [
    { title: 'Attack on Titan', image: 'https://m.media-amazon.com/images/M/MV5BNjY4MDQxZTItM2JjMi00NjM5LTk0MWYtOTBlNTY2YjBiNmFjXkEyXkFqcGc@._V1_.jpg' },
    { title: 'Naruto', image: 'https://japanesegallery.com/pub/media/catalog/product/cache/7e991fa6b61968a7414c4c2fad2046e8/j/g/jgkp436.jpeg' },
    { title: 'One Piece', image: 'https://images.squarespace-cdn.com/content/v1/642b13ff2f14ae1372e3b749/1683923997423-S9GD5PBPA0PMQW8R3K1U/One+Piece+.jpg' }
];

const animeContainer = document.getElementById('anime-list');
const searchInput = document.getElementById('searchInput');

function updateAnimeList(animes) {
    animes.forEach(anime => {
        const animeItem = document.createElement('div');
        animeItem.classList.add('anime-item');
        animeItem.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <h3>${anime.title}</h3>
        `;
        animeContainer.appendChild(animeItem);
    });
}

updateAnimeList(animeList);

searchInput.addEventListener('input', function(event) {
    const searchQuery = event.target.value.toLowerCase();
    const filteredAnimes = animeList.filter(anime =>
        anime.title.toLowerCase().includes(searchQuery)
    );
    updateAnimeList(filteredAnimes);
});
