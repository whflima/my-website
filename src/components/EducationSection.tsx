export default function EducationSection() {
  return (
    <section id="education" className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="mb-10">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Education
          </h1>
          <p className="font-normal text-gray-500 text-xs md:text-base">
            I hold a strong educational background that blends theory and
            practical skills, providing a solid foundation for tackling
            real-world challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <div className="flex flex-col sm:flex-row justify-between font-medium text-gray-700 text-lg mb-4">
              <p>Bachelor of Computer Science</p>
              <p className="text-gray-500">2019 - 2023</p>
            </div>
            <p className="font-normal text-gray-500 text-md mb-4">
              A degree focused on programming, algorithms, data structures, and
              system design. Developed strong problem-solving skills and
              hands-on experience with software development and computer
              systems.
            </p>
            <div className="relative">
              <h6 className="font-semibold text-gray-500 text-md relative z-10">
                Average Performance: 8.21/10.0
              </h6>
            </div>
          </div>
          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <div className="flex flex-col sm:flex-row justify-between font-medium text-gray-700 text-lg mb-4">
              <p>IT Technician Course</p>
              <p className="text-gray-500">2016 - Incomplete</p>
            </div>
            <p className="font-normal text-gray-500 text-md mb-4">
              A course focused on hardware troubleshooting, network setup, and
              system maintenance. Gained hands-on experience in diagnosing
              technical issues and providing IT support across different
              environments.
            </p>
            <div className="relative">
              <h6 className="font-semibold text-gray-500 text-md relative z-10">
                Average Performance: -
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
