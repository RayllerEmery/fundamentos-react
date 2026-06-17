"use client";

import { FC, MouseEventHandler } from "react";

type ButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
            {children}
        </button>
    );
}