import { Image } from "@heroui/react";

export default function HomeSection() {
  return (
    <section id="home" className="py-10 md:py-16">
      <div className="mx-auto w-full max-w-max lg:px-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                className="rounded-full"
                width={262}
                height={262}
                src="https://lh3.googleusercontent.com/a/ACg8ocLu1XsyfzEK6FERDMUn5aC7VXH_glo6L8LOxdSU7knV2ErrKxkV3w=s360-c-no"
                alt="Personal photo"
              />
            </div>
            <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
              Welisson Lima
            </h6>
            <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
              Software developer
            </h1>
            <p className="font-normal text-gray-600 text-md md:text-xl mb-8">
              Software developer with experience in Java and healthcare
              solutions, and AWS certifications.
            </p>
            <button
              onClick={() => {
                window.open("https://www.google.com/");
              }}
              className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
            >
              Get my CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
