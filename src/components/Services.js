import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  Heart,
  Eye,
  Scissors,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Services = () => {
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      icon: Sparkles,
      title: "Manicure & Pedicure",
      description:
        "Expert nail care treatments for beautiful, healthy hands and feet.",
      features: [
        "Classic & gel manicures",
        "Luxury pedicures",
        "Nail art & design",
        "Nail repair & care",
      ],
      color: "text-pink-500",
      bgColor: "bg-pink-100",
      borderColor: "border-pink-200",
    },
    {
      icon: Heart,
      title: "Gel & Acrylic Nails",
      description:
        "Long-lasting nail extensions and enhancements for stunning results.",
      features: [
        "Gel extensions",
        "Acrylic nails",
        "Nail strengthening",
        "Custom designs",
      ],
      color: "text-rose-500",
      bgColor: "bg-rose-100",
      borderColor: "border-rose-200",
    },
    {
      icon: Eye,
      title: "Eyelash & Eyebrow Treatments",
      description:
        "Professional lash and brow services for captivating, defined features.",
      features: [
        "Lash extensions",
        "Brow shaping & tinting",
        "Lash lifting",
        "Brow microblading",
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      icon: Scissors,
      title: "Waxing & Facials",
      description:
        "Smooth, hair-free skin and rejuvenating facial treatments for glowing results.",
      features: [
        "Full body waxing",
        "Luxury facials",
        "Skincare treatments",
        "Anti-aging solutions",
      ],
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding bg-gradient-to-b from-pink-50 to-white"
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900">
              Our{" "}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mb-8"></div>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-600">
              Discover our range of premium beauty treatments designed to
              enhance your natural beauty and boost your confidence.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 bg-white hover:shadow-2xl border-2 ${service.borderColor}`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-lg mb-6 text-gray-600">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle
                        className={`w-4 h-4 ${service.color} flex-shrink-0`}
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className={`flex items-center space-x-2 text-sm font-semibold ${service.color} group-hover:opacity-80 transition-opacity`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Service Highlights */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl p-8 md:p-12 bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-100"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-pink-100">
                  <Sparkles className="w-8 h-8 text-pink-600" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">
                  Premium Products
                </h4>
                <p className="text-gray-600">
                  Only the finest quality beauty products
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-pink-100">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">
                  Expert Care
                </h4>
                <p className="text-gray-600">
                  Professional treatments with personal attention
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-pink-100">
                  <CheckCircle className="w-8 h-8 text-pink-600" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">
                  Satisfaction Guaranteed
                </h4>
                <p className="text-gray-600">
                  Your happiness is our top priority
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
