# Documentation CPGEOM

Ce dépôt contient la documentation de formation **CPGEOM - Chef de projet géomatique**.

## Où écrire ?

Écris et modifie les contenus dans `source/`.

| Dossier | Rôle |
|---|---|
| `source/` | Pages Markdown à modifier. |
| `source/_static/` | Logo, images de style et CSS. |
| `docs/` | Site HTML généré pour GitHub Pages. |

## Menu principal

Le menu principal est défini dans `source/index.md`.

Les sous-menus sont définis dans la page du bloc parent, par exemple `source/gestion-projet.md` pour les sous-pages de Gestion de projet.

## Générer le site

Commande recommandée sous PowerShell :

```powershell
powershell -ExecutionPolicy Bypass -File .\build-docs.ps1
```

Commande Sphinx directe :

```powershell
python -m sphinx -b html source docs
```

## Publier

```powershell
git add source docs README.md build-docs.ps1
git commit -m "Mise à jour documentation"
git push origin main
```

## Règle à retenir

```text
source/ = contenu à modifier
docs/   = site publié généré
```
