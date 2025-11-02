import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 pt-16 px-4"
    >
      {/* Soft Pastel Background with Floral Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-rose-50/30 to-pink-50/50">
        <div className="absolute inset-0 bg-floral-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
      </div>

      {/* Decorative Elements - Simplified for mobile */}
      <div className="absolute inset-0 hidden md:block">
        {/* Soft circular gradients */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-pink-200/30 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full bg-rose-200/30 blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto"
        >
          {/* Main Headline - Simplified for mobile */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-4 sm:mb-6 px-2"
          >
            <span className="block">C&C Nails and Beauty</span>
            <span className="block mt-2 sm:mt-4 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
              Professional Beauty Salon
            </span>
          </motion.h1>

          {/* Subtext - Hidden on mobile, shown on larger screens */}
          <motion.p
            variants={itemVariants}
            className="hidden md:block text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Experience luxury beauty treatments in the heart of London.
          </motion.p>

          {/* Trust indicators - Simplified for mobile */}
          <motion.div
            variants={itemVariants}
            className="hidden md:flex justify-center items-center gap-6 mb-8 md:mb-12 text-gray-600 text-sm md:text-base"
          >
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />
              <span>Premium Quality</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <span>London</span>
            </div>
          </motion.div>

          {/* CTA Buttons - Stacked on mobile, side by side on desktop */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <motion.a
              href="#contact"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3 group"
            >
              <Calendar size={20} className="sm:w-6 sm:h-6" />
              <span>Book Appointment</span>
              <ArrowRight
                size={18}
                className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
              />
            </motion.a>

            <motion.a
              href="#services"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full sm:w-auto bg-transparent border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3 group"
            >
              <Sparkles size={20} className="sm:w-6 sm:h-6" />
              <span>View Services</span>
              <ArrowRight
                size={18}
                className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-pink-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
