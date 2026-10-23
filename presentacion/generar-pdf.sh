#!/usr/bin/env sh
# Imprime las láminas de un proyecto a public/proyecto/cheerdance-<proyecto>.pdf.
# Uso: presentacion/generar-pdf.sh [marta-brunet|manquecura]   (sin argumento, marta-brunet)
# Requiere el servidor local corriendo (npm run dev) y Google Chrome instalado.
set -e
PROYECTO="${1:-marta-brunet}"
case "$PROYECTO" in
  marta-brunet) RUTA="/proyecto/presentacion/" ;;
  manquecura) RUTA="/proyecto/manquecura/presentacion/" ;;
  *) echo "Proyecto desconocido: $PROYECTO (usa marta-brunet o manquecura)" >&2; exit 1 ;;
esac
CHROME="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"
URL="${URL:-http://localhost:3100$RUTA}"
SALIDA="$(cd "$(dirname "$0")/.." && pwd)/public/proyecto/cheerdance-$PROYECTO.pdf"
command -v cygpath >/dev/null && SALIDA="$(cygpath -w "$SALIDA")"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --run-all-compositor-stages-before-draw \
  --virtual-time-budget=20000 --print-to-pdf="$SALIDA" "$URL"
echo "PDF listo: $SALIDA"
