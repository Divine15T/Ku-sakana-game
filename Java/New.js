document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const emailError = document.getElementById('emailError');
            const passwordError = document.getElementById('passwordError');
            const loginButton = document.getElementById('loginButton');
            const buttonText = document.getElementById('buttonText');
            const spinner = document.getElementById('spinner');
            emailError.style.display = 'none';
            passwordError.style.display = 'none';
            let isValid = true;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^[0-9]{10}$/;
            
            if (!emailRegex.test(email) && !phoneRegex.test(email.replace(/\s/g, ''))) {
                emailError.style.display = 'block';
                isValid = false;
            }
            
            if (password.length < 4 || password.length > 60) {
                passwordError.style.display = 'block';
                isValid = false;
            }        
            if (isValid) {
                loginButton.disabled = true;
                buttonText.style.display = 'none';
                spinner.style.display = 'block';
                setTimeout(() => {
                    alert('✅ Connexion réussie ! Bienvenue sur KU SAKANA !');
                  
                    loginButton.disabled = false;
                    buttonText.style.display = 'block';
                    spinner.style.display = 'none';
                
                    window.location.href = 'index.html';
                }, 2000);
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            const qrCodeDiv = document.getElementById('qrCode');
            const currentUrl = window.location.href;
            const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentUrl)}&color=FF4500&bgcolor=000000`;
            
            qrCodeDiv.innerHTML = `<img src="${qrCodeUrl}" alt="QR Code KU SAKANA">`;
            const languageSelector = document.querySelector('.language-selector');
            languageSelector.addEventListener('change', function() {
                const lang = this.value;
                alert(`Langue changée en : ${this.options[this.selectedIndex].text}`);
            });
            
            document.querySelectorAll('.social-button').forEach(button => {
                button.addEventListener('click', function() {
                    const provider = this.textContent.trim().split(' ')[2];
                    alert(`Connexion avec ${provider} en cours...\n(Cette fonctionnalité serait intégrée avec OAuth dans une vraie application)`);
                });
            });
        
            document.querySelectorAll('.form-input').forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.classList.add('focused');
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.classList.remove('focused');
                });
            });
        });

        const passwordInput = document.getElementById('password');
        const passwordLabel = document.querySelector('label[for="password"]');
        
        const toggleButton = document.createElement('button');
        toggleButton.type = 'button';
        toggleButton.innerHTML = '👁️';
        toggleButton.style.cssText = `
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: #8c8c8c;
            cursor: pointer;
            font-size: 16px;
            padding: 5px;
        `;
        
        passwordInput.parentElement.style.position = 'relative';
        passwordInput.parentElement.appendChild(toggleButton);
        
        toggleButton.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.innerHTML = type === 'password' ? '👁️' : '👁️‍🗨️';
        });

        document.getElementById('rememberMe').addEventListener('change', function() {
            if (this.checked) {
                console.log('Se souvenir de moi activé');
            }
        });
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'Enter') {
                document.getElementById('loginForm').dispatchEvent(new Event('submit'));
            }
            
            if (e.key === 'Escape') {
                document.getElementById('loginForm').reset();
            }
        });

        const checkAutoFill = setInterval(() => {
            const emailFilled = document.getElementById('email').value.length > 0;
            const passwordFilled = document.getElementById('password').value.length > 0;
            
            if (emailFilled && passwordFilled) {
                console.log('Auto-remplissage détecté');
                clearInterval(checkAutoFill);
            }
        }, 100);

        const backgrounds = [
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
        ];

        let currentBgIndex = 0;
        const bgImage = document.querySelector('.background-image');

        function changeBackground() {
            currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
            bgImage.style.opacity = '0';
            
            setTimeout(() => {
                bgImage.style.backgroundImage = `url('${backgrounds[currentBgIndex]}')`;
                bgImage.style.opacity = '1';
            }, 1000);
        }
        setInterval(changeBackground, 10000);

        function redirectTopage (Event) {
            event.preventDefault();
            window.location.href= 'New2.html';
        }