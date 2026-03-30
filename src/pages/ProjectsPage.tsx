import { ExternalLink, FolderOpen, Video, ArrowLeft, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";
import { useState } from "react";
import ProjectDetailsModal from "@/components/ProjectDetailsModal";

const ProjectsPage = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <>
            <Helmet>
                <title>Projects - Aqib Jawwad Nahin</title>
                <link rel="canonical" href="https://aqibjawwad.me/projects" />
                <meta property="og:url" content="https://aqibjawwad.me/projects" />
                <meta property="og:title" content="Projects - Aqib Jawwad Nahin" />
            </Helmet>
            <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                            <div>
                                <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Home
                                </Link>
                                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                                    All <span className="gradient-text">Projects</span>
                                </h1>
                                <p className="text-xl text-muted-foreground max-w-2xl">
                                    Explore my complete portfolio of work, side projects, and experiments.
                                </p>
                            </div>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
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
                                        <p className="text-muted-foreground leading-relaxed mb-6 flex-1 text-sm">
                                            {project.description}
                                        </p>

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
                                                            Video
                                                        </>
                                                    ) : (
                                                        <>
                                                            <ExternalLink className="w-4 h-4" />
                                                            Live
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectsPage;
