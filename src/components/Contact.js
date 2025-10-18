import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("success");
    setTimeout(() => {
      setFormStatus(null);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+44 123 456 7890", "+44 987 654 3210"],
      action: "tel:+441234567890",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@rhiannatyres.com", "emergency@rhiannatyres.com"],
      action: "mailto:info@rhiannatyres.com",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: ["East London", "Surrounding Areas"],
      action: null,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["24/7 Emergency Service", "Mon-Fri: 8AM-6PM"],
      action: null,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <section id="contact" ref={ref} className="section-padding bg-white">
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
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
            <p
              className={`text-xl leading-relaxed max-w-3xl mx-auto ${"text-gray-600"}`}
            >
              Ready to get your tyres sorted? Contact us today for a quote or
              emergency service. We're here to help 24/7.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className={`p-8 rounded-3xl ${"bg-gray-50"}`}>
                <h3 className={`text-2xl font-bold mb-6 ${"text-brand-dark"}`}>
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className={`block text-sm font-semibold mb-2 ${"text-gray-700"}`}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                          false
                            ? "bg-gray-700 border-gray-600 text-white focus:border-primary-500"
                            : "bg-white border-gray-300 text-gray-900 focus:border-primary-500"
                        }`}
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        className={`block text-sm font-semibold mb-2 ${"text-gray-700"}`}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                          false
                            ? "bg-gray-700 border-gray-600 text-white focus:border-primary-500"
                            : "bg-white border-gray-300 text-gray-900 focus:border-primary-500"
                        }`}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 ${"text-gray-700"}`}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        false
                          ? "bg-gray-700 border-gray-600 text-white focus:border-primary-500"
                          : "bg-white border-gray-300 text-gray-900 focus:border-primary-500"
                      }`}
                      placeholder="+44 123 456 7890"
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 ${"text-gray-700"}`}
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none ${
                        false
                          ? "bg-gray-700 border-gray-600 text-white focus:border-primary-500"
                          : "bg-white border-gray-300 text-gray-900 focus:border-primary-500"
                      }`}
                      placeholder="Tell us about your tyre needs..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-3"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </motion.button>

                  {/* Form Status */}
                  {formStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg flex items-center space-x-3 ${
                        formStatus === "success"
                          ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                          : "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400"
                      }`}
                    >
                      {formStatus === "success" ? (
                        <CheckCircle size={20} />
                      ) : (
                        <AlertCircle size={20} />
                      )}
                      <span>
                        {formStatus === "success"
                          ? "Message sent successfully! We'll get back to you soon."
                          : "There was an error sending your message. Please try again."}
                      </span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className={`p-6 rounded-2xl transition-all duration-300 ${
                      false
                        ? "bg-gray-800 hover:bg-gray-700"
                        : "bg-gray-50 hover:bg-white shadow-lg hover:shadow-xl"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <h4
                      className={`text-lg font-bold mb-2 ${"text-brand-dark"}`}
                    >
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className={`${"text-gray-600"} ${
                          info.action
                            ? "hover:text-primary-500 cursor-pointer"
                            : ""
                        }`}
                        onClick={
                          info.action
                            ? () => window.open(info.action)
                            : undefined
                        }
                      >
                        {detail}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-2xl ${
                  false
                    ? "bg-green-500/20 border border-green-500/30"
                    : "bg-green-50 border border-green-200"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4
                      className={`text-lg font-bold mb-1 ${"text-brand-dark"}`}
                    >
                      WhatsApp Us
                    </h4>
                    <p className={`text-sm ${"text-gray-600"}`}>
                      Quick response via WhatsApp
                    </p>
                  </div>
                  <motion.a
                    href="https://wa.me/441234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-auto btn-primary text-sm px-4 py-2"
                  >
                    Chat Now
                  </motion.a>
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <div className={`p-6 rounded-2xl ${"bg-gray-50"}`}>
                <h4 className={`text-lg font-bold mb-4 ${"text-brand-dark"}`}>
                  Service Area
                </h4>
                <div
                  className={`aspect-video rounded-lg bg-gradient-to-br from-brand-blue/20 to-brand-electric/20 flex items-center justify-center ${"bg-gray-200"}`}
                >
                  <div className="text-center">
                    <MapPin
                      className={`w-12 h-12 mx-auto mb-2 ${"text-orange-600"}`}
                    />
                    <p className={`${"text-gray-600"}`}>
                      East London & Surrounding Areas
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
