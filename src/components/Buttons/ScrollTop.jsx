import { ImArrowUp } from "react-icons/im";
import { useEffect } from "react";

function ScrollTop() {
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
    <div className="btn-scroll-top">
      <a href="#">
        <ImArrowUp />
      </a>
    </div>
  );
}

export default ScrollTop;
