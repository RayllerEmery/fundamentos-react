"use client";

import { useState } from "react";
import { Button } from "./Button";

export const Contador = () => {
    const [contador, setContador] = useState(0)
    const [objecto, setObjeto] = useState("")

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Contador:</h2>
            <p>Número atual: {contador}</p>
            <div className="flex gap-x-2">
                <Button onClick={() => setContador(contador + 1)}>+1</Button>
                <Button onClick={() => setContador(contador - 1)}>-1</Button>
                <Button onClick={() => setContador(0)}>Zerar</Button>
                <Button onClick={() => setContador(contador + 3)}>+3</Button>
                <Button onClick={() => setContador(contador - 3)}>-3</Button>
            </div>
            <div className="flex gap-x-2 items-center">
                <input
                    type="text"
                    value={objecto}
                    onChange={(e) => setObjeto(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />
                <Button onClick={() => setObjeto("")}>Limpar</Button>
            </div>

        </div>
    )
}