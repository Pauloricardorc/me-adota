import Image from "next/image";
import Link from "next/link";

import Contact from "@/assets/contact.png";
import Lupa from "@/assets/lupa.svg";

export default function Footer() {
  return (
    <div className="w-full h-full bg-zinc-900 rounded-3xl lg:rounded-none">
      <div className="grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-full h-full p-4 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-1">
            <Image width={100} height={100} src={Contact} alt="" />
            <p className="text-lg pb-4">Contatos</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row text-center md:text-start gap-2">
              <p className="md:w-14 text-gray-400">Email: </p>
              <span className="text-gray-200">pauloricardorc0@gmail.com</span>
            </div>
            <div className="flex flex-col md:flex-row text-center md:text-start gap-2">
              <p className="md:w-14 text-gray-400">Github: </p>
              <span className="text-gray-200">pauloricardorc0</span>
            </div>
            <div className="flex flex-col md:flex-row text-center md:text-start gap-2">
              <p className="md:w-14 text-gray-400">linkedin: </p>
              <span className="text-gray-200">paulo-ricard-rc</span>
            </div>
          </div>
        </div>
        <div className="w-full h-full p-4 items-center justify-center flex flex-col">
          <p className="text-lg mb-4 text-gray-100">Sites de referência</p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1 text-center">
              <p className="text-gray-200 text-sm">Novo Curso</p>
              <Link href="#" className="text-sm text-blue-400">
                https://newcourses.netlify.app
              </Link>
            </div>
            <div className="flex flex-col gap-1 text-center">
              <p className="text-gray-200 text-sm">Novo Template</p>
              <Link href="#" className="text-sm text-blue-400">
                https://tamplatecursos.netlify.app
              </Link>
            </div>
            <div className="flex flex-col gap-1 text-center">
              <p className="text-gray-200 text-sm">Mui Example</p>
              <Link href="#" className="text-sm text-blue-400">
                https://muiexample.netlify.app
              </Link>
            </div>
            <div className="flex flex-col gap-1 text-center">
              <p className="text-gray-200 text-sm">Neon Cendol</p>
              <Link href="#" className="text-sm text-blue-400">
                https://neon-cendol-c34e8a.netlify.app
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full p-10 flex items-center justify-center ">
          <Image width={260} height={260} src={Lupa} alt="" />
        </div>
      </div>
    </div>
  );
}
