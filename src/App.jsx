
import "./App.css";
import "./App.css";
import heroImage from "./assets/hero.png";

function App() {
  return (
    <div className="portfolio">
      

      {/* Navbar */}
      <nav className="navbar">
        <h2>ARPITA ✨</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-text">
          <p className="welcome">
            WELCOME TO MY WORLD 🌸
          </p>

          <h1>
            Hi, I'm <span>Arpita</span>
          </h1>

          <h2>Anime Inspired Developer 💻</h2>

          <p>
            I create beautiful websites and turn ideas
            into digital experiences.
          </p>

          <a href="#projects" className="main-button">
            Explore My World ✨
          </a>
        </div>

        <div className="hero-image">
          <div className="anime-circle">
            🌸
          </div>
          <h3>CODE • CREATE • DREAM</h3>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">

        <p className="welcome">MY STORY 📖</p>

        <h2>
          About <span>Me</span>
        </h2>

        <p>
          Hi! I'm Arpita, a Computer Science Engineering
          student and an aspiring Software Developer.
        </p>

        <p>
          I love learning new technologies, building
          websites, and solving coding challenges.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <h3>🎓 Education</h3>
            <p>BTech CSE</p>
          </div>

          <div className="about-card">
            <h3>💻 Focus</h3>
            <p>Web Development</p>
          </div>

          <div className="about-card">
            <h3>🌸 Goal</h3>
            <p>Software Engineer</p>
          </div>

        </div>

      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">

        <p className="welcome">MY SPECIAL POWERS ⚡</p>

        <h2>
          My <span>Skills</span>
        </h2>

        <div className="skills-container">

          <div className="skill-card">
            <h3>🌐 HTML</h3>
            <p>Building website structure</p>
          </div>

          <div className="skill-card">
            <h3>🎨 CSS</h3>
            <p>Creative and responsive designs</p>
          </div>

          <div className="skill-card">
            <h3>⚡ JavaScript</h3>
            <p>Interactive web experiences</p>
          </div>

          <div className="skill-card">
            <h3>⚛️ React</h3>
            <p>Building modern user interfaces</p>
          </div>

          <div className="skill-card">
            <h3>☕ Java</h3>
            <p>Learning DSA and problem solving</p>
          </div>

          <div className="skill-card">
            <h3>🗄️ MongoDB</h3>
            <p>Working with databases</p>
          </div>

        </div>

      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">

        <p className="welcome">MY COMPLETED MISSIONS 🚀</p>

        <h2>
          My <span>Projects</span>
        </h2>

        <div className="projects-container">

          <div className="project-card">
            <h3>💬 Online Message Chatting</h3>

            <p>
              A real-time chatting application
              created during my internship.
            </p>

            <p className="tech">
              MERN • Socket.IO • MongoDB
            </p>

            <a href="#" className="project-button">
              View Project
            </a>
          </div>

          <div className="project-card">
            <h3>🌦️ Weather App</h3>

            <p>
              A weather application that displays
              weather information using an API.
            </p>

            <p className="tech">
              React • JavaScript • API
            </p>

            <a href="#" className="project-button">
              View Project
            </a>
          </div>

          <div className="project-card">
            <h3>🎭 Anime Portfolio</h3>

            <p>
              My creative portfolio inspired by
              anime characters and digital worlds.
            </p>

            <p className="tech">
              HTML • CSS • React
            </p>

            <a href="#home" className="project-button">
              Current Project
            </a>
          </div>

        </div>

      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">

        <p className="welcome">LET'S CONNECT 💌</p>

        <h2>
          Contact <span>Me</span>
        </h2>

        <p>
          Want to connect or collaborate?
          Let's create something amazing!
        </p>

        <div className="contact-links">

          <a
            href="https://github.com/07-arpita"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/arpita-mishra-7b397736a"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:your-email@gmail.com">
            Email
          </a>

        </div>

      </section>

      {/* Footer */}
      <footer>
        <p>Made with 💗 and code by Arpita ✨</p>
      </footer>

    </div>
  );
}

export default App;