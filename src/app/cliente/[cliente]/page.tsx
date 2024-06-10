import { PageParams } from "@/interface/params-interface";
import getToken from "@/action/user/get-token-action";
import { infoCliente } from "@/interface/cliente-interface";
import { url } from "@/function/url";

export default async function produtoPage({ params }: PageParams) {
  const token = await getToken();
  const response = await fetch(url + `/wp-json/api/cliente/${params.cliente}`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const cliente: infoCliente = await response.json();
  console.log(cliente);

  return (
    <section>
      <div>{cliente?.nome}</div>
      <h1>{cliente?.site_link}</h1>
    </section>
  );
}
