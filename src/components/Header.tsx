import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id') || '';

        if (sectionTop < 100) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800/30 py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="text-xl font-semibold flex items-center">
          <span>Yihun <span className="text-blue-600"> A.</span></span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {['home', 'about', 'projects', 'skills', 'services', 'contact'].map(section => (
              <a
                key={section}
                href={`#${section}`}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`
        md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        pt-20
      `}>
        <nav className="flex flex-col items-center space-y-6 p-4">
          {['home', 'about', 'projects', 'skills', 'services', 'contact'].map(section => (
            <a
              key={section}
              href={`#${section}`}
              className={`text-lg ${activeSection === section ? 'text-blue-600 font-medium' : 'text-gray-700 dark:text-gray-300'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;