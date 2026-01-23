import React, { useState } from 'react';
import './Home.css';

export default function About() {
  const [focused, setFocused] = useState(null);

  return (
    <>
      <main id="about" className={`home-layout ${focused ? 'focused' : ''}`}>

        {/* TARJETA PRINCIPAL */}
        <article
          className={`home-card ${focused === 'main' ? 'focused' : ''}`}
          onMouseEnter={() => setFocused('main')}
          onMouseLeave={() => setFocused(null)}
        >
          <h1 className="home-title">Sobre mí</h1>
          <p className="home-subtitle">
            Mi experiencia, enfoque y valores
          </p>

          <section className="home-section">
            <h2 className="home-section-title">Mi historia</h2>
            <p className="home-text">
              Soy un desarrollador con enfoque principal en Frontend,
              apasionado por crear soluciones web eficientes y atractivas.
              Me especializo en transformar ideas en productos funcionales,
              manteniendo un equilibrio entre rendimiento, usabilidad y diseño.
            </p>
            <p className="home-text">
              Combino conocimientos técnicos sólidos con habilidades de diseño
              para crear experiencias digitales claras y efectivas.
            </p>
          </section>

          <section className="home-section">
            <h3 className="home-section-title">Mi enfoque de trabajo</h3>
            <ul className="home-tech-list">
              <li>Análisis y planificación</li>
              <li>Prototipado en Figma</li>
              <li>Desarrollo con React</li>
              <li>Iteración continua</li>
            </ul>
          </section>
        </article>

        {/* COLUMNA DERECHA */}
        <aside className="home-side">

          <div
            className={`side-card ${focused === 'values' ? 'focused' : ''}`}
            onMouseEnter={() => setFocused('values')}
            onMouseLeave={() => setFocused(null)}
          >
            <h3 className="side-title">Valores</h3>
            <ul className="skills-list">
              <li>Calidad</li>
              <li>Innovación</li>
              <li>Colaboración</li>
              <li>Aprendizaje continuo</li>
            </ul>
          </div>

          <div
            className={`side-card ${focused === 'skills' ? 'focused' : ''}`}
            onMouseEnter={() => setFocused('skills')}
            onMouseLeave={() => setFocused(null)}
          >
            <h3 className="side-title">Habilidades</h3>
            <ul className="skills-list">
              <li>React & JavaScript</li>
              <li>Python & Django</li>
              <li>PostgreSQL / MongoDB</li>
              <li>Figma / UI UX</li>
              <li>Testing / QA</li>
            </ul>
          </div>

        </aside>
      </main>
    </>
  );
}
