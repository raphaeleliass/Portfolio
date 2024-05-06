import githubIcon from "/github-icon.svg";

function GithubIcon() {
  return (
    <a
      href="https://github.com/raphaeleliass"
      target="_blank"
      rel="noreferrer"
      className="block p-1"
    >
      <img className="size-6 hover:size-7 transition-all" src={githubIcon} alt="Github contact icon" />
    </a>
  );
}

export default GithubIcon;
