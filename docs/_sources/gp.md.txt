# Gestion de projet

Bienvenue dans la documentation **CPGEOM - Chef de projet géomatique**.

Cette page est le point d'entrée principal du site. Elle est organisée comme une page de documentation technique : navigation claire, sections courtes, tableaux de repères, conventions de lecture et blocs d'information.

```{note}
Utilise cette page comme sommaire de travail : elle te permet de retrouver rapidement les modules, les objectifs et les notions importantes de la formation.
```

![Gestion de projet géomatique](images/gestion-de-projets.jpg)

## Organisation de la documentation

La documentation est structurée autour d'un parcours progressif. Chaque module correspond à une compétence utile dans un projet géomatique.

| Partie | Rôle dans la documentation |
|---|---|
| **Navigation latérale** | Accéder rapidement aux modules, comme dans la documentation QGIS. |
| **Sections principales** | Comprendre les objectifs, le parcours et les compétences. |
| **Tableaux de repères** | Comparer rapidement les notions, outils et livrables. |
| **Blocs d'information** | Mettre en avant les conseils, points d'attention et méthodes. |
| **Pages de modules** | Détailler les cours, exercices et travaux pratiques. |

## Conventions de lecture

Cette documentation utilise quelques conventions simples pour faciliter la lecture.

### Blocs d'information

```{note}
Une note apporte un complément utile ou une précision de contexte.
```

```{tip}
Une astuce indique une bonne pratique à appliquer pendant les exercices ou les projets.
```

```{important}
Un point important signale une notion à retenir ou une vigilance à conserver.
```

### Liens et navigation

| Élément | Signification |
|---|---|
| **Lien interne** | Ouvre une autre page de la documentation CPGEOM. |
| **Titre de section** | Sert de repère dans le menu local de la page. |
| **Tableau** | Résume une méthode, une comparaison ou une progression. |
| **Image** | Illustre un thème, un outil ou une logique de travail. |

### Noms et commandes

| Convention | Exemple |
|---|---|
| **Outil ou logiciel** | QGIS, PostgreSQL, PostGIS |
| **Format ou fichier** | Shapefile, GeoPackage, CSV |
| **Commande ou code** | `SELECT`, `JOIN`, `python script.py` |
| **Livrable** | note de cadrage, carte, rapport, fiche qualité |

## Objectifs du site

| Objectif | Ce que cela permet |
|---|---|
| **Centraliser les cours** | Retrouver rapidement les notions importantes de la formation. |
| **Structurer les apprentissages** | Classer les contenus par thème et par usage professionnel. |
| **Préparer les révisions** | Identifier les compétences, méthodes et outils à maîtriser. |
| **Documenter les travaux pratiques** | Garder une trace claire des exercices, scripts et manipulations. |
| **Construire un support professionnel** | Réutiliser les fiches, procédures et ressources dans de futurs projets. |

## Parcours conseillé

```{tip}
Commence par la gestion de projet, puis avance vers les données, la qualité, l'automatisation et la valorisation cartographique.
```

| Étape | Intention | Module |
|---|---|---|
| **1** | Cadrer le besoin, organiser le travail et suivre un projet | [Gestion de projet](gp.md) |
| **2** | Structurer, stocker et interroger les données géographiques | [Base de données & PostGIS](cours3.md) |
| **3** | Vérifier la fiabilité des données et corriger les anomalies | [Contrôle qualité](cq.md) |
| **4** | Choisir les bons formats et préparer les échanges | [Formats ESRI](fe.md) |
| **5** | Exploiter les images satellites et les traitements raster | [Télédétection](tel.md) |
| **6** | Automatiser les traitements et scripts SIG | [Python & PyQGIS](pp.md) |
| **7** | Décrire, partager et valoriser les données | [Données & interopérabilité](com.md) |
| **8** | Produire des analyses, cartes et représentations 3D | [Géomatique, SIG & 3D](3d.md) |

## Modules de formation

### Gestion de projet

Méthodes de cadrage, organisation, planification, suivi, gestion des risques, communication et livrables.

### Base de données & PostGIS

Notions de PostgreSQL, SQL, PostGIS, modélisation, géométries, index spatiaux et administration de bases géographiques.

![PostGIS](images/postgis.png)

[Ouvrir le module Base de données & PostGIS](cours3.md)

### Contrôle qualité

Vérification de la complétude, cohérence, précision et conformité des données géographiques.

[Ouvrir le module Contrôle qualité](cq.md)

### Formats ESRI

Formats SIG, shapefile, geodatabase, échanges de données, contraintes techniques et bonnes pratiques.

[Ouvrir le module Formats ESRI](fe.md)

### Télédétection

Images satellites, bandes spectrales, compositions colorées, indices, classification et traitements raster.

[Ouvrir le module Télédétection](tel.md)

### Python & PyQGIS

Automatisation des tâches répétitives, scripts Python, traitements QGIS et logique de production.

[Ouvrir le module Python & PyQGIS](pp.md)

### Données & interopérabilité

Cycle de vie des données, métadonnées, VRT, droit informatique, publication et partage.

[Ouvrir le module Données & interopérabilité](com.md)

### Géomatique, SIG & 3D

QGIS, projections, couches vecteur/raster, analyse spatiale, cartographie et représentation 3D.

[Ouvrir le module Géomatique, SIG & 3D](3d.md)

## Focus gestion de projet

Cette partie regroupe les méthodes utiles pour conduire un projet géomatique de manière structurée, depuis l'analyse du besoin jusqu'à la livraison.

### Objectifs

- Comprendre le besoin et le contexte du projet.
- Identifier les acteurs, rôles et responsabilités.
- Définir les objectifs, livrables et contraintes.
- Planifier les tâches et suivre l'avancement.
- Anticiper les risques et organiser la communication.

### Notions clés

| Notion | Utilité |
|---|---|
| **Cadrage** | Clarifier le besoin, le périmètre et les objectifs. |
| **Acteurs** | Identifier les parties prenantes et leurs attentes. |
| **Planning** | Organiser les étapes, délais et priorités. |
| **Risques** | Prévoir les blocages possibles et les réponses adaptées. |
| **Livrables** | Formaliser les résultats attendus du projet. |

### Travaux à documenter

- Note de cadrage.
- Planning de projet.
- Liste des acteurs.
- Tableau de suivi des tâches.
- Analyse des risques.
- Bilan ou retour d'expérience.

## Compétences travaillées

| Compétence | Niveau visé |
|---|---|
| Gestion de projet géomatique | Intermédiaire à avancé |
| PostgreSQL / PostGIS | Intermédiaire |
| QGIS et analyse spatiale | Avancé |
| Python et PyQGIS | Progressif |
| Télédétection | Intermédiaire |
| Contrôle qualité des données | Intermédiaire |
| Documentation technique | Professionnel |

```{important}
La documentation est évolutive : chaque page pourra être enrichie avec les notes de cours, les exercices, les commandes, les captures et les travaux pratiques réalisés pendant la formation.
```

```{toctree}
:maxdepth: 2
:caption: Modules de formation
:hidden:

cours3
cq
fe
tel
pp
com
3d
```
