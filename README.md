# 🔥 Firebase Turbo App

A full-stack monorepo project built with **Turborepo**, integrating:
- 🧑‍💻 **Frontend**: [Next.js 14](https://nextjs.org/) (App Router)
- ⚙️ **Backend**: [Express.js](https://expressjs.com/)
- ☁️ **Firebase Emulator Suite**: Auth, Firestore, Functions

---

## Requirements

- **Node.js** v20+ (recommended v22)
- **npm** v9+

---

## Getting Started

> Clone and install dependencies:

```bash
git clone https://github.com/ngrhadi/TT-turborepo.git
cd TT-turborepo
npm install
```

---

## Development Workflow

### 1. Fill the .env files

Copy and fill the following .env.template files:

```bash
apps/backend-repo/.env.template → .env
apps/frontend-repo/.env.template → .env
apps/backend-repo/src/config/firebaseServiceAccountKey.json → service account key
```
Make sure you provide valid Firebase project config and service account credentials if needed.

### 2. Start Firebase Emulator

Run Firestore, Auth, and Functions emulators locally:
```bash
npm run serve
```
and you can access UI firebase emulator in ``http://127.0.0.1:3001``

### 3. Start Dev Servers

From the root of the repo:
```bash
npm run dev
```
This runs both frontend and backend using Turborepo.

### 4. Start Prod Schema in Local Server

From the root of the repo:
```bash
npm run serve
```

```bash
npm run start
```
This runs both frontend and backend using Turborepo.
---
## Project Structure

/
├── apps/
│   ├── backend-repo/        → Express.js app
│   └── frontend-repo/       → Next.js 14 app
├── packages/                → Shared firebase-function
├── firebase.json            → Emulator config
└── turbo.json               → Turborepo config
---
## Tech Stack
---
Layer	Tech
Frontend	Next.js 14 (App Router), Redux, Firebase Auth
Backend	Express.js, Firebase Admin SDK
Database	Firestore (Emulator)
Auth	Firebase Authentication
Infra	Turborepo, Firebase Emulator Suite
