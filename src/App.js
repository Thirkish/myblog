import React, { useEffect } from 'react';
import './App.css';
import { FaInstagram } from 'react-icons/fa'; // Import icons from React Icons

function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Bokor&family=Protest+Revolution&display=swap';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>About Me</h1>
      </header>
      <main className="about-section">
        <p>
          My name is Thirshath Morais. I completed my schooling at John Bosco Matriculation Higher Secondary School and am
          currently pursuing a Bachelor of Engineering in the CSE department at KCG College of Technology, Karapakkam.
          I am passionate about Virtual Reality (VR) and Mixed Reality (MR). I also gained valuable industry experience
          during a 6-month internship at Nokia.
        </p>
      </main>
      <footer className="contact-section">
        <p>Contact Me:</p>
        <div className="icons">
          <a href="https://www.instagram.com/thirshathmorais10/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
       </div>
      </footer>
    </div>
  );
}

export default App;
