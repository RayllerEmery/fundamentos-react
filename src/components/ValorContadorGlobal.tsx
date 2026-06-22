"use client";

import { useContext } from "react";
import { ContadorContext } from "@/context/ContadorContext";
import { Button } from "./Button";

export const ValorContadorGlobal = () => {

    const { contador } = useContext(ContadorContext);

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Contador:</h2>
            <p>Valor do meu Contador Global: {contador}</p>
        </div>
    )
}