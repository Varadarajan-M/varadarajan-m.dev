import { CONSTANTS } from "@/lib/constants";
import { type Project } from "@/types/common";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article
      className={`bento-item group relative  ${
        project.size === "large" ? "lg:col-span-2" : "lg:col-span-1"
      }`}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} project showcase`}
          width={640}
          height={640}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
          sizes="(max-width: 768px) 92vw, (max-width: 1200px) 46vw, 30vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

        {/* Project Type Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-background/80 text-foreground border border-border/50">
          {project.type}
        </span>

        {/* Links */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/80 border border-border/50 hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label={`Visit ${project.title} live site`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-background/80 border border-border/50 hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 text-foreground tracking-wide group-hover:text-primary transition-colors">
          <Link
            href={project.live || project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-visible:outline-none focus-visible:underline"
          >
            {project.title}
          </Link>
        </h3>

        <p className="text-muted-foreground mb-4 font-body text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Features for small tiles */}
        {project.features && project.size === "small" && (
          <ul className="mb-4 space-y-1">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="text-xs text-muted-foreground flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground border border-border/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="section-padding relative"
      aria-label="Recent Projects"
    >
      <div className="container-narrow">
        <div className="flex flex-col mb-18">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-wider">
            {CONSTANTS.project.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl font-body">
            {CONSTANTS.project.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {CONSTANTS.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/Varadarajan-M"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-secondary border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body text-sm tracking-wide"
          >
            {CONSTANTS.project.cta.github}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
