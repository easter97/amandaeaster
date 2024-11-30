#!/bin/bash

# Build Angular app for production
echo 'Building Angular app for production...'

ng build --configuration production --base-href ./

# Navigate to the 'docs' directory
cd docs

# Copy 'index.html' to '404.html'
echo 'Copying index into 404...'
cp index.html 404.html

# Create 'CNAME' file with specified content
echo 'Updating CNAME'
echo 'amandaeaster.com' > CNAME

# Optional: Navigate back to the original directory
cd -

#copy the spotify side project from its dist folder

# Create a new directory named 'spotify' within the 'docs' folder of the 'amandaeaster' project
# mkdir -p docs/spotify

# Navigate to the Spotify side project's dist folder
# cd ../../spofity-comparison/dist/spotify-comparison

# Copy all contents of the 'dist' folder into the newly created 'spotify' directory
# echo 'Copying Spotify Conversion Code...'
# cp -r * ../../../amandaeaster/amandaeaster/docs/spotify

# Optionally, navigate back to the original directory
# cd -
