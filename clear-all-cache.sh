#!/bin/bash

echo "🧹 Performing aggressive cache clearing..."

# Stop any running processes first
echo "Killing any Node.js processes..."
pkill -f "vite\|node"

# Remove all cache directories
echo "Removing Vite caches..."
rm -rf node_modules/.vite
rm -rf .vite
rm -rf dist

# Clear npm cache
echo "Clearing npm cache..."
npm cache clean --force

# Clear system caches for this project
echo "Clearing system caches..."
if [ -d ~/.cache/vite ]; then
  rm -rf ~/.cache/vite
fi

if [ -d ~/.cache/node ]; then
  rm -rf ~/.cache/node
fi

echo "✅ All caches cleared!"
echo "Now run: npm run dev"
echo "And hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)"