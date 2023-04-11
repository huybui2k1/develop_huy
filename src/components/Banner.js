import React from "react";
import { Link } from "react-scroll";
import Image from "../assets/avatar.svg";
import {
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx_auto">
        <div className="flex flex-col ga[-y-8 lg;flex-row lg:center lg:gap-x-12">
          {/* texxt */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              BUI QUANG<span> HUY </span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px]font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mI-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Student",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I'm from Ha Tinh Province , Cam Xuyen Town
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact me </button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.youtube.com/@quanghuybui4223/featured"
                src=""
              >
                <FaYoutube />
              </a>
              <a href="https://www.facebook.com/B.Q.H.5503">
                {/* <link to="https://www.facebook.com/B.Q.H.5503"></link> */}
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial={"hidden"}
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482] mx-auto"
          >
            <img src={"Image"} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
