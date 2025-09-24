# Deploy to GitHub Script

echo "🚀 Deploying Trip Navigator PWA to GitHub..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Run this script from the project root directory"
    exit 1
fi

echo "📦 Adding all files to git..."
git add .

echo "💾 Committing changes..."
git commit -m "Add PWA functionality with standalone iPhone support

- Added manifest.webmanifest with standalone display mode
- Updated index.html with iOS PWA meta tags
- Added service worker for offline support
- Created icon structure for PWA installation
- Updated deployment workflow for GitHub Pages
- Ready for iPhone 'Add to Home Screen' functionality"

echo "🌐 Setting up GitHub remote..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/zkyko/TestApp.git

echo "🔄 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Successfully deployed to GitHub!"
echo ""
echo "🎯 Next Steps:"
echo "1. Go to https://github.com/zkyko/TestApp"
echo "2. Enable GitHub Pages in Settings > Pages"
echo "3. Select 'GitHub Actions' as source"
echo "4. Your PWA will be available at: https://zkyko.github.io/TestApp"
echo ""
echo "📱 To test PWA installation:"
echo "1. Open the deployed URL in iPhone Safari"
echo "2. Tap Share button"
echo "3. Tap 'Add to Home Screen'"
echo "4. Launch from home screen (standalone mode!)"