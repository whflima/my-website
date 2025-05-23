import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
} from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { IMyProviderContext } from "@/@types/provider";
import { MyContext } from "./MyProvider";

export default function LanguageSwitcher() {
  const { t } = useTranslation();
  const { changeLanguage } = useContext(MyContext) as IMyProviderContext;

  const languageOptions = [
    {
      key: "en",
      label: t("language.switcher.items-english"),
      flag: "./australia-flag.svg",
      onClick: () => changeLanguage("en"),
    },
    {
      key: "es",
      label: t("language.switcher.items-spanish"),
      flag: "./spain-flag.svg",
      onClick: () => changeLanguage("es"),
    },
    {
      key: "pt-br",
      label: t("language.switcher.items-portuguese"),
      flag: "./brazil-flag.svg",
      onClick: () => changeLanguage("pt-br"),
    },
    {
      key: "jp",
      label: t("language.switcher.items-japanese"),
      flag: "./japan-flag.svg",
      onClick: () => changeLanguage("jp"),
    },
    {
      key: "fr",
      label: t("language.switcher.items-french"),
      flag: "./france-flag.svg",
      onClick: () => changeLanguage("fr"),
    },
  ];

  const flagIcon = (flag: string) => {
    return (
      <button>
        <Image
          className="rounded-full opacity-100"
          width={30}
          height={30}
          src={flag}
          alt="Flag"
        />
      </button>
    );
  };

  return (
    <Dropdown size="sm">
      <DropdownTrigger>{flagIcon(t("language.switcher.flag"))}</DropdownTrigger>
      <DropdownMenu>
        {languageOptions.map((item, index) => (
          <DropdownItem
            key={index}
            onClick={item.onClick}
            startContent={flagIcon(item.flag)}
          >
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
