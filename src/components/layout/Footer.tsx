import { CONSTANTS } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary tracking-wide flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
              {CONSTANTS.hero.initials}
            </div>
            <span className="text-muted-foreground font-body text-sm">
              {CONSTANTS.hero.name}
            </span>
          </div>

          <p className="text-muted-foreground text-sm font-body text-center">
            © {currentYear} {CONSTANTS.hero.name}. All rights reserved.
          </p>

          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
          >
            {CONSTANTS.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
