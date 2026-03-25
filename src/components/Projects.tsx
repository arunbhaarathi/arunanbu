import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Robotics', 'AI', 'Software', 'Hardware'];

  const projects = [
    {
      title: "Autonomous Drone Navigation",
      description: "Advanced computer vision system for real-time obstacle detection and path planning in dynamic environments. Implemented using ROS2 and OpenCV.",
      category: "Robotics",
      tags: ["Python", "ROS2", "OpenCV", "SLAM"],
      image: "🤖",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Industrial Robot Arm Controller",
      description: "High-precision control system for 6-DOF robotic manipulator with force feedback and safety protocols for manufacturing applications.",
      category: "Hardware",
      tags: ["C++", "Arduino", "Control Systems", "CAD"],
      image: "🦾",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "AI-Powered Object Recognition",
      description: "Deep learning model for real-time object classification and tracking using YOLOv8 and custom neural network architectures.",
      category: "AI",
      tags: ["PyTorch", "YOLO", "Computer Vision", "Neural Networks"],
      image: "👁️",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Sensor Fusion Framework",
      description: "Multi-sensor data integration system combining LiDAR, cameras, and IMU for enhanced robotic perception and localization.",
      category: "Software",
      tags: ["Python", "Kalman Filter", "Sensor Fusion", "ROS"],
      image: "📡",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Swarm Robotics Simulation",
      description: "Distributed control algorithms for coordinated behavior of multiple autonomous agents in complex environments.",
      category: "Robotics",
      tags: ["Gazebo", "Multi-Agent", "Algorithms", "Simulation"],
      image: "🐝",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Smart Home Automation",
      description: "IoT-based home automation system with voice control, machine learning predictions, and energy optimization features.",
      category: "Software",
      tags: ["IoT", "React", "Node.js", "Machine Learning"],
      image: "🏠",
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-cyber-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 particles opacity-30" />
      <div className="absolute inset-0 cyber-grid opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="underline-glow gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Innovative solutions built with cutting-edge technology
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "neon" : "cyber"}
                onClick={() => setActiveFilter(filter)}
                className="transition-all duration-300"
              >
                <Filter className="h-4 w-4 mr-2" />
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-neon-blue/50 transition-all duration-500 hover:scale-105 hover:glow-blue"
            >
              {/* Project Icon */}
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-neon-blue/10 text-neon-blue border border-neon-blue/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="neon-outline"
                    size="sm"
                    className="flex-1"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="neon-green"
                    size="sm"
                    className="flex-1"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="neon-outline" size="lg">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;