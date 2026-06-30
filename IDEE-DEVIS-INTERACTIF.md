# Idée à développer plus tard — Page "Demande de devis" interactive

> Note conservée à la demande d'Edhy. À NE PAS implémenter tout de suite — projet futur.

## Concept
La page de demande de devis propose **2 options** :

### Option 1 — Appeler / se faire appeler
- Bouton d'appel direct (tel:)
- Formulaire "rappel" : nom + téléphone + créneau souhaité → on rappelle le client.

### Option 2 — Composer son devis (qualification guidée)
Parcours rapide qui qualifie le bien et le besoin :

1. **Type de bien** : maison ou appartement ?
2. **Superficie** (m²)
3. **Nombre de pièces concernées** par le(s) besoin(s)
4. **Plan 3D d'un logement** s'affiche :
   - le client sélectionne la ou les pièces concernées
   - une **barre de texte par pièce** pour décrire le problème
   - le client **choisit l'image** qui correspond le mieux à son problème
5. **Base de données d'images de référence** à constituer (ex : plafond fissuré,
   pan de mur à repeindre, trace d'humidité, façade farinée, papier peint décollé, etc.)

## À prévoir techniquement (futur)
- Bibliothèque/asset 3D du logement (pièces cliquables)
- Banque d'images catégorisées par type de problème
- Récapitulatif structuré envoyé en lead (pièces + descriptions + images choisies)
- Stockage des demandes (backend / service de formulaire)
