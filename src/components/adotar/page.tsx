import Image from "next/image";
import FormInput from "../input";

import FormImages from "@/assets/adote-.png";

export default function Adotar() {
  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center justify-between">
      <div className="flex flex-col lg:max-w-xl gap-8 px-12 lg:px-0">
        <h3 className="text-4xl text-gray-400 font-semibold">
          Enviar um pedido de adoção
        </h3>
        <div className="flex flex-col gap-8 w-full">
          <FormInput
            nome="Nome"
            placeholder="Digite seu nome"
            name="nome"
            type="text"
          />
          <FormInput
            nome="Email"
            placeholder="Digite o E-mail"
            name="email"
            type="email"
          />
          <FormInput
            nome="Descrição"
            placeholder="Deseja escrever uma descrição ?"
            name="descricao"
            type="text"
            descricao
          />
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center">
        <Image width={400} height={400} src={FormImages} alt="" />
      </div>
    </div>
  );
}
