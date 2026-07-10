# Modifier le site

Cette documentation utilise **MkDocs** avec le thème **Read the Docs Dropdown**.

## Règle simple

```text
source/    = fichiers Markdown que tu modifies
mkdocs.yml = menu et configuration du site
docs/      = site HTML généré pour GitHub Pages
```

## Modifier le contenu d'une page

1. Ouvre un fichier `.md` dans le dossier `source/`.
2. Modifie le texte, les titres, les listes ou les tableaux.
3. Enregistre le fichier.
4. Régénère le site avec MkDocs.

Exemple :

```text
source/base-donnees.md
source/gestion-projet.md
source/teledetection.md
```

## Modifier le menu

Le menu se trouve dans :

```text
mkdocs.yml
```

Exemple de bloc de menu :

```yaml
- Base de données:
    - Vue d'ensemble: base-donnees.md
    - Introduction de la base de données: bdd-introduction.md
    - Admin BDD & PgSQL: bdd-admin-pgsql.md
    - PostGIS: bdd-postgis.md
```

Pour ajouter une nouvelle page :

1. Crée un fichier dans `source/`, par exemple `bdd-modelisation.md`.
2. Ajoute cette ligne dans `mkdocs.yml` :

```yaml
- Modélisation BDD: bdd-modelisation.md
```

## Modifier l'apparence

Le style personnalisé est dans :

```text
source/stylesheets/cpgeom.css
```

Tu peux y modifier les couleurs, la largeur du menu, les titres et les tableaux.

## Générer le site

Depuis le dossier du projet :

```powershell
powershell -ExecutionPolicy Bypass -File .\build-docs.ps1
```

Ou directement :

```powershell
python -m mkdocs build --clean
```

## Publier

```powershell
git add -A
git commit -m "Mise à jour documentation MkDocs"
git push origin main
```
