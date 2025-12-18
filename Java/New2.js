        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menu-toggle');
            const overlay = document.querySelector('.menu-overlay');
            const navLinks = document.querySelectorAll('.nav-links a');
            overlay.addEventListener('click', function() {
                menuToggle.checked = false;
            });
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && menuToggle.checked) {
                    menuToggle.checked = false;
                }
            });
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    if (this.getAttribute('href') === '#') {
                        e.preventDefault();
                        navLinks.forEach(l => l.classList.remove('active'));
                        this.classList.add('active');
                        if (this.textContent.includes('déconnecter')) {
                            if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
                                alert('Déconnexion réussie !');
                                menuToggle.checked = false;
                            }
                        }
                    }
                });
            });
      })
        function scrollLeft(categoryId) {
            const grid = document.getElementById(`grid-${categoryId}`);
            grid.scrollBy({ left: -300, behavior: 'smooth' });
        }
        function scrollRight(categoryId) {
            const grid = document.getElementById(`grid-${categoryId}`);
            grid.scrollBy({ left: 300, behavior: 'smooth' });
        }
        function filterGames(filterType) {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            const sections = document.querySelectorAll('.category-section');
            
            if (filterType === 'all') {
                sections.forEach(section => {
                    section.style.display = 'block';
                });
                return;
            }
            sections.forEach(section => {
                section.style.display = 'none';
            });
            switch(filterType) {
                case 'gratuits':
                    document.getElementById('jeux-gratuits').style.display = 'block';
                    break;
                case 'enligne':
                    document.getElementById('jeux-en-ligne').style.display = 'block';
                    break;
                case 'payants':
                    document.getElementById('jeux-payants').style.display = 'block';
                    break;
                case 'populaires':
                    sections.forEach(section => {
                        section.style.display = 'block';
                    });
                    break;
            }
        }
        document.getElementById('search').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const gameCards = document.querySelectorAll('.game-card');
            
            gameCards.forEach(card => {
                const title = card.querySelector('.game-title').textContent.toLowerCase();
                const description = card.querySelector('.game-description').textContent.toLowerCase();
                const tags = card.querySelectorAll('.tag');
                let tagText = '';
                tags.forEach(tag => tagText += tag.textContent.toLowerCase() + ' ');
                
                if (title.includes(searchTerm) || 
                    description.includes(searchTerm) || 
                    tagText.includes(searchTerm)) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        document.querySelectorAll('.game-card').forEach(card => {
            observer.observe(card);
        });
        document.querySelectorAll('.play-button').forEach(button => {
            button.addEventListener('click', function() {
                const gameTitle = this.closest('.game-card').querySelector('.game-title').textContent;
                const gamePrice = this.closest('.game-card').querySelector('.game-price').textContent;
                if (gamePrice === 'Gratuit') {
                    alert(`Lancement de "${gameTitle}"... Profitez de votre jeu !`);
                } else {
                    alert(`Redirection vers la page d'achat de "${gameTitle}" pour ${gamePrice}`);
                }
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.category-section');
            sections.forEach((section, index) => {
                section.style.animationDelay = `${index * 0.2}s`;
            });
        });
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const timerBar = document.querySelector('.timer-bar');
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 5000; 
    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        
        currentSlide = (n + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
        timerBar.style.animation = 'none';
        setTimeout(() => {
            timerBar.style.animation = `timer ${slideDuration}ms linear`;
        }, 10);
    }
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
            resetTimer();
        });
    });
    function startTimer() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startTimer();
    }
    startTimer();
    const slider = document.querySelector('.slider-container');
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
        timerBar.style.animationPlayState = 'paused';
    });

    slider.addEventListener('mouseleave', () => {
        startTimer();
        timerBar.style.animationPlayState = 'running';
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    const gameCards = document.querySelectorAll('.game-card, .offer-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    gameCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.slide-image img');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
    const buttons = document.querySelectorAll('.slide-btn, .nav-btn, .offer-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    function updateTimer() {
        const timerElement = document.querySelector('.offer-timer span');
        if (!timerElement) return;
        const endTime = new Date();
        endTime.setDate(endTime.getDate() + 2);
        endTime.setHours(14, 30, 0, 0);
        function update() {
            const now = new Date();
            const diff = endTime - now;    
            if (diff <= 0) {
                timerElement.textContent = 'Offre expirée';
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));   
            timerElement.textContent = `Fin dans: ${days}j ${hours}h ${minutes}m`;
        }
        update();
        setInterval(update, 60000); 
    }
    updateTimer();
    const buyButtons = document.querySelectorAll('.slide-btn.primary, .offer-btn');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const gameTitle = this.closest('.slide') ? 
                this.closest('.slide').querySelector('.slide-title').textContent :
                this.closest('.offer-card').querySelector('.offer-title').textContent;
            this.innerHTML = '<i class="fas fa-check"></i> Ajouté !';
            this.style.background = '#10b981';
            
            setTimeout(() => {
                this.innerHTML = this.innerHTML.includes('Acheter') ? 
                    '<i class="fas fa-shopping-cart"></i> Acheter' :
                    '<i class="fas fa-cart-plus"></i> Ajouter au panier';
                this.style.background = '';
            }, 2000);
            showNotification(`${gameTitle} a été ajouté à votre panier !`);
        });
    });
    
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--epic-gradient);
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 10000;
            animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s;
        `;   
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});
