'use client';

const HomeSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section bg-gradient-to-br from-blue-50 to-teal-50 flex items-center flex-grow">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 futura-font gradient-text">
          Anas
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 futura-font">
          Full Stack Developer & UI/UX Designer
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Crafting exceptional digital experiences with cutting-edge technologies and innovative design solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => scrollToSection('skills')}
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg"
          >
            View My Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="glass hover:bg-white/50 text-gray-800 font-medium py-3 px-8 rounded-full transition duration-300 backdrop-blur-sm border border-white/20 shadow-lg"
          >
            View My Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;