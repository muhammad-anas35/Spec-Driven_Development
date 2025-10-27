const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="mt-4 text-xl text-gray-600">
              This is the Services page of our Navbar Project.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Web Development</h3>
                <p className="mt-2 text-gray-600">
                  Building responsive and scalable web applications with modern technologies.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">UI/UX Design</h3>
                <p className="mt-2 text-gray-600">
                  Creating intuitive and engaging user interfaces with focus on experience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Consulting</h3>
                <p className="mt-2 text-gray-600">
                  Providing expert advice on web technologies and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;