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
      details: ["+44 20 1234 5678", "+44 20 9876 5432"],
      action: "tel:+442012345678",
      color: "text-pink-500",
      bgColor: "bg-pink-100",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@ccnailsandbeauty.com", "bookings@ccnailsandbeauty.com"],
      action: "mailto:info@ccnailsandbeauty.com",
      color: "text-rose-500",
      bgColor: "bg-rose-100",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 High Street", "London, UK"],
      action: null,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Sat: 9AM-7PM", "Sun: 10AM-5PM"],
      action: null,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-gradient-to-b from-white to-pink-50"
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
              Get in{" "}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mb-8"></div>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-600">
              Ready to book your beauty treatment? Contact us today to schedule
              your appointment or ask any questions. We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="p-8 rounded-3xl bg-white border border-pink-100 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white border-gray-300 text-gray-900 focus:border-pink-500"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white border-gray-300 text-gray-900 focus:border-pink-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white border-gray-300 text-gray-900 focus:border-pink-500"
                      placeholder="+44 20 1234 5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none bg-white border-gray-300 text-gray-900 focus:border-pink-500"
                      placeholder="Tell us about your beauty needs..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg flex items-center justify-center space-x-3"
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
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
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
                    className="p-6 rounded-2xl transition-all duration-300 bg-white hover:shadow-xl border border-pink-100"
                  >
                    <div
                      className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className={`text-gray-600 ${
                          info.action
                            ? "hover:text-pink-500 cursor-pointer"
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
                className="p-6 rounded-2xl bg-green-50 border border-green-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-gray-900">
                      WhatsApp Us
                    </h4>
                    <p className="text-sm text-gray-600">
                      Quick response via WhatsApp
                    </p>
                  </div>
                  <motion.a
                    href="https://wa.me/442012345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    Chat Now
                  </motion.a>
                </div>
              </motion.div>

              {/* Google Maps Embed */}
              <div className="p-6 rounded-2xl bg-white border border-pink-100">
                <h4 className="text-lg font-bold mb-4 text-gray-900">
                  Find Us
                </h4>
                <div className="aspect-video rounded-lg bg-gray-200 flex items-center justify-center overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0320143133816!2d-0.12775838422946787!3d51.5073513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b323093d307%3A0x2fb199016d5642a7!2sLondon!5e0!3m2!1sen!2suk!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
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
