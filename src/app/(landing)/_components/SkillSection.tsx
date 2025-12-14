import { CONSTANTS } from "@/lib/constants";

const SkillSection = () => {
  return (
    <section
      id="skills"
      className="section-padding relative"
      aria-label="Skills and Tools"
    >
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-gradient">
              {CONSTANTS.skill.title.highlight}
            </span>{" "}
            {CONSTANTS.skill.title.base}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            {CONSTANTS.skill.description}
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
          {CONSTANTS.skills.map((skill) => (
            <li key={skill.name} className="card-elevated p-6 hover-lift group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <span
                  className="text-sm font-medium text-primary"
                  aria-label={`${skill.level} percent proficiency`}
                >
                  {skill.level}%
                </span>
              </div>

              <div
                className="relative h-2 bg-secondary rounded-full overflow-hidden"
                aria-hidden="true"
              >
                <div
                  className="absolute inset-y-0 left-0 bg-linear-to-r from-primary to-primary/60 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </li>
          ))}
        </ul>

        {/* NOTE: Removed due to accessibility score decrement, I will add it back in the future */}
        {/* <div className="mt-20 overflow-hidden" aria-hidden="true">
          <div className="flex items-center gap-12 animate-marquee">
            {[...CONSTANTS.skills, ...CONSTANTS.skills].map((skill, index) => (
              <span
                key={index}
                className="text-2xl md:text-3xl font-display font-bold text-muted-foreground/50 whitespace-nowrap hover:text-primary/50 transition-colors cursor-default"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SkillSection;
