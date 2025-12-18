
        const jeux = {
            action: [
                { titre: "GTA 5", img: "https://www.journaldugeek.com/resize/w0/CN2U7EDTfNoyeeOPuVd2tQsAXF5qLgIIOspGO0wI.jpg", video:""},
                { titre: "Fortnite", img: "https://imag.malavida.com/mvimgbig/download-fs/fortnite-20588-1.jpg", video: " " },
                { titre: "Brawl Stars", img: "https://i.ytimg.com/vi/hh-JqvTvMfM/maxresdefault.jpg", video: "" },
                { titre: "Call of Duty", img: "https://play-lh.googleusercontent.com/uPRFWFbiASqohiTMTKrD5gErGrKxq_1DgH0npRQcvUEDDLMLTECh3xXl0STPBZZseA", video: "" },
                { titre: "Dragon Ball Sparking Zero", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2lnNEqg7z58LRr0c32rsFVWmhM_FXiVEekQ&s", video: "" }
            ],
            aventure: [
                { titre: "The Legend of Zelda", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRIDvJpytnBrca0lRg3hjQulNAyd5F1X2xQ&s", video: "" },
                { titre: "Avatar Frontières of Pandora", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfekvepoZPv2-Qz1Zl5osfxLFILaA77fD8Ug&s", video: "" },
                { titre: "Ghost of Yoteï", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRbn0GXlPhhMzQCbitM4Ej5EmrhH10qioWg&s", video: "" },
                { titre: "Drakensang Online", img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2067850/header.jpg?t=1764592429", video: "" },
                { titre: "Roblox", img: "https://cdn.aptoide.com/imgs/7/a/4/7a4d577cbb73a091958a0ac297b81638_fgraphic.png", video: "" }
            ],
            multi: [
                { titre: "Valorant", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6FkzEHhY2mzr4LHMCC4Ov1sOUZAQ384ciKg&s", video: "" },
                { titre: "Rocket League", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6NAQQZilQAKnsJO761wrxbFqnUaZz1BQOkg&s", video: "" },
                { titre: "Overwatch 2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj7vVjjr47Z-44PDhs4OiLw48oMwxxpeW0Q&s", video: "" },
                { titre: "Stickman Party", img: "https://imag.malavida.com/mvimgbig/download-fs/stickman-party-24962-10.jpg", video: "" },
                { titre: "Genshin Impact", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEky45DR_ut82YqRsJxxz4kjta4FBB9OqBOQ&s", video: "" }
            ],
            sport: [
                { titre: "Boxing Star", img: "https://cdn.aptoide.com/imgs/9/1/6/916f22f9697e230b17cdc575031281ab_fgraphic.jpg", video: "" },
                { titre: "FIFA 17", img: "https://www.latestmodapks.com/wp-content/uploads/2024/05/fifa-17-3-media.webp", video: "" },
                { titre: "Dream League Soccer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1PCXdRdS8Ld3bJce0QLZygGpFRvR6nsHZEA&s", video: "" },
                { titre: "FC 24", img: "https://static.fnac-static.com/multimedia/Images/FR/NR/52/2c/f1/15805522/1505-1/tsp20230908114130/Code-de-telechargement-EA-Sports-FC-24-Ultimate-Edition.jpg", video: "" },
                { titre: "Golf Battle", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDk-bzWMThr1Y8M0nui_gMwahM4mPAocZAYA&s", video: "" }
            ],
            course: [
                { titre: "Real Racing 3", img: "https://play-lh.googleusercontent.com/xoDxA1jku7KuZTK5IJZBQlexPQl5Yt2qQNUceKH5Z9SsTW7Jo51Ny8m5WzQqYFaix7Ac=w526-h296-rw", video: "" },
                { titre: "Forza Horizon", img: "https://images.sftcdn.net/images/t_app-cover-s,f_auto/p/bf11ceb6-b27c-49d6-91e9-7072d0818942/359434736/forza-horizon-mobile-5-screenshot", video: "" },
                { titre: "The Crew Motorfest", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeO0ylbbU0Wuk1Ib_4VJ1T_oYMYxYauwbG_g&s", video: "" },
                { titre: "GT Bike Racing", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiejlYqveye6HeGzt8B10P8DhrlfOQAoSQ0g&s", video: "" },
                { titre: "Trafic Rider", img: "https://cdn.aptoide.com/imgs/7/0/b/70bc46693ef5fe2eaaa984dcb71e88a4_fgraphic.png", video: "" }
            ]
        };
        document.getElementById('search').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.cat-card');
            
            cards.forEach(card => {
                const title = card.querySelector('.cat-title').textContent.toLowerCase();
                if (title.includes(searchTerm) || searchTerm === '') {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });

        function showDomain(domaine) {
            document.getElementById("categories").style.display = "none";
            document.querySelectorAll('.games-page').forEach(page => {
                page.style.display = "none";
            });
            
            const pageId = 'page-' + domaine;
            const page = document.getElementById(pageId);
            page.style.display = "block";
            
            if (!page.dataset.generated) {
                let html = `<button class="back-btn" onclick="goBack()">← Retour aux catégories</button>`;
                html += `<h2 style="color: blue; margin: 20px 0; text-align: center;">${domaineToNom(domaine)}</h2>`;
                html += `<div class="jeux-grid">`;
                
                jeux[domaine].forEach(jeu => {
                    html += `
                    <div class="jeu-card">
                        <div class="jeu-title">${jeu.titre}</div>
                        <img class="jeu-image" src="${jeu.img}" alt="${jeu.titre}">
                        <div class="btn-group-jeu">
                            <button class="play-btn" onclick="ouvrirSimulation('${jeu.titre}')">Simuler</button>
                            <a href="https://www.google.com/search?q=${encodeURIComponent(jeu.titre + ' jeu télécharger')}" target="_blank" class="download-btn">Télécharger gratuitement </a>
                        </div>
                    </div>`;
                });
                
                html += `</div>`;
                page.innerHTML = html;
                page.dataset.generated = "true";
            }
        }
        function goBack() {
            document.getElementById("categories").style.display = "flex";
            document.querySelectorAll('.games-page').forEach(page => {
                page.style.display = "none";
            });
        }

        function domaineToNom(code) {
            const noms = {
                action: "Jeux d'actions",
                aventure: "Jeux d'aventures",
                multi: "Jeu multiplayer",
                sport: "Jeux sportif",
                course: "Jeux de course"
            };
            return noms[code] || code;
            }
        function ouvrirSimulation(nomJeu) {
            document.getElementById('simulationText').innerHTML = 
                `Simulation de <b>${nomJeu}</b><br>Veuillez patienter ou essayez le vrai jeu !`;
            document.getElementById('simulationModal').style.display = 'flex';
            setTimeout(() => {
                const modalText = document.getElementById('simulationText');
                modalText.innerHTML = `Simulation de <b>${nomJeu}</b> en cours...<br>Chargement: 75%`;
            }, 1000);
            
            setTimeout(() => {
                const modalText = document.getElementById('simulationText');
                modalText.innerHTML = `Simulation de <b>${nomJeu}</b> terminée !<br>Prêt à jouer !`;
            }, 3000);
        }

        function fermerSimulation() {
            document.getElementById('simulationModal').style.display = 'none';
        }
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                fermerSimulation();
            }
        });
        document.getElementById('simulationModal').addEventListener('click', function(e) {
            if (e.target === this) {
                fermerSimulation();
            }
        });
        document.addEventListener('DOMContentLoaded', function() {
            const year = new Date().getFullYear();
            const yearElement = document.querySelector('.footer-botton p');
            if(yearElement) {
                yearElement.innerHTML = yearElement.innerHTML.replace('2025', year);
            }
        });