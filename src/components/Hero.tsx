import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import arunPhoto from '@/assets/arun-photo.jpeg';

const roles = ['Robotics Engineer', 'Content Creator', 'Tech Explorer'];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(role.slice(0, displayText.length + 1));
        if (displayText.length === role.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(role.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Text */}
          <div className="space-y-2 text-2xl text-center md:text-left mx-0">
            <p className="text-primary font-medium tracking-wider uppercase mb-1">Hi, I am</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mt-0">
              Arun Anbu
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
              <span className="gradient-text">{displayText}</span>
              <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse align-middle" />
            </h2>

            {/* Social icons */}
            <div className="flex gap-3 pt-4 justify-center md:justify-start">
              {[
              { icon: Github, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Mail, href: 'mailto:your.email@example.com' }].
              map(({ icon: Icon, href }, i) =>
              <a
                key={i}
                href={href}
                className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Right - Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-muted/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-primary/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110" />
              <img
                src={arunPhoto}
                alt="Arun Anbu"
                className="relative z-10 w-64 h-72 sm:w-72 sm:h-80 object-cover object-top rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default Hero;