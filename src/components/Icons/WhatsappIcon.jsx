import whatsappIcon from "/whatsapp.svg";

function WhatsappIcon() {
  return (
    <a
      href="https://wa.me/5528999763920?text=Olá,%20vi%20seu%20portfólio,%20podemos%20conversar?"
      target="_blank"
      rel="noreferrer"
      className="block p-1"
    >
      <img className="size-6 hover:size-7 transition-all" src={whatsappIcon} alt="WhatsApp contact Icon" />
    </a>
  );
}

export default WhatsappIcon;
