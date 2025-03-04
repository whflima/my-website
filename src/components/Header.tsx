import React from "react";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "header.menu.items-home",
      sectionHref: "#home",
    },
    {
      title: "header.menu.items-skills",
      sectionHref: "#skills",
    },
    {
      title: "header.menu.items-projects",
      sectionHref: "#projects",
    },
    {
      title: "header.menu.items-education",
      sectionHref: "#education",
    },
    {
      title: "header.menu.items-certifications",
      sectionHref: "#certifications",
    },
    {
      title: "header.menu.items-career",
      sectionHref: "#career",
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          className="sm:hidden"
          aria-label={isMenuOpen ? t('navbar.menu.toggle.aria.label-close') : t('navbar.menu.toggle.aria.label-open')}
        ></NavbarMenuToggle>
        <NavbarBrand>
          <p className="font-bold text-inherit">Welisson Lima</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link href={item.sectionHref}>{t(item.title)}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeToggle />
        <LanguageSwitcher />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full"
              color="foreground"
              href={item.sectionHref}
              size="lg"
            >
              {t(item.title)}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
