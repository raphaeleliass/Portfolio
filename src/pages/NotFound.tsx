import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-[100dvh] items-center justify-center">
      <Card className="flex max-w-xs flex-col items-center text-center md:max-w-3xl">
        <CardHeader>
          <TbError404 className="size-32" />
        </CardHeader>

        <CardContent>
          <CardTitle className="font-Poppins text-3xl">
            Página não encontrada!
          </CardTitle>
          <CardDescription>
            Aguarde alguns minutos ou volte para a{" "}
            <Link className="text-blue-500 font-bold" to={"/"}>
              página inicial.
            </Link>
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  );
}

export default NotFound;
