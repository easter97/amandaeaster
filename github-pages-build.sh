#!/bin/bash

# Build Angular app for production
ng build --prod --base-href ./

# Navigate to the 'docs' directory
cd docs

# Copy 'index.html' to '404.html'
cp index.html 404.html

# Create 'CNAME' file with specified content
echo 'amandaeaster.com' > CNAME

# Optional: Navigate back to the original directory
cd -