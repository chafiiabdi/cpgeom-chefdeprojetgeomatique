$ErrorActionPreference = "Stop"

$python = Get-Command python -ErrorAction SilentlyContinue

if (-not $python) {
    $python = Get-Command py -ErrorAction SilentlyContinue
}

if (-not $python) {
    Write-Host "Python n'est pas disponible dans le PATH." -ForegroundColor Red
    Write-Host "Installe Python, puis relance la commande." -ForegroundColor Yellow
    exit 1
}

try {
    & $python.Source -m mkdocs --version | Out-Null
}
catch {
    Write-Host "MkDocs n'est pas encore installé." -ForegroundColor Yellow
    Write-Host "Lance d'abord :" -ForegroundColor Yellow
    Write-Host "python -m pip install -r requirements.txt"
    exit 1
}

& $python.Source -m mkdocs build --clean --config-file mkdocs.yml

Write-Host ""
Write-Host "Documentation MkDocs générée dans le dossier docs/." -ForegroundColor Green
