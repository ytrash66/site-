const animeList = [
    { title: 'Attack on Titan', image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Attack_on_Titan_logo.svg' },
    { title: 'Naruto', image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Naruto_logo.svg' },
    { title: 'One Piece', image: 'https://upload.wikimedia.org/wikipedia/commons/7/76/One_Piece_Logo_2018.svg' }
];

const animeContainer = document.getElementById('anime-list');
const searchInput = document.getElementById('searchInput');

function updateAnimeList(animes) {
    animeContainer.innerHTML = '';
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
