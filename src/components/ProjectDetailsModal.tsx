import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, FolderOpen, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    sourceFiles: string;
    live: string;
    gradient: string;
    demoType?: "video";
    features?: string[];
    overview?: string;
    technicalInsights?: string[];
    metrics?: Record<string, string>;
    badge?: string;
}

interface ProjectDetailsModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectDetailsModal = ({
    project,
    isOpen,
    onClose,
}: ProjectDetailsModalProps) => {
    if (!project) return null;

    return (
        <Dialog open={!!project && isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-3xl w-full p-0 overflow-hidden bg-card/95 backdrop-blur-xl border-white/10">
                <ScrollArea className="max-h-[85vh]">
                    {/* Hero Image Section */}
                    <div className="relative h-64 w-full overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`} />
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                        <div className="absolute bottom-6 left-6 right-6">
                            {project.badge && (
                                <div className="mb-3">
                                    <span className="inline-flex items-center px-3 py-1 text-sm font-semibold bg-[#6a329f]/40 backdrop-blur-md text-[#f1c232] rounded-full border border-[#f1c232]/50 shadow-[0_0_15px_rgba(241,194,50,0.2)]">
                                        {project.badge}
                                    </span>
                                </div>
                            )}
                            <DialogTitle className="text-3xl font-heading font-bold text-white mb-2 drop-shadow-md">
                                {project.title}
                            </DialogTitle>
                        </div>
                    </div>

                    <div className="p-6 space-y-6">
                        <DialogDescription className="text-lg text-muted-foreground leading-relaxed">
                            {project.overview || project.description}
                        </DialogDescription>

                        {/* Features */}
                        {project.features && (
                            <div className="space-y-4">
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                    Key Features
                                </h4>
                                <ul className="grid sm:grid-cols-2 gap-3 text-sm text-foreground/80">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Technical Insights */}
                        {project.technicalInsights && (
                            <div className="space-y-4">
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                    Technical Insights
                                </h4>
                                <div className="grid gap-3">
                                    {project.technicalInsights.map((insight, index) => (
                                        <div
                                            key={index}
                                            className="p-3 rounded-lg bg-secondary/30 border border-secondary/50 text-sm text-foreground/90"
                                        >
                                            {insight}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Technologies */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="px-3 py-1 bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <DialogFooter className="flex-col sm:flex-row gap-3 pt-6 border-t border-border/50">

                            <Button
                                size="lg"
                                className="w-full sm:w-auto gap-2 bg-gradient-primary hover:opacity-90"
                                onClick={() => window.open(project.live, "_blank")}
                            >
                                {project.demoType === "video" ? (
                                    <>
                                        <Video className="w-4 h-4" />
                                        Watch Demo
                                    </>
                                ) : (
                                    <>
                                        <ExternalLink className="w-4 h-4" />
                                        Visit Live Site
                                    </>
                                )}
                            </Button>
                        </DialogFooter>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};

export default ProjectDetailsModal;
