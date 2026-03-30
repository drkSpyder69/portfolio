import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { personalInfo } from "@/data/config";

const navItems = [
  { name: "Home", href: "#top" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Background", href: "#background" },
  { name: "Contact", href: "#contact" }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      if (isHome) {
        const sections = navItems.map(item => item.href.substring(1));

        // Find the current section
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Check if section is visible in viewport (adjust threshold as needed)
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const getHref = (href: string) => {
    if (isHome) return href;
    return `/${href}`;
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "glass-card backdrop-blur-xl border-b border-border/50"
        : "bg-transparent"
        }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href={isHome ? "#top" : "/"}
              className="text-2xl font-heading font-bold gradient-text hover:scale-105 transition-transform"
            >
              {personalInfo.logoText}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={getHref(item.href)}
                  className={`transition-colors duration-300 font-medium ${isHome && activeSection === item.href.substring(1) ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={getHref(item.href)}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-heading font-medium transition-colors duration-300 ${isHome && activeSection === item.href.substring(1) ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;