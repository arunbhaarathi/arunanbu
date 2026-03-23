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

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I like building things that move, think, and occasionally surprise me.
          </p>

          <p>
            Somewhere between writing my first lines of code and watching a robot respond to the real world, I got hooked — not just on robotics, but on the idea that technology can blur the line between imagination and reality. That's where I spend most of my time now.
          </p>

          <p>
            I'm <span className="text-foreground font-semibold">Arun</span> — a robotics engineer by training, but more accurately, a technologist who enjoys turning complex ideas into working systems (and sometimes into content people actually enjoy watching). I work at the intersection of{' '}
            <span className="text-primary font-semibold">robotics</span> and{' '}
            <span className="text-primary font-semibold">AI</span>, building systems that can see, decide, and act — whether it's through autonomous navigation, computer vision, or whatever problem currently refuses to be solved easily.
          </p>

          <p>
            I don't really separate "work" from "curiosity." If something is broken, inefficient, or just interesting enough, I'll probably try to figure it out. That mindset has led me to build, experiment, fail, rebuild — and document parts of that journey along the way.
          </p>

          <p>
            The content side of what I do is just an extension of that. I like taking things that seem complicated — robotics, AI, systems thinking — and breaking them down into something clear, engaging, and maybe even fun. Not because it's easy, but because it should be more accessible.
          </p>

          <p>
            I'm particularly interested in where robotics is heading next — smarter systems, more autonomy, tighter integration with AI — and how we can build things that are not just technically impressive, but actually useful in the real world.
          </p>

          <p>
            At the end of the day, I like solving problems. The harder, the better. Especially the ones that don't have obvious answers.
          </p>

          <p className="text-foreground font-medium italic">
            If it moves, learns, or challenges assumptions — I'm probably already thinking about it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;