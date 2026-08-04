# Abids — Project Overview

A React website for "Abids" with pages for Home, About, Products, Projects, Contact, and an Admin CMS.

## Stack
- **Framework**: React 19 (Create React App + CRACO)
- **Styling**: Tailwind CSS + shadcn/ui (Radix UI components)
- **Backend/Data**: Firebase
- **Routing**: React Router v7
- **Language**: JavaScript

## Project structure
All source code lives in the `frontend/` subfolder.

## Running the app
```bash
cd frontend
yarn install
yarn start
```
The dev server runs on port 3000.

## Key files
- `frontend/src/App.js` — routes and layout
- `frontend/src/pages/` — page components (Home, About, Products, Projects, Contact, Admin)
- `frontend/src/components/` — shared UI components
- `frontend/src/firebase.js` — Firebase config (requires secrets)
- `frontend/src/i18n.js` — internationalisation setup

## User preferences
- Wants to restyle the app's design.
