function SkillsComponents(props) {
  return (
    <div className="flex flex-col gap-4 text-center md:text-start">
      <h2 className="text-4xl font-bold">{props.title}</h2>
      <p className="text-sm text-neutral-400 dark:text-customGrey">
        {props.text}
      </p>
    </div>
  );
}

export default SkillsComponents;
