#!/usr/bin/env bash
set -euo pipefail
URL="$1"
DEST="$2"
mkdir -p "$(dirname "$DEST")"
curl -L --fail --silent --show-error \
  -H "User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120 Safari/537.36" \
  -o "$DEST" \
  "$URL"
echo "Saved: $DEST ($(wc -c < "$DEST") bytes)"
