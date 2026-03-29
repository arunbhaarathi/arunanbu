import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      color: 'hover:text-neon-blue'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-neon-green'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:your.email@example.com',
      color: 'hover:text-neon-purple'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-green/5" />
        <div className="cyber-grid opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="underline-glow gradient-text">Get in Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate on the next big innovation in robotics and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Combined Let's Connect + Form */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-8 hover:border-neon-green/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-neon-green">Let's Connect</h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations in the field of robotics and AI.
              </p>

              <div className="flex items-center gap-3 mb-8">
                <div className="h-5 w-5 bg-neon-green rounded-full" />
                <span className="text-foreground">Available for new projects</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="neon-border focus:glow-blue"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="neon-border focus:glow-blue"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="neon-border focus:glow-blue resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="neon"
                  size="lg"
                  className="w-full"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

            {/* Social Links */}
            <div className="bg-card border border-border rounded-xl p-8 hover:border-neon-purple/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-neon-purple">Follow Me</h3>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`flex flex-col items-center gap-3 p-4 rounded-lg border border-border hover:border-current transition-all duration-300 ${social.color} group`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="h-8 w-8 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-neon-blue/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 gradient-text">Download Resume</h3>
              <p className="text-muted-foreground mb-6">
                Get a detailed overview of my experience and skills
              </p>
              <Button variant="neon-outline" size="lg" className="w-full glow-blue">
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;