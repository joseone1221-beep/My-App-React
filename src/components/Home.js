import React, { useState } from 'react';
import './Home.css';

export default function Home({ handleSectionChange }) {
  const [focused, setFocused] = useState(null);

  return (
    <>
      {/* OVERLAY */}
      <div className={`overlay ${focused ? 'active' : ''}`}></div>

      <main className={`home-layout ${focused ? 'focused' : ''}`}>

        {/* TARJETA PRINCIPAL */}
        <article
          className={`home-card ${focused === 'main' ? 'focused' : ''}`}
          onMouseEnter={() => setFocused('main')}
          onMouseLeave={() => setFocused(null)}
        >
          <header className="home-header">
            <h1 className="home-title">José Raúl Miranda</h1>
            <p className="home-subtitle">
              Ingeniero en Ciencias Informáticas | Desarrollador Frontend
            </p>
            <p className="home-description">
              Desarrollo interfaces modernas, funcionales y optimizadas,
              enfocadas en brindar experiencias digitales intuitivas.
            </p>
          </header>

          <section className="home-section">
            <h2 className="home-section-title">Presentación</h2>
            <p className="home-text">
              Soy desarrollador especializado en Frontend, con sólidos
              conocimientos en React, JavaScript y diseño de interfaces.
              Combino habilidades técnicas y visuales para crear productos
              web eficientes y escalables.
            </p>
          </section>

          <section className="home-section">
            <h3 className="home-section-title">Tecnologías que domino</h3>
            <ul className="home-tech-list">
              <li>Frontend: React, JavaScript</li>
              <li>Backend: Python, Django</li>
              <li>Bases de datos</li>
              <li>QA / Testing</li>
              <li>Diseño UI/UX</li>
            </ul>
          </section>

          <footer className="home-cta">
            <div className="home-actions">
              <button
                className="custom-btn"
                onClick={() => handleSectionChange('projects')}
              >
                Ver proyectos
              </button>
              <button
                className="custom-btn"
                onClick={() => handleSectionChange('about')}
              >
                Sobre mí
              </button>
            </div>
          </footer>
        </article>

        {/* COLUMNA DERECHA */}
        <aside className="home-side">

          <div
            className={`side-card ${focused === 'stats' ? 'focused' : ''}`}
            onMouseEnter={() => setFocused('stats')}
            onMouseLeave={() => setFocused(null)}
          >
            <h3 className="side-title">Estadísticas</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">6 </span>
                <span className="stat-label">Proyectos</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">2+</span>
                <span className="stat-label">Años experiencia</span>
              </div>
            </div>
          </div>

          <div
            className={`side-card ${focused === 'skills' ? 'focused' : ''}`}
            onMouseEnter={() => setFocused('skills')}
            onMouseLeave={() => setFocused(null)}
          >
            <h3 className="side-title">Skills</h3>
            <ul className="skills-list">
              <li>React</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Django</li>
              <li>Figma</li>
            </ul>
          </div>

        </aside>

      </main>
    </>
  );
}
