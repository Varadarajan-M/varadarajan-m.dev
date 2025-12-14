import { Button } from "@/components/ui/button";
import { CONSTANTS } from "@/lib/constants";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="section-padding relative bg-secondary/20 overflow-hidden"
      aria-label="Contact Section"
    >
      {/* Background elements */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-narrow relative">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            {CONSTANTS.contact.title.base}{" "}
            <span className="text-gradient">
              {CONSTANTS.contact.title.highlight}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body mb-12">
            {CONSTANTS.contact.description}
          </p>

          {/* Email CTA */}
          <a
            href={`mailto:${CONSTANTS.email}`}
            className="group relative inline-flex items-center gap-4 sm:px-8 sm:py-6 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift"
            aria-label={`Send email to ${CONSTANTS.email}`}
          >
            <div className="sm:w-14 sm:h-14 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="sm:w-6 sm:h-6 w-4 h-4 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground mb-1">
                {CONSTANTS.contact.cta.email}
              </p>
              <p className="sm:text-xl text-sm font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                {CONSTANTS.email}
              </p>
            </div>
            <ArrowUpRight className="sm:w-6 sm:h-6 w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button variant="icon" size="icon" asChild className="w-14 h-14">
              <a
                href={CONSTANTS.hero.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            <Button variant="icon" size="icon" asChild className="w-14 h-14">
              <a
                href={CONSTANTS.hero.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
              >
                <Github className="w-6 h-6" />
              </a>
            </Button>
            <Button variant="icon" size="icon" asChild className="w-14 h-14">
              <a
                href={CONSTANTS.hero.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Instagram profile"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
