import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [section, setSection] = useState('home');

  // Función para cambiar de sección y hacer scroll al top
  const handleSectionChange = (newSection) => {
    setSection(newSection);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (section) {
      case 'home':
        return <Home handleSectionChange={handleSectionChange} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home handleSectionChange={handleSectionChange} />;
    }
  };

  const navItems = [
    { id: 'home', label: 'Inicio', icon: 'home-outline' },
    { id: 'about', label: 'Sobre mí', icon: 'person-outline' },
    { id: 'projects', label: 'Proyectos', icon: 'folder-outline' },
    { id: 'contact', label: 'Contacto', icon: 'mail-outline' }
  ];

  return (
    <div className="App">
      {/* NAVEGACIÓN */}
      <div className="navigation">
        <ul>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`list ${section === item.id ? 'active' : ''}`}
            >
              <a onClick={() => handleSectionChange(item.id)}>
                <span className="icon">
                  <ion-icon name={item.icon}></ion-icon>
                </span>
                <span className="text">{item.label}</span>
              </a>
            </li>
          ))}
          <div className="indicator"></div>
        </ul>
      </div>

      {/* CONTENIDO */}
      <main className="main-layout">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
