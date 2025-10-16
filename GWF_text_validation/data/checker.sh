for f in *.csv; do
  if ! grep -q "survey" "$f"; then
    echo "❌ $f does NOT contain 'survey'"
  else
    echo "✅ $f contains 'survey'"
  fi
done
