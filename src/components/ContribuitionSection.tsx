import { GitMergeIcon, GitPullRequestIcon } from "@primer/octicons-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ContribuitionSection() {
  const { t } = useTranslation();

  return (
    <section id="contribuition" className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="mb-10">
          <h1 className="font-medium text-gray-700 dark:text-white text-3xl md:text-4xl mb-5">
            {t("header.menu.items-contribuitions")}
          </h1>
          <p className="font-normal text-gray-500 dark:text-gray-400 text-xs md:text-base text-justify">
            {t("contribuitions.section-short_description")}
          </p>
        </div>
        <div className="grid grid-cols-1  gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 px-8 py-10 rounded-md">
            <div className="flex flex-col sm:flex-row justify-between font-medium text-gray-700 dark:text-white text-lg mb-4">
              <p>Bitchat Android</p>
              {/* <p className="text-gray-500 dark:text-gray-400">2026 - 2029</p> */}
            </div>
            <div className="flex flex-col items-center sm:flex-row gap-2">
              <GitMergeIcon size={16} fill="#8250DF" />
              <Link
                href={
                  "https://github.com/permissionlesstech/bitchat-android/pull/201"
                }
                target="_blank"
                className="font-semibold text-gray-500 dark:text-gray-400 text-md relative z-10"
              >
                Prevent sender color of past messages
              </Link>
            </div>
            <div className="flex flex-col items-center sm:flex-row gap-2">
              <GitPullRequestIcon size={16} fill="#3fb950" />
              <Link
                href={
                  "https://github.com/permissionlesstech/bitchat-android/pull/235"
                }
                target="_blank"
                className="font-semibold text-gray-500 dark:text-gray-400 text-md relative z-10"
              >
                Fix Message Delivery to Joined Channels from Public and Private
                Chats
              </Link>
            </div>
            <div className="flex flex-col items-center sm:flex-row gap-2">
              <GitPullRequestIcon size={16} fill="#3fb950" />
              <Link
                href={
                  "https://github.com/permissionlesstech/bitchat-android/pull/207"
                }
                target="_blank"
                className="font-semibold text-gray-500 dark:text-gray-400 text-md relative z-10"
              >
                Generate a New Nickname When NicknameEditor Loses Focus with an Empty Value
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
