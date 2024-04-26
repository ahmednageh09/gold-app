"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg";
import user from "../assets/user.svg";
import Styles from "../components/header.module.css";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [menuOpen, setmenuOpen] = useState(false);
  const router = useRouter();

  const bundles = [
    {
      name: "Investment bundle 10%",
      href: "bundles/10",
    },
    {
      name: "Investment bundle 15%",
      href: "bundles/15",
    },
    {
      name: "Investment bundle 20%",
      href: "bundles/20",
    },
    {
      name: "Investment bundle 50%",
      href: "bundles/50",
    },
    {
      name: "Investment bundle 80%",
      href: "bundles/80",
    },
    {
      name: "Investment bundle 100%",
      href: "bundles/100",
    },
  ];
  return (
    <header className="mb-5">
      <nav className="container-fluid sm:me-4 md:me-32 flex lg:flex-1 justify-center flex-row items-center">
        <Link href="/home" className="mx-auto">
          <span className="sr-only"> Enza Trading</span>
          <Image src={logo} alt="logo" height={90} priority />
        </Link>
        <div className="flex gap-4 mx-auto">
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link className={Styles.link} href="/home">
              Home
            </Link>
            <Link className={Styles.link} href="/about">
              About
            </Link>
            <Popover className="relative group">
              {({ open }) => (
                <>
                  <Popover.Button className="flex items-center gap-x-1 font-semibold text-white group-hover:text-yellow-500 ">
                    Bundles
                    <ChevronDownIcon
                      className={cn(
                        open ? "rotate-180" : "",
                        "h-5 w-5 flex-none text-white group-hover:text-yellow-500"
                      )}
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 transition-y-1"
                    enterTo="opacity-100 transition-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 top-full left-0 bg-slate-700 rounded shadow-lg overflow-hidden">
                      <div className="p-3">
                        {bundles.map((bundle, index) => (
                          <div
                            className="flex flex-row overflow-hidden whitespace-nowrap text-white hover:text-[#E5BB44] border-b-2 hover:border-b-[#E5BB44]"
                            key={index}
                          >
                            <Link href={`/${bundle.href}`}>{bundle.name}</Link>
                          </div>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link className={Styles.link} href="/prices">
              Details
            </Link>
            <Link className={Styles.link} href="/blog">
              Blog
            </Link>
            <Link className={Styles.link} href="/contact">
              Contact us
            </Link>
          </Popover.Group>
        </div>
        <div className="hidden lg:flex items-center">
          <Link
            className=" text-white font-bold hover:text-yellow-500 transition-all duration-200 ease-in-out"
            href={"/profile"}
          >
            <Image
              src={user}
              alt="profile icon"
              className="w-10 object-cover"
            />
          </Link>
          <button
            className="text-white bg-slate-800 font-semibold bg-black- py-2 px-4 mx-5 hover:bg-yellow-500 hover:text-black rounded"
            onClick={() => router.push("/login")}
          >
            Sign in
          </button>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="m-2.5  inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setmenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-10 w-10 text-yellow-500" />
          </button>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={menuOpen}
        onClose={setmenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#362d23] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href="/home"
              className="-m-1.5 p-1.5"
              onClick={() => setmenuOpen(false)}
            >
              <span className="sr-only"> Enza Trading</span>
              <Image src={logo} alt="logo" height={90} priority />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white "
              onClick={() => setmenuOpen(false)}
            >
              <span className="sr-only"> Close menu</span>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divided-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-500"
                  href="/home"
                  onClick={() => setmenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-500"
                  href="/about"
                  onClick={() => setmenuOpen(false)}
                >
                  About
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:text-yellow-500">
                        Bundles
                        <ChevronDownIcon
                          className={cn(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel>
                        <div>
                          {bundles.map((bundle, index) => (
                            <div
                              className="flex flex-row overflow-hidden my-4 ms-8 whitespace-nowrap text-white hover:text-[#e7c761]"
                              key={index}
                            >
                              <Link
                                href={`/${bundle.href}`}
                                onClick={() => setmenuOpen(false)}
                              >
                                {bundle.name}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-500"
                  href="/prices"
                  onClick={() => setmenuOpen(false)}
                >
                  Details
                </Link>
                <Link
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-500"
                  href="/blog"
                  onClick={() => setmenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-yellow-500"
                  href="/contact"
                  onClick={() => setmenuOpen(false)}
                >
                  Contact us
                </Link>
                <Link
                  className="-mx-3 block rounded-lg px-3 pt-10 text-base font-semibold leading-7 text-white hover:text-yellow-500"
                  href="/profile"
                  onClick={() => setmenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  className="text-white font-semibold py-2 hover:text-yellow-500"
                  onClick={() => {
                    router.push("/login");
                    setmenuOpen(false);
                  }}
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
