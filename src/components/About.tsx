const About = () => {
  return (
    <section id="about" className="py-20 bg-cyber-dark relative">
      <div className="absolute inset-0 cyber-grid opacity-5" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-4">
            <span className="underline-glow gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto glow-blue" />
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground text-center">
          <p>
            I like building things that move, think, and occasionally surprise me.
          </p>

          <p>
            I'm <span className="text-foreground font-semibold">Arun</span> — a robotics engineer, technologist, and someone who enjoys turning complex ideas into real, working systems. My work sits at the intersection of{' '}
            <span className="text-primary font-semibold">robotics</span> and{' '}
            <span className="text-primary font-semibold">AI</span>, where machines learn to see, decide, and act.
          </p>

          <p>
            I'm naturally drawn to problems — especially the ones that don't have clear answers. That curiosity has me constantly building, experimenting, failing, and rebuilding. The content I create is just an extension of that process: breaking down complex ideas into something people can actually understand (and enjoy).
          </p>

          <p>
            I'm interested in where robotics is going next — more autonomy, smarter systems, and real-world impact.
          </p>

          <p className="text-foreground font-medium italic">
            If it moves, learns, or challenges assumptions, I'm probably already working on it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;