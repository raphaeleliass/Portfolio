import { MdError } from "react-icons/md";
import { TbError404Off } from "react-icons/tb";
function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="m-2 flex flex-col items-center justify-center gap-6 rounded-3xl bg-neutral-800 p-12  text-white shadow-xl md:m-0 md:h-[500px] md:w-[500px] ">
        <TbError404Off className="size-32" />
        <div className="flex items-center gap-2">
          <MdError className="size-6" />
          <h1 className="text-center text-2xl">Page Not Found</h1>
        </div>
        <p className="text-center">
          Page is not found. <br /> Try again later.
        </p>
      </div>
    </section>
  );
}

export default NotFound;
