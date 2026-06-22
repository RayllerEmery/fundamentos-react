"use client";

import { createContext, useEffect, useState } from "react";

type ContadorType = number | null

type ContadorContextType = {
    contador: ContadorType
    setContador: React.Dispatch<React.SetStateAction<ContadorType>>
}

export const ContadorContext = createContext<ContadorContextType>({
    contador: 0,
    setContador: () => {}
})

export default function ContadorProvider({ children }: { children: React.ReactNode }) {
    const [contador, setContador] = useState<ContadorType>(null);
    
    useEffect(() => {
        const contadorSesseionStorage = sessionStorage.getItem("contador") ?? 0
        if (contadorSesseionStorage) {
            setContador(parseInt(contadorSesseionStorage))
        }
    }, [])

    useEffect(() => {
        if (contador !== null) {
            sessionStorage.setItem("contador", contador.toString())
        }
    } , [contador])

    return (
        <ContadorContext.Provider value={{ contador, setContador }}>
            {children}
        </ContadorContext.Provider>
    );
}