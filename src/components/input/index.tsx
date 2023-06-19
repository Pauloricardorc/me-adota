import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  nome: string;
  descricao?: boolean;
}

export default function FormInput({
  nome,
  descricao = false,
  ...rest
}: IInputProps) {
  return (
    <label htmlFor={nome} className="flex flex-col max-full gap-1">
      <span className="text-gray-400 font-medium pl-1">{nome}</span>
      {!descricao ? (
        <input
          className="p-3 rounded-md text-base outline-none text-gray-200 bg-zinc-900 w-full"
          {...rest}
        />
      ) : (
        <textarea
          rows={4}
          className="p-3 rounded-md text-base outline-none text-gray-200 bg-zinc-900 w-full"
        />
      )}
    </label>
  );
}
