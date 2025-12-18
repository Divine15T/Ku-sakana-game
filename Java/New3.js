
        function startCountdown() {
            const timerElement = document.getElementById('timer');
            let hours = 24;
            let minutes = 0;
            let seconds = 0;
            
            function updateTimer() {
                const formattedHours = hours.toString().padStart(2, '0');
                const formattedMinutes = minutes.toString().padStart(2, '0');
                const formattedSeconds = seconds.toString().padStart(2, '0');
                
                timerElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
                
                if (seconds > 0) {
                    seconds--;
                } else {
                    if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                    } else {
                        if (hours > 0) {
                            hours--;
                            minutes = 59;
                            seconds = 59;
                        } else {
                            timerElement.textContent = "Bientôt disponible !";
                            timerElement.style.color = "blue";
                            clearInterval(timerInterval);
                            document.querySelector('.countdown h3').textContent = "Le contenu sera disponible sous peu !";
                        }
                    }
                }
            }
            
            const timerInterval = setInterval(updateTimer, 1000);
            updateTimer(); 
        }

        const messages = [
            "Notre équipe de développeurs travaille dur pour vous offrir la meilleure expérience.",
            "Cette fonctionnalité est en cours de développement et sera bientôt déployée.",
            "Nous préparons quelque chose d'extraordinaire pour vous !",
            "Merci de votre patience pendant que nous améliorons notre plateforme.",
            "Restez à l'écoute, des surprises arrivent bientôt sur KU SAKANA !"
        ];

        function showRandomMessage() {
            const messageElement = document.querySelector('.message');
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            
            
            const extraMessage = document.createElement('p');
            extraMessage.style.marginTop = '20px';
            extraMessage.style.fontStyle = 'italic';
            extraMessage.style.color = '#aaa';
            extraMessage.textContent = randomMessage;
            
            messageElement.appendChild(extraMessage);
        }

        function typeWriterEffect() {
            const title = document.querySelector('h1');
            const originalText = title.textContent;
            title.textContent = '';
            
            let i = 0;
            function typeWriter() {
                if (i < originalText.length) {
                    title.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            }
            
            typeWriter();
        }

        document.addEventListener('DOMContentLoaded', function() {
            startCountdown();
            showRandomMessage();
            typeWriterEffect();
            
            const clickSound = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAZGF0YQ');
            
            document.querySelectorAll('.btn').forEach(button => {
                button.addEventListener('click', function() {
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 150);
                });
            });
            
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            };
            console.log(`Page consultée le : ${now.toLocaleDateString('fr-FR', options)}`);
        });