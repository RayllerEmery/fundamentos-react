import { FC } from "react";

type MeuNomeProps = {
    name: string;
    age: number;
    birthDate: Date;
}

export const MeuNome: FC<MeuNomeProps> = ({ name, age, birthDate }) => (
    <h3>Sou {name}, tenho {age} anos e nasci em {birthDate.toLocaleDateString("pt-BR")}</h3>            
)