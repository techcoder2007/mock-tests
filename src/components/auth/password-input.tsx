"use client";

import React, { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input, InputProps } from "../ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";

interface PasswordInputProps extends InputProps {
  ref?: React.Ref<HTMLInputElement>;
  fieldRegister?: UseFormRegisterReturn;
  error?: string;
  disabled?: boolean;
  showPasswordWithIcon?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      className,
      disabled = false,
      showPasswordWithIcon = false,
      error,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="relative">
        {error && <p className="text-base text-red-500 font-bold">{error}</p>}
        <Input
          type={showPassword ? "text" : "password"}
          className={cn("hide-password-toggle pr-10", className)}
          ref={ref}
          {...props}
        />
        {!showPasswordWithIcon ? (
          <div className="flex items-center justify-start gap-2 my-2">
            <Checkbox
              className="text-white"
              id="show-password"
              onCheckedChange={() => setShowPassword((prev) => !prev)}
            />
            <label htmlFor="show-password" className="mx-3 text-sm">
              Show Password
            </label>
          </div>
        ) : (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-4 hover:bg-transparent"
            onClick={() => setShowPassword((prev) => !prev)}
            disabled={disabled}
          >
            {showPassword && !disabled ? (
              <EyeIcon className="h-4 w-4 mt-1" aria-hidden="true" />
            ) : (
              <EyeOffIcon className="h-4 w-4 mt-1" aria-hidden="true" />
            )}
            <span className="sr-only">
              {showPassword ? "Hide password" : "Show password"}
            </span>
          </Button>
        )}
        <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
export type { PasswordInputProps };
export { PasswordInput };
