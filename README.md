# Documentation CPGEOM

Ce dépôt utilise maintenant une version **basique HTML/CSS** pour GitHub Pages.

## Fichiers à modifier

| Besoin | Fichier |
|---|---|
| Modifier le contenu, les titres, les textes et le menu | `docs/index.html` |
| Modifier les couleurs, tailles, espacements et la barre latérale | `docs/style.css` |
| Modifier le logo | `docs/_static/cpgeom-logo.svg` |

## Règle simple

```text
docs/index.html = contenu du site
docs/style.css  = apparence du site
```

Le dossier `source/` vient de l'ancienne version Sphinx. Tu peux le garder comme sauvegarde, mais il n'est plus nécessaire pour modifier la page basique.

## Publier les modifications

Depuis le dossier du projet :

```powershell
git add -A
git commit -m "Modifier documentation"
git push origin main
```

## Page affichée par défaut

GitHub Pages affiche automatiquement :

```text
docs/index.html
```

Il n'y a plus besoin de lancer `build-docs.ps1` pour cette version basique.
