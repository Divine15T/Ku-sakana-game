// Script pour la page Jouer en ligne

// Fonction pour filtrer les jeux
function filterGames() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filterButtons = document.querySelectorAll('.filter-btn');
    const games = document.querySelectorAll('.game-card');
    
    let activeCategory = 'all';
    filterButtons.forEach(btn => {
        if(btn.classList.contains('active')) {
            activeCategory = btn.dataset.category;
        }
    });
    
    games.forEach(game => {
        const gameTitle = game.querySelector('h3').textContent.toLowerCase();
        const gameCategory = game.dataset.category;
        
        const matchesSearch = gameTitle.includes(searchInput) || searchInput === '';
        const matchesCategory = activeCategory === 'all' || gameCategory === activeCategory;
        
        if(matchesSearch && matchesCategory) {
            game.style.display = 'block';
            game.style.animation = 'fadeIn 0.5s ease';
        } else {
            game.style.display = 'none';
        }
    });
}

// Fonction pour jouer à un jeu
function playGame(gameId) {
    const player = document.getElementById('gamePlayer');
    const gameTitle = document.getElementById('gameTitle');
    
    // Trouver le titre du jeu cliqué
    const gameElement = event.target.closest('.game-card');
    const gameName = gameElement.querySelector('h3').textContent;
    
    gameTitle.textContent = `En train de jouer : ${gameName}`;
    player.classList.add('active');
    
    
// Initialisation des filtres
document.addEventListener('DOMContentLoaded', function() {
    // Activer/désactiver les filtres
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterGames();
        });
    });
    
    // Recherche en temps réel
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', filterGames);
    
    // Simulation de joueurs en ligne
    updateOnlinePlayers();
});

function updateOnlinePlayers() {
    // Simulation de mise à jour des joueurs en ligne
    setInterval(() => {
        const statElement = document.querySelector('.stat span');
        if(statElement) {
            const current = parseInt(statElement.textContent);
            const change = Math.floor(Math.random() * 21) - 10; // -10 à +10
            const newCount = Math.max(1000, current + change);
            statElement.textContent = `${newCount}+ joueurs en ligne`;
        }
    }, 5000);
}