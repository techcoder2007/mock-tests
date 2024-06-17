"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { InputField } from "./inputField";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { PostHandlerResponse, UserProps } from "@/types";
import { toast } from "react-hot-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  signInWithBrands?: boolean;
}

const SignInSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});

type SignInSchemaType = z.infer<typeof SignInSchema>;

export function UserAuthForm({
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
      setIsLoading(false);
      const res = await fetch("/auth/sign-in/api", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data: PostHandlerResponse<UserProps> = await res.json();
      if (data.statusText === "success" && data.status === 201) {
        toast.success("You have successfully signed");
        localStorage.setItem("user-id", JSON.stringify(data?.id));
        router.push("/");
      } else {
        toast.error("Something went wrong ⛔️");
      }
    }, 1000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <InputField
              fieldRegister={register("email", { required: true })}
              labelText="Email"
              htmlFor="email"
              className="my-3"
              placeholder="Enter your email address"
              disabled={isLoading}
              error={errors.email?.message}
            />
            <InputField
              fieldRegister={register("password", { required: true })}
              labelText="Password"
              htmlFor="password"
              className="my-3"
              placeholder="Enter your password"
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
          <Button
            disabled={isLoading}
            variant="secondary"
            className="font-bold text-base"
          >
            <Icons.google className="mr-2 h-4 w-4" /> Google
          </Button>
          <Button
            disabled={isLoading}
            variant="secondary"
            className="font-bold text-base"
          >
            <Icons.twitter className="mr-2 h-4 w-4 text-white" /> Twitter
          </Button>
        </React.Fragment>
      )}
    </div>
  );
}
