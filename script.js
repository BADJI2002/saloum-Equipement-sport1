// Slider
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === n) {
            slide.classList.add('active');
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
    { id: 1, nom: "Kimono Premium", description: "Kimono léger et résistant pour entraînement.", prix: 15000, image: "PHOTO/KIMONO%20ROUGE-BLEU.PNG", categorie: "kimono" },
    { id: 2, nom: "Gants de Boxe", description: "Protection optimale pour vos combats.", prix: 8000, image: "PHOTO/gants%20bleu.png", categorie: "equipement" },
    { id: 3, nom: "Sac de Frappe", description: "Idéal pour l'entraînement intensif.", prix: 25000, image: "PHOTO/SAC%20DE%20MATERIEL.jpg", categorie: "materiels" },
    { id: 4, nom: "Ceinture Karaté", description: "Ceinture de qualité pour progression.", prix: 5000, image: "PHOTO/CEINTURE-karat%C3%A9.jpeg", categorie: "kimono" },
    { id: 5, nom: "Gants Rouge", description: "Gants résistants pour boxe.", prix: 9000, image: "PHOTO/gants%20rouge.png", categorie: "equipement" },
    { id: 6, nom: "Casque de Protection", description: "Protection tête lors des combats.", prix: 12000, image: "PHOTO/casque%20de%20portection.jpeg", categorie: "equipement" }
];

// Gestion du panier
let panier = JSON.parse(localStorage.getItem('panier')) || [];

// Burger menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
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
      card.style.display = card.dataset.category === category || category === 'all' ? 'block' : 'none';
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
    const whatsappUrl = `https://wa.me/221779783473?text=${encodeURIComponent(whatsappMessage)}`;
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
                <p class="panier-vide">Votre panier est vide</p>
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
                            <span>${p.nom} x${p.quantite}</span>
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
    
    envoyerCommandeWhatsApp(donnees);
}

// Envoyer la commande via WhatsApp
function envoyerCommandeWhatsApp(donnees) {
    let message = `*Nouvelle Commande*\n\n`;
    message += `👤 *Client:* ${donnees.nom}\n`;
    message += `📞 *Téléphone:* ${donnees.telephone}\n`;
    message += `📍 *Adresse:* ${donnees.adresse}\n\n`;
    message += `*Articles:*\n`;
    
    donnees.articles.forEach(article => {
        message += `• ${article.nom} x${article.quantite} - ${(article.prix * article.quantite).toLocaleString('fr-FR')} CFA\n`;
    });
    
    message += `\n💰 *Total:* ${donnees.total.toLocaleString('fr-FR')} CFA`;
    
    const whatsappUrl = `https://wa.me/221779783473?text=${encodeURIComponent(message)}`;
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
