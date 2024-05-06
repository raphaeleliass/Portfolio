import linkedinIcon from "/linkedin-original.svg";

function LinkedinIcon() {
  return (
    <a
      href="https://linkedin.com/in/raphaeleliass"
      target="_blank"
      rel="noreferrer"
      className="block p-1 "
    >
      <img className="size-6 hover:size-7 transition-all" src={linkedinIcon} alt="Linkedin contact Icon" />
    </a>
  );
}

export default LinkedinIcon;
