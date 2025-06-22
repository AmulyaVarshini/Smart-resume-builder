Smart Resume Builder with AI Suggestions

A full-stack web application that helps users create professional resumes with real-time AI-generated improvement suggestions. Built using React, Node.js, Express, MongoDB, Tailwind CSS, and OpenAI GPT-3.5.
📝 Features

    ✍️ Fill in your resume details using a user-friendly form

    🤖 Get intelligent suggestions powered by OpenAI GPT-3.5

    💾 Save resumes to MongoDB backend

    📄 Preview and export resumes as PDF using react-to-print

    🎨 Beautiful, responsive design with Tailwind CSS

🔧 Tech Stack
Frontend

    React.js

    Tailwind CSS

    React-to-Print

Backend

    Node.js

    Express.js

    MongoDB (Mongoose)

    OpenAI API (GPT-3.5)

⚙️ Installation
1. Clone the repository

git clone https://github.com/your-username/smart-resume-builder.git
cd smart-resume-builder

2. Setup Backend

cd backend
npm install

Create a .env file inside the backend folder:

MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key

Then run:

npm start
# OR
npx nodemon server.js

3. Setup Frontend

cd ../frontend
npm install

Create a .env file in the frontend folder:

REACT_APP_OPENAI_API_KEY=your_openai_api_key

Then run the app:

npm start

The frontend will start on http://localhost:3000 and backend on http://localhost:5000.
📸 Screenshots
Form Input	Resume Preview + Suggestions
	
🚀 How It Works

    User fills in the resume form

    On submission:

        Data is sent to OpenAI GPT-3.5 for suggestions

        Resume is saved to MongoDB

    Suggestions are displayed on the page

    User can preview and export resume as PDF

🧠 AI Integration

We use OpenAI GPT-3.5 Turbo to provide intelligent suggestions to improve:

    Summary writing

    Skill phrasing

    Project descriptions

    Resume tone and structure

🛠️ Folder Structure

smart-resume-builder/
├── backend/
│   ├── server.js
│   ├── routes/
│   └── models/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   └── App.js
│   └── tailwind.config.js

📄 Export as PDF

We use react-to-print to trigger the browser's print dialog, enabling users to export a clean resume layout as a PDF file.
✅ Future Improvements

    User authentication & resume history

    Templates & themes for resumes

    Download button instead of print dialog

    Advanced formatting in AI suggestions
