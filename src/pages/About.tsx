import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <About />
      
      {/* Additional About Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-center">
                My <span className="gradient-text">Journey</span>
              </h3>
              
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="glass-card p-6 rounded-xl">
                    <h4 className="text-lg font-semibold mb-3 text-primary">Education</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p className="font-medium">Bachelor of Science</p>
                      <p>Computer Science and Engineering</p>
                      <p className="text-sm">Northern University of Business and Technology Khulna</p>
                      <p className="text-sm text-accent">2022 - 2026</p>
                    </div>
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl">
                    <h4 className="text-lg font-semibold mb-3 text-secondary">Interests</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <p>• Full Stack Development</p>
                      <p>• Database Design</p>
                      <p>• System Architecture</p>
                      <p>• Business Strategy</p>
                      <p>• Creative Problem Solving</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3 text-accent">Professional Philosophy</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in the power of clean, efficient code and user-centered design. 
                    My approach combines technical expertise with business understanding to create 
                    solutions that not only work well but also deliver real value. I'm passionate 
                    about continuous learning and staying up-to-date with the latest technologies 
                    and best practices in software development.
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

export default AboutPage;