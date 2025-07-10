import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaw, FaWhatsapp, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 200 &&
          window.scrollY < sectionTop + sectionHeight - 200
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: <FaPaw /> },
    { name: "About", href: "#about", icon: <FaPaw /> },
    { name: "Services", href: "#services", icon: <FaPaw /> },
    { name: "Products", href: "#products", icon: <FaPaw /> },
    { name: "Contact", href: "#contact", icon: <FaPaw /> },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden";
  };

  const handleNavClick = (href: any) => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "auto";
    // Smooth scroll to section
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2"
        >
          <FaPaw className="text-petPink text-2xl" />
          <span className="text-xl font-bold text-petBlue">PetJoy</span>
        </motion.div>

        {/* Desktop Navigation (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`relative px-3 py-2 text-sm font-medium ${
                activeSection === item.href.substring(1)
                  ? "text-petPink"
                  : "text-gray-700 hover:text-petBlue"
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavClick(item.href)}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-petPink"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-full focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? (
            <FaTimes className="text-2xl text-gray-700" />
          ) : (
            <FaBars className="text-2xl text-gray-700" />
          )}
        </motion.button>

        {/* Contact Button (hidden on mobile) */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 cursor-pointer bg-petGreen text-white px-4 py-2 rounded-full font-medium ml-4"
        >
          <FaWhatsapp size={18} />
          <span>Contact</span>
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Blurred Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              onClick={toggleMobileMenu}
            />

            {/* Modern Glassmorphism Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
              }}
              className="fixed top-0 right-0 min-h-screen w-80 bg-white/90 backdrop-blur-xl shadow-2xl z-50 border-l border-white/20"
              style={{
                background:
                  "linear-gradient(to right bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.85))",
              }}
            >
              <div className="flex flex-col h-full">
                {/* Sleek Header with Animated Close Button */}
                <div className="flex items-center justify-between p-6">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <FaPaw className="text-petPink text-2xl" />
                    <span className="text-xl font-bold bg-gradient-to-r from-petBlue to-petPink bg-clip-text text-transparent">
                      PetJoy
                    </span>
                  </motion.div>

                  <motion.button
                    onClick={toggleMobileMenu}
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ rotate: -90, scale: 0.9 }}
                    className="p-2 rounded-full bg-white shadow-md"
                  >
                    <FaTimes className="text-xl text-gray-700" />
                  </motion.button>
                </div>

                {/* Animated Menu Items */}
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <ul className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          transition: {
                            delay: 0.1 + index * 0.05,
                            type: "spring",
                            stiffness: 300,
                          },
                        }}
                        whileHover={{ x: 5 }}
                        className="mb-2"
                      >
                        <a
                          href={item.href}
                          className={`flex items-center py-3 px-4 rounded-xl transition-all ${
                            activeSection === item.href.substring(1)
                              ? "bg-gradient-to-r from-petBlue/10 to-petPink/10 shadow-inner"
                              : "hover:bg-gray-50"
                          }`}
                          onClick={() => handleNavClick(item.href)}
                        >
                          <motion.span
                            className={`mr-3 ${
                              activeSection === item.href.substring(1)
                                ? "text-petPink"
                                : "text-petBlue"
                            }`}
                            whileHover={{ scale: 1.2 }}
                          >
                            {item.icon}
                          </motion.span>
                          <span className="text-lg font-medium text-gray-800">
                            {item.name}
                          </span>
                          {activeSection === item.href.substring(1) && (
                            <motion.span
                              className="ml-auto w-2 h-2 rounded-full bg-petPink"
                              layoutId="mobileNavIndicator"
                              transition={{ type: "spring", bounce: 0.3 }}
                            />
                          )}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Floating Action Button */}
                <div className="p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative"
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 25px -5px rgba(72, 187, 120, 0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-center gap-3 cursor-pointer bg-gradient-to-r from-petGreen to-emerald-500 text-white px-6 py-4 rounded-xl font-semibold shadow-lg"
                    >
                      <FaWhatsapp size={20} />
                      <span>Chat Now</span>
                      <motion.span
                        animate={{
                          x: [0, 5, 0],
                          transition: {
                            repeat: Infinity,
                            duration: 2,
                          },
                        }}
                        className="ml-1"
                      >
                        →
                      </motion.span>
                    </motion.button>

                    {/* Subtle floating particles */}
                    <div className="absolute -top-3 -right-3">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            y: [0, -5, 0],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 2 + i,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                          className="absolute w-1 h-1 rounded-full bg-white"
                          style={{
                            left: `${Math.random() * 10}px`,
                            top: `${Math.random() * 10}px`,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
