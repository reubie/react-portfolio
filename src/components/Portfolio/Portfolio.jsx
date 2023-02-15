import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
        <a href="https://gochapaa.io/">
          <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./gochapaa.png" alt="project" />
        </a>
        <a href="https://nilipie.co.ke/web/index.php">
          <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./nilipie.png" alt="project" />
        </a>
        <a href="https://marafiki.co.ke/frontend/web/index.php?r=site%2Findex">
          <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./marafiki.png" alt="project" />
        </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
