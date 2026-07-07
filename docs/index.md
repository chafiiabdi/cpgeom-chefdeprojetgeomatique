---
title: Documentation CPGEOM
description: Notes, exercices et ressources pour la formation Chef de projet géomatique.
nav_order: 1
permalink: /
---

<style>
.cpgeom-hero {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(240px, 0.85fr);
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  margin: 1rem 0 2rem;
  border: 1px solid #d9e2ec;
  border-radius: 8px;
  background: linear-gradient(135deg, #f7fbff 0%, #edf7f3 55%, #fff8ec 100%);
}

.cpgeom-hero img {
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #d9e2ec;
}

.cpgeom-eyebrow {
  margin: 0 0 .45rem;
  color: #276749;
  font-size: .78rem;
  font-weight: 700;
  text-transform: uppercase;
}

.cpgeom-hero h2 {
  margin: 0 0 .75rem;
  font-size: 2rem;
  line-height: 1.15;
}

.cpgeom-hero p {
  margin-bottom: 1rem;
}

.cpgeom-actions {
  display: flex;
  flex-wrap: wrap;
  gap: .7rem;
}

.cpgeom-kpis,
.cpgeom-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin: 1rem 0 2rem;
}

.cpgeom-kpi,
.cpgeom-card {
  border: 1px solid #d9e2ec;
  border-radius: 8px;
  background: #ffffff;
}

.cpgeom-kpi {
  padding: 1rem;
  border-left: 4px solid #2c7a7b;
}

.cpgeom-kpi strong {
  display: block;
  margin-bottom: .25rem;
  color: #102a43;
  font-size: 1.3rem;
}

.cpgeom-card {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow: hidden;
  color: inherit;
  text-decoration: none;
  box-shadow: 0 8px 20px rgba(15, 23, 42, .06);
  transition: transform .16s ease, box-shadow .16s ease, border-color .16s ease;
}

.cpgeom-card:hover {
  border-color: #2c7a7b;
  box-shadow: 0 12px 24px rgba(15, 23, 42, .1);
  text-decoration: none;
  transform: translateY(-2px);
}

.cpgeom-card img,
.cpgeom-card-visual {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background: #edf2f7;
}

.cpgeom-card-visual {
  display: grid;
  place-items: center;
  color: #102a43;
  font-weight: 800;
  letter-spacing: 0;
}

.cpgeom-card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: .5rem;
  padding: 1rem;
}

.cpgeom-card h3 {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.3;
}

.cpgeom-card p {
  margin: 0;
  color: #5c5962;
  font-size: .94rem;
}

.cpgeom-chip {
  display: inline-flex;
  width: fit-content;
  padding: .2rem .55rem;
  border-radius: 999px;
  background: #f1f5f9;
  color: #334e68;
  font-size: .75rem;
  font-weight: 700;
}

@media (max-width: 720px) {
  .cpgeom-hero {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  .cpgeom-hero h2 {
    font-size: 1.55rem;
  }
}
</style>

# Documentation CPGEOM
{: .fs-9 }

Notes de cours, exercices, fiches de révision et ressources techniques pour la formation **Chef de projet géomatique**.
{: .fs-6 .fw-300 }

<section class="cpgeom-hero">
  <div>
    <p class="cpgeom-eyebrow">Formation CPGEOM</p>
    <h2>Un espace clair pour apprendre, pratiquer et retrouver les notions importantes.</h2>
    <p>
      Cette documentation rassemble progressivement les contenus utiles pour conduire un projet géomatique :
      méthodologie, données spatiales, PostgreSQL/PostGIS, QGIS, Python, télédétection et contrôle qualité.
    </p>
    <div class="cpgeom-actions">
      <a class="btn btn-primary" href="#sommaire-general">Explorer les modules</a>
      <a class="btn" href="#parcours-de-lecture">Suivre un parcours</a>
    </div>
  </div>
  <img src="images/idgeo.jpeg" alt="Bannière CPGEOM">
</section>

## Repères rapides

<div class="cpgeom-kpis">
  <div class="cpgeom-kpi">
    <strong>8 modules</strong>
    Cours organisés par thèmes pour naviguer rapidement.
  </div>
  <div class="cpgeom-kpi">
    <strong>1 fil rouge</strong>
    Passer du cadrage projet à la production géomatique.
  </div>
  <div class="cpgeom-kpi">
    <strong>Usage pro</strong>
    Conserver une base de connaissances réutilisable.
  </div>
</div>

## Sommaire général

<div class="cpgeom-card-grid">
  <a class="cpgeom-card" href="{{ '/gp.html' | relative_url }}">
    <img src="images/gestion-de-projets.png" alt="Gestion de projet">
    <div class="cpgeom-card-body">
      <span class="cpgeom-chip">Projet</span>
      <h3>Gestion de projet</h3>
      <p>Cadrage, acteurs, planification, suivi, risques, livrables et communication projet.</p>
    </div>
  </a>

  <a class="cpgeom-card" href="{{ '/bd.html' | relative_url }}">
    <img src="images/postgis_postgreSQL.jpg" alt="PostgreSQL et PostGIS">
    <div class="cpgeom-card-body">
      <span class="cpgeom-chip">Base de données</span>
      <h3>PostgreSQL &amp; PostGIS</h3>
      <p>SQL, modélisation, schémas, géométries, index spatiaux et administration BDD.</p>
    </div>
  </a>

  <a class="cpgeom-card" href="{{ '/cq.html' | relative_url }}">
    <div class="cpgeom-card-visual">Contrôle qualité</div>
    <div class="cpgeom-card-body">
      <span class="cpgeom-chip">Qualité</span>
      <h3>Contrôle qualité</h3>
      <p>Méthodes de validation, vérification des données et suivi de la fiabilité.</p>
    </div>
  </a>

  <a class="cpgeom-card" href="{{ '/fe.html' | relative_url }}">
    <div class="cpgeom-card-visual">Formats SIG</div>
    <div class="cpgeom-card-body">
      <span class="cpgeom-chip">Formats</span>
      <h3>Formats ESRI</h3>
      <p>Shapefile, geodatabase, formats d'échange et bonnes pratiques d'interopérabilité.</p>
    </div>
  </a>

  <a class="cpgeom-card" href="{{ '/tel.html' | relative_url }}">
    <img src="images/teledetection.png" alt="Télédétection">
    <div class="cpgeom-card-body">
      <span class="cpgeom-chip">Raster</span>
      <h3>Télédétection</h3>
      <p>Images satellites, bandes spectrales, indices, classification et traitements raster.</p>
    </div>
  </a>

  <a class="cpgeom-card" href="{{ '/pp.html' | relative_url }}">
    <img src="images/pyqgis.png" alt="Python et PyQGIS">
    <div class="cpgeom-card-body">
      <span class="cpgeom-chip">Automatisation</span>
      <h3>Python &amp; PyQGIS</h3>
      <p>Scripts, traitements QGIS, bibliothèques géomatiques et automatisation des tâches.</p>
    </div>
  </a>

  <a class="cpgeom-card" href="{{ '/com.html' | relative_url }}">
    <div class="cpgeom-card-visual">Données</div>
    <div class="cpgeom-card-body">
      <span class="cpgeom-chip">Interop</span>
      <h3>Données &amp; interopérabilité</h3>
      <p>Cycle de vie des données, VRT, métadonnées, droit informatique et partage.</p>
    </div>
  </a>

  <a class="cpgeom-card" href="{{ '/3d.html' | relative_url }}">
    <img src="images/3d.png" alt="Géomatique et 3D">
    <div class="cpgeom-card-body">
      <span class="cpgeom-chip">SIG</span>
      <h3>Géomatique, SIG &amp; 3D</h3>
      <p>QGIS, projections, couches, analyse spatiale, cartographie et représentation 3D.</p>
    </div>
  </a>
</div>

## Parcours de lecture

| Étape | Objectif | Modules conseillés |
|---|---|---|
| 1 | Comprendre le besoin et cadrer le travail | [Gestion de projet]({{ '/gp.html' | relative_url }}) |
| 2 | Structurer les données et les formats | [PostGIS]({{ '/bd.html' | relative_url }}) · [Formats ESRI]({{ '/fe.html' | relative_url }}) |
| 3 | Contrôler et fiabiliser les données | [Contrôle qualité]({{ '/cq.html' | relative_url }}) · [Données & interopérabilité]({{ '/com.html' | relative_url }}) |
| 4 | Analyser, automatiser et produire | [Python & PyQGIS]({{ '/pp.html' | relative_url }}) · [Télédétection]({{ '/tel.html' | relative_url }}) |
| 5 | Valoriser les résultats | [Géomatique, SIG & 3D]({{ '/3d.html' | relative_url }}) |

## Ce que je centralise ici

- Des notes de cours classées par thématique.
- Des exercices et travaux pratiques pour retrouver rapidement les manipulations.
- Des fiches de révision pour consolider les notions importantes.
- Des ressources techniques sur QGIS, PostgreSQL/PostGIS, Python et les données spatiales.
- Une trace professionnelle des compétences développées pendant la formation.

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

## Ressources utiles

| Outil | Utilisation dans la formation |
|---|---|
| QGIS | Consultation, analyse et production cartographique |
| PostgreSQL / PostGIS | Stockage, requêtes spatiales et administration de données |
| Python / PyQGIS | Automatisation et traitements répétitifs |
| GitHub Pages | Publication et structuration de la documentation |
| Markdown | Rédaction claire, légère et versionnable |

> Cette page sert de point d'entrée. Elle évoluera au fur et à mesure de l'ajout des cours, exercices et projets.
