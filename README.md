# Documentation CPGEOM

Ce dépôt utilise **MkDocs** avec un thème proche de **Read the Docs**.

## Fichiers importants

| Besoin | Fichier ou dossier |
|---|---|
| Modifier les pages | `source/*.md` |
| Modifier le menu | `mkdocs.yml` |
| Modifier le style | `source/stylesheets/cpgeom.css` |
| Site généré pour GitHub Pages | `docs/` |

## Installer les dépendances

```powershell
python -m pip install -r requirements.txt
```

## Générer le site

```powershell
powershell -ExecutionPolicy Bypass -File .\build-docs.ps1
```

Ou :

```powershell
python -m mkdocs build --clean
```

## Voir le site en local

```powershell
python -m mkdocs serve
```

Puis ouvrir :

```text
http://127.0.0.1:8000
```

## Publier sur GitHub Pages

```powershell
git add -A
git commit -m "Mise à jour documentation MkDocs"
git push origin main
```

## Règle à retenir

```text
source/    = contenu Markdown
mkdocs.yml = menu
docs/      = HTML généré pour GitHub Pages
```
