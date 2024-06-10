"use server";
import { cookies } from "next/headers";
import { url } from "@/function/url";

export async function postClienteAction(formData: FormData) {
  try {
    const token = cookies().get("token")?.value;
    const response = await fetch(url + "/wp-json/api/cliente", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });
    // console.log(formData);
  } catch (error) {
    console.error("Erro durante o login:", error);
    throw error;
  }
}
