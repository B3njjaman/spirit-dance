#!/usr/bin/env sh
# Imprime las láminas de /proyecto/presentacion a public/proyecto/cheerdance-marta-brunet.pdf.
# Requiere el servidor local corriendo (npm run dev) y Google Chrome instalado.
set -e
CHROME="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"
URL="${URL:-http://localhost:3100/proyecto/presentacion/}"
SALIDA="$(cd "$(dirname "$0")/.." && pwd)/public/proyecto/cheerdance-marta-brunet.pdf"
command -v cygpath >/dev/null && SALIDA="$(cygpath -w "$SALIDA")"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --run-all-compositor-stages-before-draw \
  --virtual-time-budget=20000 --print-to-pdf="$SALIDA" "$URL"
echo "PDF listo: $SALIDA"
