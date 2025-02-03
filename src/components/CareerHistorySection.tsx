export default function CareerHistorySection() {
  return (
    <section id="career" className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="mb-10">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Career history
          </h1>
          <p className="font-normal text-gray-500 text-xs md:text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quam sapiente quas dolorem aspernatur? Dolorem nemo, natus eveniet
            officiis soluta est amet fugiat commodi quam ut blanditiis maiores
            maxime laborum.
          </p>
        </div>
        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          <div className="flex md:contents flex-row-reverse">
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 className="font-medium text-gray-700 text-lg lg:text-xl">
                Software Developer at Philips
              </h3>
              <p className="mt-2 leading-6 font-normal text-gray-500 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                quaerat. Quo maxime labore, consectetur deleniti hic inventore
                in nulla, magnam officiis iste voluptatum illum esse? Culpa odit
                voluptatibus qui officia.
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
              <p className="mt-2 leading-6 font-normal text-gray-500 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                iure minus. Accusantium doloremque debitis architecto sint quo
                obcaecati, sunt pariatur numquam. Voluptates, nobis asperiores?
                Repudiandae eius voluptas sunt architecto aliquam.
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
              <p className="mt-2 leading-6 font-normal text-gray-500 text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                maiores explicabo non ut sapiente debitis assumenda, est tempora
                nemo ex labore doloribus voluptatum distinctio facere vitae quam
                quas dolorem tenetur!
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
              <p className="mt-2 leading-6 font-normal text-gray-500 text-md">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis quibusdam, consequuntur odit quod magni quam
                eveniet quo excepturi ea dignissimos nobis enim obcaecati
                numquam cumque? Impedit et consequatur laboriosam ut!
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
