#!/bin/bash

echo "Clearing Vite development cache..."

# Remove Vite cache directories
rm -rf node_modules/.vite
rm -rf .vite
rm -rf dist

echo "Cache cleared! Please restart your development server."
echo "Run: npm run dev"