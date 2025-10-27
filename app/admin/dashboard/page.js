
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AdminDashboard = () => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      router.push('/admin/login');
    } else {
      fetch('/api/content')
        .then((res) => res.json())
        .then((data) => {
          setContent(data);
          setIsLoading(false);
        });
    }
  }, [router]);

  const handleInputChange = (e, section, index, field) => {
    const newContent = { ...content };
    if (index !== null) {
      newContent[section][index][field] = e.target.value;
    } else {
      newContent[section][field] = e.target.value;
    }
    setContent(newContent);
  };

  const handleSave = () => {
    fetch('/api/content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
      });
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <button
          onClick={handleSave}
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 mb-6"
        >
          Save Changes
        </button>

        <div className="space-y-8">
          {/* Home Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Home Section</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={content.home.name}
                  onChange={(e) => handleInputChange(e, 'home', null, 'name')}
                />
              </div>
              <div>
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={content.home.title}
                  onChange={(e) => handleInputChange(e, 'home', null, 'title')}
                />
              </div>
              <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg"
                  value={content.home.description}
                  onChange={(e) => handleInputChange(e, 'home', null, 'description')}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Skills Section</h2>
            {content.skills.map((skill, index) => (
              <div key={index} className="space-y-4 p-4 border rounded-lg mb-4">
                <div>
                  <label className="block text-gray-700">Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={skill.title}
                    onChange={(e) => handleInputChange(e, 'skills', index, 'title')}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Description</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={skill.description}
                    onChange={(e) => handleInputChange(e, 'skills', index, 'description')}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Projects Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Projects Section</h2>
            {content.projects.map((project, index) => (
              <div key={index} className="space-y-4 p-4 border rounded-lg mb-4">
                <div>
                  <label className="block text-gray-700">Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={project.title}
                    onChange={(e) => handleInputChange(e, 'projects', index, 'title')}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Description</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={project.description}
                    onChange={(e) => handleInputChange(e, 'projects', index, 'description')}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Tags</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={project.tags.join(', ')}
                    onChange={(e) => {
                      const newContent = { ...content };
                      newContent.projects[index].tags = e.target.value.split(',').map(tag => tag.trim());
                      setContent(newContent);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Certificates Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Certificates Section</h2>
            {content.certificates.map((certificate, index) => (
              <div key={index} className="space-y-4 p-4 border rounded-lg mb-4">
                <div>
                  <label className="block text-gray-700">Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={certificate.title}
                    onChange={(e) => handleInputChange(e, 'certificates', index, 'title')}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Issuer</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={certificate.issuer}
                    onChange={(e) => handleInputChange(e, 'certificates', index, 'issuer')}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Date</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={certificate.date}
                    onChange={(e) => handleInputChange(e, 'certificates', index, 'date')}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Credential ID</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={certificate.credentialId}
                    onChange={(e) => handleInputChange(e, 'certificates', index, 'credentialId')}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Section</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={content.contact.email}
                  onChange={(e) => handleInputChange(e, 'contact', null, 'email')}
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={content.contact.phone}
                  onChange={(e) => handleInputChange(e, 'contact', null, 'phone')}
                />
              </div>
              <div>
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={content.contact.location}
                  onChange={(e) => handleInputChange(e, 'contact', null, 'location')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
