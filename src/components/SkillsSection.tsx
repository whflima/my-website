import { Progress } from "@heroui/react";
import { useTranslation } from "react-i18next";

interface Skills {
  skill: string;
  value: number;
}

export default function SkillsSection() {
  const { t } = useTranslation();
  const myskills: Skills[] = [
    { skill: "Git", value: 80 },
    { skill: "Java", value: 80 },
    { skill: "GitHub", value: 75 },
    { skill: "HTML", value: 65 },
    { skill: "TypeScript", value: 60 },
    { skill: "JavaScript", value: 60 },
    { skill: "Spring Boot", value: 60 },
    { skill: "PostgreSQL", value: 50 },
    { skill: "Oracle SQL", value: 55 },
    { skill: "CSS", value: 40 },
    { skill: "MongoDB", value: 30 },
    { skill: "AWS", value: 30 },
  ];

  return (
    <section id="skills" className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="mb-10">
          <h1 className="font-medium text-gray-700 dark:text-white text-3xl md:text-4xl mb-5">
            {t("skills.section-title")}
          </h1>
          <p className="font-normal text-gray-500 dark:text-gray-400 text-xs md:text-base text-justify">
            {t("skills.section-short_description")}
          </p>
        </div>

        <div className="flex flex-wrap justify-between">
          {myskills.map(function (data) {
            return (
              <div
                key={data.skill}
                className="w-full sm:w-1/2 py-4 pr-0 sm:pr-4"
              >
                <Progress
                  aria-label={data.skill}
                  label={data.skill}
                  className="max-w-md"
                  color="success"
                  showValueLabel={true}
                  size="md"
                  value={data.value}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
