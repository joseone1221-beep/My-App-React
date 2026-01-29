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

          {/* TARJETA ESTADÍSTICAS */}
          <div
            className={`side-card stats-card ${focused === 'stats' ? 'focused' : ''}`}
            onMouseEnter={() => setFocused('stats')}
            onMouseLeave={() => setFocused(null)}
          >
            <h3 className="side-title">Estadísticas</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7494ec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7h18M3 12h18M3 17h18"></path>
                  </svg>
                </div>
                <span className="stat-number">6</span>
                <span className="stat-label">Proyectos</span>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7494ec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <span className="stat-number">2+</span>
                <span className="stat-label">Años experiencia</span>
              </div>
            </div>
          </div>

          {/* TARJETA SKILLS */}
          <div
            className={`side-card skills-card ${focused === 'skills' ? 'focused' : ''}`}
            onMouseEnter={() => setFocused('skills')}
            onMouseLeave={() => setFocused(null)}
          >
            <h3 className="side-title">Skills</h3>
            <ul className="skills-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="#7494ec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z"/>
                </svg>
                React
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="#7494ec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="6" x2="12" y2="12"/>
                  <line x1="12" y1="12" x2="16" y2="14"/>
                </svg>
                JavaScript
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="#7494ec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12h18"/>
                </svg>
                Python
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="#7494ec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16v16H4z"/>
                </svg>
                Django
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="#7494ec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z"/>
                </svg>
                Figma
              </li>
            </ul>
          </div>

        </aside>

      </main>
    </>
  );
}
