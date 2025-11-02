import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, MessageCircle, Mail } from "lucide-react";

const FloatingCallButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactOptions = [
    {
      icon: Phone,
      label: "Call Now",
      href: "tel:+442012345678",
      color: "bg-green-500 hover:bg-green-600",
      delay: 0.1,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/442012345678",
      color: "bg-green-600 hover:bg-green-700",
      delay: 0.2,
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:info@ccnailsandbeauty.com",
      color: "bg-pink-500 hover:bg-pink-600",
      delay: 0.3,
    },
  ];

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mb-4 space-y-3"
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={index}
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  option.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.8 }}
                transition={{
                  duration: 0.3,
                  delay: option.delay,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${option.color} text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-3 min-w-[140px] transition-all duration-300`}
              >
                <option.icon size={20} />
                <span className="font-semibold text-sm">{option.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={toggleExpanded}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isExpanded
            ? "bg-red-500 hover:bg-red-600"
            : "bg-pink-500 hover:bg-pink-600"
        }`}
        aria-label={
          isExpanded ? "Close contact options" : "Open contact options"
        }
      >
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? (
            <X size={24} className="text-white" />
          ) : (
            <Phone size={24} className="text-white" />
          )}
        </motion.div>
      </motion.button>

      {/* Pulse Animation for Main Button */}
      {!isExpanded && (
        <motion.div
          className="absolute inset-0 rounded-full bg-pink-500"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </div>
  );
};

export default FloatingCallButton;
