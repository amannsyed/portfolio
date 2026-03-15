
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('hero');

  const navItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Expertise', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 120;

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm border-b border-slate-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, 'hero')}
          className="font-bold text-2xl tracking-tighter text-indigo-600 hover:opacity-70 transition-opacity"
        >
          AS.
        </a>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`relative px-3 py-2 text-xs md:text-sm font-semibold transition-all duration-200 rounded-md whitespace-nowrap
                  ${activeSection === item.id 
                    ? 'text-indigo-600 bg-indigo-50/50' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/50'}`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-indigo-600 rounded-full"></span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
