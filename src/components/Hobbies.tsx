const hobbies = [
    'Jogar',
    'Programar',
    'Tocar Bateria',
    'Sair com os amigos',
];

export const Hobbies = () => {

    const [hobbyPreferido, ...outrosHobbies] = hobbies;
    const novosHobbies = ['Exercício', 'Gatos']
    const meusHobbies = [...novosHobbies, ...outrosHobbies];

    return (
        <div>
            <p>Meus hobbies:</p>
            <ul className="list-disc pl-10">
                <li className="font-bold">{hobbyPreferido}</li>
                {meusHobbies.map((hobby, index) => (<li key={`hobby-${index}`}>{hobby}</li>))}
            </ul>
        </div>
    );
}