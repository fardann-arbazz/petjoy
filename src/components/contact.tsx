import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { MdPets } from "react-icons/md";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      info: "+62 123 4567 890",
      action: "Chat Now",
      color: "bg-green-100 text-green-600",
      actionColor: "hover:bg-green-200",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      info: "hello@petjoy.id",
      action: "Send Email",
      color: "bg-pink-100 text-pink-600",
      actionColor: "hover:bg-pink-200",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Lokasi Kami",
      info: "Jl. Pet Joy No. 123, Jakarta",
      action: "Get Directions",
      color: "bg-amber-100 text-amber-600",
      actionColor: "hover:bg-amber-200",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gradient-to-br from-blue-50 to-pink-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute text-gray-400 text-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <MdPets />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-pink-400 mb-4">
            Hubungi <span className="text-gray-800">Kami</span>
          </h2>
          <p className="sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Kami ingin sekali mendengar pendapat Anda! Hubungi kami untuk
            pertanyaan, janji temu, atau sekadar menyapa.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Methods - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-5/4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          y: 0,
                          transition: { delay: index * 0.1 },
                        }
                      : {}
                  }
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl shadow-sm border border-gray-100 ${method.color} bg-white`}
                >
                  <div className="flex items-start">
                    <div
                      className={`p-3 rounded-full mr-4 ${method.color} bg-opacity-30`}
                    >
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 mb-3 text-sm">
                        {method.info}
                      </p>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className={`inline-block text-sm font-medium px-4 py-2 rounded-full ${method.actionColor} transition-colors`}
                      >
                        {method.action}
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <MdPets className="text-pink-400 mr-2" />
                Business Hours
              </h3>
              <ul className="space-y-3">
                {[
                  { day: "Senin - Jum'at", hours: "9:00 WIB - 20:00 WIB" },
                  { day: "Sabtu", hours: "10:00 WIB - 22:00 WIB" },
                  { day: "Minggu", hours: "10:00 WIB - 22:00 WIB" },
                ].map((item, i) => (
                  <li key={i} className="flex justify-between">
                    <span className="text-gray-600">{item.day}</span>
                    <span className="font-medium text-gray-800">
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-5/5"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-400 opacity-5 -mr-16 -mt-16 rounded-full"></div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Kirimkan Pesan Kepada Kami
              </h3>
              <p className="text-gray-500 mb-6">
                Kami biasanya merespons dalam waktu 24 jam
              </p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nama Anda
                    </label>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all focus:outline-none"
                        placeholder="John Doe"
                      />
                    </motion.div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all focus:outline-none"
                        placeholder="john@example.com"
                      />
                    </motion.div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all focus:outline-none"
                      placeholder="How can we help?"
                    />
                  </motion.div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all focus:outline-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </motion.div>
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 4px 15px rgba(244, 114, 182, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-green-400 hover:bg-green-500 cursor-pointer text-white px-6 py-4 rounded-xl font-medium flex items-center justify-center transition-all"
                >
                  Send Message <FaPaperPlane className="ml-2" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
