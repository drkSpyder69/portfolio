import { Briefcase, GraduationCap } from "lucide-react";
import { educationData, experienceData } from "@/data/config";

const Background = () => {
    return (
        <section id="background" className="py-20 relative bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                            My <span className="gradient-text">Background</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            My educational journey and professional experience
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        
                        {/* Education Column */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-gradient-primary rounded-xl">
                                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading">Education</h3>
                            </div>

                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                                {educationData.map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125">
                                            <div className="w-2 h-2 bg-background rounded-full"></div>
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-bold text-lg text-foreground">{item.degree}</h4>
                                                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{item.year}</span>
                                            </div>
                                            <div className="text-accent font-medium text-sm mb-2">{item.institution}</div>
                                            <div className="text-muted-foreground text-sm flex justify-between">
                                                <span>{item.department}</span>
                                                {item.gpa && <span className="font-semibold">{item.gpa}</span>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Experience Column */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-gradient-accent rounded-xl">
                                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading">Experience</h3>
                            </div>

                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                                {experienceData.length > 0 ? (
                                    experienceData.map((item, index) => (
                                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125">
                                                <div className="w-2 h-2 bg-background rounded-full"></div>
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="font-bold text-lg text-foreground">{item.role}</h4>
                                                    {item.duration && <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">{item.duration}</span>}
                                                </div>
                                                <div className="text-primary font-medium text-sm mb-2">{item.company}</div>
                                                <div className="text-muted-foreground text-sm">{item.location}</div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-muted-foreground italic pl-12 md:pl-0 md:text-center mt-8">
                                        Eager to gain professional experience and bring my skills to dynamic projects.
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Background;
