#!/bin/bash
set -e

# Define paths
FRONTEND_DIR="/frontend"
LATEX_DIR="/latex"
OUTPUT_DIR="/output"
PUBLIC_PDF_PATH="$FRONTEND_DIR/public/resume.pdf"

# Step 1: Compile LaTeX to PDF
echo "📄 Compiling LaTeX..."
cd "$LATEX_DIR"
mkdir -p output
pdflatex -output-directory=output resume.tex

# Step 2: Copy PDF to Vue public/ folder
echo "📎 Copying PDF to Vue public folder..."
cp "$LATEX_DIR/output/resume.pdf" "$PUBLIC_PDF_PATH"

# Step 3: Build Vue frontend
echo "📦 Building Vue frontend..."
cd "$FRONTEND_DIR"
npm install
npm run build

# Step 4: Move Vue dist to output volume
echo "📂 Exporting build artifacts..."
mkdir -p "$OUTPUT_DIR"
cp -r "$FRONTEND_DIR/dist/." "$OUTPUT_DIR/"

echo "✅ All done! Final bundle is in ./output"
