$ErrorActionPreference = "Stop"

$python = Get-Command python -ErrorAction SilentlyContinue

if (-not $python) {
    $python = Get-Command py -ErrorAction SilentlyContinue
}

if (-not $python) {
    Write-Host "Python n'est pas disponible dans le PATH." -ForegroundColor Red
    Write-Host "Installe Python, puis lance :" -ForegroundColor Yellow
    Write-Host "python -m pip install -r requirements.txt"
    exit 1
}

& $python.Source -m sphinx -b html source docs

Write-Host ""
Write-Host "Documentation générée dans le dossier docs/." -ForegroundColor Green
