import { ImGithub } from "react-icons/im";

function GithubIcon() {
  return (
    <a
      href="https://github.com/raphaeleliass"
      target="_blank"
      rel="noreferrer"
      className="block p-1"
    >
      <ImGithub className="size-6 hover:text-customGreen transition-all"/>
    </a>
  );
}

export default GithubIcon;
