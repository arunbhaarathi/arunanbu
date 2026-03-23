import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Mail } from 'lucide-react';
import arunPhoto from '@/assets/arun-photo.jpeg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Portfolio' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto">
      {/* Desktop Navigation - Centered pill */}
      <div className="hidden md:flex items-center gap-1 bg-card/90 backdrop-blur-lg border border-border rounded-full px-2 py-1.5 shadow-lg">
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full overflow-hidden border border-border mr-1">
          <img src={arunPhoto} alt="Arun" className="w-full h-full object-cover" />
        </div>

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {item.label}
          </button>
        ))}

        <Button
          variant="neon"
          size="sm"
          className="rounded-full ml-1 gap-1.5"
          onClick={() => scrollToSection('contact')}
        >
          <Mail className="h-4 w-4" />
          Email
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-2 bg-card/90 backdrop-blur-lg border border-border rounded-full px-3 py-1.5 shadow-lg">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-border">
          <img src={arunPhoto} alt="Arun" className="w-full h-full object-cover" />
        </div>
        <span className="text-sm font-semibold text-foreground">Arun Anbu</span>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-card/95 backdrop-blur-lg border border-border rounded-2xl p-2 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                activeSection === item.id
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
