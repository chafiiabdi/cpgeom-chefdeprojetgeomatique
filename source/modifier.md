# Comment modifier le site

Cette page explique où modifier le contenu du site et comment publier les changements.

```{important}
Pour modifier le contenu, travaille toujours dans le dossier `source/`. Le dossier `docs/` contient le site généré pour GitHub Pages.
```

## Fichiers à modifier

| Je veux modifier... | Fichier à ouvrir |
|---|---|
| La page d'accueil affichée par défaut | `source/gp.md` |
| Le menu et l'ordre des pages | `source/index.md` |
| La page Base de données & PostGIS | `source/cours3.md` |
| La page Contrôle qualité | `source/cq.md` |
| La page Formats ESRI | `source/fe.md` |
| La page Télédétection | `source/tel.md` |
| La page Python & PyQGIS | `source/pp.md` |
| La page Données & interopérabilité | `source/com.md` |
| La page Géomatique, SIG & 3D | `source/3d.md` |
| Les couleurs, tailles, tableaux et blocs visuels | `source/_static/custom.css` |
| Le logo | `source/_static/cpgeom-logo.svg` |
| La configuration générale Sphinx | `source/conf.py` |

## Fichiers à ne pas modifier directement

| Fichier ou dossier | Pourquoi |
|---|---|
| `docs/*.html` | Ce sont les pages générées pour le site publié. |
| `docs/_sources/*.txt` | Ce sont des copies générées des fichiers Markdown. |
| `docs/_static/*` | Ces fichiers sont recopiés depuis `source/_static/`. |

```{note}
Si tu modifies directement un fichier dans `docs/`, le changement risque d'être perdu lors de la prochaine génération du site.
```

## Modifier une page

1. Ouvre le fichier Markdown dans `source/`.
2. Modifie le texte, les titres, les tableaux ou les listes.
3. Enregistre le fichier.
4. Régénère le site.
5. Vérifie le résultat dans `docs/`.
6. Fais le commit et le push.

## Ajouter une page au menu

1. Crée un nouveau fichier Markdown dans `source/`, par exemple `nouveau-module.md`.
2. Ajoute un titre principal au début du fichier.
3. Ouvre `source/index.md`.
4. Ajoute la page dans le bloc `toctree`.

Exemple :

```md
09 - Nouveau module <nouveau-module>
```

## Régénérer le site

La commande Sphinx normale est :

```powershell
python -m sphinx -b html source docs
```

Si Python ou Sphinx n'est pas installé, installe les dépendances du projet :

```powershell
python -m pip install -r requirements.txt
```

## Publier les modifications

Après vérification :

```powershell
git add source docs
git commit -m "Mise à jour documentation"
git push origin main
```

## Règle simple à retenir

```text
source/ = ce que tu modifies
docs/   = ce que GitHub Pages affiche
```
