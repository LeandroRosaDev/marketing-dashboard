"use client";

import React, { useState } from "react";
import Input from "../formComponentes/Input";
import { Button } from "../formComponentes/Button";
import { postClienteAction } from "@/action/clientes/post-cliente-action";

export default function PostCliente() {
  return (
    <form
      action={postClienteAction}
      className="flex flex-col flex-wrap gap-7 mt-10 justify-start items-start"
    >
      <Input
        placeholder="Nome do Cliente"
        name="nome"
        id="nome"
        type="text"
        required
        className="w-72"
      />

      <Input
        placeholder="Link do Site"
        name="site_link"
        id="site_link"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Link do Facebook"
        name="fb_link"
        id="fb_link"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Link do Instagram"
        name="instagram_link"
        id="instagram_link"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Link do Linkedin"
        name="linkedin_link"
        id="linkedin_link"
        type="text"
        className="w-72"
      />
      <Input
        placeholder="Link do Whatsapp"
        name="whatsapp_link"
        id="whatsapp_link"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="E-mail comercial"
        name="email"
        id="email"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Endereço"
        name="endereco"
        id="endereco"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Telefone"
        name="telefone"
        id="telefone"
        type="text"
        className="w-72"
      />
      <Input
        placeholder="Análise do Site"
        name="site_analise"
        id="site_analise"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Análise do Facebook"
        name="fb_analise"
        id="fb_analise"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Análise do Instagram"
        name="instagram_analise"
        id="instagram_analise"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Análise do Linkedin"
        name="linkedin_analise"
        id="linkedin_analise"
        type="text"
        className="w-72"
      />
      <Input
        placeholder="Análise do Design"
        name="design_analise"
        id="design_analise"
        type="text"
        className="w-72"
      />
      <Input
        placeholder="Proprietário(os)"
        name="proprietario"
        id="proprietario"
        type="text"
        className="w-72"
      />
      <Input
        placeholder="Funcionários"
        name="funcionarios"
        id="funcionarios"
        type="text"
        className="w-72"
      />
      <Input
        placeholder="Tamanho da Empresa"
        name="tamanho_empresa"
        id="tamanho_empresa"
        type="text"
        className="w-72"
      />
      <Input
        placeholder="Conclusão Final"
        name="analise_final"
        id="analise_final"
        type="text"
        className="w-72"
      />
      <Input
        placeholder="Analista"
        name="colaborador"
        id="colaborador"
        type="text"
        className="w-72"
      />
      <Input
        placeholder="Serviço a ser oferecido"
        name="tipo_servico"
        id="tipo_servico"
        type="text"
        className="w-72"
      />
      <Input
        placeholder="Outro serviço?"
        name="servico_alternativo"
        id="servico_alternativo"
        type="text"
        className="w-72"
      />
      <Button>Enviar</Button>
    </form>
  );
}
