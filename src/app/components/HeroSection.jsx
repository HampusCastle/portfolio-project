"use client";
import React, {useState} from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { blue, red } from "tailwindcss/colors";

const HeroSection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }

  const downloadCV = (language) => {
    setSelectedLanguage(language);
    closeModal();
  }

  const linkCV = () => {
  const cvPath =
   selectedLanguage === "english" 
   ? '/användare/admin/next/nextportfolio/CVs/english/CV_English.pdf' 
   : '/användare/admin/next/nextportfolio/CVs/swedish/CV_Swedish.pdf';
  const fileName =
   selectedLanguage === "english" 
   ? '/användare/admin/next/nextportfolio/CVs/english/CV_English.pdf' 
   : '/användare/admin/next/nextportfolio/CVs/swedish/CV_Swedish.pdf';  

  const link = document.createElement("a");
  link.href = cvPath;
  link.download = fileName;
  link.click();

  }
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Hampus",
                1000,
                "Software developer",
                1000,
                "Fullstack developer",
                1000,
                "Funstack developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Currently studying to become an Fullstack-developer in Java/Javascript.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Let's Connect!
            </Link>
              <button onClick={openModal} className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
              </button>
          </div>

          {isModalOpen && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
    <div className="absolute w-full h-full bg-black bg-opacity-80" onClick={closeModal}></div>
    <div className="p-8 rounded-lg font-bold text-center relative bg-[#181818] text-white">
      <p className="mb-4 text-lg font-semibold">Choose CV language:</p>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => downloadCV("english")}
          className="px-6 py-3 rounded-full font-bold bg-gradient-to-br from-red-700 to-white hover:opacity-80 text-white focus:outline-none focus:ring focus:border-blue-300"
        >
          English
        </button>
        <button
          onClick={() => downloadCV("swedish")}
          className="px-6 py-3 font-bold rounded-full bg-gradient-to-br from-yellow-500 to-blue-700 hover:opacity-80 text-white focus:outline-none focus:ring focus:border-blue-300"
        >
          Swedish
        </button>
      </div>
      <button
        onClick={closeModal}
        className="mt-4 px-6 py-3 font-bold rounded-full bg-gradient-to-br from-black to-black hover:opacity-80 text-white focus:outline-none focus:ring focus:border-blue-300"
      >
        Go back
      </button>
    </div>
  </div>
)}

        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative transition-opacity ease-in-out duration-500">
      <Image
        src="/images/hero-image.png"
        alt="hero image"
        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        width={300}
        height={300}
         />
      </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
