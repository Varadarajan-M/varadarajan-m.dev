"use client";

import { CONSTANTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { NavLinkProps } from "@/types/common";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

interface NavContainerProps {
  children: React.ReactNode;
}

export const NavContainer = ({ children }: NavContainerProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <header
      className={cn(
        `fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6`,
        {
          "glass py-4": isScrolled,
        }
      )}
    >
      {children}
    </header>
  );
};

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden relative"
        aria-label={`Click to ${isOpen ? "close" : "open"} navigation menu`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>

      {isOpen && (
        <div className="md:hidden absolute top-12 left-0 right-0 z-50 backdrop-blur-3xl glass bg-[#181818] mt-4 mx-3 rounded-xl overflow-hidden">
          <ul className="flex flex-col p-6 gap-4">
            {CONSTANTS.navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                label={link.label}
                type={link.type}
                className="text-foreground hover:text-primary transition-colors duration-300 text-lg font-medium"
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export const NavLink = ({
  href,
  label,
  type,
  onClick,
  className,
}: NavLinkProps) => {
  let linkComponent;

  switch (type) {
    case "link":
      linkComponent = (
        <Link
          href={href}
          className={cn(
            "text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium link-underline",
            className
          )}
          aria-label={label}
          onClick={onClick}
        >
          {label}
        </Link>
      );
      break;
    case "cta_link":
      linkComponent = (
        <Button variant="hero" asChild>
          <Link href={href} aria-label={label} onClick={onClick}>
            {label}
          </Link>
        </Button>
      );
      break;
  }

  return <li key={label}>{linkComponent}</li>;
};
