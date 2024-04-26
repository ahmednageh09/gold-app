"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../assets/latest1.png";
import img2 from "../../assets/latest2.png";
import img3 from "../../assets/latest3.png";
import img4 from "../../assets/latest4.png";
import img5 from "../../assets/all1.png";
import img6 from "../../assets/all2.png";
import img7 from "../../assets/all3.png";
import img8 from "../../assets/all4.png";
import img9 from "../../assets/all5.png";
import img10 from "../../assets/all6.png";
import img11 from "../../assets/all7.png";
import img12 from "../../assets/all8.png";
import img13 from "../../assets/most1.png";
import img14 from "../../assets/most2.png";
import img15 from "../../assets/most3.png";
import img16 from "../../assets/most4.png";
import icon1 from "../../assets/Mailbox.svg";

export default function BlogPage() {
  const latestPosts = [
    {
      id: 1,
      title: "Understanding the Basics of Quantum Computing",
      imgSrc: img1,
      description:
        "Quantum computing is poised to revolutionize technology as we know it, but how does it work?",
      date: "April 15, 2023",
      readTime: "12 min read",
    },
    {
      id: 2,
      title: "Understanding the Basics of Quantum Computing",
      imgSrc: img2,
      description:
        "Quantum computing is poised to revolutionize technology as we know it, but how does it work?",
      date: "April 15, 2023",
      readTime: "12 min read",
    },
    {
      id: 3,
      title: "Understanding the Basics of Quantum Computing",
      imgSrc: img3,
      description:
        "Quantum computing is poised to revolutionize technology as we know it, but how does it work?",
      date: "April 15, 2023",
      readTime: "12 min read",
    },
    {
      id: 4,
      title: "Understanding the Basics of Quantum Computing",
      imgSrc: img4,
      description:
        "Quantum computing is poised to revolutionize technology as we know it, but how does it work?",
      date: "April 15, 2023",
      readTime: "12 min read",
    },
    {
      id: 5,
      title: "Breaking Down Blockchain Technology",
      imgSrc: img5,
      description:
        " A beginners guide to understanding how blockchain works and why its important.",
      date: "March 30, 2023",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "Understanding the Basics of Quantum Computing",
      imgSrc: img6,
      description:
        "Quantum computing is poised to revolutionize technology as we know it, but how does it work?",
      date: "April 15, 2023",
      readTime: "12 min read",
    },
    {
      id: 7,
      title: "Understanding the Basics of Quantum Computing",
      imgSrc: img7,
      description:
        "Quantum computing is poised to revolutionize technology as we know it, but how does it work?",
      date: "April 15, 2023",
      readTime: "12 min read",
    },
    {
      id: 8,
      title: "Understanding the Basics of Quantum Computing",
      imgSrc: img8,
      description:
        "Quantum computing is poised to revolutionize technology as we know it, but how does it work?",
      date: "April 15, 2023",
      readTime: "12 min read",
    },
    {
      id: 9,
      title: "Breaking Down Blockchain Technology",
      imgSrc: img9,
      description:
        " A beginners guide to understanding how blockchain works and why its important.",
      date: "March 30, 2023",
      readTime: "7 min read",
    },
    {
      id: 10,
      title: "Understanding the Basics of Quantum Computing",
      imgSrc: img10,
      description:
        "Quantum computing is poised to revolutionize technology as we know it, but how does it work?",
      date: "April 15, 2023",
      readTime: "12 min read",
    },
    {
      id: 11,
      title: "Understanding the Basics of Quantum Computing",
      imgSrc: img11,
      description:
        "Quantum computing is poised to revolutionize technology as we know it, but how does it work?",
      date: "April 15, 2023",
      readTime: "12 min read",
    },
    {
      id: 12,
      title: "Understanding the Basics of Quantum Computing",
      imgSrc: img12,
      description:
        "Quantum computing is poised to revolutionize technology as we know it, but how does it work?",
      date: "April 15, 2023",
      readTime: "12 min read",
    },
    {
      id: 13,
      title: "Breaking Down Blockchain Technology",
      imgSrc: img13,
      description:
        " A beginners guide to understanding how blockchain works and why its important.",
      date: "March 30, 2023",
      readTime: "7 min read",
    },
    {
      id: 14,
      title: "Breaking Down Blockchain Technology",
      imgSrc: img14,
      description:
        " A beginners guide to understanding how blockchain works and why its important.",
      date: "March 30, 2023",
      readTime: "7 min read",
    },
    {
      id: 15,
      title: "Breaking Down Blockchain Technology",
      imgSrc: img15,
      description:
        " A beginners guide to understanding how blockchain works and why its important.",
      date: "March 30, 2023",
      readTime: "7 min read",
    },
    {
      id: 16,
      title: "Breaking Down Blockchain Technology",
      imgSrc: img16,
      description:
        " A beginners guide to understanding how blockchain works and why its important.",
      date: "March 30, 2023",
      readTime: "7 min read",
    },
  ];

  return (
    <div className="container text-white mx-auto px-4 sm:px-6 lg:px-8">
      <section className="mt-40">
        <h2 className="font-bold text-[25px]">Latest Articles </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 py-12">
          {latestPosts.slice(0, 1).map((post, id) => (
            <div
              key={id}
              className="lg:col-span-1"
            >
              <article className="space-y-4">
                <Image
                  alt="Featured blog post image"
                  className="w-full h-auto"
                  height="400"
                  src={post.imgSrc}
                  style={{
                    aspectRatio: "640/400",
                    objectFit: "cover",
                  }}
                  width="640"
                />
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="text-gray-400">{post.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            </div>
          ))}

          <div className="lg:col-span-1 space-y-8">
            {latestPosts.slice(1, 4).map((post, id) => (
              <article key={id} className="space-y-4">
                <div className="flex items-start flex-col sm:flex-row sm:space-x-8">
                  <Image
                    alt="Blog post image"
                    height="500"
                    src={post.imgSrc}
                    style={{
                      objectFit: "cover",
                    }}
                    width="500"
                  />
                  <div className="flex flex-col my-3 sm:my-0">
                    <h3 className="text-xl font-semibold md:text-nowrap">
                      {post.title}
                    </h3>
                    <p className="text-gray-400">{post.description}</p>
                    <div className="flex justify-between items-center text-sm mt-2">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-36">
        <h2 className="font-bold text-[25px]">All Articles </h2>
        <div className="space-y-28 py-12">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {latestPosts.slice(5, 13).map((post, id) => (
              <article key={id} className="space-y-4">
                <Image
                  alt="Blog post image"
                  className="w-full h-auto"
                  height="200"
                  src={post.imgSrc}
                  style={{
                    aspectRatio: "320/200",
                    objectFit: "cover",
                  }}
                  width="320"
                />
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-400">{post.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="my-44">
        <h2 className="font-bold text-[25px]">Most Readed Articles </h2>
        <div className="space-y-28 py-12">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {latestPosts.slice(12, 17).map((post, id) => (
              <article key={id} className="space-y-4">
                <Image
                  alt="Blog post image"
                  className="w-full h-auto"
                  height="200"
                  src={post.imgSrc}
                  style={{
                    aspectRatio: "320/200",
                    objectFit: "cover",
                  }}
                  width="320"
                />
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-400">{post.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="text-white bg-cover inset-0 object-fit-contain my-60">
        <div className="flex justify-center bg-[#2f2824]/70 flex-row px-3 sm:px-14 gap-28 w-fit">
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-[22px] sm:text-[30px] font-bold my-4 text-nowrap px-2">
              Subscribe to our newsletter
            </h3>
            <div className="text-[#BAB9B6] px-3">
              <p className="text-[18px] sm:text-[25px]">
                Enter your email to receive everything new in the world of
                e-commerce and our latest offers.
              </p>
              <form className="flex flex-col items-center sm:flex-row w-full gap-6 m-6">
                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  value={""}
                  className="bg-[#837f7c] rounded-xl p-4 outline-none text-white"
                />
                <button className="bg-[#e9bf4d] hover:bg-[#fde091] py-3 px-10 rounded-xl text-black font-semibold">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="hidden min-w-[40%] md:flex items-center justify-center">
            <span className="sr-only">Mail box icon</span>
            <Image
              priority
              src={icon1}
              alt={"mailbox icon"}
              className="-z-[2]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
