import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Users, Clock, MapPin, Award } from "lucide-react";

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
      icon: Zap,
      title: "Lightning Fast",
      description: "Quick response times with professional service",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Shield,
      title: "Reliable Service",
      description: "Trusted by thousands of customers across London",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Experienced technicians with years of expertise",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  ];

  const stats = [
    { icon: Clock, value: "24/7", label: "Availability" },
    { icon: MapPin, value: "50+", label: "Areas Covered" },
    { icon: Award, value: "1000+", label: "Happy Customers" },
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-dark">
              About{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Rhianna Tyres
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-600">
              Rhiannon Rhianna Mobile Tyres provides fast, professional tyre
              fitting across East London and nearby areas. We're fully mobile —
              so you don't need to waste time at a garage.
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
                className="p-8 rounded-2xl transition-all duration-300 bg-gray-50 hover:bg-white shadow-lg hover:shadow-xl"
              >
                <motion.div
                  variants={iconVariants}
                  className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl p-8 md:p-12 bg-gradient-to-r from-gray-50 to-gray-100"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-orange-500/10">
                    <stat.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-brand-dark">
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-green-100 text-green-700">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">Fully Licensed & Insured</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
