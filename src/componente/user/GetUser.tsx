"use client";

import LogoutAction from "@/action/login/logout-action";
import { getUserAction } from "@/action/user/get-user-action";
import React, { useState, useEffect } from "react";
import { User } from "@/interface/user-interface";

export default function GetUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadDocuments() {
      const userData = await getUserAction();
      console.log(userData);

      setUser(userData);
    }
    loadDocuments();
  }, []);

  function handleLogout() {
    LogoutAction();
  }

  return (
    <main>
      {user ? (
        <>
          <h1>Ola {user?.nome}</h1>
          <button onClick={handleLogout}>Sair</button>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </main>
  );
}
