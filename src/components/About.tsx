const About = () => {
  return (
    <section id="about" className="h-screen flex items-center relative bg-cyber-dark overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5" />

      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-3">
            <span className="underline-glow gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto glow-blue" />
        </div>

        <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground text-center">
          <p className="text-foreground font-medium italic">
            Robotics engineer by day, innovator and builder by instinct.
          </p>

          <p>
            I work at the intersection of{' '}
            <span className="text-primary font-semibold">robotics</span> and{' '}
            <span className="text-primary font-semibold">AI</span>, driven by curiosity and grounded in engineering. My focus is on building systems that perform beyond the lab, in real-world conditions where reliability matters.
          </p>

          <p>
            For me, it is not just about solving problems, but understanding them deeply and turning that insight into practical, scalable solutions.
          </p>

          <p>
            Alongside this, I create content that makes robotics and AI more accessible, with over{' '}
            <span className="text-foreground font-semibold">1M+ views</span> across platforms.
          </p>

          <p className="text-foreground font-medium italic">
            Curious by nature. Engineer by discipline. Innovator by choice. Thinking ahead to what comes next.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;