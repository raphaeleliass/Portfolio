import { ImArrowUp } from "react-icons/im";
import { useEffect } from "react";

function BtnScrollTop() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementsByClassName("btn-scroll-top")[0];
      if (header) {
        header.classList.toggle("active", window.scrollY > 300);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#">
      <button aria-label="scroll top button" className="btn-scroll-top">
        <ImArrowUp />
      </button>
    </a>
  );
}

export default BtnScrollTop;
