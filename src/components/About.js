import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Sparkles, Award } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: Heart,
      title: "Attention to Detail",
      description: "Every treatment is performed with precision and care",
      color: "text-pink-500",
      bgColor: "bg-pink-100",
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "We use only the finest products and techniques",
      color: "text-rose-500",
      bgColor: "bg-rose-100",
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Highly trained professionals with years of experience",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
  ];

  const stats = [
    { icon: Award, value: "5★", label: "Customer Rating" },
    { icon: Heart, value: "1000+", label: "Happy Clients" },
    { icon: Sparkles, value: "10+", label: "Years Experience" },
  ];

  return (
    <section id="about" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900">
              About{" "}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                C&C Nails and Beauty
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mb-8"></div>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-600">
              At C&C Nails and Beauty, we believe every detail matters. From flawless nails to relaxing skincare treatments, our mission is to make you look and feel your best.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl transition-all duration-300 bg-gradient-to-br from-pink-50 to-rose-50 hover:shadow-xl border border-pink-100"
              >
                <motion.div
                  variants={iconVariants}
                  className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl p-8 md:p-12 bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-100"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-pink-100">
                    <stat.icon className="w-8 h-8 text-pink-600" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
