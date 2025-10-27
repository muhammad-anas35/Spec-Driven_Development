import Skills from './skills/page';
import Projects from './projects/page';
import Certificates from './certificates/page';
import Contact from './contact/page';
import HomeSection from '../components/HomeSection';
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Home Section */}
      <HomeSection />

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="scroll-mt-20">
        <Certificates />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </div>
  );
}