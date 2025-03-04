import { useTranslation } from "react-i18next";

export default function CareerHistorySection() {
  const { t } = useTranslation();
  return (
    <section id="career" className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="mb-10">
          <h1 className="font-medium text-gray-700 dark:text-white text-3xl md:text-4xl mb-5">
            {t("career.section-title")}
          </h1>
          <p className="font-normal text-gray-500 dark:text-gray-400 text-xs md:text-base text-justify">
            {t("career.section-short_description")}
          </p>
        </div>
        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          <div className="flex md:contents flex-row-reverse">
            <div className="relative p-4 my-6 text-gray-800 bg-white dark:bg-gray-800 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 className="font-medium text-gray-700 dark:text-white text-lg lg:text-xl">
                {t("career.section.philips-job")}
              </h3>
              <p className="mt-2 leading-6 font-normal text-gray-500 dark:text-gray-400 text-md text-justify">
                {t("career.section.philips-description")}
              </p>
              <span className="absolute text-sm font-semibold text-gray-500 dark:text-gray-400 -top-5 left-2 whitespace-nowrap">
                {t("career.section.philips-duration")}
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
            <div className="relative p-4 my-6 text-gray-800 bg-white dark:bg-gray-800 rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 className="font-medium text-gray-700 dark:text-white text-lg lg:text-xl">
                {t("career.section.capgemini-job")}
              </h3>
              <p className="mt-2 leading-6 font-normal text-gray-500 dark:text-gray-400 text-md text-justify">
                {t("career.section.capgemini-description")}
              </p>
              <span className="absolute text-sm font-semibold text-gray-500 dark:text-gray-400 -top-5 left-2 whitespace-nowrap">
                {t("career.section.capgemini-duration")}
              </span>
            </div>
          </div>

          <div className="flex md:contents flex-row-reverse">
            <div className="relative p-4 my-6 text-gray-800 bg-white dark:bg-gray-800 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <h3 className="font-medium text-gray-700 dark:text-white text-lg lg:text-xl">
                {t("career.section.iti-job")}
              </h3>
              <p className="mt-2 leading-6 font-normal text-gray-500 dark:text-gray-400 text-md text-justify">
                {t("career.section.iti-description")}
              </p>
              <span className="absolute text-sm font-semibold text-gray-500 dark:text-gray-400 -top-5 left-2 whitespace-nowrap">
                {t("career.section.iti-duration")}
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
            <div className="relative p-4 my-6 text-gray-800 bg-white dark:bg-gray-800 rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 className="font-medium text-gray-700 dark:text-white text-lg lg:text-xl">
                {t("career.section.sarah-job")}
              </h3>
              <p className="mt-2 leading-6 font-normal text-gray-500 dark:text-gray-400 text-md text-justify">
                {t("career.section.sarah-description")}
              </p>
              <span className="absolute text-sm font-semibold text-gray-500 dark:text-gray-400 -top-5 left-2 whitespace-nowrap">
                {t("career.section.sarah-duration")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
