import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Clock,
  Zap,
  DollarSign,
  Heart,
  Shield,
  Award,
  CheckCircle,
  Star,
} from "lucide-react";

const WhyChooseUs = () => {
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

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const reasons = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service for emergencies and urgent repairs",
      color: "text-blue-500",
    },
    {
      icon: Zap,
      title: "Fast Call-Outs",
      description: "Quick response times with professional mobile service",
      color: "text-yellow-500",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive rates with transparent, no-hidden-fees pricing",
      color: "text-green-500",
    },
    {
      icon: Heart,
      title: "Friendly Local Service",
      description: "Personal touch with local expertise and community focus",
      color: "text-red-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Hackney",
      rating: 5,
      text: "Amazing service! They came to my office and fixed my flat tyre in 20 minutes. Professional and friendly.",
    },
    {
      name: "Mike Chen",
      location: "Tower Hamlets",
      rating: 5,
      text: "Called them at 2 AM for an emergency repair. They were there within 30 minutes. Highly recommended!",
    },
    {
      name: "Emma Williams",
      location: "Newham",
      rating: 5,
      text: "Great prices and excellent service. They saved me so much time by coming to my home.",
    },
  ];

  return (
    <section id="why-choose" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-display font-bold mb-6 ${"text-brand-dark"}`}
            >
              Why Choose <span className="text-gradient">Rhianna Tyres?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
            <p
              className={`text-xl leading-relaxed max-w-3xl mx-auto ${"text-gray-600"}`}
            >
              We're not just another tyre service. We're your local mobile tyre
              experts, committed to providing exceptional service that goes
              above and beyond.
            </p>
          </motion.div>

          {/* Main Content - Split Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image Side */}
            <motion.div variants={imageVariants} className="relative">
              <div
                className={`relative rounded-3xl overflow-hidden ${"bg-gray-100"}`}
              >
                {/* Placeholder for mechanic/van image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-brand-blue/20 to-brand-electric/20 flex items-center justify-center">
                  <div className="text-center">
                    <Shield
                      className={`w-24 h-24 mx-auto mb-4 ${"text-orange-600"}`}
                    />
                    <p className={`text-lg ${"text-gray-600"}`}>
                      Professional Mobile Service
                    </p>
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div
                        className={`text-2xl font-bold ${"text-brand-dark"}`}
                      >
                        1000+
                      </div>
                      <div className={`text-sm ${"text-gray-600"}`}>
                        Happy Customers
                      </div>
                    </div>
                    <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
                    <div className="text-center">
                      <div
                        className={`text-2xl font-bold ${"text-brand-dark"}`}
                      >
                        5★
                      </div>
                      <div className={`text-sm ${"text-gray-600"}`}>
                        Average Rating
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div variants={textVariants} className="space-y-8">
              <div>
                <h3 className={`text-3xl font-bold mb-6 ${"text-brand-dark"}`}>
                  Experience the Difference
                </h3>
                <p
                  className={`text-lg leading-relaxed mb-8 ${"text-gray-600"}`}
                >
                  When you choose Rhianna Tyres, you're choosing more than just
                  a tyre service. You're choosing convenience, reliability, and
                  a team that truly cares about getting you back on the road
                  safely.
                </p>
              </div>

              {/* Reasons List */}
              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${"bg-gray-100"}`}
                    >
                      <reason.icon className={`w-6 h-6 ${reason.color}`} />
                    </div>
                    <div>
                      <h4
                        className={`text-xl font-semibold mb-2 ${"text-brand-dark"}`}
                      >
                        {reason.title}
                      </h4>
                      <p className={`${"text-gray-600"}`}>
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div whileHover={{ scale: 1.02 }} className="pt-6">
                <button className="btn-primary text-lg px-8 py-4">
                  Get Your Quote Today
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Testimonials */}
          <motion.div variants={itemVariants}>
            <h3
              className={`text-3xl font-bold text-center mb-12 ${"text-brand-dark"}`}
            >
              What Our Customers Say
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl ${
                    false
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-50 hover:bg-white shadow-lg hover:shadow-xl"
                  } transition-all duration-300`}
                >
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-primary-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className={`text-lg mb-4 ${"text-gray-600"}`}>
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        false ? "bg-primary-500/20" : "bg-primary-500/10"
                      }`}
                    >
                      <span className={`font-semibold ${"text-orange-600"}`}>
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className={`font-semibold ${"text-brand-dark"}`}>
                        {testimonial.name}
                      </div>
                      <div
                        className={`text-sm ${
                          false ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div
                className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                  false
                    ? "bg-green-500/20 text-green-400"
                    : "bg-green-100 text-green-700"
                }`}
              >
                <Award className="w-5 h-5" />
                <span className="font-semibold">Fully Licensed</span>
              </div>
              <div
                className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                  false
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Fully Insured</span>
              </div>
              <div
                className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                  false
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Quality Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
