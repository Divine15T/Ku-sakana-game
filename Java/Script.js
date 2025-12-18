
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ Tous les fichiers sont correctement liés !");
    console.log("✅ CSS chargé : " + document.styleSheets.length + " feuille(s) de style");
    console.log("✅ JavaScript fonctionne parfaitement !");
    
    const editProfileBtn = document.getElementById('editProfileBtn');
    const achievementsBtn = document.getElementById('achievementsBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', editProfile);
    }
    
    if (achievementsBtn) {
        achievementsBtn.addEventListener('click', showAchievements);
    }
    
    if (settingsBtn) {
        settingsBtn.addEventListener('click', showSettings);
    }
    
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    const onlineStatus = document.querySelector('.online-status');
    
    if (onlineStatus) {
        setInterval(() => {
            if (Math.random() > 0.1) return; 
            
            if (onlineStatus.classList.contains('offline')) {
                onlineStatus.classList.remove('offline');
                onlineStatus.style.backgroundColor = '#10b981';
            } else {
                onlineStatus.classList.add('offline');
                onlineStatus.style.backgroundColor = '#6b7280';
            }
        }, 10000);
    }
    
    addCurrentActivity();
    
    simulateLivePlayTime();
    
    const trophies = document.querySelectorAll('.trophy');
    trophies.forEach(trophy => {
        trophy.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            alert(`Trophée déverrouillé: ${title}`);
        });
    });
    
    const friendItems = document.querySelectorAll('.friend-item');
    friendItems.forEach(friend => {
        friend.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        friend.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});

function editProfile() {
    showModal("Modification du profil", "Cette fonctionnalité permet de modifier votre photo de profil, votre nom d'utilisateur et vos informations personnelles.");
}

function showAchievements() {
    showModal("Trophées et accomplissements", "Voici tous vos trophées et accomplissements. Vous avez débloqué 42 trophées sur 100 possibles. Continuez à jouer pour en débloquer plus!");
}

function showSettings() {
    showModal("Paramètres du compte", "Ici vous pouvez configurer vos préférences de jeu, les paramètres de confidentialité, les notifications et les préférences de langue.");
}

function showModal(title, message) {

    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>${message}</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary modal-ok">OK</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const style = document.createElement('style');
    style.textContent = `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal {
            background: var(--color-card);
            border-radius: 15px;
            width: 90%;
            max-width: 500px;
            border: 1px solid var(--color-accent);
            box-shadow: var(--shadow-lg);
            overflow: hidden;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid var(--color-border);
            background-color: var(--color-primary);
        }
        
        .modal-header h3 {
            color: var(--color-accent);
            margin: 0;
            font-size: 1.25rem;
        }
        
        .modal-close {
            background: none;
            border: none;
            color: var(--color-text-light);
            font-size: 1.8rem;
            cursor: pointer;
            line-height: 1;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.2s ease;
        }
        
        .modal-close:hover {
            background-color: var(--color-border);
            color: var(--color-text);
        }
        
        .modal-body {
            padding: 20px;
            color: var(--color-text);
            line-height: 1.6;
        }
        
        .modal-footer {
            padding: 15px 20px;
            border-top: 1px solid var(--color-border);
            display: flex;
            justify-content: flex-end;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    
    document.head.appendChild(style);
    

    const closeBtn = modal.querySelector('.modal-close');
    const okBtn = modal.querySelector('.modal-ok');
    
    const closeModal = () => {
        document.body.removeChild(modal);
        document.head.removeChild(style);
    };
    
    closeBtn.addEventListener('click', closeModal);
    okBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function addCurrentActivity() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'});
    
    const activityTimeline = document.querySelector('.activity-timeline');
    if (activityTimeline) {
        const newActivity = document.createElement('div');
        newActivity.className = 'activity-item';
        newActivity.innerHTML = `
            <div class="activity-time">En ce moment (${timeString})</div>
            <div class="activity-text">Consultation du profil sur KU SAKANA</div>
        `;
        
        activityTimeline.prepend(newActivity);
    }
}

function simulateLivePlayTime() {
    const playTimeElement = document.querySelector('.stat-value');
    if (!playTimeElement) return;
    
    let currentTime = parseFloat(playTimeElement.textContent.replace(',', ''));
    
    setInterval(() => {

        currentTime += 0.1;
        
        playTimeElement.textContent = currentTime.toFixed(1).replace('.', ',');
        
        if (currentTime % 10 < 0.1 && currentTime > 10) {
            updateLevel();
        }
    }, 10000);
}
function updateLevel() {
    const rankElement = document.querySelector('.rank');
    if (rankElement) {
        const currentText = rankElement.textContent;
        const match = currentText.match(/Niveau (\d+)/);
        
        if (match) {
            const currentLevel = parseInt(match[1]);
            const newLevel = currentLevel + 1;
            
            rankElement.textContent = `Niveau ${newLevel} - Maître du jeu`;
            
            rankElement.style.transform = 'scale(1.1)';
            setTimeout(() => {
                rankElement.style.transform = 'scale(1)';
            }, 300);
            
            showNotification(`Félicitations ! Vous avez atteint le niveau ${newLevel}!`);
        }
    }
}
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--color-accent)';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '8px';
    notification.style.boxShadow = 'var(--shadow-lg)';
    notification.style.zIndex = '1000';
    notification.style.maxWidth = '300px';
    notification.style.animation = 'slideIn 0.3s ease-out';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
                document.head.removeChild(style);
            }
        }, 500);
    }, 5000);
}