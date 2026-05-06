// Slider
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        dots[i].classList.remove('active');
        if (i === n) {
            slide.classList.add('active');
            dots[i].classList.add('active');
            dots[i].classList.add('active');
        }
    });
    index = n;
}

// Auto défilement
function autoSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}
setInterval(autoSlide, 4000);

// Navigation manuelle via les indicateurs
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
    });
});
 






// Données des produits
const produits = [
  // Kimono
{ id: 1, nom: "Kimono simple", description: "Kimono léger et résistant pour entraînement.", prix: 15000, image: "PHOTO/KIMONO%20ROUGE-BLEU.PNG", categorie: "kimono", images: ["PHOTO/KIMONO%20ROUGE-BLEU.PNG", "PHOTO/KIMONO%20ROUGE-BLEU.PNG", "PHOTO/KIMONO%20ROUGE-BLEU.PNG"] },
{ id: 23, nom: "kimono BRCN kata bleu", description: "Équipement de qualité pour arts martiaux.", prix: 45000, image: "PHOTO/kimono BRCN kata bleu.jpeg", categorie: "kimono", images: ["PHOTO/kimono BRCN kata bleu.jpeg", "PHOTO/kimono BRCN kata bleu.jpeg", "PHOTO/kimono BRCN kata bleu.jpeg"] },
{ id: 24, nom: "kimono BRCN kata rouge", description: "Équipement de qualité pour arts martiaux.", prix: 45000, image: "PHOTO/kimono BRCN kata rouge.jpeg", categorie: "kimono", images: ["PHOTO/kimono BRCN kata rouge.jpeg", "PHOTO/kimono BRCN kata rouge1.jpeg", "PHOTO/kimono BRCN kata rouge2.jpeg"] },
{ id: 25, nom: "kimono BRCN kumite recto-verso", description: "Équipement de qualité pour arts martiaux.", prix: 45000, image: "PHOTO/kimono BRCN kumite recto-verso.jpeg", categorie: "kimono", images: ["PHOTO/kimono BRCN kumite recto-verso.jpeg", "PHOTO/kimono BRCN kumite recto-verso1.jpeg", "PHOTO/kimono BRCN kumite recto-verso2.jpeg"] },
{ id: 26, nom: "kimono kata arawaza black Diamond", description: "Équipement de qualité pour arts martiaux.", prix: 75000, image: "PHOTO/kimono kata arawaza black Diamond.jpg", categorie: "kimono", images: ["PHOTO/kimono kata arawaza black Diamond.jpg", "PHOTO/kimono kata arawaza black Diamond1.jpeg", "PHOTO/kimono kata arawaza black Diamond2.jpeg"] },
{ id: 27, nom: "kimono SMA blanc", description: "Équipement de qualité pour arts martiaux.", prix: 75000, image: "PHOTO/kimono SMA blanc.jpeg", categorie: "kimono", images: ["PHOTO/kimono SMA blanc.jpeg", "PHOTO/kimono SMA blanc1.jpeg", "PHOTO/kimono SMA blanc2.jpeg"] },
{ id: 28, nom: "kimono SMA rouge", description: "Équipement de qualité pour arts martiaux.", prix: 75000, image: "PHOTO/kimono SMA rouge.jpeg", categorie: "kimono", images: ["PHOTO/kimono SMA rouge.jpeg", "PHOTO/kimono SMA rouge1.jpeg", "PHOTO/kimono SMA rouge2.jpeg"] },
{ id: 29, nom: "kimono SMAI bleu", description: "Équipement de qualité pour arts martiaux.", prix: 75000, image: "PHOTO/kimono SMAI bleu.jpeg", categorie: "kimono", images: ["PHOTO/kimono SMAI bleu.jpeg", "PHOTO/kimono SMAI bleu1.jpeg", "PHOTO/kimono SMAI bleu2.jpeg"] },
{ id: 30, nom: "kimono tokaido bleu", description: "Équipement de qualité pour arts martiaux.", prix: 75000, image: "PHOTO/kimono tokaido bleu.jpeg", categorie: "kimono", images: ["PHOTO/kimono tokaido bleu.jpeg", "PHOTO/kimono tokaido bleu1.Webp", "PHOTO/kimono tokaido bleu2.webp"] },
{ id: 31, nom: "kimono tokaido roure", description: "Équipement de qualité pour arts martiaux.", prix: 75000, image: "PHOTO/kimono tokaido roure.jpeg", categorie: "kimono", images: ["PHOTO/kimono tokaido roure.jpeg", "PHOTO/kimono tokaido roure1.webp", "PHOTO/kimono tokaido roure2.webp"] },
{ id: 40, nom: "kimono-kata-shureidode-bleu", description: "Équipement de qualité pour arts martiaux.", prix: 75000, image: "PHOTO/kimono-kata-shureidode-bleu.webp", categorie: "kimono", images: ["PHOTO/kimono-kata-shureidode-bleu.webp", "PHOTO/kimono-kata-shureidode-bleu1.jpg", "PHOTO/kimono-kata-shureidode-bleu1.jpg"] },
{ id: 41, nom: "kimono-kata-shureidode-rouge", description: "Équipement de qualité pour arts martiaux.", prix: 75000, image: "PHOTO/kimono-kata-shureidode-rouge.jpg", categorie: "kimono", images: ["PHOTO/kimono-kata-shureidode-rouge.jpg", "PHOTO/kimono-kata-shureidode-rouge1.jpg", "PHOTO/kimono-kata-shureidode-rouge1.jpg"] },
{ id: 44, nom: "kimono tokaido kumite bleu", description: "Équipement de qualité pour arts martiaux.", prix: 75000, image: "PHOTO/kimono tokaido kumite bleu.webp", categorie: "kimono", images: ["PHOTO/kimono tokaido kumite bleu.webp", "PHOTO/kimono tokaido kumite bleu1.webp", "PHOTO/kimono tokaido kumite bleu1.webp"] },
{ id: 45, nom: "kimono tokaido kumite roure", description: "Équipement de qualité pour arts martiaux.", prix: 75000, image: "PHOTO/kimono tokaido kumite roure.webp", categorie: "kimono", images: ["PHOTO/kimono tokaido kumite roure.webp", "PHOTO/kimono tokaido kumite roure2.webp", "PHOTO/kimono tokaido kumite roure.webp"] },
{ id: 46, nom: "kimono arawaza kumite recto-verso", description: "Équipement de qualité pour arts martiaux.", prix: 60000, image: "PHOTO/kimono arawaza recto-verso.webp", categorie: "kimono", images: ["PHOTO/kimono arawaza recto-verso1.webp", "PHOTO/kimono arawaza recto-verso1.webp", "PHOTO/kimono arawaza recto-verso1.webp"] },
  // Protection
{ id: 2, nom: "Gants arawaza simple", description: "Protection optimale pour vos combats.", prix: 9000, image: "PHOTO/gant-arawaza simple blue.jpg", categorie: "protection", images: [ "PHOTO/gant-arawaza simple blue.jpg","PHOTO/gant-arawaza simple blue1.jpg", "PHOTO/gants bleu.png"] },
{ id: 5, nom: "Gants smail simple Rouge", description: "Gants résistants pour karaté.", prix: 9000, image: "PHOTO/gants%20rouge.png", categorie: "protection", images: ["PHOTO/gants rouge.png", "PHOTO/gants rouge.png", "PHOTO/gants rouge.png"] },
{ id: 6, nom: "Casque de Protection", description: "Protection tête lors des combats.", prix: 10000, image: "PHOTO/casque de portection.jpg", categorie: "protection", images: ["PHOTO/casque de portection.jpg", "PHOTO/casque de portection1.jpg", "PHOTO/casque de portection2.jpg"] },
{ id: 7, nom: "protege tibia bleu", description: "Équipement de qualité pour arts martiaux.", prix: 15000, image: "PHOTO/5protege tibia bleu.png", categorie: "protection", images: ["PHOTO/5protege tibia bleu.png", "PHOTO/5protege tibia bleu1.jpeg", "PHOTO/5protege tibia bleu2.jpeg"] },
  { id: 16, nom: "gant arawaza 2etiquette bleu", description: "Équipement de qualité pour arts martiaux.", prix: 9500, image: "PHOTO/gant arawaza 2etiquette bleu.jpg", categorie: "protection", images: ["PHOTO/gant arawaza 2etiquette bleu.jpg", "PHOTO/gant arawaza 2etiquette bleu1.jpeg", "PHOTO/gant arawaza 2etiquette bleu1.webp"] },
  { id: 17, nom: "gant smai 2etiquette bleu", description: "Équipement de qualité pour arts martiaux.", prix: 9500, image: "PHOTO/gant smai 2etiquette bleu.webp", categorie: "protection", images: ["PHOTO/gant smai 2etiquette bleu.webp", "PHOTO/gant smai 2etiquette bleu1.jpeg", "PHOTO/gant smai 2etiquette bleu2.webp"] },
  { id: 18, nom: "gant smai 2etiquette rouge", description: "Équipement de qualité pour arts martiaux.", prix: 9500, image: "PHOTO/gant smai 2etiquette rouge.webp", categorie: "protection" , images: ["PHOTO/gant smai 2etiquette rouge.webp", "PHOTO/gant smai 2etiquette rouge1.webp", "PHOTO/gant smai 2etiquette rouge2.webp"] },
  { id: 19, nom: "gant-arawaza 2etiquette rouge", description: "Équipement de qualité pour arts martiaux.", prix: 9500, image: "PHOTO/gant-arawaza 2etiquette rouge.jpg", categorie: "protection" , images: ["PHOTO/gant-arawaza 2etiquette rouge.jpg", "PHOTO/gant-arawaza 2etiquette rouge.webp", "PHOTO/gant-arawaza 2etiquette rouge1.webp"] }, 
  { id: 20, nom: "Ceinture arawaza kumité bleu", description: "Ceinture kumite bleu  pour compétition.", prix: 3500, image: "PHOTO/CEINTURE-karaté2.jpg", categorie: "protection" , images: ["PHOTO/CEINTURE-karaté2.jpg", "PHOTO/CEINTURE-karaté2.jpg", "PHOTO/CEINTURE-karaté.jpg"]   },
  { id: 21, nom: "gant-arawaza simple rouge", description: "Équipement de qualité pour arts martiaux.", prix: 9000, image: "PHOTO/gant-arawaza simple rouge.jpg", categorie: "protection"  , images: ["PHOTO/gant-arawaza simple rouge.jpg", "PHOTO/gant-arawaza simple rouge1.jfif", "PHOTO/gant-arawaza simple rouge2.jpg"] },
  { id: 22, nom: "Ceinture arawaza kumité rouge", description: "Ceinture kumite  rouge pour compétition.", prix: 3500, image: "PHOTO/CEINTURE-karaté1.jpg", categorie: "protection" , images: ["PHOTO/CEINTURE-karaté1.jpg", "PHOTO/CEINTURE-karaté1.jpg", "PHOTO/CEINTURE-karaté.jpg"]   },
  { id: 32, nom: "protection pastron femme arawaza", description: "Équipement de qualité pour arts martiaux.", prix: 15000, image: "PHOTO/protection pastron femme arawaza.jpeg", categorie: "protection" , images: ["PHOTO/protection pastron femme arawaza.jpeg", "PHOTO/protection pastron femme arawaza1.jpeg", "PHOTO/protection pastron femme arawaza2.jpg"] },
  { id: 33, nom: "protection pastron femme smai", description: "Équipement de qualité pour arts martiaux.", prix: 15000, image: "PHOTO/protection pastron femme smai.jpeg", categorie: "protection" , images: ["PHOTO/protection pastron femme smai.jpeg", "PHOTO/protection pastron femme smai1.jpeg", "PHOTO/protection pastron femme smai12.jpeg"] },
  { id: 34, nom: "protege dent onix", description: "Équipement de qualité pour arts martiaux.", prix: 3000, image: "PHOTO/protege dent onix.jpeg", categorie: "protection" , images: ["PHOTO/protege dent onix.jpeg", "PHOTO/protege dent onix1.jpeg", "PHOTO/protege dent onix2.jpeg"] },
  { id: 35, nom: "protege plaston homme SMAi", description: "Équipement de qualité pour arts martiaux.", prix: 15000, image: "PHOTO/protege plaston homme SMAi.jpeg", categorie: "protection" , images: ["PHOTO/protege plaston homme SMAi.jpeg", "PHOTO/protege plaston homme SMAi1.jpeg", "PHOTO/protege plaston homme SMAi2.jpeg"]   },
  { id: 36, nom: "protege tibia roure", description: "Équipement de qualité pour arts martiaux.", prix: 15000, image: "PHOTO/protege tibia  roure.jpeg", categorie: "protection" , images: ["PHOTO/protege tibia  roure.jpeg", "PHOTO/protege tibia  roure1.jpeg", "PHOTO/protege tibia  roure2.jpeg"] },
  { id: 37, nom: "protege tibia bleu", description: "Équipement de qualité pour arts martiaux.", prix: 15000, image: "PHOTO/protege tibia bleu.jpeg", categorie: "protection" , images: ["PHOTO/protege tibia bleu.jpeg", "PHOTO/protege tibia bleu1.jpeg", "PHOTO/protege tibia bleu2.jpeg"] },
  { id: 38, nom: "protège-DENT", description: "Équipement de qualité pour arts martiaux.", prix: 3000, image: "PHOTO/protège-DENT1.jpg", categorie: "protection" , images: ["PHOTO/protège-DENT1.jpg", "PHOTO/protège-DENT.jpg", "PHOTO/protège-DENT.png"] },

  // Matériel
  { id: 3, nom: "Sac d'équipement", description: "Idéal pour l'entraînement et compétition.", prix: 10000, image: "PHOTO/SAC%20DE%20MATERIEL.jpg", categorie: "materiel" , images: [ "PHOTO/SAC DE MATERIEL.jpg", "PHOTO/SAC DE MATERIEL1.jpg", "PHOTO/SAC DE MATERIEL2.jpg"]},
  { id: 8, nom: "cible manequin", description: "Équipement de qualité pour arts martiaux.", prix: 120000, image: "PHOTO/cible manequin.jpeg", categorie: "materiel" , images: ["PHOTO/cible manequin.jpeg", "PHOTO/cible manequin.jpeg", "PHOTO/cible manequin.jpeg"] },
  { id: 39, nom: "tapis", description: "1 mettre carré de tapis arts martiaux.", prix: 10000, image: "PHOTO/tapis.jpeg", categorie: "materiel" , images: ["PHOTO/tapis.jpeg", "PHOTO/tapis1.jpeg", "PHOTO/tapis2.jpeg"] },

  // Ensemble
  { id: 9, nom: "ensemble kimono kumité smai bleu et rouge", description: "Équipement de qualité pour arts martiaux.", prix: 100000, image: "PHOTO/ensembe kimono kumité smai.webp", categorie: "ensemble" , images: ["PHOTO/ensembe kimono kumité smai.webp", "PHOTO/kimono SMA kumite rouge2.jpeg", "PHOTO/kimono SMA kumite bleu1.jpeg"]   },
  { id: 4, nom: "ensemble Ceinture arawaza", description: "ensemble Ceinture kumite bleu et rouge pour compétition.", prix: 7000, image: "PHOTO/CEINTURE-karaté.jpg", categorie: ["ensemble", "protection" ], images: ["PHOTO/CEINTURE-karaté.jpg", "PHOTO/CEINTURE-karaté1.jpg", "PHOTO/CEINTURE-karaté2.jpg"]   },
  { id: 10, nom: "ensemble kimono kata arawaza bleu et rouge", description: "Équipement de qualité pour arts martiaux.", prix: 150000, image: "PHOTO/ensemble kimono kata arawaza bleu et rouge.jpeg", categorie: "ensemble" , images: ["PHOTO/ensemble kimono kata arawaza bleu et rouge.jpeg", "PHOTO/ensemble kimono kata arawaza bleu et rouge1.jpeg", "PHOTO/kimono Arawaza-kata rouge.webp"]   },
  { id: 11, nom: "ensemble Kimono Kata SMAI bleu et rouge", description: "Équipement de qualité pour arts martiaux.", prix: 15000, image: "PHOTO/ensemble Kimono Kata SMAI bleu et rouge.jpg", categorie: "ensemble" , images: ["PHOTO/ensemble Kimono Kata SMAI bleu et rouge.jpg", "PHOTO/kimono SMAI bleu1.jpeg", "PHOTO/kimono SMA rouge1.jpeg"]   },
  { id: 12, nom: "ensemble Kimono Kata tokaido bleu et rouge", description: "Équipement de qualité pour arts martiaux.", prix: 150000, image: "PHOTO/ensemble Kimono Kata tokaido bleu et rouge.jfif", categorie: "ensemble" , images: ["PHOTO/ensemble Kimono Kata tokaido bleu et rouge.jfif", "PHOTO/kimono tokaido roure1.webp", "PHOTO/kimono tokaido bleu1.webp"]   },
    { id: 13, nom: "ensemble kimono kumite tokaido bleu et rouge", description: "Équipement de qualité pour arts martiaux.", prix: 100000, image: "PHOTO/ensemble kimono kumite tokaido bleu et rouge.jpg", categorie: "ensemble" , images: ["PHOTO/ensemble kimono kumite tokaido bleu et rouge.jpg", "PHOTO/kimono tokaido kumite roure2.webp", "PHOTO/kimono tokaido kumite bleu.webp"]   },
    { id: 14, nom: "ensenble kimono kumité arawaza zoro bleu et rouge ", description: "Équipement de qualité pour arts martiaux.", prix: 105000, image: "PHOTO/ensenble kimono kumité arawaza zoro bleu et rouge.jpeg", categorie: "ensemble" , images: ["PHOTO/ensenble kimono kumité arawaza zoro bleu et rouge.jpeg","PHOTO/ensenble kimono kumité arawaza zoro bleu et rouge1.jpeg", "PHOTO/ensenble kimono kumité arawaza zoro bleu et rouge2.webp"]   },
    { id: 15, nom: "ensenble tibia arawaza bleu et rouge", description: "Équipement de qualité pour arts martiaux.", prix: 30000, image: "PHOTO/ensenble tibia arawaza bleu et rouge.jpeg", categories: ["ensemble", "protection"] , images: ["PHOTO/ensenble tibia arawaza bleu et rouge.jpeg", "PHOTO/ensenble tibia arawaza bleu et rouge1.jpeg", "PHOTO/ensenble tibia arawaza bleu et rouge2.jpeg"]   },
    { id: 42, nom: "ensemble-kimono-shureido-rouge-et-bleue", description: "Équipement de qualité pour arts martiaux.", prix: 150000, image: "PHOTO/ensemble-kimono-shureido-rouge-et-bleue.jpg", categorie: "ensemble" , images: ["PHOTO/ensemble-kimono-shureido-rouge-et-bleue.jpg", "PHOTO/kimono-kata-shureidode-bleu1.jpg", "PHOTO/kimono-kata-shureidode-rouge1.jpg"]   },
    { id: 43, nom: "ensemble dégresseur unisexe", description: "Équipement de qualité pour arts martiaux.", prix: 10000, image: "PHOTO/ensemble dégresseur unisexe.jpeg", categorie: "ensemble" , images: ["PHOTO/ensemble dégresseur unisexe.jpeg", "PHOTO/ensemble dégresseur unisexe1.jpg", "PHOTO/ensemble dégresseur unisexe.jpeg"]   },

    // Ensemble Promotions & Offres Spéciales
    { id: 100, nom: "Pack Débutant", description: "Kimono + Ceinture + Gants", prix: 25000, image: "PHOTO/menu1.png", categorie: "ensemble" },
    { id: 101, nom: "Pack Combat", description: "Kimono + Gants + Protège-tibia", prix: 40000, image: "PHOTO/menu2.png", categorie: "ensemble" },
    { id: 102, nom: "Nouvelle Arrivée", description: "Kimono Tokaido édition limitée", prix: 35000, image: "PHOTO/menu3.png", categorie: "ensemble" },

];


// Gestion du panier
let panier = JSON.parse(localStorage.getItem('panier')) || [];

// Burger menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fermer le menu mobile après clic sur un lien
const navLinkItems = document.querySelectorAll('.nav-links a');
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Fermer le menu mobile en cliquant ailleurs sur l'écran
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// Filtre produits
const filterButtons = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Retirer la classe active de tous les boutons
    filterButtons.forEach(b => b.classList.remove('active'));
    // Ajouter la classe active au bouton cliqué
    btn.classList.add('active');

    const category = btn.dataset.filter;

    cards.forEach(card => {
      // Affiche tout si "all" est choisi
      if (category === 'all') {
        card.style.display = 'block';
      } else {
        // Affiche uniquement les produits correspondant à la catégorie
        card.style.display = card.dataset.category === category ? 'block' : 'none';
      }
    });
  });
});


// Animation fade-in des produits au scroll
function checkCards() {
  const triggerBottom = window.innerHeight * 0.8;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', checkCards);
window.addEventListener('load', () => {
  cards.forEach(card => card.classList.add('show'));
  mettreAJourBadge();
});

// Gestion du formulaire de contact
const formContact = document.getElementById('form-contact');
if (formContact) {
  formContact.addEventListener('submit', (e) => {
    e.preventDefault();
    const nom = formContact.nom.value;
    const email = formContact.email.value;
    const message = formContact.message.value;
    const whatsappMessage = `Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/+221762331406?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  });
}

// Ajouter un produit au panier
function ajouterAuPanier(id) {
    const produit = produits.find(p => p.id === id);
    if (!produit) return;

    const existant = panier.find(p => p.id === id);
    if (existant) {
        existant.quantite++;
    } else {
        panier.push({ ...produit, quantite: 1 });
    }

    sauvegarderPanier();
    mettreAJourBadge();
    afficherNotification(`${produit.nom} ajouté au panier!`);
}

// Supprimer un produit du panier
function supprimerDuPanier(id) {
    panier = panier.filter(p => p.id !== id);
    sauvegarderPanier();
    mettreAJourBadge();
    afficherPanier();
}

// Modifier la quantité
function modifierQuantite(id, changement) {
    const produit = panier.find(p => p.id === id);
    if (produit) {
        produit.quantite += changement;
        if (produit.quantite <= 0) {
            supprimerDuPanier(id);
        } else {
            sauvegarderPanier();
            afficherPanier();
        }
    }
    mettreAJourBadge();
}

// Sauvegarder le panier
function sauvegarderPanier() {
    localStorage.setItem('panier', JSON.stringify(panier));
}

// Mettre à jour le badge
function mettreAJourBadge() {
    const badge = document.querySelector('.badge');
    if (badge) {
        const total = panier.reduce((sum, p) => sum + p.quantite, 0);
        badge.textContent = total;
    }
}

// Calculer le total
function calculerTotal() {
    return panier.reduce((sum, p) => sum + (p.prix * p.quantite), 0);
}

// Afficher le panier (modal)
function afficherPanier() {
    let modal = document.getElementById('modal-panier');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-panier';
        modal.className = 'modal-panier';
        document.body.appendChild(modal);
    }

    if (panier.length === 0) {
        modal.innerHTML = `
            <div class="contenu-panier">
                <span class="fermer-panier" onclick="fermerPanier()">&times;</span>
                <h2>Votre Panier</h2>
                <button class="btn-continuer" onclick="fermerPanier()">Continuer vos achats</button>
            </div>
        `;
    } else {
        const total = calculerTotal();
        modal.innerHTML = `
            <div class="contenu-panier">
                <span class="fermer-panier" onclick="fermerPanier()">&times;</span>
                <h2>Votre Panier</h2>
                <div class="liste-panier">
                    ${panier.map(p => `
                        <div class="item-panier">
                            <img src="${p.image}" alt="${p.nom}" onerror="this.src='PHOTO/SAC%20DE%20MATERIEL.jpg'">
                            <div class="details-item">
                                <h4>${p.nom}</h4>
                                <p class="prix-item">${p.prix.toLocaleString('fr-FR')} CFA</p>
                                ${getTaillesDisponibles(p.categorie).length > 0 ? `
                                    <label for="taille-${p.id}">Taille :</label>
                                    <select id="taille-${p.id}" onchange="changerTaille(${p.id}, this.value)">
                                        <option value="">Choisir</option>
                                        ${getTaillesDisponibles(p.categorie).map(t => `
                                            <option value="${t}" ${p.taille === t ? 'selected' : ''}>${t}</option>
                                        `).join('')}
                                    </select>
                                ` : ''}
                            </div>
                            <div class="quantite-controls">
                                <button onclick="modifierQuantite(${p.id}, -1)">-</button>
                                <span>${p.quantite}</span>
                                <button onclick="modifierQuantite(${p.id}, 1)">+</button>
                            </div>
                            <button class="supprimer-item" onclick="supprimerDuPanier(${p.id})">&times;</button>
                        </div>
                    `).join('')}
                </div>
                <div class="total-panier">
                    <h3>Total: ${total.toLocaleString('fr-FR')} CFA</h3>
                </div>
                <button class="btn-commander" onclick="afficherFormulaireCommande()">
                    Passer la commande
                </button>
            </div>
        `;
    }

    modal.style.display = 'flex';

    // Fermer le panier en cliquant à l'extérieur du cadre panier
    const fermerSurClicExterieur = (e) => {
        if (modal.style.display === 'flex' && !e.target.closest('.contenu-panier') && !e.target.closest('.cart-icon')) {
            fermerPanier();
            document.removeEventListener('click', fermerSurClicExterieur);
        }
    };
    setTimeout(() => document.addEventListener('click', fermerSurClicExterieur), 100);
}

function getTaillesDisponibles(categorie) {
    if (categorie === 'kimono' || categorie === 'ensemble') {
        return ['160', '170', '180', '190', '200'];
    } else if (categorie === 'protection') {
        return ['M', 'L', 'XL', 'XXL'];
    } else {
        return []; // matériel pas de taille
    }
}

function changerTaille(id, taille) {
    const produit = panier.find(p => p.id === id);
    if (produit) {
        produit.taille = taille;
        sauvegarderPanier();
    }
}

function afficherPanier() {
    let modal = document.getElementById('modal-panier');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-panier';
        modal.className = 'modal-panier';
        document.body.appendChild(modal);
    }

    if (panier.length === 0) {
        modal.innerHTML = `
            <div class="contenu-panier">
                <span class="fermer-panier" onclick="fermerPanier()">&times;</span>
                <h2>Votre Panier</h2>
                <button class="btn-continuer" onclick="fermerPanier()">Continuer vos achats</button>
            </div>
        `;
    } else {
        const total = calculerTotal();
        modal.innerHTML = `
            <div class="contenu-panier">
                <span class="fermer-panier" onclick="fermerPanier()">&times;</span>
                <h2>Votre Panier</h2>
                <div class="liste-panier">
                    ${panier.map(p => `
                        <div class="item-panier">
                            <img src="${p.image}" alt="${p.nom}" onerror="this.src='PHOTO/SAC%20DE%20MATERIEL.jpg'">
                            <div class="details-item">
                                <h4>${p.nom}</h4>
                                <p class="prix-item">${p.prix.toLocaleString('fr-FR')} CFA</p>
                                ${getTaillesDisponibles(p.categorie).length > 0 ? `
                                    <label for="taille-${p.id}">Taille :</label>
                                    <select id="taille-${p.id}" onchange="changerTaille(${p.id}, this.value)">
                                        <option value="">Choisir</option>
                                        ${getTaillesDisponibles(p.categorie).map(t => `
                                            <option value="${t}" ${p.taille === t ? 'selected' : ''}>${t}</option>
                                        `).join('')}
                                    </select>
                                ` : ''}
                            </div>
                            <div class="quantite-controls">
                                <button onclick="modifierQuantite(${p.id}, -1)">-</button>
                                <span>${p.quantite}</span>
                                <button onclick="modifierQuantite(${p.id}, 1)">+</button>
                            </div>
                            <button class="supprimer-item" onclick="supprimerDuPanier(${p.id})">&times;</button>
                        </div>
                    `).join('')}
                </div>
                <div class="total-panier">
                    <h3>Total: ${total.toLocaleString('fr-FR')} CFA</h3>
                </div>
                <button class="btn-commander" onclick="afficherFormulaireCommande()">
                    Passer la commande
                </button>
            </div>
        `;
    }

    modal.style.display = 'flex';
}



// Fermer le panier
function fermerPanier() {
    const modal = document.getElementById('modal-panier');
    if (modal) modal.style.display = 'none';
}

// Afficher le formulaire de commande
function afficherFormulaireCommande() {
    // Vérifier que toutes les tailles sont choisies
    for (let p of panier) {
        const tailles = getTaillesDisponibles(p.categorie);
        if (tailles.length > 0 && !p.taille) {
            alert(`Veuillez choisir une taille pour le produit : ${p.nom}`);
            return; // stoppe l'ouverture du formulaire
        }
    }

    const total = calculerTotal();
    const modal = document.getElementById('modal-panier');
    
    if (modal) {
        modal.innerHTML = `
            <div class="contenu-panier contenu-commande">
                <span class="fermer-panier" onclick="fermerPanier()">&times;</span>
                <h2>Finaliser votre Commande</h2>
                <div class="recapitulatif">
                    <h3>Récapitulatif de commande</h3>
                    ${panier.map(p => `
                        <div class="item-recap">
                            <span>${p.nom} ${p.taille ? `(Taille: ${p.taille})` : ''} x${p.quantite}</span>
                            <span>${(p.prix * p.quantite).toLocaleString('fr-FR')} CFA</span>
                        </div>
                    `).join('')}
                    <div class="total-final">
                        <strong>Total: ${total.toLocaleString('fr-FR')} CFA</strong>
                    </div>
                </div>
                
                <form id="form-commande" onsubmit="soumettreCommande(event)">
                    <div class="form-group">
                        <label for="nom">Nom complet *</label>
                        <input type="text" id="nom" name="nom" required>
                    </div>
                    <div class="form-group">
                        <label for="telephone">Téléphone *</label>
                        <input type="tel" id="telephone" name="telephone" required placeholder="77 123 45 67">
                    </div>
                    <div class="form-group">
                        <label for="adresse">Adresse de livraison</label>
                        <input type="text" id="adresse" name="adresse" placeholder="Ville, Quartier, Rue">
                    </div>
                    
                    <div class="mode-paiement">
                        <h3>Mode de paiement</h3>
                        <label class="option-paiement">
                            <input type="radio" name="paiement" value="wave" required>
                            <span class="radio-custom"></span>
                            <div class="paiement-info">
                                <strong>💳 Paiement Wave</strong>
                                <p>Paiement immédiat via Wave</p>
                            </div>
                        </label>
                        <label class="option-paiement">
                            <input type="radio" name="paiement" value="livraison">
                            <span class="radio-custom"></span>
                            <div class="paiement-info">
                                <strong>🚚 Paiement à la réception</strong>
                                <p>Payer lors de la livraison du colis</p>
                            </div>
                        </label>
                    </div>
                    
                    <button type="submit" class="btn-valider">Valider la commande</button>
                </form>
            </div>
        `;
    }
}

// Soumettre la commande
function soumettreCommande(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const modePaiement = formData.get('paiement');
    const total = calculerTotal();
    
    const donnees = {
        nom: formData.get('nom'),
        telephone: formData.get('telephone'),
        adresse: formData.get('adresse') || 'Non spécifiée',
        modePaiement: modePaiement,
        total: total,
        articles: [...panier]
    };

    // Sauvegarder la commande
    localStorage.setItem('commande', JSON.stringify(donnees));

    if (modePaiement === 'wave') {
    // Sauvegarder la commande avant de quitter
    localStorage.setItem('commande', JSON.stringify(donnees));
    localStorage.setItem('panier', JSON.stringify(panier));

    // Redirection Wave puis retour sur ta page
    window.location.href = 'https://pay.wave.com/m/M_sn_QXSzdeTJkGo3/c/sn/?redirect_success=https://badji2002.github.io/saloum-Equipement-sport1/paiement-success.html';

} else {
    envoyerCommandeWhatsApp(donnees);
}

}


// Envoyer la commande via WhatsApp
function envoyerCommandeWhatsApp(donnees) {
    let message = `*Nouvelle Commande*\n\n`;
    message += `👤 *Client:* ${donnees.nom}\n`;
    message += `📞 *Téléphone:* ${donnees.telephone}\n`;
    message += `📍 *Adresse:* ${donnees.adresse}\n\n`;
    message += `*Articles:*\n`;
    
    donnees.articles.forEach(article => {
        message += `• ${article.nom} ${article.taille ? `(Taille: ${article.taille})` : ''} x${article.quantite} - ${(article.prix * article.quantite).toLocaleString('fr-FR')} CFA\n`;
    });
    
    message += `\n💰 *Total:* ${donnees.total.toLocaleString('fr-FR')} CFA`;
    
    const whatsappUrl = `https://wa.me/+221762331406?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    panier = [];
    sauvegarderPanier();
    mettreAJourBadge();
    fermerPanier();
    afficherNotification('Commande envoyée!');
}


// Afficher notification
function afficherNotification(message) {
    let notification = document.querySelector('.notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Burger menu déjà présent, animation gérée par CSS
