import { useTranslation } from "react-i18next";

export default function CertificationSection() {
  const { t } = useTranslation();
  return (
    <section id="certifications" className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="mb-10">
          <h1 className="font-medium text-gray-700 dark:text-white text-3xl md:text-4xl mb-5">
            {t("header.menu.items-certifications")}
          </h1>
          <p className="font-normal text-gray-500 dark:text-gray-400 text-xs md:text-base text-justify">
            {t("certification.section-short_description")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 px-8 py-10 rounded-md">
            <div className="flex flex-col sm:flex-row justify-between font-medium text-gray-700 dark:text-white text-lg mb-4">
              <p>Developer - Associate</p>
              <p className="text-gray-500 dark:text-gray-400 ">
                {t("communs.status-in_progress")}
              </p>
            </div>
            <div className="relative">
              <h6 className="font-semibold text-gray-500 dark:text-gray-400 text-md relative z-10">
                Amazon Web Services
              </h6>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 px-8 py-10 rounded-md">
            <div className="flex flex-col sm:flex-row justify-between font-medium text-gray-700 dark:text-white text-lg mb-4">
              <p>Solutions Architect - Ass...</p>
              <p className="text-gray-500 dark:text-gray-400">2023 - 2026</p>
            </div>
            <div className="relative">
              <h6 className="font-semibold text-gray-500 dark:text-gray-400 text-md relative z-10">
                Amazon Web Services
              </h6>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 px-8 py-10 rounded-md">
            <div className="flex flex-col sm:flex-row justify-between font-medium text-gray-700 dark:text-white text-lg mb-4">
              <p>Cloud Practitioner</p>
              <p className="text-gray-500 dark:text-gray-400">2021 - 2024</p>
            </div>
            <div className="relative">
              <h6 className="font-semibold text-gray-500 dark:text-gray-400 text-md relative z-10">
                Amazon Web Services
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
