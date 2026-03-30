import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Background from "@/components/Background";
import Contact from "@/components/Contact";

const Landing = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://sadmansakib.me/" />
        <meta property="og:url" content="https://sadmansakib.me/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Hero />

        <main>
          <About />
          <Skills />
          <Projects />
          <Background />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Landing;
