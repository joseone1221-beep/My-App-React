import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">

        {/* HEADER */}
        <header className="contact-header">
          <h2>Contacto</h2>
          <p>Conectemos y trabajemos juntos en tu próximo proyecto</p>
        </header>

        {/* GRID */}
        <div className="contact-grid">

          {/* TARJETA INFO */}
          <div className="contact-card card-info">
            <h3>Información de contacto</h3>
            <p>
              Si deseas colaborar, conocer más sobre mi trabajo o tienes una propuesta profesional,
              puedes ponerte en contacto a través de los medios que indico a continuación.
            </p>
            <div className="contact-item">
              <h4>Correo electrónico</h4>
              <a href="mailto:joseraulmiranda676@gmail.com">joseraulmiranda676@gmail.com</a>
            </div>
            <div className="contact-item">
              <h4>Teléfono / WhatsApp</h4>
              <a
                href="https://wa.me/5355957891"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 Escríbeme por WhatsApp
              </a>
            </div>
            <div className="contact-item">
              <h4>Redes profesionales</h4>
              <a href="https://github.com/joseone1221-beep" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>

            {/* BOTÓN PDF */}
            <div className="pdf-section">
              <a
                href="/docs/Frontend_Developer.pdf"
                download
                className="pdf-link"
              >
                📄 Descargar CV
              </a>
            </div>
          </div>
          
          {/* TARJETA TRABAJEMOS JUNTOS */}
          <div className="contact-card card-together">
            <h3>¡Trabajemos juntos!</h3>
            <p>Estoy abierto a nuevos retos, oportunidades y proyectos donde pueda aportar mis habilidades en diseño, desarrollo y UX/UI.</p>
            <ul>
              <li>• Desarrollo de interfaces modernas y responsivas</li>
              <li>• Optimización de rendimiento y accesibilidad</li>
              <li>• Arquitectura backend escalable</li>
              <li>• Consultoría en UX/UI y diseño de producto</li>
            </ul>
            <a href="mailto:joseraulmiranda676@gmail.com" className="contact-button">Enviar mensaje</a>
            <a
              href={`${process.env.PUBLIC_URL}/docs/Frontend develpor resumen.pdf`}
              download="Frontend_Developer_Resume_Jose_Miranda.pdf"
              className="contact-button"
              style={{ marginTop: '10px' }}
            >
              Descargar CV
            </a>
          </div>

          {/* TARJETA DISPONIBILIDAD */}
          <div className="contact-card card-availability">
            <h3>Disponibilidad</h3>
            <p>Actualmente disponible para proyectos freelance y colaboraciones a largo plazo.</p>
            <p className="small">Horario de atención: Lunes a Viernes, 9:00 AM – 6:00 PM (GMT-4)</p>
          </div>

        </div>
      </div>
    </section>
  );
}
