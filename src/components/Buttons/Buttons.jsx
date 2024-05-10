function Buttons(props) {
  return (
    <div>
      <button className="border-b-2 border-b-customGreen p-1 text-center text-sm font-normal transition-all  hover:text-customGreen dark:font-extralight">
        <a
          className="flex flex-row items-center gap-2 text-center"
          href={props.href}
          target={props.target}
        >
          {props.title}
          <img className={props.imgClass} src={props.img} alt={props.alt} />
        </a>
      </button>
    </div>
  );
}

export default Buttons;
