"use client";
import { Circuitry, List, X } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

import Menu from "@/assets/menu.png";
import Link from "next/link";

export default function Header() {
  const pages = ["Inicio", "Adotar", "Informações"];
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-full h-10 flex justify-between items-center px-4 lg:px-24 py-8">
      <div className="flex items-center gap-4 flex-1">
        <Circuitry size={38} color="#4d00db" />
        <p className="font-semibold text-xl">MeAdota</p>
      </div>
      <div className="hidden md:flex gap-2">
        {pages.map((page) => (
          <button key={page} className="hover:bg-zinc-900 p-2 rounded-md">
            {page}
          </button>
        ))}
        <button className="bg-blue-700 w-28 rounded-lg py-2 px-4 border-b-4 border-r-4 hover:border-r-0 hover:border-b-0 border-blue-950 hover:border-t-2 hover:border-l-2 transition-all duration-100">
          Contato
        </button>
      </div>

      {!menu ? (
        <>
          <div className="flex md:hidden h-auto bg-gray-800 w-full absolute left-0 top-14 flex-col text-center">
            {pages.map((page) => (
              <Link
                href="#"
                key={page}
                className="hover:bg-gray-900 p-4 transition"
              >
                {page}
              </Link>
            ))}
          </div>
          <List
            className="flex md:hidden text-gray-200 cursor-pointer hover:text-gray-400"
            size={32}
            onClick={() => setMenu(!menu)}
          />
        </>
      ) : (
        <X
          className="flex md:hidden text-gray-200 cursor-pointer hover:text-gray-400"
          size={32}
          onClick={() => setMenu(!menu)}
        />
      )}
    </div>
  );
}
