import ListItems from "./ListItems";

function Header() {
  return (
    <header className="mx-auto w-full max-w-xs py-4 md:max-w-3xl md:flex-row lg:max-w-6xl">
      <div className="flex w-full items-center justify-between">
        <a href="#" className="text-xl font-black md:text-3xl lg:text-4xl">
          Raphael Elias
        </a>
        <nav className="">
          <ul className="flex flex-col items-center gap-2 md:flex-row">
            <li>
              <ListItems href="#" text="Início" />
            </li>
            <li>
              <ListItems href="#" text="Skills" />
            </li>
            <li>
              <ListItems href="#" text="Contato" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
