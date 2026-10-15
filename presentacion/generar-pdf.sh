#!/usr/bin/env sh
# Imprime a PDF las páginas pensadas para eso:
#   /proyecto/presentacion -> public/proyecto/cheerdance-marta-brunet.pdf
#   /portafolio/cv         -> public/portafolio/cv-paulina-quezada.pdf
#   /portafolio/carta      -> public/portafolio/carta-presentacion-paulina-quezada.pdf
# Requiere el servidor local corriendo (npm run dev) y Google Chrome instalado.
set -e
CHROME="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"
BASE="${BASE:-http://localhost:3100}"
RAIZ="$(cd "$(dirname "$0")/.." && pwd)"

imprimir() {
  salida="$RAIZ/public/$2"
  mkdir -p "$(dirname "$salida")"
  command -v cygpath >/dev/null && salida="$(cygpath -w "$salida")"
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --run-all-compositor-stages-before-draw \
    --virtual-time-budget=20000 --print-to-pdf="$salida" "$BASE$1" 2>/dev/null
  echo "PDF listo: $salida"
}

imprimir /proyecto/presentacion/ proyecto/cheerdance-marta-brunet.pdf
imprimir /portafolio/cv/ portafolio/cv-paulina-quezada.pdf
imprimir /portafolio/carta/ portafolio/carta-presentacion-paulina-quezada.pdf
