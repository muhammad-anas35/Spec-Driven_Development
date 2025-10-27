'use client';

import { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and accomplishments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card relative rounded-2xl overflow-hidden border border-white/20">
              <div className={`h-48 bg-gradient-to-r ${index % 3 === 0 ? 'from-teal-400 to-blue-500' : index % 3 === 1 ? 'from-purple-400 to-pink-500' : 'from-yellow-400 to-red-500'} flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold">{`Project ${index + 1}`}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;