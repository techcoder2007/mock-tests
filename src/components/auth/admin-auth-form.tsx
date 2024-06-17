"use client";

import * as React from "react";

import { cn, generateToken } from "@/lib/utils";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { InputField } from "./inputField";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { PostHandlerResponse, UserProps } from "@/types";
import { setCookie } from "cookies-next";
import axios from "axios";
import { useRouter } from "next/navigation";
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  signInWithBrands?: boolean;
}

const SignInSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(1, { message: "Password must be atleast 6 characters" }),
});

type SignInSchemaType = z.infer<typeof SignInSchema>;

export function AdminAuthForm({
  className,
  signInWithBrands,
  ...props
}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
  });

  async function onSubmit({ email, password }: SignInSchemaType) {
    setIsLoading(true);

    setTimeout(async () => {
      const data: PostHandlerResponse<UserProps> = await axios.post(
        "/auth/admin/api",
        { email, password }
      );

      const handleResponse = () => {
        setCookie("admin-token", `${generateToken(40)}`);
        toast.success("Welcome to Dashboard");
        router.push("/dashboard");
      };

      const handleError = () => {
        return toast.error("Something went wrong ⛔️");
      };

      if (data.status === 201 && data.statusText === "sucsess") {
        handleResponse();
      } else {
        handleError();
      }
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <InputField
              fieldRegister={register("email")}
              labelText="Email"
              htmlFor="email"
              className="my-3"
              placeholder="Enter your email address"
              disabled={isLoading}
              error={errors.email?.message}
            />
            <InputField
              fieldRegister={register("password")}
              labelText="Password"
              htmlFor="password"
              className="my-3"
              placeholder="Enter password"
              disabled={isLoading}
              error={errors.password?.message}
            />
          </div>
          <Button
            className="font-bold text-lg"
            variant="outline"
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground text-base">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        className="font-bold text-base"
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <div>
            <Icons.gitHub className="mr-2 h-4 w-4" />
          </div>
        )}
        GitHub
      </Button>
      {signInWithBrands && (
        <React.Fragment>
          <Button variant="secondary" className="font-bold text-base">
            <Icons.google className="mr-2 h-4 w-4" /> Google
          </Button>
          <Button variant="secondary" className="font-bold text-base">
            <Icons.twitter className="mr-2 h-4 w-4 text-white" /> Twitter
          </Button>
        </React.Fragment>
      )}
    </div>
  );
}
