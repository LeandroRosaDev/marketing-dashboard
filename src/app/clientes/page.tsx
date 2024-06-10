import { ButtonBack } from "@/componente/ButtonBack";
import Link from "next/link";

export default function clientesPage() {
  return (
    <main className="flex">
      <ButtonBack>Retornar</ButtonBack>
      <Link href="clientes/cadastrar">Cadastrar Novo Cliente</Link>
      <Link href="clientes/visualizar">Clientes Cadastrados</Link>
    </main>
  );
}
