"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import icon1 from "../../../assets/goldbundle.svg";
import icon2 from "../../../assets/star.svg";
import icon3 from "../../../assets/wait.svg";
import icon4 from "../../../assets/target.svg";
import icon5 from "../../../assets/clock.svg";
import icon6 from "../../../assets/goldBarsShiny.svg";
import icon7 from "../../../assets/message.svg";
import icon8 from "../../../assets/headphone.svg";
import icon9 from "../../../assets/sentmoney.svg";
import icon10 from "../../../assets/raismoney.svg";
import icon11 from "../../../assets/file.svg";
import icon12 from "../../../assets/stock.svg";
import icon13 from "../../../assets/profile.svg";
import icon14 from "../../../assets/incoming.svg";
import icon15 from "../../../assets/notifi.svg";
import icon16 from "../../../assets/docu.svg";
import icon17 from "../../../assets/tab.svg";

export default function Bundle(props: any) {
  const [activeButton, setActiveButton] = useState("features");
  const router = useRouter();
  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };
  const features = [
    {
      title: "Customer service",
      description:
        "Our role just to advice you by buy and sell in approriate time to make you reach your goal",
    },
    {
      title: "Customer service",
      description:
        "Our role just to advice you by buy and sell in approriate time to make you reach your goal",
    },
    {
      title: "Customer service",
      description:
        "Our role just to advice you by buy and sell in approriate time to make you reach your goal",
    },
    {
      title: "Customer service",
      description:
        "Our role just to advice you by buy and sell in approriate time to make you reach your goal",
    },
  ];
  const processData = [
    {
      icon: icon7,
      text: "تواصل مع الدعم الفني من خلال النظام الالكتروني او تطبيق المراسلة واتساب.",
      number: "01",
    },
    {
      icon: icon8,
      text: "تواصل مع الدعم الفني من خلال النظام الالكتروني او تطبيق المراسلة واتساب.",
      number: "02",
    },
    {
      icon: icon9,
      text: "تواصل مع الدعم الفني من خلال النظام الالكتروني او تطبيق المراسلة واتساب.",
      number: "03",
    },
    {
      icon: icon10,
      text: "تواصل مع الدعم الفني من خلال النظام الالكتروني او تطبيق المراسلة واتساب.",
      number: "04",
    },
    {
      icon: icon11,
      text: "تواصل مع الدعم الفني من خلال النظام الالكتروني او تطبيق المراسلة واتساب.",
      number: "05",
    },
    {
      icon: icon12,
      text: "تواصل مع الدعم الفني من خلال النظام الالكتروني او تطبيق المراسلة واتساب.",
      number: "06",
    },
    {
      icon: icon13,
      text: "تواصل مع الدعم الفني من خلال النظام الالكتروني او تطبيق المراسلة واتساب.",
      number: "07",
    },
    {
      icon: icon14,
      text: "تواصل مع الدعم الفني من خلال النظام الالكتروني او تطبيق المراسلة واتساب.",
      number: "08",
    },
    {
      icon: icon15,
      text: "تواصل مع الدعم الفني من خلال النظام الالكتروني او تطبيق المراسلة واتساب.",
      number: "09",
    },
    {
      icon: icon16,
      text: "تواصل مع الدعم الفني من خلال النظام الالكتروني او تطبيق المراسلة واتساب.",
      number: "10",
    },
  ];
  const categories = [
    {
      name: "First category",
      range: "400 to 1000 grams",
      pricePerGram: "165 EGP",
    },
    {
      name: "Second category",
      range: "1001 to 3000 grams",
      pricePerGram: "145 EGP",
    },
    {
      name: "Third category",
      range: "more than 3000 grams",
      pricePerGram: "125 EGP",
    },
  ];

  return (
    <>
      <div className="container flex flex-col gap-y-30">
        <section className="bg-cover inset-0 object-fit-contain my-44">
          <div className="flex justify-center flex-col md:flex-row md:mt-[6%] md:space-x-24 mx-9">
            <div className="md:w-[50%] flex flex-col justify-center items-start">
              <h2 className="text-[17px] sm:text-[30px] lg:text-[40px] font-bold my-4 text-white text-nowrap">
                Enhance gold wealth by{" "}
                <span className="text-[#E5BB44]">{props.params.value}%</span>
              </h2>
              <p className="text-[11px] sm:text-[17px] text-white">
                We provide our clients with accurate technical analysis of the
                gold market and provide them with accurate recommendations on
                timing Buying and selling to achieve a return of up to (25% of
                the amount of gold agreed upon during the contract) Covering the
                agreed-upon workmanship and the price difference between buying
                and selling in each deal Our recommendations depend on technical
                patterns and technical analysis of the market and include
                determining the appropriate times to buy and sell and
                determining the expected prices of gold in the near future. We
                always strive to provide the best service to our customers and
                achieve the best results for them in the gold market, and of
                course we provide our services through a legal contract.
              </p>
            </div>
            <div className="relative my-8 md:w-[50%] md:flex items-center justify-center object-contain">
              <span className="sr-only">bundle percentage with gold image</span>
              <Image priority src={icon1} alt={"bundle percentage with gold"} />
              <span className="absolute font-extrabold top-10 -right-7 sm:top-40 sm:right-6 md:right-0 text-[85px] text-[#E5BB44]">
                {props.params.value}
                <span className="absolute text-[15px] top-10">%</span>
              </span>
            </div>
          </div>
        </section>
        <section className=" my-44">
          <div className=" flex flex-col md:flex-row justify-between gap-8">
            <div className=" bg-[#272626] p-4 rounded-2xl border-[0.1px] border-[#424143]">
              <div className="flex content-center justify-center w-full">
                <Image className="" src={icon4} alt={""} />
              </div>
              <div className="flex content-center flex-col text-center my-8 text-white">
                <h4 className="mb-4 text-[20px] text-[#E5BB44]">
                  Customer service
                </h4>
                <div>
                  Our role just to advice you by buy and sell in approriate time
                  to make you reach your goal
                </div>
              </div>
            </div>
            <div className=" bg-[#272626] p-4 rounded-2xl border-[0.1px] border-[#424143]">
              <div className="flex content-center justify-center w-full">
                <Image className="" src={icon6} alt={""} />
              </div>
              <div className="flex content-center flex-col text-center my-8 text-white">
                <h4 className="mb-4 text-[20px] text-[#E5BB44]">
                  Customer service
                </h4>
                <div>
                  Our role just to advice you by buy and sell in approriate time
                  to make you reach your goal
                </div>
              </div>
            </div>
            <div className=" bg-[#272626] p-4 rounded-2xl border-[0.1px] border-[#424143]">
              <div className="flex content-center justify-center w-full">
                <Image className="" src={icon5} alt={""} />
              </div>
              <div className="flex content-center flex-col text-center my-8 text-white">
                <h4 className="mb-4 text-[20px] text-[#E5BB44]">
                  Customer service
                </h4>
                <div>
                  Our role just to advice you by buy and sell in approriate time
                  to make you reach your goal
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full text-4xl  flex justify-center gap-5 items-center p-4 mb-20">
            <button
              style={{
                color: activeButton === "features" ? "#E5BB44" : "grey",
              }}
              className="focus:border-b-2 focus:border-[#E5BB44] transition duration-100 ease-out"
              onClick={() => handleButtonClick("features")}
            >
              Features
            </button>
            <button
              style={{ color: activeButton === "flaws" ? "#E5BB44" : "grey" }}
              className="focus:border-b-2 focus:border-[#E5BB44] transition duration-100 ease-out"
              onClick={() => handleButtonClick("flaws")}
            >
              Flaws
            </button>
          </div>
          <div>
            {activeButton === "features" && (
              <section className="container">
                <div className="text-white flex justify-center my-28">
                  <h2 className="text-[25px] md:text-[45px] text-center font-bold">
                    Why we are the first choice for investors in{" "}
                    <span className="text-[#E5BB44] lg:block lg:text-center sm:inline">
                      gold market
                    </span>
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 space-x-4 gap-y-10">
                  {features.map((item, index) => (
                    <div
                      key={index}
                      className="relative bg-[#0d0d0d] p-4 rounded-2xl"
                    >
                      <div className="flex content-center justify-center w-full">
                        <Image
                          className="absolute -top-10"
                          src={icon2}
                          alt={item.title}
                        />
                      </div>
                      <div className="flex content-center flex-col text-center my-8 text-white">
                        <h4 className="my-4 text-[20px]">{item.title}</h4>
                        <div>{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
            {activeButton === "flaws" && (
              <div>
                <div className="relative bg-[#0d0d0d] p-4 rounded-2xl">
                  <div className="flex content-center justify-center w-full">
                    <Image className="absolute -top-10" src={icon3} alt={""} />
                  </div>
                  <div className="flex content-center flex-col text-center my-8 text-white">
                    <h4 className="my-4 text-[20px]">Customer service</h4>
                    <div>
                      Our role just to advice you by buy and sell in approriate
                      time to make you reach your goal
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        <section className="my-44">
          <h2 className="text-[#E5BB44] w-full text-[40px] text-center font-bold my-16">
            Golden Wealth Promotion Commission 25%
          </h2>
          <div className="flex flex-col md:flex-row justify-around gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-[#272626] p-7 md:p-16 rounded-2xl hover:border-[1px] hover:border-[#E5BB44] hover:shadow-[3px_3px_5px_6px_rgba(255,215,0,0.1)]"
              >
                <div className="font-bold text-[20px] text-center text-white">
                  {category.name}{" "}
                  <span className="block ">
                    from{" "}
                    <span className="text-[#E5BB44]">{category.range}</span>
                  </span>
                </div>

                <div className="flex content-center flex-col text-center my-8 text-white">
                  <h4 className="mb-4 text-[20px] text-[#ecebeb] font-bold">
                    {" "}
                    <span className="font-bold text-[30px]">
                      {category.pricePerGram}
                    </span>
                    /per gram
                  </h4>
                </div>
                <div className="flex justify-center items-center my-12">
                  <button
                    className="rounded-xl border-2 font-bold border-yellow-400 text-[#E5BB44] outline-none py-4 px-12 hover:bg-[#E5BB44] hover:text-black"
                    onClick={() => router.push("/login")}
                  >
                    Contact us
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="my-24 text-white text-center">
            <h2 className="text-[#E5BB44] w-full text-[40px] text-center font-bold my-5">
              Process cycle
            </h2>
            <div>
              <p>
                You have money in the form of savings or investment capital
                sufficient to buy (400 grams) of gold as a minimum, or you own
                an actual kilo of gold or more and you want to get buying and
                selling recommendations to reach a specific goal, which is
                doubling the amount of gold.
              </p>
              <p className="my-5">
                <span className="block">
                  After calculating the company commission
                </span>{" "}
                and the customer desire to obtain the service, the steps will be
                as follows :
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
            {processData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between bg-[#1b1b1a] p-14 rounded-3xl rounded-tr-none"
              >
                <div className="flex flex-1 items-center space-x-3 h-fit md:space-x-7">
                  <Image
                    className="absolute left-0"
                    priority
                    src={item.icon}
                    alt={""}
                  />
                  <div className="absolute left-12 right-32 sm:right-40 text-right">
                    <p className="text-sm">{item.text}</p>
                  </div>
                  <Image
                    priority
                    src={icon17}
                    alt={""}
                    className="absolute -top-2 size-24 md:size-30 right-7 sm:right-10 z-[3]"
                  />
                  <span className="absolute top-3 right-11 sm:right-16 text-white z-[5] font-extrabold text-[40px]">
                    {item.number}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="container mx-auto flex flex-col items-center justify-center m-40">
          <div className="text-white w-full text-center">
            <h2 className="text-[45px]">
              Invest in <span className="text-[#E5BB44]"> gold </span>
              <span className="block">
                and get a chance to achieve your financial goals
              </span>
            </h2>
            <p className="text-[24px] my-10 text-[#BAB9B6]">
              Personal service, tailored consultations for each client, accurate
              analyzes and{" "}
              <span className="block">
                investment recommendations based on market research.
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center my-8">
            <button
              className="rounded-xl border-2 font-bold border-yellow-400 text-[#E5BB44] outline-none py-4 px-12 hover:bg-[#E5BB44] hover:text-black"
              onClick={() => router.push("/contact")}
            >
              Contact us
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
