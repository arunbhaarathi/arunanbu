import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram } from 'lucide-react';
import arunPhoto from '@/assets/arun-photo.jpeg';

const roles = ['Robotics Engineer', 'Content Creator', 'Innovator'];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const tick = useCallback(() => {
    const currentRole = roles[roleIndex.current];

    if (!isDeleting.current) {
      charIndex.current++;
      setDisplayText(currentRole.slice(0, charIndex.current));

      if (charIndex.current === currentRole.length) {
        isDeleting.current = true;
        timeoutRef.current = setTimeout(tick, 1500);
        return;
      }
      timeoutRef.current = setTimeout(tick, 100);
    } else {
      charIndex.current--;
      setDisplayText(currentRole.slice(0, charIndex.current));

      if (charIndex.current === 0) {
        isDeleting.current = false;
        roleIndex.current = (roleIndex.current + 1) % roles.length;
        timeoutRef.current = setTimeout(tick, 300);
        return;
      }
      timeoutRef.current = setTimeout(tick, 50);
    }
  }, []);

  useEffect(() => {
    timeoutRef.current = setTimeout(tick, 100);
    return () => clearTimeout(timeoutRef.current);
  }, [tick]);

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

      <div className="relative z-10 w-full h-full min-h-screen flex flex-col md:flex-row">
        {/* Left - Text content */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-20 md:py-0">
          <div className="space-y-3 text-center md:text-left max-w-lg">
            <p className="text-primary font-poppins font-medium mb-1">Hi there!</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-poppins font-bold text-foreground leading-tight">
              I am Arun
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold mt-2 relative">
              <span className="invisible">Robotics Engineer</span>
              <span className="absolute left-0 top-0 w-full text-center md:text-left">
                <span className="gradient-text">{displayText}</span>
                <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse align-middle" />
              </span>
            </h2>

            {/* Social icons inline */}
            <div className="flex gap-3 items-center pt-6 justify-center md:justify-start">
              {[
                { icon: Github, href: 'https://github.com/arunbhaarathi' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/arunbhaarathianbu/' },
                { icon: Instagram, href: 'https://www.instagram.com/arunbhaarathi/' },
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

        {/* Right - Photo, large and edge-aligned */}
        <div className="relative w-full md:w-[45%] lg:w-[50%] flex items-end justify-center md:justify-end">
          <img
            src={arunPhoto}
            alt="Arun Anbu"
            className="w-[70%] md:w-full max-h-[85vh] object-cover object-[center_15%] grayscale"
            style={{ borderRadius: '20% 20% 0 0' }}
          />
        </div>
      </div>
    </section>);

};

export default Hero;