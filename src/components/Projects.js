import React from 'react';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-container">

        {/* HEADER */}
        <header className="projects-header">
          <h2>Mis Proyectos</h2>
          <p>
            Una selección de trabajos que demuestran mis habilidades técnicas
            y mi enfoque profesional.
          </p>
        </header>

        {/* GRID */}
        <div className="projects-grid">

          {/* PROYECTO A */}
          <article className="project-card">
            <div className="project-header">
              <div className="project-icon">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
              </div>
              <div>
                <h3>LifeOS</h3>
                <span>Sistema Operativo Personal · Frontend Architecture</span>
              </div>
            </div>

            <p className="project-description">
              Plataforma de organización de vida diseñada como un sistema operativo personal.
              Permite gestionar proyectos, tareas y áreas de vida desde una arquitectura
              modular, preparada para colaboración en tiempo real e integraciones externas.
            </p>

            <div className="project-tags">
              <span className="project-tag">React 18</span>
              <span className="project-tag">Vite</span>
              <span className="project-tag">Tailwind CSS</span>
              <span className="project-tag">Arquitectura Modular</span>
              <span className="project-tag">Responsive Design</span>
            </div>

            <a
              href="https://github.com/joseone1221-beep/Plataforma-LifeOS"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Ver código
            </a>
          </article>

          {/* PROYECTO B */}
          <article className="project-card">
            <div className="project-header">
              <div className="project-icon">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                </svg>
              </div>
              <div>
                <h3>Plataforma DGT</h3>
                <span>Gestión Tecnológica Universitaria · Frontend</span>
              </div>
            </div>

            <p className="project-description">
              Plataforma web para la Dirección de Gestión Tecnológica de una universidad.
              Permite encuestas, préstamos de equipos, noticias y notificaciones,
              con panel administrativo y experiencia de usuario optimizada.
            </p>

            <div className="project-tags">
              <span className="project-tag">React</span>
              <span className="project-tag">CSS Personalizado</span>
              <span className="project-tag">localStorage</span>
              <span className="project-tag">Internacionalización</span>
              <span className="project-tag">Boxicons</span>
            </div>

            <a
              href="https://github.com/joseone1221-beep/Plataforma-Web-Entidad"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Ver código
            </a>
          </article>

        </div>

        {/* CTA */}
        <div className="projects-cta">
          <h3>¿Quieres ver más proyectos?</h3>
          <p>
            Tengo más proyectos en desarrollo y finalizados.
            Visita mi perfil de GitHub para conocerlos todos.
          </p>

          <a
            href="https://github.com/joseone1221-beep"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Ver perfil completo
          </a>
        </div>

      </div>
    </section>
  );
}
