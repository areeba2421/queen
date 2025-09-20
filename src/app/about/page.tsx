export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      {/* Image */}
      <img
        src="/nic.jpg"
        alt="About"
        className="mx-auto rounded-1x shadow-md w-80 mb-6"
      />

      {/* Introduction */}
      <p className="text-lg text-gray-700 mb-6">
        We are a passionate team dedicated to building modern and user-friendly web applications.
        Our goal is to provide simple yet powerful solutions for businesses and individuals.
      </p>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-6 text-left">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">🎯 Our Mission</h2>
          <p>
            To deliver high-quality digital solutions that make life easier and businesses more efficient.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">🚀 Our Vision</h2>
          <p>
            To be a global leader in innovative web technologies and empower clients with future-ready tools.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/team1.jpg" alt="Team Member" className="rounded-full w-24 h-24 mx-auto mb-3" />
            <h3 className="font-semibold">Areeba Yaqoob</h3>
            <p className="text-gray-600 text-sm">Frontend Developer</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/team2.jpg" alt="Team Member" className="rounded-full w-24 h-24 mx-auto mb-3" />
            <h3 className="font-semibold">zirwa</h3>
            <p className="text-gray-600 text-sm">Backend Developer</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img src="/team3.jpg" alt="Team Member" className="rounded-full w-24 h-24 mx-auto mb-3" />
            <h3 className="font-semibold">khadija</h3>
            <p className="text-gray-600 text-sm">UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
