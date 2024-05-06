import EmailIcon from "../Icons/EmailIcon";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import WhatsappIcon from "../Icons/WhatsappIcon";

function Contact() {
  return (
    <footer className="flex flex-col bg-customDarkGrey" id="contato">
      <div className="m-auto flex max-w-xs flex-col md:max-w-xl md:flex-row lg:max-w-5xl">
        <div className="flex flex-col items-center justify-center gap-4 py-20 text-center md:w-1/2 md:items-start md:gap-4 md:text-start lg:gap-0 ">
          <h2 className="text-5xl font-medium lg:py-6">Contato</h2>
          <p className="text-sm text-customGrey lg:mr-32">
            Eu adoraria ouvir sobre seus projetos e como eu poderia ajudar
            neles. Para isso, entre em contato para discutirmos sobre isso e eu
            responderei o mais breve possível!
          </p>
        </div>
        <div className="flex items-center justify-center pb-12 md:w-1/2 md:pb-0 lg:flex-row">
          <LinkedinIcon />
          <WhatsappIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="m-auto flex max-w-xs py-4 pb-4 text-customGrey">
        <h2 className="text-sm font-thin">
          Desenvolvido por &nbsp;
          <a href="#header">
            <strong>Raphael Elias</strong>
          </a>
          &nbsp;
          2024 &copy;
        </h2>
      </div>
    </footer>
  );
}

export default Contact;
