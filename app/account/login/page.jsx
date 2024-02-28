"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

const FormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export default function Login() {
  const router = useRouter();

  const { setIsLoggedIn } = useContext(AuthContext);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    setIsLoggedIn(true);
    toast({
      description: "Login Successful😀.",
    });
    router.push("/");
  }

  return (
    <section className="sm:pt-10 mb-36">
      <div className="flex max-w-[450px] bg-white mx-auto rounded-md sm:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="w-full flex flex-col items-center px-10">
          <div className="flex flex-col items-center mt-3">
            <h1 className="text-[32px] font-semibold logo tracking-tighter inline">
              Login
            </h1>
            {/* <h2 className="text-[26px] mt-2 sm:mt-4 font-bold text-center tracking-tight">
              {" "}
              Your Trusted Farming Equipment Rental Platform.
            </h2> */}
            <div className="flex items-center gap-1 mt-2 mb-7">
              <p className="text-sm tracking-tight">
                Don&apos;t have an account?
              </p>
              <Link
                href="/account/signup"
                className="text-blue-600 tracking-tighter text-sm"
              >
                Sign up
              </Link>
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Your email address"
                        {...field}
                        className="rounded-md"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                        className="rounded-md"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="w-full bg-[#4CAF50] hover:bg-[#45a049] px-3 py-6 rounded-md"
                type="submit"
              >
                Log in
              </Button>
            </form>
          </Form>
          <div className="flex justify-center mt-4 sm:mb-10">
            <p className="text-sm">
              Or continue with{" "}
              <Link className="text-blue-600" href="#">
                Google
              </Link>{" "}
              or{" "}
              <Link className="text-blue-600" href="#">
                Facebook
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
