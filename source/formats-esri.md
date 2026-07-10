# Formats ESRI

Ce bloc présente les principaux formats ESRI utilisés dans les projets SIG et les points d'attention lors des échanges de données.

## Formats à connaître

| Format | Usage | Attention |
|---|---|---|
| Shapefile | Échange vectoriel simple | Plusieurs fichiers associés, limites sur les noms de champs. |
| File Geodatabase | Stockage structuré de données ESRI | Très utilisé dans ArcGIS, moins direct hors écosystème ESRI. |
| Feature Class | Couche vectorielle dans une géodatabase | Dépend de l'organisation interne de la base. |
| Layer file | Symbologie et configuration d'affichage | Ne contient pas toujours la donnée elle-même. |

## Points à vérifier

- Système de coordonnées.
- Encodage des caractères.
- Noms et types de champs.
- Géométries invalides.
- Documentation de la source.

```{tip}
Pour des échanges durables, documente toujours le format, la projection, la source, la date et les limites d'utilisation.
```
