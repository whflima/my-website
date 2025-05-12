import { useTranslation } from "react-i18next";

export default function EducationSection() {
  const { t } = useTranslation();
  return (
    <section id="education" className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="mb-10">
          <h1 className="font-medium text-gray-700 dark:text-white text-3xl md:text-4xl mb-5">
            {t("header.menu.items-education")}
          </h1>
          <p className="font-normal text-gray-500 dark:text-gray-400 text-xs md:text-base text-justify">
            {t("education.section-short_description")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 px-8 py-10 rounded-md">
            <div className="flex flex-col sm:flex-row justify-between font-medium text-gray-700 dark:text-white text-lg mb-4">
              <p>{t("education.section.title-advanced-diploma")}</p>
              <p className="text-gray-500 dark:text-gray-300">
                {t("education.section.date-advanced-diploma")}
              </p>
            </div>
            <p className="font-normal text-gray-500 dark:text-gray-400 text-md mb-4 text-justify">
              {t("education.section.description-advanced-diploma")}
            </p>
            <div className="relative">
              <h6 className="font-semibold text-gray-500 dark:text-gray-300 text-md relative z-10">
                {t("education.section.average_performance-advanced-diploma")}
              </h6>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 px-8 py-10 rounded-md">
            <div className="flex flex-col sm:flex-row justify-between font-medium text-gray-700 dark:text-white text-lg mb-4">
              <p>{t("education.section.title-bachelor")}</p>
              <p className="text-gray-500 dark:text-gray-300">
                {t("education.section.date-bachelor")}
              </p>
            </div>
            <p className="font-normal text-gray-500 dark:text-gray-400 text-md mb-4 text-justify">
              {t("education.section.description-bachelor")}
            </p>
            <div className="relative">
              <h6 className="font-semibold text-gray-500 dark:text-gray-300 text-md relative z-10">
                {t("education.section.average_performance-bachelor")}
              </h6>
            </div>
          </div>
          {/* <div className="bg-gray-50 dark:bg-gray-800 px-8 py-10 rounded-md">
            <div className="flex flex-col sm:flex-row justify-between font-medium text-gray-700 dark:text-white text-lg mb-4">
              <p>{t("education.section.title-technician")}</p>
              <p className="text-gray-500 dark:text-gray-300">
                {t("education.section.date-technician")}
              </p>
            </div>
            <p className="font-normal text-gray-500 dark:text-gray-400 text-md mb-4 text-justify">
              {t("education.section.description-technician")}
            </p>
            <div className="relative">
              <h6 className="font-semibold text-gray-500 dark:text-gray-300 text-md relative z-10">
                {t("education.section.average_performance-technician")}
              </h6>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
