import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

const Landing = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://aqibjawwad.me/" />
        <meta property="og:url" content="https://aqibjawwad.me/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Hero />

        <main>
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Landing;
