import { personalInfo, aboutHighlights, aboutJourney } from "@/data/config";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about technology and dedicated to creating meaningful digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">
                  My Journey
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {aboutJourney.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Personal Info */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-secondary">
                  Get In Touch
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="text-accent font-medium">Location:</span>
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-accent font-medium">Email:</span>
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-accent font-medium">Phone:</span>
                    <a href={`tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`} className="hover:text-primary transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Highlights */}
            <div className="space-y-6">
              {aboutHighlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="glass-card p-6 rounded-2xl hover:bg-card-glass/50 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-primary">
                      <highlight.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;