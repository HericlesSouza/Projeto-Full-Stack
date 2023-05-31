import { StyledInput } from "./style";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
    type: "text" | "email" | "number" | "password";
    placeholder: string;
    id: string;
    register: UseFormRegisterReturn<string>;
    disabled?: boolean;
    color?: string;
}
export const Input = ({
    type,
    placeholder,
    id,
    register,
    disabled,
    color,
}: InputProps) => {
    return (
        <StyledInput
            id={id}
            type={type}
            placeholder={placeholder}
            {...register}
            disabled={disabled}
            color={color}
        />
    );
};
