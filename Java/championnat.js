// Data for categories and championships (with images)
const categories = [
  {
    name: "Action",
    image: "https://th.bing.com/th/id/OIP.C2tZlnVEx2Eio0wRl0Yp9AHaEK?w=310&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
    championships: [
      {
        name: "Battle Fury",
        image: "https://th.bing.com/th/id/OIP.ABP1V7hui2OFfO8cDnw3eQHaEK?w=283&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "Chaque joueur aura 5 vies.",
          "Le score est basé sur les éliminations.",
          "Bonus de 50 points pour chaque victoire sans perdre de vie."
        ],
        requirements: [
          "Avoir au moins 16 ans.",
          "Compte validé (adresse email).",
          "Inscription à la plateforme.",
        ],
        info: "Affrontez les meilleurs en mode survie intense !"
      },
      {
        name: "Ultimate Shooter",
        image: "https://th.bing.com/th/id/OIP.FZeFycERFR54xFIQo7NsVQHaDB?w=345&h=142&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "Temps limité : 10 minutes par partie.",
          "Toutes les armes sont disponibles.",
          "Pas de triche permise (surveillance active)."
        ],
        requirements: [
          "Inscription préalable au tournoi.",
          "Pseudo original obligatoire.",
          "Une seule participation par joueur."
        ],
        info: "Testez vos réflexes et grimpez dans le classement !"
      },
      {
        name: "Power Arena",
        image: "https://th.bing.com/th/id/OIP.6l8w2OSdYiy1XoySOQBflwHaCs?w=278&h=127&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "Équipe de 2 joueurs minimum.",
          "Collectez un maximum d'or pour gagner.",
          "Matchs à élimination directe."
        ],
        requirements: [
          "Équipe valide (coéquipier identifié).",
          "Inscription sur la plateforme.",
          "Aucun comportement toxique toléré."
        ],
        info: "Arène enragée, fun garanti pour tous les niveaux !"
      }
    ]
  },
  {
    name: "Aventure",
    image: "https://th.bing.com/th/id/OIP.ObGN-ujgf8njVAnR_CFLDwHaEK?w=290&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
    championships: [
      {
        name: "Explorer Quest",
        image: "https://th.bing.com/th/id/OIP._PQc6GDzICz63ocAn8luRgHaFj?w=167&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "Partez à la recherche de trésors cachés.",
          "Chaque énigme résolue apporte des points.",
          "Aucune aide extérieure."
        ],
        requirements: [
          "Avoir un compte premium.",
          "Connaissances basiques en anglais.",
          "Appareil compatible (smartphone ou PC)."
        ],
        info: "Devenez le plus grand explorateur du championnat !"
      },
      {
        name: "Jungle Mystery",
        image: "https://th.bing.com/th/id/OIP.KPLV6QS1ItW6zf0p4bMSEAHaEK?w=269&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "Jeu en solo uniquement.",
          "Trois missions à compléter.",
          "Réponse rapide aux défis bonus."
        ],
        requirements: [
          "ID joueur vérifié.",
          "Accepter les conditions générales.",
          "Accès internet stable."
        ],
        info: "Suspense et mystères garantis à chaque étape."
      },
      {
        name: "Castle Runner",
        image: "https://th.bing.com/th/id/OIP.h8Lxu5w4sSIg3Ev5eYeYhgHaEK?w=305&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "Évitez tous les pièges du château.",
          "Gagnez du temps en trouvant des raccourcis.",
          "Collectez les joyaux pour booster votre score."
        ],
        requirements: [
          "Connexion quotidienne requise.",
          "Remplir la fiche d'inscription.",
          "Accorder l'accès au micro (si demandes vocales)."
        ],
        info: "Une aventure palpitante pour tous les courageux !"
      }
    ]
  },
  {
    name: "Multi joueurs",
    image: "https://th.bing.com/th/id/OIP.kH8gnK8_tLQvQQ9ZPzQowwHaDt?w=321&h=174&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
    championships: [
      {
        name: "Team Royale",
        image: "https://th.bing.com/th/id/OIP.nd8xqaQnVly8jV3SGr6XGgHaHa?w=143&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "Équipes de 4 joueurs aléatoires.",
          "Disqualification en cas d'abandon.",
          "Communication vocale autorisée."
        ],
        requirements: [
          "Équipe complète lors de l'inscription.",
          "Mise à jour du profil obligatoire.",
          "Participation sur PC uniquement."
        ],
        info: "Travail d'équipe, coordination et fun !"
      },
      {
        name: "Duo Legends",
        image: "https://th.bing.com/th/id/OIP.eTRK9OwrnIvKqnnnEqq4_wHaFj?w=229&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "Chaque duo affronte tous les autres.",
          "Scores cumulés sur 3 manches.",
          "Egalité départagée par le temps global."
        ],
        requirements: [
          "Choisir un partenaire.",
          "Adresse email valide.",
          "Ancienneté minimum de 1 mois sur la plateforme."
        ],
        info: "Formez le duo le plus redoutable !"
      },
      {
        name: "Blitz Party",
        image: "https://th.bing.com/th/id/OIP.gj0EUWmY_1OjBYebMmr_4gHaE7?w=248&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "Mini-jeux variés à enchaîner.",
          "Points bonus pour l'esprit d'équipe.",
          "Top 10 récompensé !"
        ],
        requirements: [
          "Avoir un micro fonctionnel.",
          "Inscription à chaque mini-jeu.",
          "Respect des autres joueurs."
        ],
        info: "Ambiance survoltée et rires garantis."
      }
    ]
  },
  {
    name: "Course",
    image: "https://th.bing.com/th/id/OIP.RiSJrv5m6j7LWOt7_7MjvAHaEK?w=275&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
    championships: [
      {
        name: "Turbo Circuit",
        image: "https://th.bing.com/th/id/OIP.MCxhGrbfoelyv_oUQxO9jQHaHa?w=188&h=187&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "3 courses à réaliser.",
          "Meilleur temps gagnant.",
          "Pas de collision autorisée."
        ],
        requirements: [
          "Permis de conduire (si jeu simulation).",
          "Inscription avant la date limite.",
          "Configuration minimale requise."
        ],
        info: "Vitesse et précision seront vos alliées."
      },
      {
        name: "Speed Grand Prix",
        image: "https://th.bing.com/th/id/OIP.PMWqynjUUOTDrprXbIqbnAAAAA?w=236&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "Voitures et circuits imposés.",
          "Aucun code de triche toléré.",
          "Défis surprises ajoutés lors de la course."
        ],
        requirements: [
          "Licence e-sport acceptée.",
          "Profil vérifié.",
          "Matériel homologué accepté."
        ],
        info: "Montrez-nous qui est le vrai pilote !"
      },
      {
        name: "Urban Racer",
        image: "https://th.bing.com/th/id/OIP.ZLB-PqwSXqKEfoAWB5mx0AHaD4?w=260&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "Courses en milieu urbain virtuel.",
          "Respect du code de la route en jeu.",
          "Bonus pour les drifts maitrisés."
        ],
        requirements: [
          "Test de démarrage rapide.",
          "Compte actif depuis 2 semaines.",
          "Inscription complète nécessaire."
        ],
        info: "Sensations fortes au cœur de la ville !"
      }
    ]
  },
  {
    name: "Sport",
    image: "https://tse4.mm.bing.net/th/id/OIP.0ZDM5GvUa2vqHjk9FmCBWQHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    championships: [
      {
        name: "eFootball Masters",
        image: "https://th.bing.com/th/id/OIP.Jk_53FvQ4m2aEUqLCkZI9QHaEI?w=274&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "Matchs de 8 minutes.",
          "Sélection libre des équipes.",
          "Prolongations en cas d'égalité."
        ],
        requirements: [
          "Avoir une manette compatible.",
          "Validation du profil sportif.",
          "Inscription à la fédération en ligne."
        ],
        info: "Le terrain vous attend, prouvez votre valeur !"
      },
      {
        name: "Hoop Stars",
        image: "https://th.bing.com/th/id/OIP.vQuSbi-iHpwAil_CoVGAPgHaEK?w=270&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "Matches 1vs1 à élimination directe.",
          "Utilisation des bonus acceptée.",
          "Fair-play obligatoire."
        ],
        requirements: [
          "Preuve de fair-play.",
          "Score minimum sur le jeu de base.",
          "Profil public visible."
        ],
        info: "Faites trembler les paniers virtuels !"
      },
      {
        name: "Grand Slam Online",
        image: "https://th.bing.com/th/id/OIP.4263H--IoZUI55UFnHbJlQHaEo?w=249&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "Tournois en format coupe.",
          "Service spécial limité à 3 par manche.",
          "Scores ajoutés au classement global."
        ],
        requirements: [
          "Âge minimum de 14 ans.",
          "Avoir participé à au moins 2 tournois.",
          "Profil complet et vérifié."
        ],
        info: "Devenez le roi ou la reine de la raquette !"
      }
    ]
  },
  {
    name: "Autres",
    image: "https://th.bing.com/th/id/OIP.Sc5D5RyfTomkh-WvoAtnVQHaEK?w=314&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
    championships: [
      {
        name: "Quiz Masters",
        image: "https://th.bing.com/th/id/OIP.6ku3nOPQZooXx1H-j79SIgHaDL?w=321&h=150&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "50 questions – 30 secondes/question.",
          "Aucun support externe autorisé.",
          "Récompenses pour les 5 premiers."
        ],
        requirements: [
          "Email confirmé.",
          "Photo de profil présente.",
          "Règlement accepté."
        ],
        info: "Montrez votre culture générale en toute convivialité."
      },
      {
        name: "Puzzle Mania",
        image: "https://th.bing.com/th/id/OIP.I4JqBS0Pec9zFuM06km7LAHaFj?w=190&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "Compléter les puzzles en temps limité.",
          "Aide limitée à 2 indices par partie.",
          "Score basé sur la rapidité."
        ],
        requirements: [
          "Compte actif.",
          "Aucune tricherie autorisée.",
          "Respect des délais imposés."
        ],
        info: "Défiez votre logique et rivalisez avec d'autres !"
      },
      {
        name: "Creative Show",
        image: "https://th.bing.com/th/id/OIP.E71h5aTDu7qJ_U25HzeExQHaD7?w=317&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1",
        rules: [
          "Présentez une création originale selon le thème.",
          "Temps de présentation : 2 minutes.",
          "Points supplémentaires pour la créativité."
        ],
        requirements: [
          "Thème respecté.",
          "Participation individuelle.",
          "Soumission avant minuit."
        ],
        info: "Laissez parler votre imagination sur scène numérique !"
      }
    ]
  }
];

// Simulate 'users/participants' per championship for demo (in real: API)
let demoParticipants = {};
categories.forEach(cat => cat.championships.forEach(
  champ => {
    demoParticipants[champ.name] = Array.from({length:Math.max(20,Math.floor(Math.random()*38))}, 
      (_,i)=> `Joueur${i+1}`);
  })
);

// Simulate leaderboard per championship
let demoLeaderboards = {};
Object.keys(demoParticipants).forEach(champName => {
  let users = demoParticipants[champName];
  let ranked = users.slice().map(u => ({
    user: u, pts: Math.floor(800 + Math.random() * 2200)
  }));
  ranked.sort((a,b)=>b.pts - a.pts);
  demoLeaderboards[champName] = ranked;
});

const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

// Render category cards
function renderCategories() {
  const area = $("#categories-list");
  area.innerHTML = "";
  categories.forEach((cat, idx) => {
    let card = document.createElement('div');
    card.className = "category-card";
    card.innerHTML = `
      <img class="category-img" src="${cat.image}" alt="Catégorie ${cat.name}">
      <div class="category-title">${cat.name}</div>
      <img src="https://th.bing.com/th/id/OIP.6jH1FDFz_O9_b4ZZxrxnQAHaEe?w=258&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" alt="Présentation ${cat.name}" title="Illustration championnat" style="width:100%;height:110px;object-fit:cover;border-radius:10px;box-shadow:0 1px 8px #3498db40;margin-bottom:13px;">
      <button class="choose-btn" onclick="showChampionships(${idx})">Choisir</button>
    `;
    area.appendChild(card);
  });
}
renderCategories();

// Show championships for a selected category
function showChampionships(catIdx) {
  $("#categories-list").style.display = "none";
  $("#championships-area").style.display = "block";
  const cat = categories[catIdx];
  const champList = $("#championships-list");
  champList.innerHTML = "";
  cat.championships.forEach((champ, idx) => {
    champList.innerHTML += `
      <div class="champ-card">
        <img class="champ-img" src="${champ.image}" alt="Championnat ${champ.name}" />
        <div class="champ-title">${champ.name}</div>
        <div class="champ-desc">${champ.info}</div>
        <img src="https://th.bing.com/th/id/OIP.zlYN1Z0k_YREJSUmxBZ4mAHaHa?w=168&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" alt="Présentation ${champ.name}" 
          title="Image présentation championnat" 
          style="width:100%;height:62px;object-fit:cover;border-radius:8px;box-shadow:0 1px 8px #0bc5ea60;margin-bottom:8px;background:#fff;" />
        <button class="participate-btn" onclick="openChampionModal('${cat.name}','${champ.name}')">Participer</button>
      </div>
    `;
  });
}
window.showChampionships = showChampionships;
window.hideChampionships = function() {
  $("#championships-area").style.display = "none";
  $("#categories-list").style.display = "flex";
  // Close modal if open
  closeModal();
};

function closeModal(){
  $("#modal-bg").style.display = "none";
  $("#modal-content").innerHTML = "";
}
$("#modal-bg").addEventListener('click', function(e) {
  if(e.target.id==='modal-bg') closeModal();
});

// Helper: escape HTML
function escapeHTML (str) {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

// Open interaction-modal for a championship
function openChampionModal(categoryName,champName){
  // Find championship
  const cat = categories.find(c => c.name===categoryName);
  const champ = cat.championships.find(ch=>ch.name===champName);
  let infos = `<div class='infos-banner'>
    <strong>${escapeHTML(champName)}</strong>: ${escapeHTML(champ.info)}
  </div>
  <h3>Règles du jeu</h3>
  <ul>${champ.rules.map(r=>`<li>${escapeHTML(r)}</li>`).join("")}</ul>
  <h3>Conditions pour participer</h3>
  <ul>${champ.requirements.map(r=>`<li>${escapeHTML(r)}</li>`).join("")}</ul>
  <div style="margin:17px 0 11px 0;font-size:1rem;">
     <b>L'accès au championnat est réservé aux joueurs remplissant <u>toutes</u> les conditions ci-dessus.</b><br>
    <span id="nb-participants" style="color:#2179be;">${demoParticipants[champName].length}</span> participants actuellement inscrits (minimum requis : <strong>20</strong>)
  </div>
  <form class="modal-participate-form" onsubmit="return checkParticipation(event,'${champName}')">
    <label>Votre pseudo&nbsp;:
      <input type="text" required pattern="\\S{3,32}" placeholder="Ex: Maestro27" id="pseudo-input" autocomplete="off" />
    </label>
    <button type="submit" id="submit-btn">Participer</button>
  </form>
  <button class="modal-close-btn" onclick="closeModal()" title="Fermer">&times;</button>
  <div id="participation-state"></div>
  <div style="margin-top:21px;"><b>Classement actuel :</b></div>
  <div class="leaderboard-box" id="leaderboard-zone"></div>
  <div style="margin-top:13px;"><b>Liste des participants :</b></div>
  <div class="participant-list" id="participant-list"></div>
  `;
  $("#modal-content").innerHTML = infos;
  $("#modal-bg").style.display = "flex";
  renderLeaderboard(champName);
  renderParticipants(champName);
}

window.openChampionModal = openChampionModal;
window.closeModal = closeModal;

function checkParticipation(ev, champName){
  ev.preventDefault();
  let input = $("#pseudo-input");
  let pseudo = input.value.trim();
  if(pseudo.length<3) {
    showParticipationState("Le pseudo doit faire au moins 3 caractères.", false);
    return false;
  }
  if(demoParticipants[champName].some(p=>p.toLowerCase()===pseudo.toLowerCase())){
    showParticipationState("Ce pseudo est déjà utilisé pour ce championnat.", false);
    return false;
  }
  // Random simulated eligibility
  if(Math.random() > 0.7 && demoParticipants[champName].length<40){
    showParticipationState("Vous ne remplissez pas toutes les conditions requises (démonstration)", false);
    return false;
  }
  demoParticipants[champName].push(pseudo);
  demoLeaderboards[champName].push({user:pseudo,pts: Math.floor(900+Math.random()*1000)});
  showParticipationState("Félicitations, vous participez bien à ce championnat !", true);
  $("#nb-participants").innerText = demoParticipants[champName].length;
  renderParticipants(champName);
  renderLeaderboard(champName, pseudo);
  return false;
}

function showParticipationState(msg, success){
  let node = $("#participation-state");
  node.innerHTML = "<div style='color:"+(success ? "#227900":"#c21f2d")+";margin-top:8px;font-weight:bold;'>" + escapeHTML(msg) + "</div>";
}

function renderParticipants(champName){
  let pList = demoParticipants[champName].map(
    p => `<span style="display:inline-block;background:#ddeffe;color:#125ab3;border-radius:6px;font-size:0.97em;padding:4px 11px;margin:2.7px;">${escapeHTML(p)}</span>`
  ).join(" ");
  $("#participant-list").innerHTML = pList || "(Aucun)";
}

function renderLeaderboard(champName, highlightUser){
  let list = demoLeaderboards[champName].slice(0,10);
  let html = `
    <h4>Top 10</h4>
    <ol class="leaderboard-list">
      ${list.map((r,i) => `<li${highlightUser&&r.user===highlightUser ? ' style="background:#e1f8ff;"':''}>
        ${i+1}. <b>${escapeHTML(r.user)}</b> : <span style="font-family:monospace">${r.pts} pts</span>
      </li>`).join("")}
    </ol>
  `;
  $("#leaderboard-zone").innerHTML = html;
}

// Provide "real-time" infos updates (demos)
setInterval(()=> {
  // every ~8s a random participant "registers" to a random championship
  let champs = Object.keys(demoParticipants);
  let pick = champs[Math.floor(Math.random()*champs.length)];
  if(demoParticipants[pick].length < 60){
    let pseudo = "Joueur"+(Math.floor(Math.random()*900+100));
    demoParticipants[pick].push(pseudo);
    demoLeaderboards[pick].push({user:pseudo,pts:Math.floor(800+Math.random()*2000)});
    // autoupdate if modal is open and matches
    let currentTitle = $("#modal-content h3");
    if($("#modal-bg").style.display==='flex' && currentTitle){
      if($("#modal-content").innerHTML.indexOf(pick)!==-1){
        $("#nb-participants").innerText = demoParticipants[pick].length;
        renderParticipants(pick);
        renderLeaderboard(pick);
      }
    }
  }
}, 8000);