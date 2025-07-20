import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerImage from "../../../src/assets/banner.jpeg" // Adjust the path as necessary

function Banner() {
  return (
    <div className="w-full h-[20rem] relative overflow-hidden">
      {/* Background image */}
      <motion.img
        src={BannerImage}
        className="w-full h-full object-cover"
        alt="banner"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center gap-6 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          {/* Main heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-yellow-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Welcome to CoinGecko
          </motion.h1>

          {/* Carousel text */}
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            showIndicators={false} // 👈 This hides the dots
            interval={3000}
            transitionTime={800}
            swipeable
            emulateTouch
            stopOnHover
            className="w-full max-w-[30rem] text-white"
          >
            <div>
              <p className="text-lg md:text-xl font-medium">
                Discover real-time crypto market data.
              </p>
            </div>
            <div>
              <p className="text-lg md:text-xl font-medium">
                Track coins, prices, and market caps.
              </p>
            </div>
            <div>
              <p className="text-lg md:text-xl font-medium">
                Analyze trends with interactive charts.
              </p>
            </div>
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;
