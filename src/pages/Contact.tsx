import Contact from "@/components/Contact";
import { Calendar, Clock, Globe } from "lucide-react";

const ContactPage = () => {
  const availability = [
    {
      icon: Clock,
      title: "Response Time",
      description: "I typically respond within 24 hours",
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: "Availability",
      description: "Available for projects and consultations",
      color: "text-secondary"
    },
    {
      icon: Globe,
      title: "Time Zone",
      description: "Bangladesh Standard Time (BST, UTC+6)",
      color: "text-accent"
    }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Full-stack web applications with modern technologies",
      features: ["React/Next.js Frontend", "Node.js Backend", "Database Design", "API Development"]
    },
    {
      title: "UI/UX Design",
      description: "User-centered design for optimal user experience",
      features: ["Wireframing & Prototyping", "Responsive Design", "User Research", "Design Systems"]
    },
    {
      title: "Consultation",
      description: "Technical consultation and project planning",
      features: ["Architecture Planning", "Technology Selection", "Code Review", "Performance Optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <Contact />

      {/* Additional Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">

            {/* Availability Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {availability.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card p-6 rounded-xl text-center hover:bg-card-glass/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-primary mb-4`}>
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Services */}
            <div className="glass-card p-8 rounded-2xl mb-12">
              <h3 className="text-3xl font-heading font-bold text-center mb-8">
                Services I <span className="gradient-text">Offer</span>
              </h3>

              <div className="grid lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="glass-card p-6 rounded-xl hover:bg-card-glass/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-semibold text-center mb-8">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h3>

              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2">
                    What's your typical project timeline?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Project timelines vary based on complexity. Simple websites take 1-2 weeks,
                    while full-stack applications may take 4-8 weeks. I provide detailed
                    timelines during project planning.
                  </p>
                </div>

                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2">
                    Do you work with international clients?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Yes! I work with clients globally and am comfortable with remote
                    collaboration. I'm flexible with time zones and communication preferences.
                  </p>
                </div>

                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2">
                    What technologies do you specialize in?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    I specialize in modern web technologies including React, Node.js,
                    JavaScript/TypeScript, and various databases. I'm always learning
                    new tools to provide the best solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;