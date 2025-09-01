import techAvatar from '@/assets/tech-avatar.jpg';

const About = () => {
  const highlights = [
    { year: '2024', title: 'Senior Robotics Engineer', description: 'Leading autonomous systems development' },
    { year: '2022', title: 'AI Research Focus', description: 'Specialized in machine learning applications' },
    { year: '2019', title: 'Career Start', description: 'Began journey in robotics engineering' },
  ];

  return (
    <section id="about" className="py-20 bg-cyber-dark relative">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="underline-glow gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto glow-blue" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar and Bio */}
          <div className="space-y-8">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src={techAvatar}
                  alt="Tech Avatar"
                  className="w-64 h-64 rounded-full object-cover border-4 border-neon-blue glow-blue"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-blue/20 to-neon-green/20" />
              </div>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a robotics engineer passionate about building autonomous systems and solving 
                real-world problems with cutting-edge technology. My work spans 
                <span className="text-neon-blue font-semibold"> hardware prototyping</span>, 
                <span className="text-neon-green font-semibold"> AI software development</span>, and 
                <span className="text-neon-purple font-semibold"> real-time sensor integration</span>.
              </p>
              
              <p>
                With a deep understanding of both mechanical systems and software algorithms, 
                I bridge the gap between theoretical concepts and practical implementations. 
                I'm constantly exploring new technologies and methodologies to push the boundaries 
                of what's possible in robotics.
              </p>
              
              <p>
                When I'm not building robots, you'll find me contributing to open-source projects, 
                attending tech conferences, or experimenting with the latest AI frameworks.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center lg:text-left gradient-text mb-8">
              Career Highlights
            </h3>
            
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-neon-blue/30">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-neon-blue rounded-full glow-blue" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="text-neon-green font-bold text-lg">{item.year}</span>
                      <h4 className="text-xl font-semibold text-foreground">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;