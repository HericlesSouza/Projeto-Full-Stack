import React, { MouseEvent } from "react";
import { StyledButton } from "./style";

interface ButtonProps {
    children: React.ReactNode;
    color: string;
    size?: string;
    width?: string;
    type: "button" | "reset" | "submit";
    click?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
    children,
    color,
    size,
    width,
    type,
    click,
}: ButtonProps) => {
    function onClickButton(event: MouseEvent<HTMLButtonElement>) {
        if (click) {
            click(event)
        }
    }

    return (
        <StyledButton
            onClick={onClickButton} 
            type={type}
            buttonColor={color}
            buttonSize={size}
            buttonWidth={width}
        >
            {children}
        </StyledButton>
    );
};
