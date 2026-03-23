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

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left - Text */}
          <div className="space-y-2 text-center md:text-left">
            <p className="text-primary font-medium tracking-wider uppercase mb-1">Hi, I am</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Arun Anbu
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">
              <span className="gradient-text">{displayText}</span>
              <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse align-middle" />
            </h2>
          </div>

          {/* Center - Photo */}
          <div className="relative flex-shrink-0">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-2 border-primary/30 overflow-hidden bg-muted/20">
              <img
                src={arunPhoto}
                alt="Arun Anbu"
                className="w-full h-full object-cover object-top scale-110 grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>

          {/* Right - Social icons */}
          <div className="flex md:flex-col gap-3 items-center">
            <span className="text-sm text-muted-foreground font-medium mb-1 hidden md:block">Social</span>
            {[
              { icon: Github, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Mail, href: 'mailto:your.email@example.com' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>);

};

export default Hero;