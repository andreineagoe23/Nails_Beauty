import React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight, Star } from "lucide-react";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-16"
    >
      {/* Background with tire pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-dark to-gray-800">
        <div className="absolute inset-0 bg-tire-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Tyre-themed Background */}
      <div className="absolute inset-0">
        {/* Main tyre pattern background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border-4 border-orange-500/30 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full border-2 border-orange-400/20 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-orange-300/10 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Secondary tyre pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full border-4 border-brand-electric/30 transform translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 rounded-full border-2 border-brand-electric/20 transform translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 rounded-full border border-brand-electric/10 transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Road lines pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-orange-400 transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-300 transform -translate-y-1/2 translate-y-8"></div>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-300 transform -translate-y-1/2 -translate-y-8"></div>
        </div>

        {/* Animated tyre tread marks */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute top-1/3 left-0 w-32 h-32 rounded-full border-2 border-orange-500"
            animate={{
              rotate: 360,
              x: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-2/3 right-0 w-24 h-24 rounded-full border-2 border-brand-electric"
            animate={{
              rotate: -360,
              x: [
                0, -100, -200, -300, -400, -500, -600, -700, -800, -900, -1000,
              ],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-electric/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-blue/10 to-brand-electric/20"></div>
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
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 text-shadow-lg"
          >
            Fast. Reliable.{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Mobile Tyre Fitting
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-orange-400">
              — We Come to You.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Professional tyre repair and replacement service that comes to your
            home, work, or roadside —{" "}
            <span className="text-orange-400 font-semibold">24/7</span>
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mb-12 text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-orange-400 fill-current" />
              <span>5-Star Rated Service</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available 24/7</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <span>East London & Surrounding Areas</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="tel:+441234567890"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg px-8 py-4 flex items-center space-x-3 group"
            >
              <Phone size={24} />
              <span>Call Now</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4 flex items-center space-x-3 group"
            >
              <Calendar size={24} />
              <span>Book Online</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
          </motion.div>

          {/* Emergency notice */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-4 bg-red-600/20 border border-red-500/30 rounded-lg max-w-md mx-auto"
          >
            <p className="text-red-300 font-medium">
              🚨 Emergency? Call us now for immediate assistance!
            </p>
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
          className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-orange-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
