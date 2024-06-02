import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section className="mx-auto mt-44 flex w-full max-w-xs flex-col gap-12 border-t-2 border-gray-200 dark:border-neutral-700 py-12 md:max-w-3xl lg:max-w-6xl">
      <div className="grid  grid-cols-1 gap-y-12 md:grid-cols-3">
        <SkillCard title="HTML" text="2 anos de experiência" />
        <SkillCard title="CSS" text="2 anos de experiência" />
        <SkillCard title="JavaScript" text="2 anos de experiência" />
        <SkillCard title="TailwindCSS" text="2 anos de experiência" />
        <SkillCard title="React" text="1 ano de experiência" />
        <SkillCard title="Python" text="2 anos de experiência" />
      </div>
    </section>
  );
}

export default Skills;
