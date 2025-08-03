# 🧠 Smart Resume Analyzer & Job Recommender

An intelligent web application that analyzes resumes using NLP and AI to recommend the most suitable jobs. Users can upload resumes, view extracted insights, and receive job recommendations based on their skills and experience.

---

## 🚀 Features

- 📄 **Resume Upload & Parsing**
  - Upload PDF resumes
  - Extracts skills, experience, education using AI (NLP)

- 🤖 **AI-Powered Job Recommendations**
  - Matches resume content to relevant job descriptions
  - Uses semantic similarity (embeddings + cosine similarity)

- 🧠 **NLP Skill Extraction**
  - Named Entity Recognition (NER) for identifying key skills and fields

- 🔍 **Job Search & Filtering**
  - Browse and filter jobs by skill, role, or match score

- 🧾 **Resume Summary Viewer**
  - See a parsed summary of your uploaded resume

- 💡 **Match Score Calculation**
  - Display how well each job matches your profile (visual score)

- 🧑‍💻 **User Authentication**
  - Sign up / Log in to manage resumes and recommendations

- 🌐 **RESTful API Integration**
  - Secure endpoints to handle resume uploads, user profiles, and job fetching

- 📈 **Scalable & Extensible**
  - Designed for easy integration with external job APIs and AI microservices

---

## 🛠️ Tech Stack

### 🧩 Frontend
- [SvelteKit](https://kit.svelte.dev/) — Reactive frontend framework
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling


### 🧠 AI & NLP
- [spaCy](https://spacy.io/) — Named Entity Recognition (NER)
- [HuggingFace Transformers](https://huggingface.co/) — Embeddings for similarity scoring
- [Sentence-Transformers](https://www.sbert.net/) — Resume & job description similarity

### ⚙️ Backend
- [Express.js](https://expressjs.com/) — RESTful API framework
- [Multer](https://github.com/expressjs/multer) — File upload middleware
- [pdf-parse](https://www.npmjs.com/package/pdf-parse) — Resume text extraction

### 🗃️ Database
- [MongoDB](https://www.mongodb.com/) — NoSQL database
- [Mongoose](https://mongoosejs.com/) — MongoDB ODM

### 🔐 Auth & Security
- JWT (JSON Web Tokens) for authentication
- Bcrypt for password hashing
- CORS & Helmet for basic API security

---
### 👨‍💻 Contributor
- Utshob Bose

## 📦 Installation & Setup

###  Backend (Express.js)

```bash
cd Backend
npm install 
npm run dev
```
### Frontend (SvelteKit)

```bash
cd frontend
npm install
npm run dev

