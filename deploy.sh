#!/bin/bash

echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci -f 

# Build the application
echo "🔨 Building the application..."
npm run build

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "⚙️ Installing PM2..."
    npm install -g pm2
fi

# Start or restart the application
echo "🔄 Starting/Restarting the application..."
if pm2 describe "elepzia-landing" > /dev/null; then
    pm2 restart elepzia-landing
else
    pm2 start npm --name "elepzia-landing" -- start
fi

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Setup PM2 startup
echo "🔌 Setting up PM2 startup..."
pm2 startup

echo "✅ Deployment completed successfully!"
