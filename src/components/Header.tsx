import React from "react";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          className="sm:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        ></NavbarMenuToggle>
        <NavbarBrand>
          <p className="font-bold text-inherit">Welisson Lima</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#home">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#skills">Skills</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#projects">Projects</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#education">Education</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeToggle />
      </NavbarContent>
    </Navbar>
  );
}
