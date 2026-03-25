import { ExternalLink, Github, Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import type { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectModal = ({ project, open, onOpenChange }: ProjectModalProps) => {
  if (!project) return null;

  const hasView = project.viewLink.length > 0;
  const hasGithub = project.githubLink.length > 0;
  const hasDemo = project.demoLink.length > 0;
  const hasAnyLink = hasView || hasGithub || hasDemo;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border sm:max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-xl sm:text-2xl leading-tight text-foreground pr-8">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm leading-relaxed pt-4">
            {project.abstract}
          </DialogDescription>
        </DialogHeader>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {hasAnyLink && (
          <div className="flex flex-wrap gap-3 pt-4">
            {hasView && (
              <Button variant="neon" size="sm" asChild>
                <a href={project.viewLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Project
                </a>
              </Button>
            )}
            {hasGithub && (
              <Button variant="neon-outline" size="sm" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
            )}
            {hasDemo && (
              <Button variant="neon-green" size="sm" asChild>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <Play className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
