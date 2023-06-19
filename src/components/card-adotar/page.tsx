import Image from "next/image";
import Divider from "../divider/page";

import Dog from "@/assets/dog.png";
import Cat from "@/assets/Cat.png";
import Colection from "@/assets/Colection.png";

export default function CardAdotar() {
  return (
    <div className="w-full bg-gray-900 h-full rounded-medium rounded-tr-medium grid grid-cols-2 lg:grid-cols-4 overflow-hidden px-8 py-8 lg:py-0">
      <div className="h-full w-full gap-2 flex justify-center relative flex-col p-4">
        <p className="text-2xl font-medium">Dogs 🐶</p>
        <span className="max-w-xs font-extralight text-gray-400 text-sm">
          agora você pode adotar um novo animal para fazer companhia
        </span>
        <Divider />
      </div>
      <div className="h-full w-full gap-2 flex justify-center relative flex-col items-center p-4">
        <Image width={1000} height={1000} src={Dog} alt="" className="w-40" />
        <p className="font-medium text-gray-200 text-xl">Cachorro</p>
        <span className="max-w-xs font-extralight text-gray-400 text-sm">
          quero adotar um cachorro agora
        </span>
        <Divider />
      </div>
      <div className="h-full w-full gap-2 bg-purple-800 flex justify-center relative flex-col rounded-3xl lg:rounded-tl-3xl lg:rounded-tr-3xl overflow-hidden p-4">
        <Image
          width={1000}
          height={1000}
          src={Cat}
          alt=""
          className="w-40 z-20"
        />
        <p className="font-medium text-gray-200 text-xl">Gato</p>
        <span className="max-w-xs font-extralight text-gray-400 text-sm">
          mais eu gosto de gatos. Então vamos achar um gato pra você adotar
        </span>
        <div className="absolute -top-10 -right-10 w-44 h-44 rounded-bl-full rounded-br-full rounded-tl-full bg-purple-900"></div>
        <Divider />
      </div>
      <div className="h-full w-full gap-2 flex justify-center relative flex-col items-center p-4">
        <Image
          width={1000}
          height={1000}
          src={Colection}
          alt=""
          className="w-40"
        />
        <p className="font-medium text-gray-200 text-xl">Coleção</p>
        <span className="max-w-xs font-extralight text-gray-400 text-sm">
          Veja a coleção de todos os gatos e cachorro que estão disponível no
          nosso site.
        </span>
      </div>
    </div>
  );
}
