import { ExternalLink, FolderOpen, ArrowRight, Video, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={project.title}
                className={`group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 flex flex-col h-full ${project.badge ? 'border-border/50 hover:shadow-[0_0_30px_-5px_rgba(241,194,50,0.3)] hover:border-[#f1c232]/30' : 'hover:shadow-2xl'
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={`h-48 bg-gradient-to-r ${project.gradient} opacity-0 absolute inset-0`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-background/30 backdrop-blur-md text-foreground rounded-full border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-background/30 backdrop-blur-md text-foreground rounded-full border border-white/10">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1 relative">
                  {project.badge && (
                    <div className="mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold bg-[#6a329f]/20 text-[#f1c232] rounded-full border border-[#f1c232]/30 shadow-[0_0_10px_rgba(241,194,50,0.1)]">
                        {project.badge}
                      </span>
                    </div>
                  )}
                  <h3 className={`text-xl font-heading font-semibold mb-3 transition-colors ${project.badge ? 'group-hover:text-[#f1c232]' : 'group-hover:text-primary'}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-muted/30 text-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-sm bg-muted/30 text-foreground rounded-full">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/30 hover:bg-primary/10 hover:text-primary transition-colors"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:opacity-90 text-primary-foreground"
                      asChild
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        {project.demoType === "video" ? (
                          <>
                            <Video className="w-4 h-4" />
                            Video Demo
                          </>
                        ) : (
                          <>
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </>
                        )}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <ProjectDetailsModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/10 hover:text-primary px-8 py-4 rounded-full group transition-colors"
              asChild
            >
              <Link
                to="/projects"
                className="flex items-center gap-2"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;