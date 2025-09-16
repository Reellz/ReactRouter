function About() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-blue-100 px-6">
      <div className="max-w-2xl text-center text-gray-800">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl leading-relaxed">
          We are the leading{" "}
          <span className="font-semibold text-blue-600">AI business brand</span>, 
          dedicated to building innovative solutions that shape the future of technology.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default About;
