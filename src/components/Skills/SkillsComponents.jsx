function SkillsComponents(props) {
  return (
    <div className="flex gap-4 flex-col md:text-start text-center">
      <h2 className="text-4xl font-bold">{props.title}</h2>
      <p className="text-sm text-customGrey">{props.text}</p>
    </div>
  );
}

export default SkillsComponents;
