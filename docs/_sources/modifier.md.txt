# Comment modifier le site

Cette page explique clairement où modifier le contenu du site.

```{important}
Modifie les fichiers `.md` dans `source/`. Ne modifie pas directement les fichiers `.html` dans `docs/`, car ils sont générés.
```

## Règle simple

```text
source/ = fichiers Markdown que tu modifies
docs/   = site HTML affiché par GitHub Pages
```

## Modifier une page

| Je veux modifier... | Fichier à ouvrir |
|---|---|
| La page d'entrée | `source/contexte.md` |
| Le menu principal | `source/index.md` |
| Gestion de projet | `source/gestion-projet.md` |
| Base de données | `source/base-donnees.md` |
| Contrôle qualité des données | `source/controle-qualite-donnees.md` |
| Formats ESRI | `source/formats-esri.md` |
| Télédétection | `source/teledetection.md` |
| Python & PyQGIS | `source/python-pyqgis.md` |
| Données & Interopérabilité | `source/donnees-interoperabilite.md` |
| Couleurs et apparence | `source/_static/custom.css` |
| Logo | `source/_static/cpgeom-logo.svg` |

## Ajouter un sous-bloc

1. Crée un fichier `.md` dans `source/`, par exemple `gestion-budget.md`.
2. Ajoute un titre principal avec `# Budget`.
3. Ouvre la page du bloc parent, par exemple `source/gestion-projet.md`.
4. Ajoute la nouvelle page dans le bloc `toctree`.

Exemple :

```md
Budget <gestion-budget>
```

## Ajouter un bloc principal

1. Crée une page dans `source/`, par exemple `cartographie.md`.
2. Ouvre `source/index.md`.
3. Ajoute la page dans le `toctree` du menu principal.

Exemple :

```md
Cartographie <cartographie>
```

## Générer le site

Depuis le dossier du projet :

```powershell
powershell -ExecutionPolicy Bypass -File .\build-docs.ps1
```

Si Sphinx n'est pas encore installé :

```powershell
python -m pip install -r requirements.txt
```

## Publier

```powershell
git add source docs README.md build-docs.ps1
git commit -m "Mise à jour documentation"
git push origin main
```
