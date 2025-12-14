import Link from "next/link";

import { MobileNav, NavContainer, NavLink } from "./HeaderClient";

import { CONSTANTS } from "@/lib/constants";

export const Header = () => {
  return (
    <NavContainer>
      <nav
        className="container-narrow relative"
        aria-label="Main navigation"
        itemScope
        itemType="http://schema.org/SiteNavigationElement"
      >
        <div className="flex justify-between gap-6 items-center">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="user-select-none w-10 h-10 rounded-full tracking-wider bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg group-hover:animate-pulse-glow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none transition-transform active:scale-95"
              aria-label="Back to Home"
              role="link"
            >
              {CONSTANTS.hero.initials}
            </Link>

            <Link
              href={`mailto:${CONSTANTS.email}`}
              className="text-foreground font-body text-sm hidden sm:block hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none rounded-sm px-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Send email to ${CONSTANTS.email}`}
              role="link"
            >
              {CONSTANTS.email}
            </Link>
          </div>

          <ul
            className="hidden md:flex items-center gap-8"
            aria-label="Navigation links"
            role="list"
          >
            {CONSTANTS.navLinks.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                label={link.label}
                type={link.type}
              />
            ))}
          </ul>
          <MobileNav />
        </div>
      </nav>
    </NavContainer>
  );
};
