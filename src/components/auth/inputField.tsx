import React, { memo } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/lib/utils";

interface InputFieldProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  labelText: string;
  fieldRegister: UseFormRegisterReturn;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  htmlFor?: string;
  type?: string;
}

const InputField = memo<InputFieldProps>(
  ({
    labelText,
    fieldRegister,
    error,
    placeholder,
    className,
    htmlFor,
    type,
    ...rest
  }) => {
    return (
      <>
        <Label className="sr-only" htmlFor={htmlFor}>
          {labelText}
        </Label>
        {error && <p className="text-base text-red-500 font-bold">{error}</p>}
        <Input
          type={type}
          placeholder={placeholder}
          {...rest}
          id={htmlFor}
          {...fieldRegister}
          className={cn(className)}
        />
      </>
    );
  }
);

InputField.displayName = "InputField";

export type { InputFieldProps };
export { InputField };
