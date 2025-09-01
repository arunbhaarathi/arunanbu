import { GraduationCap, Book, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Master's in Robotics",
      school: "Northeastern University",
      period: "2022 – 2024",
      description: "Advanced studies in autonomous systems, machine learning, and robotic perception",
      icon: GraduationCap,
      color: "neon-blue"
    },
    {
      degree: "Bachelor's in Mechanical Engineering",
      school: "[University Name]",
      period: "2015 – 2019",
      description: "Foundation in engineering principles, CAD design, and manufacturing processes",
      icon: Book,
      color: "neon-green"
    },
    {
      degree: "Robotics Certification",
      school: "MIT Professional Education",
      period: "2021",
      description: "Specialized training in industrial robotics and automation systems",
      icon: Award,
      color: "neon-purple"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-green/5" />
        <div className="cyber-grid opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="underline-glow gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through continuous learning and academic excellence
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((item, index) => {
            const IconComponent = item.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <div key={index} className={`flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}>
                {/* Content Card */}
                <div className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                  <div className="bg-card border border-border rounded-xl p-8 hover:border-neon-blue/50 transition-all duration-300 hover:glow-blue">
                    <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
                      <div className={`p-3 rounded-full ${
                        item.color === 'neon-blue' ? 'bg-neon-blue/10 text-neon-blue' :
                        item.color === 'neon-green' ? 'bg-neon-green/10 text-neon-green' :
                        'bg-neon-purple/10 text-neon-purple'
                      }`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.degree}</h3>
                    <h4 className="text-lg font-semibold text-neon-blue mb-4">{item.school}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Connector */}
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center ${
                    item.color === 'neon-blue' ? 'border-neon-blue bg-neon-blue/10 glow-blue' :
                    item.color === 'neon-green' ? 'border-neon-green bg-neon-green/10 glow-green' :
                    'border-neon-purple bg-neon-purple/10 glow-purple'
                  }`}>
                    <IconComponent className={`h-8 w-8 ${
                      item.color === 'neon-blue' ? 'text-neon-blue' :
                      item.color === 'neon-green' ? 'text-neon-green' :
                      'text-neon-purple'
                    }`} />
                  </div>
                  {index < educationData.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-neon-blue to-neon-green mt-4" />
                  )}
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden lg:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;