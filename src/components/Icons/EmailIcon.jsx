import { ImMail } from "react-icons/im";



function EmailIcon() {
  return (
    <a
      href="mailto:raphaeleliass@outlook.com?subject=Interesse em Contato"
      target="_blank"
      rel="noreferrer"
      className="block p-1"
    >
      <ImMail className="size-6 hover:text-customGreen transition-all"/>
    </a>
  );
}

export default EmailIcon;