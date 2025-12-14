import { Button } from "@/components/ui/button";
import { CONSTANTS } from "@/lib/constants";
import { ArrowDown, Download, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    platform: "LinkedIn",
    url: CONSTANTS.hero.socials.linkedin,
    icon: Linkedin,
  },
  {
    platform: "Instagram",
    url: CONSTANTS.hero.socials.instagram,
    icon: Instagram,
  },
  {
    platform: "GitHub",
    url: CONSTANTS.hero.socials.github,
    icon: Github,
  },
];

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none animate-float" />

      <div className="container-narrow pt-32 pb-20 mt-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-64 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-muted-foreground text-lg mb-4 font-body">
              I am {CONSTANTS.hero.name}
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
              <span className="text-gradient">
                {CONSTANTS.hero.role.highlight}
              </span>
              <br />
              <span className="text-foreground">
                {CONSTANTS.hero.role.base}
              </span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 font-body leading-relaxed">
              {CONSTANTS.hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Button variant="hero" size="lg" asChild>
                <a
                  href={CONSTANTS.hero.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Resume"
                >
                  <Download className="w-5 h-5 mr-2" />
                  {CONSTANTS.hero.cta.resume}
                </a>
              </Button>

              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map(({ platform, url, icon: Icon }) => (
                  <Button key={platform} variant="icon" size="icon" asChild>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${platform} Profile`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl transform translate-x-4 translate-y-4" />

              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden border border-border/50 glow sm:rotate-5 group">
                <Image
                  src={CONSTANTS.hero.avatar}
                  width={640}
                  height={640}
                  alt={`${CONSTANTS.hero.name} - ${CONSTANTS.hero.role.highlight} ${CONSTANTS.hero.role.base}`}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fetchPriority="high"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw" // What is this?: We don't need to load the full image on mobile, so we use sizes to load only the required image.
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 lg:mt-24">
          <Link
            href="#projects"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-2"
            aria-label="Scroll to projects"
          >
            <span className="text-sm font-medium">
              {CONSTANTS.hero.scrollText}
            </span>
            <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
