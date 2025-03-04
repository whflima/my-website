import { useTranslation } from "react-i18next";

export default function ProjectsSection() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-10 lg:mb-0 pr-4">
            <h1 className="font-medium text-gray-700 dark:text-white text-3xl md:text-4xl mb-5">
              {t("header.menu.items-projects")}
            </h1>
            <p className="font-normal text-gray-500 dark:text-gray-400 text-xs md:text-base text-justify">
              {t("projects.section-short_description")}
            </p>
          </div>
          <div className="space-y-24">
            <div className="flex space-x-6">
              <h1 className="font-normal text-gray-700 dark:text-gray-200 text-3xl md:text-4xl">
                01
              </h1>
              <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
              <div>
                <h1 className="font-normal text-gray-700 dark:text-gray-200 text-3xl md:text-4xl mb-5">
                  {t("projects.section.title-weather_project")}
                </h1>
                <p className="font-normal text-gray-500 dark:text-gray-400 text-sm md:text-base text-justify">
                  {t("projects.section.description-weather_project")}
                </p>
              </div>
            </div>
            <div className="flex space-x-6">
              <h1 className="font-normal text-gray-700 dark:text-gray-200 text-3xl md:text-4xl">
                02
              </h1>
              <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
              <div>
                <h1 className="font-normal text-gray-700 dark:text-gray-200 text-3xl md:text-4xl mb-5">
                  {t("projects.section.title-contacts_project")}
                </h1>
                <p className="font-normal text-gray-500 dark:text-gray-400 text-sm md:text-base text-justify">
                  {t("projects.section.description-contacts_project")}
                </p>
              </div>
            </div>
            <div className="flex space-x-6">
              <h1 className="font-normal text-gray-700 dark:text-gray-200 text-3xl md:text-4xl">
                03
              </h1>
              <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
              <div>
                <h1 className="font-normal text-gray-700 dark:text-gray-200 text-3xl md:text-4xl mb-5">
                  {t("projects.section.title-website_project")}
                </h1>
                <p className="font-norm al text-gray-500 dark:text-gray-400 text-sm md:text-base text-justify">
                  {t("projects.section.description-website_project")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
