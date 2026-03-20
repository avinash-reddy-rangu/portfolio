import React from "react";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 px-6 text-center">
        <img
          src="/profile.jpeg"
          alt="Dr Sai Vaishnavi"
          className="w-72 h-72 mx-auto rounded-full border-4 border-white shadow-lg mb-4 object-contain"
        />
        <h1 className="text-3xl font-bold">Dr. Y Sai Vaishnavi</h1>
        <p className="text-lg mt-2">ENT Surgeon | Head & Neck Oncology</p>
        <p className="mt-1 text-sm opacity-90">
          Assistant Professor, MNR Medical College & Hospital
        </p>
      </div>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="leading-relaxed text-gray-700">
          I am an ENT surgeon with a focused interest in Head & Neck Oncology,
          with clinical exposure across leading cancer centres including Tata
          Memorial Hospital, Omega Cancer Hospital, and MNJ Government Cancer Hospital.
          I am passionate about advancing surgical expertise and delivering
          high-quality oncologic care.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-white py-10 px-6 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Oncology Experience</h2>

          <div className="space-y-4">
            <div className="p-4 border rounded-lg shadow-sm">
              <h3 className="font-bold">Tata Memorial Hospital (2025)</h3>
              <p>Assisted 30+ advanced head & neck oncologic surgeries</p>
            </div>

            <div className="p-4 border rounded-lg shadow-sm">
              <h3 className="font-bold">Omega Cancer Hospital (2024)</h3>
              <p>Assisted 10+ head & neck oncology cases</p>
            </div>

            <div className="p-4 border rounded-lg shadow-sm">
              <h3 className="font-bold">MNJ Cancer Hospital (2022)</h3>
              <p>Assisted 30+ head & neck oncology procedures</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["ENT Surgeries", "Endoscopy", "Laryngoscopy"].map((skill) => (
            <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="bg-white py-10 px-6 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Documents</h2>

          <div className="flex gap-4">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800"
            >
              Download CV
            </a>

            <a
              href="/sop.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-700 text-blue-700 px-5 py-2 rounded-lg hover:bg-blue-50"
            >
              Statement of Purpose
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-4xl mx-auto py-10 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: vemurimom22@yahoo.com / dr.vemurisaivaishnavi@gmail.com</p>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-4 text-sm">
        © 2026 Dr. Y Sai Vaishnavi
      </footer>
    </div>
  );
}

export default App;