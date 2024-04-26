"use client";
import React, { useState } from "react";
import icon1 from "../../assets/user.svg";
import icon2 from "../../assets/security.svg";
import icon3 from "../../assets/lock.svg";
import icon4 from "../../assets/bell.svg";
import icon5 from "../../assets/key.svg";
import img from "../../assets/image 3.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const [show, setShow] = useState({
    profile: true,
    file: false,
    settings: false,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("first");

  return (
    <>
      <div className="container flex flex-col md:flex-row sm:items-center md:items-start text-white gap-4 mt-36">
        {/* main part */}
        <section className="flex flex-col flex-start bg-[#272626] h-fit sm:w-96 md:w-1/3 py-4 px-16 pb-11 ">
          <div
            className="flex items-end content-center gap-2 space-y-6 cursor-pointer group hover:text-[#c5a23f]"
            onClick={() =>
              setShow({ profile: true, file: false, settings: false })
            }
          >
            <svg
              className="stroke-current text-white group-hover:text-[#c5a23f]"
              stroke="currentColor"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <path
                  d="M10.1069 10.7019C10.0439 10.6929 9.96287 10.6929 9.89087 10.7019C8.30687 10.6479 7.04688 9.35188 7.04688 7.75887C7.04688 6.12988 8.36087 4.80688 9.99887 4.80688C11.6279 4.80688 12.9509 6.12988 12.9509 7.75887C12.9419 9.35188 11.6909 10.6479 10.1069 10.7019Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.1069 10.7019C10.0439 10.6929 9.96287 10.6929 9.89087 10.7019C8.30687 10.6479 7.04688 9.35188 7.04688 7.75887C7.04688 6.12988 8.36087 4.80688 9.99887 4.80688C11.6279 4.80688 12.9509 6.12988 12.9509 7.75887C12.9419 9.35188 11.6909 10.6479 10.1069 10.7019Z"
                  stroke="url(#paint0_radial_368_2326)"
                  stroke-opacity="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <g opacity="0.34">
                <path
                  d="M16.0656 16.642C14.4636 18.109 12.3396 19 9.99962 19C7.65959 19 5.53559 18.109 3.93359 16.642C4.02359 15.796 4.56359 14.968 5.52659 14.32C7.99259 12.6821 12.0246 12.6821 14.4726 14.32C15.4356 14.968 15.9756 15.796 16.0656 16.642Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.0656 16.642C14.4636 18.109 12.3396 19 9.99962 19C7.65959 19 5.53559 18.109 3.93359 16.642C4.02359 15.796 4.56359 14.968 5.52659 14.32C7.99259 12.6821 12.0246 12.6821 14.4726 14.32C15.4356 14.968 15.9756 15.796 16.0656 16.642Z"
                  stroke="url(#paint1_radial_368_2326)"
                  stroke-opacity="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <path
                d="M10 18.9999C14.9705 18.9999 19 14.9705 19 9.99996C19 5.02941 14.9705 1 10 1C5.02943 1 1 5.02941 1 9.99996C1 14.9705 5.02943 18.9999 10 18.9999Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 18.9999C14.9705 18.9999 19 14.9705 19 9.99996C19 5.02941 14.9705 1 10 1C5.02943 1 1 5.02941 1 9.99996C1 14.9705 5.02943 18.9999 10 18.9999Z"
                stroke="url(#paint2_radial_368_2326)"
                stroke-opacity="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_368_2326"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(9.17444 5.78938) rotate(59.7158) scale(4.51375 4.30862)"
                >
                  <stop stop-color="white" />
                  <stop offset="0.719012" stop-color="white" stop-opacity="0" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_368_2326"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(8.3055 14.0763) rotate(39.8696) scale(6.09428 6.57253)"
                >
                  <stop stop-color="white" />
                  <stop offset="0.719012" stop-color="white" stop-opacity="0" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint2_radial_368_2326"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(7.48649 3.99998) rotate(59.7538) scale(13.7771 13.1411)"
                >
                  <stop stop-color="white" />
                  <stop offset="0.719012" stop-color="white" stop-opacity="0" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
              </defs>
            </svg>
            <span className="group-hover:text-[#c5a23f]">Profile</span>
          </div>
          <div
            className="flex items-end content-center gap-2 space-y-6 cursor-pointer group hover:text-[#c5a23f]"
            onClick={() =>
              setShow({ profile: false, file: true, settings: false })
            }
          >
            <svg
              className="stroke-current text-white group-hover:text-[#c5a23f]"
              stroke="currentColor"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8327 1.83325H5.49935C5.01312 1.83325 4.5468 2.02641 4.20299 2.37022C3.85917 2.71404 3.66602 3.18036 3.66602 3.66659V18.3333C3.66602 18.8195 3.85917 19.2858 4.20299 19.6296C4.5468 19.9734 5.01312 20.1666 5.49935 20.1666H16.4993C16.9856 20.1666 17.4519 19.9734 17.7957 19.6296C18.1395 19.2858 18.3327 18.8195 18.3327 18.3333V7.33325L12.8327 1.83325Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.8327 1.83325H5.49935C5.01312 1.83325 4.5468 2.02641 4.20299 2.37022C3.85917 2.71404 3.66602 3.18036 3.66602 3.66659V18.3333C3.66602 18.8195 3.85917 19.2858 4.20299 19.6296C4.5468 19.9734 5.01312 20.1666 5.49935 20.1666H16.4993C16.9856 20.1666 17.4519 19.9734 17.7957 19.6296C18.1395 19.2858 18.3327 18.8195 18.3327 18.3333V7.33325L12.8327 1.83325Z"
                stroke="url(#paint0_radial_368_2330)"
                stroke-opacity="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.834 1.83325V7.33325H18.334"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.834 1.83325V7.33325H18.334"
                stroke="url(#paint1_radial_368_2330)"
                stroke-opacity="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.6673 11.9167H7.33398"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.6673 11.9167H7.33398"
                stroke="url(#paint2_radial_368_2330)"
                stroke-opacity="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.6673 15.5833H7.33398"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.6673 15.5833H7.33398"
                stroke="url(#paint3_radial_368_2330)"
                stroke-opacity="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.16732 8.25H8.25065H7.33398"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.16732 8.25H8.25065H7.33398"
                stroke="url(#paint4_radial_368_2330)"
                stroke-opacity="0.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_368_2330"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(8.9513 4.88881) rotate(64.9922) scale(13.376 11.2329)"
                >
                  <stop stop-color="white" />
                  <stop offset="0.719012" stop-color="white" stop-opacity="0" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_368_2330"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(14.816 2.74992) rotate(59.7539) scale(4.20968 4.01535)"
                >
                  <stop stop-color="white" />
                  <stop offset="0.719012" stop-color="white" stop-opacity="0" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint2_radial_368_2330"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(9.97663 12.0834) rotate(13.1628) scale(2.90359 1.41128)"
                >
                  <stop stop-color="white" />
                  <stop offset="0.719012" stop-color="white" stop-opacity="0" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint3_radial_368_2330"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(9.97663 15.7499) rotate(13.1628) scale(2.90359 1.41128)"
                >
                  <stop stop-color="white" />
                  <stop offset="0.719012" stop-color="white" stop-opacity="0" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint4_radial_368_2330"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(7.99465 8.41667) rotate(43.0899) scale(0.96788 1.05844)"
                >
                  <stop stop-color="white" />
                  <stop offset="0.719012" stop-color="white" stop-opacity="0" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
              </defs>
            </svg>
            <span className="group-hover:text-[#c5a23f]">File</span>
          </div>
          <div
            className="flex items-end content-center gap-2 space-y-6 cursor-pointer group hover:text-[#c5a23f]"
            onClick={() =>
              setShow({ profile: false, file: false, settings: true })
            }
          >
            <div>
              <svg
                className="stroke-current text-white group-hover:text-[#c5a23f]"
                stroke="currentColor"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.8537 22.1666C12.4368 22.1666 12.0811 21.8571 12.0132 21.4351C11.9506 21.0937 11.711 20.8148 11.3887 20.7083C11.126 20.6157 10.8692 20.5067 10.6197 20.3816C10.3228 20.2258 9.9667 20.2492 9.69151 20.4423C9.35849 20.6878 8.901 20.6498 8.61089 20.3524L7.48249 19.1951C7.1788 18.8836 7.13935 18.3925 7.38921 18.0343C7.58191 17.7455 7.60966 17.3732 7.46201 17.0578C7.36472 16.8387 7.2789 16.6143 7.20494 16.3858C7.09899 16.0256 6.80657 15.7559 6.44622 15.6858C6.01168 15.6146 5.69088 15.2318 5.68751 14.7804V13.3326C5.6852 12.8124 6.05156 12.3674 6.55201 12.2826C6.93167 12.2085 7.24869 11.9418 7.39376 11.5744C7.43699 11.471 7.48249 11.3683 7.53026 11.2664C7.7232 10.8854 7.69656 10.4265 7.46087 10.0718C7.16613 9.65161 7.21139 9.07436 7.56779 8.70792L8.39704 7.85742C8.80602 7.43779 9.45105 7.38348 9.92129 7.72909L9.94744 7.74775C10.2986 7.99014 10.7454 8.03404 11.135 7.86442C11.5518 7.71055 11.8591 7.3432 11.9438 6.89725L11.9552 6.85759C12.0488 6.26722 12.5459 5.8335 13.1291 5.83325H14.1301C14.7289 5.83297 15.24 6.27725 15.338 6.88325L15.3562 6.96492C15.4366 7.39212 15.7279 7.74568 16.1252 7.89825C16.5081 8.0668 16.9484 8.02278 17.2923 7.78159L17.3491 7.73959C17.8316 7.38298 .4949 7.43783 18.9155 7.86909L19.6788 8.65309C20.0613 9.04761 20.1094 9.668 19.7925 10.1196C19.5442 10.497 19.5126 10.982 19.7094 11.3901L19.7584 11.5068C19.9178 11.9052 20.2628 12.1939 20.6752 12.2744C21.2143 12.3646 21.6107 12.8413 21.6125 13.4014V14.6999C21.6124 15.1939 21.264 15.6153 20.7889 15.6963C20.3982 15.7731 20.08 16.0633 19.9597 16.4523C19.9066 16.6078 19.8474 16.7634 19.7822 16.9189C19.6304 17.2608 19.6642 17.6591 19.871 17.9689C20.1439 18.3584 20.1016 18.8933 19.7709 19.2324L18.7119 20.3198C18.4091 20.6303 17.9314 20.6703 17.5835 20.4143C17.293 20.2107 16.9168 20.1883 16.6053 20.3559C16.3833 20.4687 16.1554 20.5688 15.9228 20.6558C15.5974 20.7709 15.3575 21.0565 15.2949 21.4036C15.2285 21.8403 14.8635 22.1633 14.4326 22.1666H12.8537Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.3037 13.9999C16.3037 15.5032 15.1156 16.7218 13.6499 16.7218C12.1842 16.7218 10.9961 15.5032 10.9961 13.9999C10.9961 12.4967 12.1842 11.2781 13.6499 11.2781C15.1156 11.2781 16.3037 12.4967 16.3037 13.9999Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span className="group-hover:text-[#c5a23f]">Settings</span>
          </div>
        </section>

        {/* Profile */}
        {show.profile && (
          <div className="w-full">
            <div className="w-full text-white">
              <div className="flex flex-col justify-center bg-[#242423] p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-4 flex flex-row gap-2">
                  {" "}
                  <Image src={icon1} alt="" />
                  <span>Personal Info</span>
                </h2>
                <div className="flex justify-center my-4 items-center space-x-3">
                  <div>
                    <span className="text-[10px] md:text-sm bg-white text-black py-1 px-3 rounded-tl-[4px] rounded-bl-[4px] text-nowrap">
                      No file chosen
                    </span>
                    <label
                      className="cursor-pointer text-[10px] md:text-sm bg-[#16110D] py-1 px-3 rounded-tr-[4px] rounded-br-[4px] text-nowrap"
                      htmlFor="file-upload"
                    >
                      choose file
                    </label>
                  </div>
                  <input className="hidden" id="file-upload" type="file" />
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    {img ? (
                      <Image
                        alt="profile picture"
                        src={img}
                        className="object-contain"
                      />
                    ) : (
                      <Image
                        src={icon1}
                        alt="profile icon"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
                <div className="pb-6">
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex-1 mr-4">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="الاسم الأول"
                        type="text"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="اسم العائلة"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex-1 mr-4">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="الاسم الأول"
                        type="text"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="اسم العائلة"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex-1 mr-4">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="الاسم الأول"
                        type="text"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="اسم العائلة"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex-1 mr-4">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="الاسم الأول"
                        type="text"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="اسم العائلة"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-[20%] bg-[#f59e0b] text-white">
                      حفظ
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full text-white mt-14">
              <div className="bg-[#242423] p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-4 flex flex-row gap-2">
                  {" "}
                  <Image src={icon2} alt="" />
                  <span>Security Info</span>
                </h2>

                <div className="pb-6">
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex-1 mr-4">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="الاسم الأول"
                        type="text"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="اسم العائلة"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex-1 mr-4">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="الاسم الأول"
                        type="text"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="اسم العائلة"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex-1 mr-4">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="الاسم الأول"
                        type="text"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="اسم العائلة"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex-1 mr-4">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="الاسم الأول"
                        type="text"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="اسم العائلة"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-[20%] bg-[#f59e0b] text-white">
                      حفظ
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* file */}
        {show.file && (
          <div className="flex flex-col sm:items-center md:items-start gap-y-4 lg:flex-row w-full mb-16">
            <div className="w-70 md:w-96 bg-[#1F1F1F] p-4 h-fit">
              <ul className="space-y-2 font-semibold">
                <li className="flex items-center justify-between px-6 py-4 hover:bg-yellow-500 hover:text-black rounded-[5px]">
                  <span>First Bargin</span>
                </li>
                <li className="flex items-center justify-between px-6 py-4 hover:bg-yellow-500 hover:text-black rounded-[5px]">
                  <span>Second Bargin</span>
                  <Image src={icon3} alt="" />
                </li>
                <li className="flex items-center justify-between px-6 py-4 hover:bg-yellow-500 hover:text-black rounded-[5px]">
                  <span>Third Bargin</span>
                  <Image src={icon3} alt="" />
                </li>
              </ul>
            </div>
            {!isOpen && (
              <div className="w-44 ms-5">
                <div className="flex justify-between bg-[#2d2422] w-72  text-white font-medium rounded-lg text-sm px-4 py-2.5 text-center items-center">
                  <button className="" type="button">
                    Buying Request
                  </button>
                  <Image src={icon3} alt="" />
                </div>
                <div className="flex gap-2 ms-4 my-3 text-black">
                  <button
                    className="p-2 px-8 rounded-[5px] font-semibold hover:opacity-80 bg-[#e5bb44]"
                    onClick={() => {
                      setIsOpen(true);
                      setIsFirstDropdownOpen(true);
                    }}
                  >
                    Accept
                  </button>
                  <button className="p-2 px-8 rounded-[5px] font-semibold hover:opacity-80 bg-slate-400">
                    Refuse
                  </button>
                </div>
              </div>
            )}
            <div className="w-fit flex flex-col lg:mx-8">
              <div className="bg-[#2d2422] sm:w-fit md:w-full text-white">
                {isOpen && (
                  <div className="font-bold flex justify-between w-fit text-[20px] p-4">
                    <button
                      onClick={() => {
                        setActiveButton("first");
                        setIsSecondDropdownOpen(!isSecondDropdownOpen);
                        setIsFirstDropdownOpen(!isFirstDropdownOpen);
                      }}
                      className={`rounded-lg px-4 py-2.5  text-nowrap text-center ${
                        activeButton === "first"
                          ? "text-[#eac868]"
                          : "text-white"
                      }`}
                      type="button"
                    >
                      First Buy Request
                    </button>

                    <button
                      onClick={() => {
                        setActiveButton("second");
                        setIsSecondDropdownOpen(true);
                        setIsFirstDropdownOpen(!isFirstDropdownOpen);
                      }}
                      className={`rounded-lg px-4 py-2.5  text-nowrap text-center ml-4 ${
                        activeButton === "second"
                          ? "text-[#eac868]"
                          : "text-white"
                      }`}
                      type="button"
                    >
                      Basic Info
                    </button>
                  </div>
                )}

                {isOpen && isFirstDropdownOpen && (
                  <div
                    className=" border-t-2 border-t-[#46423f]  list-none rounded shadow px-6 p-4"
                    id="dropdown"
                  >
                    <div className="mt-8 space-y-3">
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm">طلب شراء</span>
                        </div>
                        <span className="text-sm">إسم الطلب</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm">
                            عيار الذهب المتفق عليه{" "}
                          </span>
                        </div>
                        <span className="text-sm">عيار 21</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm">المصنعية لكل جرام</span>
                        </div>
                        <span className="text-sm">20 جم</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm">
                            سعر الجرام شامل المصنعية أثناء إرسال الطلب
                          </span>
                        </div>
                        <span className="text-sm">2850 جم</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm">
                            سعر الجرام الفعلي شامل المصنعية أثناء تنفيذ الطلب
                          </span>
                        </div>
                        <span className="text-sm">2850 جم</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm">
                            إجمالي رأس مال العميل أثناء تنفيذ الطلب
                          </span>
                        </div>
                        <span className="text-sm">300.00 جم</span>
                      </div>
                    </div>
                  </div>
                )}

                {isSecondDropdownOpen && !isFirstDropdownOpen && (
                  <div
                    className=" border-t-2 border-t-[#46423f]  list-none rounded shadow px-6 p-4"
                    id="dropdown"
                  >
                    <div className="mt-8 space-y-3">
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm">طلب شراء</span>
                        </div>
                        <span className="text-sm">إسم الطلب</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm">
                            عيار الذهب المتفق عليه{" "}
                          </span>
                        </div>
                        <span className="text-sm">عيار 21</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm">المصنعية لكل جرام</span>
                        </div>
                        <span className="text-sm">20 جم</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm">
                            سعر الجرام شامل المصنعية أثناء إرسال الطلب
                          </span>
                        </div>
                        <span className="text-sm">2850 جم</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm">
                            سعر الجرام الفعلي شامل المصنعية أثناء تنفيذ الطلب
                          </span>
                        </div>
                        <span className="text-sm">2850 جم</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm">
                            إجمالي رأس مال العميل أثناء تنفيذ الطلب
                          </span>
                        </div>
                        <span className="text-sm">300.00 جم</span>
                      </div>
                    </div>
                  </div>
                )}
                {isOpen && (
                  <div className="my-10 mx-5 ">
                    <button className="bg-[#f2c94c] hover:opacity-80 font-semibold text-[#1a1a1a] rounded-[5px] w-full py-4">
                      تنفيذ الطلب
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {/* settings */}
        {show.settings && (
          <div className="w-full mb-20">
            <div className="w-full text-white">
              <div className="flex flex-col justify-center bg-[#242423] p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-4 flex flex-row gap-2">
                  {" "}
                  <Image src={icon4} alt="" />
                  <span>Notifications</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">payment</span>
                    <input type="checkbox" id="payment" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">2FA</span>
                    <input type="checkbox" id="2fa" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">security</span>
                    <input type="checkbox" id="security" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">email-service</span>
                    <input type="checkbox" id="email-service" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">sms-service</span>
                    <input type="checkbox" id="sms-service" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full text-white mt-14">
              <div className="bg-[#242423] p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-4 flex flex-row gap-2">
                  {" "}
                  <Image src={icon2} alt="" />
                  <span>Security Info</span>
                </h2>

                <div className="pb-6">
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex-1 mr-4">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="الاسم الأول"
                        type="text"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="اسم العائلة"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex-1 mr-4">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="الاسم الأول"
                        type="text"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="اسم العائلة"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex-1 mr-4">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="الاسم الأول"
                        type="text"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="اسم العائلة"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex-1 mr-4">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="الاسم الأول"
                        type="text"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        className="w-full bg-[#16110D] p-1 rounded-[5px] outline-none ps-2"
                        placeholder="اسم العائلة"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-[20%] bg-[#f59e0b] text-white">
                      حفظ
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
