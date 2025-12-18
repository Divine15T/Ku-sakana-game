        document.addEventListener('DOMContentLoaded', function() {
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            const loginForm = document.getElementById('quickLogin');
            if (loginForm) {
                loginForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const email = this.querySelector('input[type="email"]').value;
                    const password = this.querySelector('input[type="password"]').value;
                    
                    const submitBtn = this.querySelector('.submit-btn');
                    const originalText = submitBtn.textContent;
                    
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connexion...';
                    submitBtn.disabled = true;
                    
                    setTimeout(() => {
                        alert(`Connexion réussie avec ${email}`);
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 1500);
                });
            }
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
        
            document.querySelectorAll('.feature-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'all 0.6s ease';
                observer.observe(card);
            });
            
            const stats = document.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                const target = parseInt(stat.textContent);
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
                }, 30);
            });
           
            function redirectToLogin() {
    // Vérifier si l'utilisateur est déjà connecté
    if (localStorage.getItem('userToken')) {
        window.location.href = 'dashboard.html';
    } else {
        window.location.href = 'login.html';
    }
}

        });