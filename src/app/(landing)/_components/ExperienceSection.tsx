import { CONSTANTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Experience } from "@/types/common";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="section-padding relative bg-secondary/20"
      aria-label="Experience Section"
    >
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-gradient">
              {CONSTANTS.experience.title.highlight}
            </span>{" "}
            {CONSTANTS.experience.title.base}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            {CONSTANTS.experience.description}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {CONSTANTS.experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.company}
                experience={exp}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({
  experience: exp,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  return (
    <article
      className={cn(`relative grid md:grid-cols-2 gap-8`, {
        "md:grid-flow-dense": index % 2 === 0,
      })}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 sm:left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 top-8 z-10 glow" />

      {/* Content */}
      <div
        className={cn(
          "pl-6 md:pl-0",
          index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:col-start-2"
        )}
      >
        <div className={`card-elevated p-6 md:p-8 hover-lift`}>
          <div className={`flex items-center gap-3 mb-4`}>
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              <Calendar className="w-3 h-3 user-select-none" />
              {exp.period}
            </span>
          </div>

          <h3 className="text-2xl font-display font-bold text-foreground mb-1">
            {exp.company}
          </h3>
          <div
            className={`text-primary font-medium mb-4 flex items-center gap-2`}
          >
            <Briefcase className="w-4 h-4 user-select-none" />
            {exp.role}
          </div>

          <p className="text-muted-foreground font-body mb-6 leading-relaxed">
            {exp.description}
          </p>

          <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}>
            {exp.highlights.map((highlight: string, i: number) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ExperienceSection;
