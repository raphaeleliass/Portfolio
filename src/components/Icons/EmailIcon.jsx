import emailIcon from "/email.svg";

function EmailIcon() {
  return (
    <a
      href="mailto:raphaeleliass@outlook.com?subject=Interesse em Contato"
      target="_blank"
      rel="noreferrer"
      className="block p-1"
    >
      <img className="size-6 hover:size-7 transition-all" src={emailIcon} alt="Email contact Icon" />
    </a>
  );
}

export default EmailIcon;