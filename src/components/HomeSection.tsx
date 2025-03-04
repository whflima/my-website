import { Image } from "@heroui/react";
import { useTranslation } from "react-i18next";

export default function HomeSection() {
  const { t } = useTranslation();

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
                src="./photo.jpg"
                alt={t("home.section.image.alt-personal.photo")}
              />
            </div>
            <h6 className="font-medium text-gray-600 dark:text-gray-400 text-lg md:text-2xl uppercase mb-8">
              Welisson Lima
            </h6>
            <h1 className="font-normal text-gray-900 dark:text-white text-4xl md:text-7xl leading-none mb-8">
              {t("home.section.profession")}
            </h1>
            <p className="font-normal text-gray-600 dark:text-gray-400 text-md md:text-xl mb-8">
              {t("home.section.profession-short_description")}
            </p>
            <button
              onClick={() => {
                window.open(
                  "https://my-career-files.s3.sa-east-1.amazonaws.com/LIMA_WELISSON_CV.pdf"
                );
              }}
              className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
            >
              {t("home.section.button-get_cv")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
