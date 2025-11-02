import React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight, Star, Sparkles } from "lucide-react";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 pt-16"
    >
      {/* Soft Pastel Background with Floral Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-rose-50/30 to-pink-50/50">
        <div className="absolute inset-0 bg-floral-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        {/* Soft circular gradients */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-pink-200/30 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full bg-rose-200/30 blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Floating sparkles */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-rose-300 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6"
          >
            C&C Nails and Beauty
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Professional nail and beauty
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-gray-700">
              treatments in the heart of London.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Experience luxury beauty treatments that make you look and feel your
            best. From flawless nails to relaxing skincare—{" "}
            <span className="text-pink-600 font-semibold">
              your beauty, our passion.
            </span>
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mb-12 text-gray-600"
          >
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-pink-500 fill-current" />
              <span>5-Star Rated Salon</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span>Premium Quality</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <span>Central London Location</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg flex items-center space-x-3 group"
            >
              <Calendar size={24} />
              <span>Book Appointment</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>

            <motion.a
              href="#services"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-transparent border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg flex items-center space-x-3 group"
            >
              <Sparkles size={24} />
              <span>View Services</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
