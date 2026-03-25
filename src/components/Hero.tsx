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
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Decorative shapes */}
      <div
        className="absolute top-[10%] left-[-5%] w-72 h-72 rounded-full opacity-20"
        style={{ background: 'hsl(var(--primary) / 0.15)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-[15%] left-[5%] w-48 h-48 rounded-full opacity-15"
        style={{ background: 'hsl(var(--primary) / 0.2)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute top-[20%] right-[2%] w-64 h-64 rounded-full opacity-10"
        style={{ background: 'hsl(var(--primary) / 0.15)', filter: 'blur(50px)' }}
      />
      <div
        className="absolute bottom-[10%] right-[-3%] w-56 h-56 rounded-full opacity-15"
        style={{ background: 'hsl(var(--primary) / 0.1)', filter: 'blur(45px)' }}
      />
      {/* Subtle geometric accents */}
      <div
        className="absolute top-[30%] left-[12%] w-20 h-20 rounded-2xl rotate-45 opacity-10 border border-primary"
      />
      <div
        className="absolute bottom-[25%] right-[8%] w-16 h-16 rounded-full opacity-10 border border-primary"
      />
      <div
        className="absolute top-[15%] right-[15%] w-12 h-12 rounded-lg rotate-12 opacity-[0.07] bg-primary"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 sm:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-4">
          {/* Left - Text */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-poppins font-medium text-sm">
              Hi there! 👋
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-bold text-foreground leading-tight">
              I am Arun
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold mt-2 relative">
              <span className="invisible">Robotics Engineer</span>
              <span className="absolute left-0 top-0 w-full text-center md:text-left">
                <span className="gradient-text">{displayText}</span>
                <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse align-middle" />
              </span>
            </h2>

            {/* Social links row */}
            <div className="flex gap-3 items-center pt-4 justify-center md:justify-start">
              {[
                { icon: Github, href: 'https://github.com/arunbhaarathi', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/arunbhaarathianbu/', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://www.instagram.com/arunbhaarathi/', label: 'Instagram' },
              ].map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Large photo */}
          <div className="relative flex-shrink-0">
            <div
              className="w-72 h-80 sm:w-[22rem] sm:h-[28rem] overflow-hidden"
              style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
            >
              <img
                src={arunPhoto}
                alt="Arun Anbu"
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
