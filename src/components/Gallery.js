import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  Eye,
  Scissors,
} from "lucide-react";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);

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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Gallery images with beauty salon themes
  const galleryImages = [
    {
      id: 1,
      title: "Elegant Nail Art",
      description: "Stunning nail designs and gel extensions",
      category: "nails",
      icon: Sparkles,
      gradient: "from-pink-400 to-pink-600",
    },
    {
      id: 2,
      title: "Salon Interior",
      description: "Beautiful, relaxing salon environment",
      category: "salon",
      icon: Heart,
      gradient: "from-rose-400 to-rose-600",
    },
    {
      id: 3,
      title: "Manicure Treatment",
      description: "Premium nail care and treatments",
      category: "treatment",
      icon: Sparkles,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 4,
      title: "Lash Extensions",
      description: "Professional eyelash extension services",
      category: "lashes",
      icon: Eye,
      gradient: "from-rose-400 to-pink-500",
    },
    {
      id: 5,
      title: "Facial Treatment",
      description: "Luxury skincare and facial services",
      category: "facial",
      icon: Heart,
      gradient: "from-pink-300 to-rose-400",
    },
    {
      id: 6,
      title: "Eyebrow Shaping",
      description: "Expert brow shaping and tinting",
      category: "brows",
      icon: Scissors,
      gradient: "from-rose-500 to-pink-600",
    },
  ];

  const categories = [
    "All",
    "nails",
    "salon",
    "treatment",
    "lashes",
    "facial",
    "brows",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex =
        currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section id="gallery" ref={ref} className="section-padding bg-white">
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
                Gallery
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mb-8"></div>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-600">
              Explore our beautiful salon, stunning nail art, and premium beauty
              treatments. See the artistry and attention to detail that sets us
              apart.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-pink-500 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-pink-50 shadow-md border border-pink-100"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                  whileHover={{ y: -10 }}
                  onClick={() => openModal(image)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 bg-white hover:shadow-2xl"
                >
                  {/* Image Placeholder */}
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${image.gradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    <image.icon className="w-16 h-16 text-white/80" />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white text-xl font-bold mb-2">
                        {image.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "1000+", label: "Happy Clients" },
              { number: "10+", label: "Years Experience" },
              { number: "50+", label: "Services Offered" },
              { number: "5★", label: "Customer Rating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 hover:shadow-xl border border-pink-100 transition-all duration-300"
              >
                <div className="text-3xl font-bold mb-2 text-pink-600">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div
                className={`aspect-video bg-gradient-to-br ${selectedImage.gradient} flex items-center justify-center relative`}
              >
                <selectedImage.icon className="w-24 h-24 text-white/80" />

                {/* Navigation */}
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {selectedImage.title}
                </h3>
                <p className="text-lg text-gray-600">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
