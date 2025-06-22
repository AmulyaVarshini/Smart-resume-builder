import React from "react";

const ResumeForm = ({ formData, handleChange, handleSubmit, loading }) => (
  <form onSubmit={handleSubmit} className="space-y-4 print:hidden">
    {/* Basic Info */}
    {["fullName", "email", "phone", "linkedin", "github", "address"].map((field) => (
      <input
        key={field}
        className="w-full border p-2 rounded"
        type="text"
        name={field}
        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
        value={formData[field]}
        onChange={handleChange}
      />
    ))}

    {/* Text Areas */}
    {["summary", "skills", "education", "experience", "projects", "achievements", "certifications"].map((field) => (
      <textarea
        key={field}
        className="w-full border p-2 rounded"
        name={field}
        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
        value={formData[field]}
        onChange={handleChange}
        rows={3}
      />
    ))}

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
    >
      {loading ? "Generating..." : "Submit & Get AI Suggestions"}
    </button>
  </form>
);

export default ResumeForm;
