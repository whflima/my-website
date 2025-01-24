export default function ProjectsSection() {
  return (
    <section id="projects" className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-10 lg:mb-0 pr-4">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
              Projects
            </h1>
            <p className="font-normal text-gray-500 text-xs md:text-base text-justify">
              A collection of projects that demonstrate my skills in solving
              problems and creating innovative solutions.
            </p>
          </div>
          <div className="space-y-24">
            <div className="flex space-x-6">
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                01
              </h1>
              <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
              <div>
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                  Weather App
                </h1>
                <p className="font-normal text-gray-500 text-sm md:text-base text-justify">
                  A React TypeScript app that retrieves and displays weather
                  data from the OpenWeatherMap API, allowing users to search for
                  current weather information, including temperature, humidity,
                  wind speed, and conditions in a user-friendly interface.
                </p>
              </div>
            </div>
            <div className="flex space-x-6">
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                02
              </h1>
              <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
              <div>
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                  Contacts application
                </h1>
                <p className="font-normal text-gray-500 text-sm md:text-base text-justify">
                  A contacts application that enables users to easily browse and
                  manage their contact list across multiple devices. This app
                  was developed as part of a technical test for a Software
                  Developer position at Resonate.
                </p>
              </div>
            </div>
            <div className="flex space-x-6">
              <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                03
              </h1>
              <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
              <div>
                <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                  Personal website
                </h1>
                <p className="font-normal text-gray-500 text-sm md:text-base text-justify">
                  This is my personal website, a place where you can learn more
                  about my technical expertise, discover my projects, and follow
                  my journey in software development, innovation, and
                  problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
