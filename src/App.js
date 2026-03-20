import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px", maxWidth: "900px", margin: "auto" }}>

      {/* HERO */}
      <h1>Dr. Y Sai Vaishnavi</h1>
      <h3>ENT Surgeon | Head & Neck Oncology</h3>
      <p>Assistant Professor, MNR Medical College & Hospital</p>

      <hr />

      {/* ABOUT */}
      <h2>About Me</h2>
      <p>
        I am an ENT surgeon with a focused interest in Head & Neck Oncology.
        I have gained structured exposure across leading cancer centres including
        Tata Memorial Hospital, Omega Cancer Hospital, and MNJ Cancer Hospital.
      </p>

      {/* EXPERIENCE */}
      <h2>Head & Neck Oncology Experience</h2>
      <ul>
        <li>Tata Memorial Hospital (2025) – 30+ surgeries</li>
        <li>Omega Cancer Hospital (2024) – 10+ cases</li>
        <li>MNJ Cancer Hospital (2022) – 30+ cases</li>
      </ul>

      {/* SKILLS */}
      <h2>Skills</h2>
      <ul>
        <li>Neck Dissections</li>
        <li>ENT Surgeries</li>
        <li>Endoscopy & Laryngoscopy</li>
      </ul>

      {/* DOCUMENTS */}
      <h2>Documents</h2>
      <ul>
        <li><a href="#">Download CV</a></li>
        <li><a href="#">Statement of Purpose</a></li>
      </ul>

      {/* CONTACT */}
      <h2>Contact</h2>
      <p>Email: vemurimom22@yahoo.com</p>

      <hr />

      <p style={{ textAlign: "center" }}>
        © 2026 Dr. Y Sai Vaishnavi
      </p>
    </div>
  );
}

export default App;