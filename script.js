const animeList = [
    { title: 'Attack on Titan', image: 'https://m.media-amazon.com/images/M/MV5BNjY4MDQxZTItM2JjMi00NjM5LTk0MWYtOTBlNTY2YjBiNmFjXkEyXkFqcGc@._V1_.jpg' },
    { title: 'Naruto', image: 'https://m.media-amazon.com/images/I/81Zj-BWityL.jpg' },
    { title: 'One Piece', image: 'https://m.media-amazon.com/images/I/81zwj54srRL.jpg' }
];

const animeContainer = document.getElementById('anime-list');
const searchInput = document.getElementById('searchInput');

function updateAnimeList(animes) {
    animeContainer.innerHTML = ''; // Limpar o conteúdo anterior
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
