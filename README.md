# 🎥 Video Platform

A simple Node.js-based backend for uploading and streaming videos, built with Express and MongoDB.

## 🚀 Features

- ✅ Video upload support using `multer`
- ✅ Video streaming route (`/stream/:filename`)
- ✅ MongoDB models for videos, users, and views
- ✅ Authentication middleware (optional)
- ✅ RESTful API with separate route files

## 📁 Folder Structure

```
video-platform/
├── middleware/         # Authentication logic
├── models/             # Mongoose models (User, Video, VideoView)
├── routes/             # API routes (authRoutes, videoRoutes)
├── upload/             # Uploaded videos
├── .gitignore
├── index.js
├── package.json
├── server.js
```

## 🛠️ Installation & Run Locally

Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) set up.

```bash
git clone https://github.com/YourUsername/Video-platform.git
cd Video-platform
npm install
npm start
```

> Server will run on `http://localhost:3000`

## 🌐 API Endpoints

### ▶️ Video Upload

`POST /upload`  
**Form field name:** `demo`  
Uploads a video file.

### 🎞️ Video Stream

`GET /stream/:filename`  
Streams a video by filename.

### 🔐 Auth Routes

- `POST /register` – Register user  
- `POST /login` – Login and get token

## 🧠 Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- Multer
- JWT (for auth)

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a PR.

## 📄 License

MIT License
