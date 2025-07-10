import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPaw, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section
      id="home"
      ref={ref}
      className="relative pt-32 sm:pt-48 pb-32 bg-gradient-to-r from-petBlue/10 to-petGreen/10 h-[800px] sm:h-[750px]"
    >
      {/* Floating paws decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0.3 }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
            }}
            className="absolute text-petPink"
          >
            <FaPaw />
          </motion.div>
        ))}
      </div>

      {/* Bottom blur effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent backdrop-blur-sm"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
              animate={
                inView
                  ? {
                      color: ["#2D3748", "#4299E1", "#2D3748"],
                    }
                  : {}
              }
              transition={{ duration: 8, repeat: Infinity }}
            >
              Rawat Hewanmu <br />
              Dengan <span className="text-petPink">Cinta</span>
            </motion.h1>

            <motion.p
              className="sm:text-lg text-base text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Kami menyediakan layanan dan produk terbaik untuk menjaga sahabat
              berbulu Anda tetap bahagia dan sehat. Mulai dari perawatan hingga
              perawatan hewan, kami siap membantu Anda.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-petGreen cursor-pointer text-white px-6 py-3 rounded-full font-medium flex items-center"
              >
                Layanan Kami <FaArrowRight className="ml-2" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-petBlue text-petBlue px-6 py-3 rounded-full font-medium"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 relative mt-12 sm:mt-0"
          >
            <div className="relative">
              <motion.img
                src="https://i.pinimg.com/736x/43/a3/3a/43a33a9f3da262d667e7a761677d24e3.jpg"
                alt="Happy dog"
                className="w-full max-w-xl mx-auto rounded-lg shadow-xl"
                whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.8 }}
              />

              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-2 sm:-left-6 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center">
                  <div className="bg-petPink/20 p-2 rounded-full mr-3">
                    <FaPaw className="text-petPink" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">500+</p>
                    <p className="text-sm text-gray-600">Happy Pets</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 1 }}
                className="absolute -top-6 -right-2 sm:-right-6 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center">
                  <div className="bg-petGreen/20 p-2 rounded-full mr-3">
                    <FaPaw className="text-petGreen" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">50+</p>
                    <p className="text-sm text-gray-600">Experienced Staff</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
