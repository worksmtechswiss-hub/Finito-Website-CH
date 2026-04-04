#!/bin/bash
API_KEY="AIzaSyCo4WDTXPXzNGsngKzlprUAzlEm8olG1Es"
MODEL="imagen-4.0-generate-001"
BASE_URL="https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:predict"
OUT_DIR="public/images/branches"

mkdir -p "$OUT_DIR"

generate_image() {
  local slug="$1"
  local type="$2"  # hero or mobile
  local prompt="$3"
  local aspect="$4"
  local outfile="${OUT_DIR}/${slug}-${type}.png"

  if [ -f "$outfile" ]; then
    echo "SKIP: $outfile already exists"
    return
  fi

  echo "Generating: $outfile ..."

  local response
  response=$(curl -s "$BASE_URL" \
    -H "Content-Type: application/json" \
    -H "x-goog-api-key: $API_KEY" \
    -d "{
      \"instances\": [{\"prompt\": \"${prompt}\"}],
      \"parameters\": {\"sampleCount\": 1, \"aspectRatio\": \"${aspect}\"}
    }" 2>&1)

  # Extract base64 image data
  local b64
  b64=$(echo "$response" | python3 -c "import sys,json; data=json.load(sys.stdin); print(data['predictions'][0]['bytesBase64Encoded'])" 2>/dev/null)

  if [ -z "$b64" ]; then
    echo "ERROR for $outfile: $(echo "$response" | head -5)"
    return 1
  fi

  echo "$b64" | base64 -d > "$outfile"
  echo "OK: $outfile ($(wc -c < "$outfile") bytes)"
}

# ===== HERO IMAGES (16:9) =====
STYLE_HERO="professional photography, Swiss construction industry, modern and clean, high quality, no text, no watermark"

generate_image "maler" "hero" "Professional painter painting interior wall of a bright modern Swiss apartment, paint rollers and fresh colors, ${STYLE_HERO}" "16:9"
generate_image "gipser" "hero" "Swiss plasterer skillfully applying smooth plaster to interior wall, construction site with professional tools, ${STYLE_HERO}" "16:9"
generate_image "elektriker" "hero" "Electrician installing modern electrical panel in Swiss building, cables and precision tools, ${STYLE_HERO}" "16:9"
generate_image "sanitaer" "hero" "Professional plumber installing sleek bathroom fixtures in modern Swiss apartment, pipes and tools, ${STYLE_HERO}" "16:9"
generate_image "schreiner" "hero" "Skilled carpenter in bright Swiss workshop crafting custom wooden furniture, woodworking machines and sawdust, ${STYLE_HERO}" "16:9"
generate_image "dachdecker" "hero" "Roofer working on a Swiss chalet roof with Alpine mountain backdrop, safety harness and tiles, ${STYLE_HERO}" "16:9"
generate_image "bodenleger" "hero" "Floor layer carefully installing oak parquet flooring in a modern Swiss living room, tools and precision, ${STYLE_HERO}" "16:9"
generate_image "geruestbauer" "hero" "Professional scaffolding erected on Swiss building facade, metal structure against blue sky, ${STYLE_HERO}" "16:9"
generate_image "maurer" "hero" "Mason carefully laying bricks on a Swiss construction site, mortar and spirit level, ${STYLE_HERO}" "16:9"
generate_image "facility-service" "hero" "Modern Swiss commercial building lobby with clean facility management, glass and steel interior, ${STYLE_HERO}" "16:9"
generate_image "gartenbau" "hero" "Landscaper maintaining a beautiful Swiss garden with trimmed hedges and colorful flowers, ${STYLE_HERO}" "16:9"
generate_image "umzug" "hero" "Professional moving team carefully loading furniture into truck in Swiss residential neighborhood, ${STYLE_HERO}" "16:9"
generate_image "architekten" "hero" "Architect reviewing digital blueprints on a tablet at a modern Swiss construction site, ${STYLE_HERO}" "16:9"
generate_image "agenturen" "hero" "Modern creative agency open workspace in Zurich with designers collaborating, screens and whiteboards, ${STYLE_HERO}" "16:9"
generate_image "einmann-betriebe" "hero" "Solo Swiss craftsman using smartphone to manage business at a clean job site, tools nearby, ${STYLE_HERO}" "16:9"

# ===== MOBILE SECTION IMAGES (1:1) =====
STYLE_MOBILE="photorealistic, Swiss professional worker using digital tablet or smartphone on job site, modern technology meets traditional craft, bright lighting, no text, no watermark"

generate_image "maler" "mobile" "Painter checking project details on smartphone while standing in a freshly painted room, paint supplies around, ${STYLE_MOBILE}" "1:1"
generate_image "gipser" "mobile" "Plasterer documenting wall work progress with smartphone camera, plaster tools nearby, ${STYLE_MOBILE}" "1:1"
generate_image "elektriker" "mobile" "Electrician viewing electrical schema on tablet while at a switchboard, ${STYLE_MOBILE}" "1:1"
generate_image "sanitaer" "mobile" "Plumber creating digital report on tablet next to bathroom installation, ${STYLE_MOBILE}" "1:1"
generate_image "schreiner" "mobile" "Carpenter checking order details on tablet in wood workshop, sawdust and tools, ${STYLE_MOBILE}" "1:1"
generate_image "dachdecker" "mobile" "Roofer documenting progress with smartphone from rooftop with Swiss view, ${STYLE_MOBILE}" "1:1"
generate_image "bodenleger" "mobile" "Floor layer measuring room with smartphone app, parquet samples nearby, ${STYLE_MOBILE}" "1:1"
generate_image "geruestbauer" "mobile" "Scaffolder checking inventory on tablet near scaffolding structure, ${STYLE_MOBILE}" "1:1"
generate_image "maurer" "mobile" "Mason logging daily construction diary on tablet at building site, ${STYLE_MOBILE}" "1:1"
generate_image "facility-service" "mobile" "Facility manager reviewing maintenance schedule on tablet in building corridor, ${STYLE_MOBILE}" "1:1"
generate_image "gartenbau" "mobile" "Gardener photographing plants with smartphone in a beautiful garden, ${STYLE_MOBILE}" "1:1"
generate_image "umzug" "mobile" "Mover creating inventory list on tablet next to packed boxes, ${STYLE_MOBILE}" "1:1"
generate_image "architekten" "mobile" "Architect sharing project update on tablet with client at construction site, ${STYLE_MOBILE}" "1:1"
generate_image "agenturen" "mobile" "Agency professional tracking project time on laptop in modern office, ${STYLE_MOBILE}" "1:1"
generate_image "einmann-betriebe" "mobile" "Solo entrepreneur creating invoice on smartphone in his van between jobs, ${STYLE_MOBILE}" "1:1"

echo ""
echo "=== DONE ==="
ls -la "$OUT_DIR"/*.png 2>/dev/null | wc -l
echo "images generated"
