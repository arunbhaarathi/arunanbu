import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-cyber-darker/70" />
      
      {/* Particles Animation */}
      <div className="absolute inset-0 particles" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block gradient-text">[Your Name]</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-muted-foreground mt-4">
              Robotics Engineer & Tech Explorer
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building intelligent machines and exploring the future of robotics through 
            <span className="text-neon-blue"> cutting-edge technology</span> and 
            <span className="text-neon-green"> innovative solutions</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="neon"
              size="lg"
              onClick={scrollToProjects}
              className="text-lg px-8 py-4 float"
            >
              View My Work
            </Button>
            <Button
              variant="neon-outline"
              size="lg"
              className="text-lg px-8 py-4"
            >
              Download Resume
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-neon-blue" />
        </div>
      </div>
    </section>
  );
};

export default Hero;