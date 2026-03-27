import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import ProjectModal from '@/components/ProjectModal';
import type { Project } from '@/data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalOpen) return; // dialog handles its own Escape
      if (e.key === 'ArrowLeft') scrollPrev();
      if (e.key === 'ArrowRight') scrollNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollPrev, scrollNext, modalOpen]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-cyber-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 particles opacity-30" />
      <div className="absolute inset-0 cyber-grid opacity-5" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="underline-glow gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Research and engineering work in robotics, computer vision, and sensor systems
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 px-4 sm:px-8"
                >
                  <button
                    onClick={() => openProject(project)}
                    className="group w-full text-left bg-card border border-border rounded-xl p-8 sm:p-12 transition-all duration-500 hover:border-primary/50 hover:glow-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
                  >
                    {/* Future image slot */}
                    {project.image && (
                      <div className="mb-6 rounded-lg overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}

                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <span className="inline-block mt-6 text-sm text-muted-foreground group-hover:text-primary/70 transition-colors duration-300">
                      Click to view details →
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <Button
              variant="neon-outline"
              size="icon"
              onClick={scrollPrev}
              aria-label="Previous project"
              className="h-10 w-10 rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>

            <span className="text-sm font-mono text-muted-foreground tabular-nums min-w-[3rem] text-center">
              {currentIndex + 1} / {projects.length}
            </span>

            <Button
              variant="neon-outline"
              size="icon"
              onClick={scrollNext}
              aria-label="Next project"
              className="h-10 w-10 rounded-full"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
};

export default Projects;
