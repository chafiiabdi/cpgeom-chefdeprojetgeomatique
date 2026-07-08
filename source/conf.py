project = "Documentation CPGEOM"
author = "Chafii Abdi Ahmed"

extensions = [
    "myst_parser",
    "sphinx.ext.githubpages",
]

source_suffix = {
    ".rst": "restructuredtext",
    ".md": "markdown",
}

master_doc = "index"
language = "fr"

templates_path = ["_templates"]

html_theme = "sphinx_rtd_theme"
html_title = "Documentation CPGEOM"
html_short_title = "CPGEOM"

html_theme_options = {
    "collapse_navigation": False,
    "sticky_navigation": True,
    "navigation_depth": 4,
    "prev_next_buttons_location": "both",
    "style_external_links": True,
}

html_static_path = ["_static"]
html_css_files = ["custom.css"]
