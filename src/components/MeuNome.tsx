"use client";

import { useParams } from "next/navigation";
import { FC } from "react";

type MeuNomeProps = {
    name: string;
    age: number;
    birthDate: Date;
}

export const MeuNome: FC<MeuNomeProps> = ({ name, age, birthDate }) => {
    const params = useParams();
    
    console.log(params);

    return (
        <h3>Sou {name}, tenho {age} anos e nasci em {birthDate.toLocaleDateString("pt-BR")}</h3>            
    )
}