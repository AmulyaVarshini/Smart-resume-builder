import React, { useState, useRef } from "react";
import ResumeForm from "./components/ResumeForm";
import { useReactToPrint } from "react-to-print";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    address: "",
    summary: "",
    skills: "",
    education: "",
    experience: "",
    projects: "",
    achievements: "",
    certifications: "",
  });
  
  const [aiSuggestions, setAiSuggestions] = useState("");
  const [loading, setLoading] = useState(false);
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const prompt = `
Here is a resume:

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Summary: ${formData.summary}
Skills: ${formData.skills}
Education: ${formData.education}
Experience: ${formData.experience}
LinkedIn: ${formData.linkedin}
GitHub: ${formData.github}
Projects: ${formData.projects}
Address: ${formData.address}
Achievements: ${formData.achievements}
Certifications: ${formData.certifications}

Please analyze this resume and suggest improvements.
`;

    try {
      const openAIResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 500,
        }),
      });

      
      const data = await openAIResponse.json();
      setAiSuggestions(
      data.choices?.[0]?.message?.content?.trim() ||
      `✅ General Resume Improvement Tips:
      - Make your summary more impactful by focusing on achievements.
      - Use strong action verbs in experience (e.g., led, built, improved).
      - List technical skills separately from soft skills.
      - Use bullet points for education, experience, and projects.
      - Keep formatting consistent (e.g., dates aligned).
      - Tailor your resume for each job with keywords from the job description.`
      );


      await fetch("http://localhost:5000/api/resume/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

    } catch (err) {
      setAiSuggestions("Error fetching suggestions.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-xl rounded-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Smart Resume Builder</h1>
        <ResumeForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          loading={loading}
        />

<div ref={resumeRef} className="mt-6 bg-white print:p-8 print:text-black">
  <h2 className="text-xl font-bold mt-6 mb-4 text-center">Resume Preview</h2>

  <p><strong>Full Name:</strong> {formData.fullName}</p>
  <p><strong>Email:</strong> {formData.email}</p>
  <p><strong>Phone:</strong> {formData.phone}</p>
  <p><strong>LinkedIn:</strong> {formData.linkedin}</p>
  <p><strong>GitHub:</strong> {formData.github}</p>
  <p><strong>Address:</strong> {formData.address}</p>

  <p className="mt-4"><strong>Summary:</strong><br />{formData.summary}</p>
  <p className="mt-4"><strong>Skills:</strong><br />{formData.skills}</p>
  <p className="mt-4"><strong>Education:</strong><br />{formData.education}</p>
  <p className="mt-4"><strong>Experience:</strong><br />{formData.experience}</p>
  <p className="mt-4"><strong>Projects:</strong><br />{formData.projects}</p>
  <p className="mt-4"><strong>Achievements:</strong><br />{formData.achievements}</p>
  <p className="mt-4"><strong>Certifications:</strong><br />{formData.certifications}</p>

  {aiSuggestions && (
    <div className="mt-6 bg-green-100 p-4 rounded whitespace-pre-line">
      <h3 className="font-bold mb-2">AI Suggestions:</h3>
      {aiSuggestions}
    </div>
  )}
</div>


        <button onClick={() => window.print()} className="mt-6 bg-green-600 text-white px-4 py-2 rounded">
          Export as PDF
        </button>
      </div>
    </div>
  );
}

export default App;
