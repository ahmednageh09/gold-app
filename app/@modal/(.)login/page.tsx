"use client";
import React, { useEffect, useState } from "react";
import Modal from "../../../components/modalComponent";
import Image from "next/image";
import x from "../../../assets/x.svg";
import email from "../../../assets/email.svg";
import facebook from "../../../assets/facebook.svg";
import google from "../../../assets/google.svg";
import appl from "../../../assets/apple.svg";
import twitter from "../../../assets/twitter.svg";
import instagram from "../../../assets/instagram.svg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    handleLogin(data.email, data.password);
  };

  const handleEmailLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch(
        "http://192.168.1.50:8000/api/investors/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      {!isModalOpen && (
        <Modal>
          <div className="relative w-[280px] md:w-[350px] rounded-[10px] bg-white p-8 shadow-lg">
            <Button
              className="absolute top-4 right-4"
              onClick={() => router.back()}
            >
              <Image src={x} className="h-6 w-6" alt={""} />
            </Button>
            <div className="flex flex-col items-center">
              <Image src={email} className="h-12 w-12 text-gray-400" alt={""} />
              <h2 className="mt-4 text-center text-lg font-semibold">
                Sign In
              </h2>
              <div className="mt-8 w-full space-y-4">
                <Button
                  className="w-full rounded-3xl bg-slate-400"
                  onClick={handleEmailLoginClick}
                >
                  <Image src={email} className="mr-2" alt={""} />
                  Using Email/Phone Number
                </Button>
                <Button className="w-full rounded-3xl bg-[#1877F2] text-white">
                  <Image src={facebook} className="mr-2" alt={""} />
                  Using Facebook
                </Button>
                <Button className="w-full rounded-3xl bg-[#DB4437] text-white">
                  <Image src={google} className="mr-2" alt={""} />
                  Using Google
                </Button>
                <Button className="w-full rounded-3xl bg-black text-white">
                  <Image src={appl} className="mr-2" alt={""} />
                  Using Apple
                </Button>
                <Button className="w-full rounded-3xl bg-[#1DA1F2] text-white">
                  <Image src={twitter} className="mr-2" alt={""} />
                  Using Twitter
                </Button>
                <Button className="w-full rounded-3xl bg-[#E1306C] text-white">
                  <Image src={instagram} className="mr-2" alt={""} />
                  Using Instagram
                </Button>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Don't have an account yet ? <br />
                <a className="text-blue-500" href="/signUp">
                  Create New Account
                </a>
              </p>
            </div>
          </div>
        </Modal>
      )}
      {isModalOpen && (
        <Modal>
          <div className="relative w-[350px] rounded-[10px] bg-white p-8 shadow-lg">
            <Button
              className="absolute top-4 right-4"
              onClick={() => router.back()}
            >
              <Image src={x} className="h-6 w-6" alt={""} />
            </Button>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col justify-center items-center p-8 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="p-3"
                />
                {errors.email && (
                  <p className="text-red-500">Email is required.</p>
                )}
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                  className="p-3"
                />
                {errors.password && (
                  <p className="text-red-500">Password is required.</p>
                )}
                <button
                  type="submit"
                  className="rounded-xl border-2 font-bold text-white outline-none py-3 px-6 bg-black hover:text-[#E5BB44]"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}
