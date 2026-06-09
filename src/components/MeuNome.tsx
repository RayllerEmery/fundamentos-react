import { FC } from "react";

export const MeuNome: FC<{ name: string, age: number, birthDate: Date }> = (props) => {
    return <h3>Sou {props.name}, tenho {props.age} anos e nasci em {props.birthDate.toLocaleDateString("pt-BR")}</h3>    
}