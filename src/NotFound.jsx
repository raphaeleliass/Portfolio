import { MdError } from "react-icons/md";
import { TbError404 } from "react-icons/tb";

function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="m-2 flex flex-col items-center items-center justify-center gap-6 rounded-3xl bg-customDarkGrey p-12 md:m-0 md:h-[500px] md:w-[500px]">
        <TbError404 className="size-32" />
        <h1 className="text-4xl font-bold">Error 404</h1>
        <div className="flex items-center gap-2">
          <MdError className="size-6" />
          <h1 className="text-center text-2xl">Page Not Found</h1>
        </div>
        <p className="text-center text-customGrey">
          Page is not found. <br /> Try again later.
        </p>
      </div>
    </section>
  );
}

export default NotFound;
