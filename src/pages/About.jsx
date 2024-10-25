import React from "react";

//images
import WomanImg from "../img/home/woman.png";

//link
import { Link } from "react-router-dom";

//motion
import { motion } from "framer-motion";

//transition
import { transition1 } from "../transitions";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* TEXT + IMAGE WRAPPER */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* IMAGE */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt="" />
          </div>
          {/* TEXT */}
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About me</h1>
            <p className="max-w-sm mb-12">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              <b> Distinctio facere aut eius quaerat?</b> Sapiente nostrum
              necessitatibus est rem ea dignissimos quisquam magnam expedita ab,
              debitis earum aspernatur! Consectetur, explicabo magni!
            </p>
            <Link className="btn" to={"/portfolio"}>
              Galerie
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
