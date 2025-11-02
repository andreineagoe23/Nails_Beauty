import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Clock,
  Sparkles,
  Heart,
  Award,
  CheckCircle,
  Star,
  Shield,
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
      icon: Award,
      title: "Expert Professionals",
      description:
        "Highly trained beauticians with years of experience and passion for beauty",
      color: "text-pink-500",
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description:
        "Only the finest products and latest techniques for stunning results",
      color: "text-rose-500",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description:
        "Every treatment tailored to your unique needs and preferences",
      color: "text-pink-600",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Convenient appointment times to fit your busy schedule",
      color: "text-rose-600",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Camden",
      rating: 5,
      text: "Absolutely amazing service! My nails look perfect and the staff are so friendly and professional. I couldn't be happier!",
    },
    {
      name: "Emma Williams",
      location: "Islington",
      rating: 5,
      text: "Best beauty salon in London! The lash extensions are gorgeous and lasted so long. Highly recommend to everyone!",
    },
    {
      name: "Sophie Brown",
      location: "Shoreditch",
      rating: 5,
      text: "The facial treatment was so relaxing and my skin has never looked better. This salon truly understands beauty.",
    },
  ];

  return (
    <section
      id="why-choose"
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
              Why Choose{" "}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                C&C Nails and Beauty?
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mb-8"></div>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-600">
              We're not just another beauty salon. We're your local beauty
              experts, committed to providing exceptional service that makes you
              feel beautiful inside and out.
            </p>
          </motion.div>

          {/* Main Content - Split Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image Side */}
            <motion.div variants={imageVariants} className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-pink-100 to-rose-100">
                {/* Placeholder for salon image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-pink-200/50 to-rose-200/50 flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-24 h-24 mx-auto mb-4 text-pink-600" />
                    <p className="text-lg text-gray-600">
                      Professional Beauty Salon
                    </p>
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-pink-100">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        1000+
                      </div>
                      <div className="text-sm text-gray-600">Happy Clients</div>
                    </div>
                    <div className="w-px h-12 bg-gray-300"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">5★</div>
                      <div className="text-sm text-gray-600">
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
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  Experience the Difference
                </h3>
                <p className="text-lg leading-relaxed mb-8 text-gray-600">
                  When you choose C&C Nails and Beauty, you're choosing more
                  than just a beauty service. You're choosing luxury, quality,
                  and a team that truly cares about your beauty and wellbeing.
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
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-pink-100">
                      <reason.icon className={`w-6 h-6 ${reason.color}`} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-gray-900">
                        {reason.title}
                      </h4>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div whileHover={{ scale: 1.02 }} className="pt-6">
                <a
                  href="#contact"
                  className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg inline-block"
                >
                  Book Your Appointment Today
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Testimonials */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
              What Our Clients Say
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white hover:shadow-xl border border-pink-100 transition-all duration-300"
                >
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-pink-500 fill-current"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg mb-4 text-gray-600">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-100">
                      <span className="font-semibold text-pink-600">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
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
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-green-100 text-green-700">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Fully Licensed</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700">
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
