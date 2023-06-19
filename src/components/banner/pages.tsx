import Image from "next/image";
import CatImg from "../../assets/Cats.png";

export default function Banner() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">
        <div className="flex items-center text-center lg:text-start lg:items-start flex-col justify-center gap-8">
          <h3 className="text-3xl font-semibold text-gray-300 tracking-wider">
            Querendo adotar um animal ? <br /> vamos procurar pra você!
          </h3>
          <p className="text-lg text-gray-400 font-light max-w-xl">
            Quer ser o tutor responsável por um cão ou gato? Preencha este
            formulário que nós o ajudaremos a encontrar o animal que você quer
            adotar e que precisa de você!{" "}
          </p>
          <button className="bg-blue-700 p-3 rounded-md text-lg hover:brightness-75 active:brightness-95 transition hover:shadow-inner hover:shadow-blue-900">
            Adotar agora!
          </button>
        </div>
        <div className="hidden lg:flex items-end flex-col justify-center">
          <Image
            width={1000}
            height={1000}
            src={CatImg}
            alt=""
            className="w-4/6 border-8 border-gray-900 rounded-tl-full rounded-bl-full rounded-br-full"
          />
        </div>
      </div>
    </div>
  );
}
