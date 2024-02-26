#!/bin/bash

# Install dependencies
echo "Installing backend dependencies..."
cd backend
npm install

# Set up the database
echo "Setting up the database..."
npx typeorm migration:run

# Run the backend
echo "Running the backend..."
npm run start:dev &

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd ../frontend
npm install

# Run the frontend
echo "Running the frontend..."
npm run dev
