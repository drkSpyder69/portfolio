import { ExternalLink, Award } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { certificatesData } from "@/data/config";

const Certificates = () => {

    return (
        <section id="certificates" className="py-20 relative bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                            My <span className="gradient-text">Certificates</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Professional certifications and completed simulations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificatesData.map((cert, index) => (
                            <Dialog key={index}>
                                <div
                                    className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full"
                                >
                                    {/* Certificate Preview rendering */}
                                    <DialogTrigger asChild>
                                        <div className="relative aspect-[1.414] bg-transparent overflow-hidden flex items-center justify-center border-b border-border/50 group-hover:border-primary/50 transition-colors cursor-pointer">
                                            {cert.isPdf ? (
                                                // Render PDF directly using iframe for high quality rendering
                                                <div className="w-full h-full relative">
                                                    <iframe
                                                        src={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                                                        className="w-full h-full object-contain pointer-events-none"
                                                        title={cert.title}
                                                    />
                                                    {/* Overlay to intercept clicks on the iframe and trigger the link instead */}
                                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 block" aria-label={`View ${cert.title}`}></a>
                                                </div>
                                            ) : (
                                                <img
                                                    src={cert.image}
                                                    alt={cert.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            )}
                                        </div>
                                    </DialogTrigger>

                                    {/* Certificate Details */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Award className="w-5 h-5 text-primary" />
                                            <span className="text-sm font-medium text-accent">{cert.issuer}</span>
                                        </div>
                                        <DialogTrigger asChild>
                                            <button className="text-left w-full group/title">
                                                <h3 className="text-xl font-heading font-bold mb-8 group-hover/title:text-primary transition-colors">
                                                    {cert.title}
                                                </h3>
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                                            <DialogHeader>
                                                <DialogTitle className="text-2xl">{cert.title}</DialogTitle>
                                                <DialogDescription asChild>
                                                    <div className="flex items-center gap-2 mt-2 font-medium text-accent">
                                                        <Award className="w-4 h-4 text-primary" /> {cert.issuer}
                                                    </div>
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="mt-4">
                                                {cert.description && (
                                                    <div className="mb-6">
                                                        <h4 className="font-semibold text-sm mb-3 text-foreground">About the Program</h4>
                                                        <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2">
                                                            {cert.description.map((desc, i) => (
                                                                <li key={i}>{desc}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {cert.skills && (
                                                    <div>
                                                        <h4 className="font-semibold text-sm mb-3 text-foreground">Skills Learned</h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {cert.skills.map((skill, i) => (
                                                                <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                                                                    {skill}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </DialogContent>

                                        <div className="mt-auto pt-4 flex items-center justify-between text-sm text-muted-foreground border-t border-border/50">
                                            <span>{cert.date}</span>
                                            {cert.link && (
                                                <a
                                                    href={cert.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 font-medium"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    View Link <ExternalLink className="w-3 h-3" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Dialog>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
