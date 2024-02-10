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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import background from "@/public/signup_pic.jpg";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/ui/logo";

const FormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export default function Login() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit() {
    toast({
      description: "Login Successful😀.",
    });
    router.push("/");
  }
  return (
    <section className="h-screen px-10 md:p-0">
      <div className="flex md:border max-w-[850px] mx-auto rounded-sm mt-10">
        <Image
          src={background}
          priority
          alt="bg"
          className="hidden md:block w-[320px] object-cover"
        />
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center mt-7">
            <Logo />
            <h2 className="text-[26px] mt-8 sm:px-20 font-bold text-center tracking-tight">
              {" "}
              Your Trusted Farming Equipment Rental Platform.
            </h2>
            <div className="flex items-center gap-1 mt-3 mb-7">
              <p>Don&apos;t have an account?</p>
              <Link
                href="/signup"
                className="text-blue-600 tracking-tighter text-sm"
              >
                Sign up
              </Link>
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full sm:w-2/3 space-y-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your email address" {...field} />
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
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="w-full bg-[#4CAF50] hover:bg-[#45a049] px-3 py-6 rounded-none"
                type="submit"
              >
                Log in
              </Button>
            </form>
          </Form>
          <div className="flex justify-center mt-4 mb-16">
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
