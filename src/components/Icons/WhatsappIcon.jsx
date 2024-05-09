import { ImWhatsapp } from "react-icons/im";

function WhatsappIcon() {
  return (
    <a
      href="https://wa.me/5528999763920?text=Olá,%20vi%20seu%20portfólio,%20podemos%20conversar?"
      target="_blank"
      rel="noreferrer"
      className="block p-1"
    >
      <ImWhatsapp className="size-6 hover:text-customGreen transition-all" />
    </a>
  );
}

export default WhatsappIcon;
