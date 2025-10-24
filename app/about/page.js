const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
            <p className="mt-4 text-xl text-gray-600">
              This is the About page of our Navbar Project.
            </p>
            <div className="mt-10">
              <p className="text-lg text-gray-700">
                We are dedicated to creating responsive and user-friendly navigation experiences
                with Next.js and Tailwind CSS. Our navbar component includes mobile menu
                functionality and smooth transitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;