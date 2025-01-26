const animeList = [
    { title: 'Attack on Titan', image: 'https://via.placeholder.com/150' },
    { title: 'Naruto', image: 'https://via.placeholder.com/150' },
    { title: 'One Piece', image: 'https://via.placeholder.com/150' }
];

const animeContainer = document.getElementById('anime-list');
const searchInput = document.getElementById('searchInput');

// Função para atualizar a lista de animes na página
function updateAnimeList(animes) {
    animeContainer.innerHTML = ''; // Limpar conteúdo anterior
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

// Atualiza a lista de animes na primeira vez
updateAnimeList(animeList);

// Filtro de pesquisa de animes
searchInput.addEventListener('input', function(event) {
    const searchQuery = event.target.value.toLowerCase();
    const filteredAnimes = animeList.filter(anime =>
        anime.title.toLowerCase().includes(searchQuery)
    );
    updateAnimeList(filteredAnimes);
});

