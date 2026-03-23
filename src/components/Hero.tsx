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
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
          {/* Left - Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg">Hi I am</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Arun Anbu
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">{displayText}</span>
              <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse align-middle" />
            </h2>


            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="neon" size="lg" onClick={scrollToContact} className="text-base px-8">
                Hire Me
              </Button>
              <Button variant="neon-outline" size="lg" className="text-base px-8">
                Download CV
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6 border-t border-border mt-6">
              {[
                { value: '5+', label: 'Experiences' },
                { value: '20+', label: 'Projects done' },
                { value: '10+', label: 'Technologies' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Photo + Social */}
          <div className="flex justify-center lg:justify-end items-center gap-6">
            <div className="relative">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-muted/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border-2 border-primary/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110" />
              <img
                src={arunPhoto}
                alt="Arun Anbu"
                className="relative z-10 w-72 h-80 sm:w-80 sm:h-[28rem] object-cover object-top rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Vertical social bar */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground tracking-widest uppercase mb-2 [writing-mode:vertical-lr] rotate-180">Social</span>
              <div className="w-px h-8 bg-border" />
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2.5 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
