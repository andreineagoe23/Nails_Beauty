import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Wrench,
  Phone,
  Shield,
  Settings,
  Clock,
  MapPin,
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
      icon: Wrench,
      title: "Tyre Replacement",
      description:
        "Professional tyre fitting with premium brands and competitive pricing.",
      features: [
        "All tyre brands",
        "Premium quality",
        "Competitive prices",
        "Quick fitting",
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Phone,
      title: "Emergency Call-Outs",
      description:
        "24/7 emergency tyre service for breakdowns and urgent repairs.",
      features: [
        "24/7 availability",
        "Fast response",
        "Roadside assistance",
        "Emergency repairs",
      ],
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
    },
    {
      icon: Shield,
      title: "Puncture Repairs",
      description:
        "Expert puncture repair service to get you back on the road safely.",
      features: [
        "Professional repair",
        "Quality materials",
        "Warranty included",
        "Same-day service",
      ],
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: Settings,
      title: "Wheel Balancing",
      description:
        "Precision wheel balancing for smooth driving and extended tyre life.",
      features: [
        "Precision balancing",
        "Modern equipment",
        "Extended tyre life",
        "Smooth driving",
      ],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
  ];

  return (
    <section id="services" ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-dark">
              Our <span className="text-gradient">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-600">
              Professional mobile tyre services delivered directly to your
              location. From emergency repairs to routine maintenance, we've got
              you covered.
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
                className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 ${
                  false
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-50 shadow-lg hover:shadow-2xl"
                } ${service.borderColor} border-2`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </motion.div>

                {/* Content */}
                <h3 className={`text-2xl font-bold mb-4 ${"text-brand-dark"}`}>
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
            className={`rounded-3xl p-8 md:p-12`}
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${"bg-orange-500/20"}`}
                >
                  <Clock className={`w-8 h-8 ${"text-orange-600"}`} />
                </div>
                <h4 className={`text-xl font-bold mb-2 ${"text-brand-dark"}`}>
                  Quick Response
                </h4>
                <p className="text-gray-600">
                  Average response time of 30 minutes
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${"bg-orange-500/20"}`}
                >
                  <MapPin className={`w-8 h-8 ${"text-orange-600"}`} />
                </div>
                <h4 className={`text-xl font-bold mb-2 ${"text-brand-dark"}`}>
                  Wide Coverage
                </h4>
                <p className="text-gray-600">
                  Serving East London and surrounding areas
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${"bg-orange-500/20"}`}
                >
                  <Shield className={`w-8 h-8 ${"text-orange-600"}`} />
                </div>
                <h4 className={`text-xl font-bold mb-2 ${"text-brand-dark"}`}>
                  Fully Insured
                </h4>
                <p className="text-gray-600">
                  Licensed and insured for your peace of mind
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
