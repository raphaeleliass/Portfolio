import WhatsappIcon from "../Icons/WhatsappIcon";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";

function Header() {
  return (
    <div id="header">
      <header className="fixed left-0 right-0 top-0 z-50 m-auto flex max-w-2xl flex-col items-center justify-between gap-3 bg-white bg-opacity-75 bg-none py-4 shadow-xl backdrop-blur-3xl md:absolute md:max-w-3xl md:flex-row md:bg-opacity-0 md:py-8 md:shadow-none md:backdrop-blur-none lg:max-w-5xl lg:flex-row lg:py-10 dark:bg-transparent">
        <a href="index.html">
          <h1 className="bg-transparent text-2xl font-bold text-customDarkGrey lg:text-3xl dark:text-customWhite">
            Raphael
          </h1>
        </a>

        <nav>
          <ul className="flex gap-2">
            <li>
              <LinkedinIcon />
            </li>
            <li>
              <GithubIcon />
            </li>
            <li>
              <WhatsappIcon />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
