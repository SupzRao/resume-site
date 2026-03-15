import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">

      <header>
        <h1>Suprada Rao</h1>
        <h3>Software Engineer | Automation Specialist</h3>

        <a className="btn" href="/resume.pdf" download>
          Download Resume
        </a>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          Software engineer specializing in automation testing,
          mobile testing and AI driven test frameworks.
        </p>
      </section>

      <section>
        <h2>Skills</h2>

        <ul>
          <li>Node.js</li>
          <li>Python Automation</li>
          <li>UIAutomator</li>
          <li>Mobile Automation</li>
          <li>AI Testing</li>
        </ul>

      </section>

      <section>
        <h2>Experience</h2>

        <h4>BHW German Bank</h4>
        <p>Android Loan Application Automation</p>

        <ul>
          <li>Created automation framework</li>
          <li>Developed AI based UI detection testing</li>
        </ul>

      </section>

      <section>
        <h2>Education</h2>
        <p>Bachelor's Degree</p>
      </section>

      <section>
        <h2>Certifications</h2>

        <ul>
          <li>Automation Testing</li>
        </ul>

      </section>

      <section>
        <h2>Projects</h2>

        <ul>
          <li>AI Mobile Automation Tool</li>
          <li>Voice Assistant Testing Framework</li>
        </ul>

      </section>

    </div>
  );
}

export default App;
