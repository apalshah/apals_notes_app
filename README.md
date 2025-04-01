# 📒 Notes CRUD App

A simple Notes app built with React, React Router, Bootstrap, and `localStorage` to mimic API functionality.

---

## 🛠 Tech Stack

- React (via Vite)
- React Router
- React Bootstrap
- LocalStorage (simulated API)

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v16+ recommended)
- npm

### 📦 Install & Run

```bash
git clone git@github.com:apalshah/apals_notes_app.git
cd apals-notes-app
npm install
npm run dev
```

---

## 🧪 Running Tests

### 1. Create `.env.test` in the root of the project:

```env
REACT_APP_TEST_USERNAME=test
REACT_APP_TEST_PASSWORD=pass
```

### 2. Install test dependencies:

```bash
npm install --save-dev \
  jest babel-jest @babel/preset-env @babel/preset-react \
  @testing-library/react @testing-library/jest-dom \
  @testing-library/user-event jest-environment-jsdom \
  dotenv-cli
```

### 3. Run tests:

```bash
npm test
```

---
