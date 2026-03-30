import { useState, useEffect } from "react";
import { skillsData, techStack, currentlyLearning } from "@/data/config";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proficient in modern web technologies with a focus on clean, efficient solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills Progress Bars */}
            <div className="space-y-8">
              <h3 className="text-2xl font-heading font-semibold text-center mb-8">
                Technical Proficiency
              </h3>
              {skillsData.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies Grid */}
            <div className="space-y-8">
              <h3 className="text-2xl font-heading font-semibold text-center mb-8">
                Technologies I Use
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <div 
                    key={tech}
                    className="glass-card p-4 rounded-xl text-center hover:bg-card-glass/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="glass-card p-6 rounded-2xl mt-8">
                <h4 className="text-lg font-heading font-semibold mb-3 text-accent">
                  Currently Learning
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentlyLearning.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;