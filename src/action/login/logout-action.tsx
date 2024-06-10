"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LogoutAction() {
  cookies().delete("token");
  redirect("/login");
}
