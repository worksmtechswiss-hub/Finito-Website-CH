#!/bin/bash
API_KEY="AIzaSyCo4WDTXPXzNGsngKzlprUAzlEm8olG1Es"
MODEL="imagen-4.0-generate-001"
BASE_URL="https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:predict"
OUT_DIR="public/images/blog"

mkdir -p "$OUT_DIR"

generate_image() {
  local filename="$1"
  local prompt="$2"
  local outfile="${OUT_DIR}/${filename}"

  if [ -f "$outfile" ]; then
    echo "SKIP: $outfile exists"
    return
  fi

  echo "Generating: $filename ..."
  local response
  response=$(curl -s "$BASE_URL" \
    -H "Content-Type: application/json" \
    -H "x-goog-api-key: $API_KEY" \
    -d "{
      \"instances\": [{\"prompt\": \"${prompt}\"}],
      \"parameters\": {\"sampleCount\": 1, \"aspectRatio\": \"16:9\"}
    }" 2>&1)

  local b64
  b64=$(echo "$response" | python3 -c "import sys,json; data=json.load(sys.stdin); print(data['predictions'][0]['bytesBase64Encoded'])" 2>/dev/null)

  if [ -z "$b64" ]; then
    echo "ERROR: $filename - $(echo "$response" | head -3)"
    return 1
  fi

  echo "$b64" | base64 -d > "$outfile"
  echo "OK: $filename ($(wc -c < "$outfile") bytes)"
}

STYLE="professional photography, clean modern composition, bright lighting, Swiss business context, no text, no watermark, high quality"

# BRANCH BLOGS (15)
generate_image "malerbetrieb-digitalisieren.png" "Professional painter in bright Swiss apartment using tablet to check project, modern paint supplies, ${STYLE}"
generate_image "gipser-fotorapporte.png" "Plasterer documenting wall work with smartphone camera, plaster tools and scaffolding, ${STYLE}"
generate_image "elektriker-software.png" "Electrician checking electrical schemas on tablet at modern switchboard, ${STYLE}"
generate_image "sanitaer-software.png" "Plumber creating digital report on tablet in modern bathroom, pipes and tools, ${STYLE}"
generate_image "schreinerei-digital.png" "Carpenter in bright workshop checking order on tablet, wooden furniture pieces, ${STYLE}"
generate_image "dachdecker-archiv.png" "Roofer on Swiss building rooftop with tablet, mountain backdrop, safety gear, ${STYLE}"
generate_image "bodenleger-material.png" "Floor layer measuring room with digital device, parquet samples and tools around, ${STYLE}"
generate_image "geruestbau-tracking.png" "Scaffolding parts organized at depot with tablet showing inventory system, ${STYLE}"
generate_image "bautagebuch-digital.png" "Mason on construction site using tablet for daily log, bricks and concrete, ${STYLE}"
generate_image "facility-wartung.png" "Facility manager in modern Swiss building corridor checking maintenance schedule on tablet, ${STYLE}"
generate_image "gartenbau-saison.png" "Landscaper in beautiful Swiss garden using smartphone, trimmed hedges and flowers, ${STYLE}"
generate_image "umzug-inventar.png" "Moving team member creating inventory list on tablet, moving boxes and furniture, ${STYLE}"
generate_image "architekten-projekt.png" "Architect reviewing digital plans on tablet at modern Swiss construction site, blueprints, ${STYLE}"
generate_image "agentur-zeit.png" "Creative professional tracking time on laptop in modern Swiss agency workspace, ${STYLE}"
generate_image "einmann-smartphone.png" "Solo craftsman managing business on smartphone in his work van, tools nearby, ${STYLE}"

# MODULE BLOGS (13)
generate_image "qr-rechnungen.png" "Swiss QR invoice on tablet screen with business documents, modern office desk, ${STYLE}"
generate_image "zeiterfassung-pflicht.png" "Employee starting time tracking on smartphone at workplace entrance, Swiss office, ${STYLE}"
generate_image "ferienmanagement.png" "Team calendar showing vacation planning on large screen, modern Swiss office, ${STYLE}"
generate_image "offerten-erstellen.png" "Business person creating professional quote on laptop, clean desk, documents, ${STYLE}"
generate_image "projektmanagement.png" "Digital kanban board on large monitor showing project statuses, modern workspace, ${STYLE}"
generate_image "crm-handwerker.png" "Craftsman reviewing customer history on tablet, workshop background, ${STYLE}"
generate_image "dashboard-kmu.png" "Business dashboard with charts and KPIs on widescreen monitor, Swiss office, ${STYLE}"
generate_image "foto-dokumentation.png" "Construction worker taking professional photos with smartphone on building site, ${STYLE}"
generate_image "lagerverwaltung.png" "Organized warehouse shelves with digital inventory system on tablet, ${STYLE}"
generate_image "buchhaltung-kmu.png" "Swiss business accounting documents on desk with laptop showing financial software, ${STYLE}"
generate_image "mitarbeiter-app.png" "Craftsman on construction site using mobile app on smartphone, hardhat, ${STYLE}"
generate_image "kundenportal.png" "Customer viewing project progress on laptop at home, photos and timeline, ${STYLE}"
generate_image "service-abos.png" "Technician performing scheduled maintenance with checklist on tablet, ${STYLE}"

# RATGEBER / TRENDING (5)
generate_image "digitalisierung-leitfaden.png" "Swiss KMU office transforming from paper to digital, laptop and documents, ${STYLE}"
generate_image "software-vergleich.png" "Multiple software screens compared side by side on modern desk, Swiss office, ${STYLE}"
generate_image "papierlos-arbeiten.png" "Clean modern Swiss office desk with only a laptop, no paper, minimalist, ${STYLE}"
generate_image "projekt-vs-excel.png" "Split view: messy Excel spreadsheet on left, clean project board on right, ${STYLE}"
generate_image "kundenverwaltung-tipps.png" "Business person reviewing customer contacts on CRM software, modern office, ${STYLE}"

echo ""
echo "=== DONE ==="
ls "$OUT_DIR"/*.png 2>/dev/null | wc -l
echo "blog images generated"
