import Skills from "@/components/Skills";
import { currentlyLearning } from "@/data/config";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Skills />

      {/* Additional Skills Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Currently Learning */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-heading font-semibold mb-6">
                  Currently <span className="gradient-text">Learning</span>
                </h3>
                <div className="space-y-4">
                  {currentlyLearning.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-card-glass/30 transition-colors"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Goals */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-heading font-semibold mb-6">
                  Learning <span className="gradient-text">Goals</span>
                </h3>
                <div className="space-y-4">
                  {["Kotlin & Jetpack Compose", "Firebase & Cloud Messaging", "REST API Integration", "MVVM Architecture", "Android Performance Optimization"].map((goal, index) => (
                    <div
                      key={goal}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-card-glass/30 transition-colors"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-gradient-secondary rounded-full"></div>
                      <span className="text-foreground">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Philosophy */}
            <div className="glass-card p-8 rounded-2xl mt-8">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-center">
                Technical <span className="gradient-text">Philosophy</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-primary">Clean Code</h4>
                  <p className="text-sm text-muted-foreground">
                    Writing maintainable, readable code following OOP and SOLID principles
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-secondary">Performance</h4>
                  <p className="text-sm text-muted-foreground">
                    Optimizing Android apps for smooth 60fps experiences and low memory usage
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-accent">Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    Embracing modern Android patterns and adapting to new frameworks quickly
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

export default SkillsPage;