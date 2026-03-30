import Projects from "@/components/Projects";
import { Badge } from "@/components/ui/badge";

const ProjectsPage = () => {
  const projectCategories = [
    {
      name: "Web Applications",
      count: 8,
      description: "Full-stack web applications with modern frameworks"
    },
    {
      name: "Mobile Apps", 
      count: 3,
      description: "Cross-platform mobile applications"
    },
    {
      name: "APIs & Backend",
      count: 5,
      description: "RESTful APIs and backend services"
    },
    {
      name: "UI/UX Design",
      count: 6,
      description: "User interface and experience design projects"
    }
  ];

  const upcomingProjects = [
    {
      name: "AI-Powered Task Manager",
      description: "Task management app with AI-driven priority suggestions",
      status: "Planning",
      technologies: ["React", "Python", "TensorFlow", "FastAPI"]
    },
    {
      name: "Real-time Collaboration Tool",
      description: "Team collaboration platform with live editing features",
      status: "In Development",
      technologies: ["Next.js", "Socket.io", "PostgreSQL", "Redis"]
    },
    {
      name: "E-learning Platform",
      description: "Interactive learning platform with video streaming",
      status: "Design Phase",
      technologies: ["React", "Node.js", "AWS", "MongoDB"]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <Projects />
      
      {/* Project Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-heading font-bold mb-4">
                Project <span className="gradient-text">Categories</span>
              </h3>
              <p className="text-muted-foreground">
                Explore different types of projects I've worked on
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {projectCategories.map((category, index) => (
                <div 
                  key={category.name}
                  className="glass-card p-6 rounded-xl text-center hover:bg-card-glass/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {category.count}+
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {category.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Upcoming Projects */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-center">
                Upcoming <span className="gradient-text">Projects</span>
              </h3>
              
              <div className="space-y-6">
                {upcomingProjects.map((project, index) => (
                  <div 
                    key={project.name}
                    className="glass-card p-6 rounded-xl hover:bg-card-glass/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {project.name}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {project.description}
                        </p>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`w-fit ${
                          project.status === 'Planning' ? 'border-accent text-accent' :
                          project.status === 'In Development' ? 'border-primary text-primary' :
                          'border-secondary text-secondary'
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs bg-muted/30 text-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;