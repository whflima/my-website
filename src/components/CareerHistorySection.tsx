export default function CareerHistorySection() {
  return (
    <section id="career" className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="mb-10">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Career history
          </h1>
          <p className="font-normal text-gray-500 text-xs md:text-base text-justify">
            With experience at Philips and Capgemini, I have built scalable
            backend solutions using Java, Spring, and AWS. My work spans
            healthcare and financial software, focusing on performance,
            security, and system optimization to drive innovation and
            efficiency.
          </p>
        </div>
        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          <div className="flex md:contents flex-row-reverse">
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 className="font-medium text-gray-700 text-lg lg:text-xl">
                Software Developer at Philips
              </h3>
              <p className="mt-2 leading-6 font-normal text-gray-500 text-md text-justify">
                At Philips, I developed healthcare software using Java,
                TypeScript, and Oswald, focusing on performance, security, and
                usability, while optimizing applications and collaborating on
                customer solutions.
              </p>
              <span className="absolute text-sm font-semibold text-gray-500 -top-5 left-2 whitespace-nowrap">
                July 2022 – August 2024
              </span>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-indigo-950 rounded-t-full"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-zinc-600 rounded-full top-1/2"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-indigo-950"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-zinc-600 rounded-full top-1/2"></div>
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 className="font-medium text-gray-700 text-lg lg:text-xl">
                Junior Software Developer at Capgemini
              </h3>
              <p className="mt-2 leading-6 font-normal text-gray-500 text-md text-justify">
                At Capgemini, I developed backend solutions for Banco Bradesco
                using Java, ensuring performance and scalability, while
                conducting testing, validation, and collaborating in an agile
                environment.
              </p>
              <span className="absolute text-sm font-semibold text-gray-500 -top-5 left-2 whitespace-nowrap">
                June 2021 – July 2022
              </span>
            </div>
          </div>

          <div className="flex md:contents flex-row-reverse">
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 className="font-medium text-gray-700 text-lg lg:text-xl">
                Software Developer Intern at National Institute of Information
                Technology of Brazil
              </h3>
              <p className="mt-2 leading-6 font-normal text-gray-500 text-md text-justify">
                At National Institute of Information Technology of Brazil, I
                assisted in developing the SGB² application for managing digital
                certificates, participated in agile processes, and supported the
                security and efficiency of digital transactions.
              </p>
              <span className="absolute text-sm font-semibold text-gray-500 -top-5 left-2 whitespace-nowrap">
                January 2021 – June 2021
              </span>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-indigo-950"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-zinc-600 rounded-full top-1/2"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-indigo-950 rounded-b-full"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-zinc-600 rounded-full top-1/2"></div>
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 className="font-medium text-gray-700 text-lg lg:text-xl">
                IT Support(Part-time) at Rede SARAH
              </h3>
              <p className="mt-2 leading-6 font-normal text-gray-500 text-md text-justify">
                At Sarah Hospital, I provided IT support, installing and
                configuring printers, systems, and software, troubleshooting
                infrastructure issues, and assisting in technology
                implementation.
              </p>
              <span className="absolute text-sm font-semibold text-gray-500 -top-5 left-2 whitespace-nowrap">
                December 2018 – January 2021
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
