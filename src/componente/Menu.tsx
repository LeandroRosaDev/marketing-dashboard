"use client";
import Link from "next/link";
import { getUserAction } from "@/action/user/get-user-action";
import React, { useState, useEffect } from "react";
import { User } from "@/interface/user-interface";

export default function Menu() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadDocuments() {
      const userData = await getUserAction();
      console.log(userData);

      setUser(userData);
    }
    loadDocuments();
  }, []);

  let conta = {
    autorizado: false,
    nome: " ",
  };
  if (user?.nome === undefined) {
    conta.autorizado = false;
  } else conta.autorizado = true;

  return (
    <>
      <ul className="menu flex flex-row gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {conta.autorizado ? (
            <Link href="/clientes"> Clientes </Link>
          ) : (
            <p></p>
          )}
        </li>
      </ul>
    </>
  );
}
