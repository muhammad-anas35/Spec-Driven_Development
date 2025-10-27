'use client';

import { useState, useEffect } from 'react';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/content')
      .then((res) => res.json())
      .then((data) => {
        setCertificates(data.certificates);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 futura-font">Certificates</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional certifications and credentials
          </p>
        </div>
        
        <div className="space-y-8">
          {certificates.map((certificate, index) => (
            <div key={index} className="card relative p-6 border border-white/20 overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 futura-font">{certificate.title}</h3>
                  <p className="text-gray-600 mt-1">{certificate.issuer}</p>
                  <p className="text-gray-500 text-sm mt-2">Issued: {certificate.date} | Credential ID: {certificate.credentialId}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;