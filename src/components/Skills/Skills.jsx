import SkillsComponents from "./SkillsComponents";

function Skills() {
  return (
    <div
      id="skills"
      className="m-auto grid max-w-xs grid-cols-1 gap-x-6 gap-y-16 md:gap-y-12 border-t py-20 md:max-w-3xl md:grid-cols-3 lg:max-w-5xl"
    >
      <SkillsComponents title="HTML" text="2+ Anos de Experiência" />
      <SkillsComponents title="CSS" text="2+ Anos de Experiência" />
      <SkillsComponents title="TailWindCSS" text="2+ anos de experiência" />
      <SkillsComponents title="JavaScript" text="2+ anos de experiência" />
      <SkillsComponents title="React JS" text="1+ anos de experiência" />
      <SkillsComponents title="Next JS" text="1+ anos de experiência" />
      <SkillsComponents title="Python" text="1+ anos de experiência" />
    </div>
  );
}

export default Skills;
