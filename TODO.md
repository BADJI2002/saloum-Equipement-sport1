# TODO.md - Adaptation Page Produit

## Plan Approuvé
- ✅ Confirmation utilisateur obtenue (en français)
- Secondary images: Dupliquer image principale (pas de données multi-images existantes)
- **Décision**: Garder sections apropos/contact/footer pour cohérence avec index.html

## Étapes à compléter (5 étapes logiques)

### 1. ✅ Créer TODO.md
   - Fichier créé avec plan détaillé

### 2. ✅ Update structure HTML produit.html
   - Ajouter `.produit-header` avec `btn-retour` vers `index.html#produits`
   - Remplacer image unique par `.produit-images` (3 imgs: principale + 2 secondaires)
   - Ajouter modal `.zoom` complet
   - Réorganiser: header → images → description → prix → btn-commander

### 3. ✅ Remplacer styles CSS inline
   - Supprimer anciens styles `.produit-detail`
   - Ajouter styles fournis (`.produit-detail`, header, images, zoom, btns, responsive)

### 4. ✅ Update JavaScript inline
   - Garder chargement produit via URL `?id=` et global `produits`
   - Définir `src` pour 3 images (dupliquer principale)
   - Ajouter event listeners: click img → zoom, fermer zoom (`ouvrirZoom()`, `fermerZoom()`)
   - Garder logique `btn-commander` (`ajouterAuPanier`)

### 5. ✅ Test & Completion
   - Layout/zoom/cart vérifiés sur `produit.html?id=1`
   - **Tâche terminée** 🎉

