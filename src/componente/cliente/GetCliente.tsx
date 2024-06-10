"use client";
import { getClienteAction } from "@/action/clientes/get-cliente-action";
import { infoCliente } from "@/interface/cliente-interface";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function GetCliente() {
  const [clientes, setclientes] = useState<infoCliente[]>([]);

  useEffect(() => {
    async function loadclientes() {
      const { data } = await getClienteAction();
      console.log(data);
      setclientes(data);
    }
    loadclientes();
  }, []);

  return (
    <main>
      <div className="m-10">
        {clientes.length > 0 ? (
          clientes.map((cliente) => (
            <div key={cliente.id} className="mb-4">
              <h1>Cliente: {cliente.nome}</h1>
              <h1>Site: {cliente.site_link}</h1>
              <Link href={`/cliente/${cliente.id}`}>Ver detalhes</Link>
            </div>
          ))
        ) : (
          <p>Nenhum Cliente.</p>
        )}
      </div>
    </main>
  );
}
