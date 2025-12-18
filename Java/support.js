
document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if(nom && email && message) {
                alert('Message envoyé avec succès !\nNous vous répondrons dans les 48h.');
                this.reset();
                const button = this.querySelector('button[type="submit"]');
                button.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
                button.style.background = 'green';
                
                setTimeout(() => {
                    button.innerHTML = 'Envoyer le message';
                    button.style.background = 'blue';
                }, 3000);
            }
        });
        document.addEventListener('DOMContentLoaded', function() {
            const year = new Date().getFullYear();
            const yearElement = document.querySelector('.footer-botton p');
            if(yearElement) {
                yearElement.innerHTML = yearElement.innerHTML.replace('2025', year);
            }
        });