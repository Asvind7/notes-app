# 📝 Notes App

**Live Demo:** [https://notes-app-yu7j.vercel.app/](https://notes-app-yu7j.vercel.app/)

A modern, full-stack notes management application built with the MERN stack (MongoDB, Express, React, Node.js). This app features a clean, responsive UI with premium aesthetics, including dark mode support and a variety of themes.

## ✨ Features

- **Full CRUD Functionality**: Create, Read, Update, and Delete notes.
- **Modern UI**: Built with React, Tailwind CSS, and DaisyUI.
- **Dynamic Themes**: Currently featuring the premium "Coffee" theme for a warm, professional look.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Real-time Feedback**: Integrated toast notifications for user actions.
- **Robust Backend**: RESTful API built with Express and Mongoose.
- **Cloud Database**: Persistent storage using MongoDB Atlas.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)
- A MongoDB Atlas account

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Asvind7/notes-app.git
   cd notes-app
   ```

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` directory and add your MongoDB URI:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=5001
     ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

### Running the Application

You can run both the frontend and backend simultaneously from the root directory:

```bash
npm start
```

Once running, the application will be accessible at the default ports configured in your environment.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, DaisyUI, Lucide React, Axios.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Mongoose).

## 📄 License

This project is licensed under the ISC License.

---

*Developed with ❤️ by Asvind.*
