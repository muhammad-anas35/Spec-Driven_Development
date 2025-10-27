'use client';

import { useState, useEffect } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        setSkills(data.skills);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 futura-font">Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my professional skills and expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="card relative p-6 border border-white/20 overflow-hidden">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 futura-font">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;