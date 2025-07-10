import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MdPets } from "react-icons/md";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [initialAnimComplete, setInitialAnimComplete] = useState(false);
  const text = "PetJoy";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const letters = Array.from(text).map((letter, index) => (
    <motion.span
      key={index}
      initial={{ y: 0, rotate: 0, scale: 1 }}
      animate={
        initialAnimComplete
          ? {
              y: [0, -5, 3, -2, 0],
              rotate: [0, 5, -3, 2, 0],
              scale: [1, 1.1, 0.95, 1.05, 1],
              transition: {
                delay: index * 0.05,
                duration: 1.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }
          : {}
      }
      className="inline-block"
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  ));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, backgroundColor: "#ffffff" }}
          animate={{ backgroundColor: "#f8fafc" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
        >
          {/* Main content container */}
          <div className="flex flex-col items-center justify-center">
            {/* Pet icon with more sophisticated animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -45, y: 20 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: 0,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  mass: 0.5,
                },
              }}
              onAnimationComplete={() => setInitialAnimComplete(true)}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="mb-6"
            >
              <MdPets className="text-amber-400 w-20 h-20 animate-bounce" />
            </motion.div>

            {/* Text with refined animation */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.3,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              <motion.h1
                className="text-6xl font-bold text-sky-500"
                animate={
                  initialAnimComplete
                    ? {
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }
                    : {}
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="flex justify-center space-x-1">{letters}</div>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-4 text-center text-gray-500 text-lg"
              >
                Happiness for your furry friends
              </motion.p>
            </motion.div>
          </div>

          {/* Enhanced loading bar */}
          <motion.div
            className="absolute bottom-20 left-0 right-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="relative h-2 w-64 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-300 to-pink-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2.8,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  delay: 0.8,
                }}
              />
              <motion.div
                className="absolute top-0 left-0 h-full bg-white opacity-30 rounded-full"
                initial={{ width: 0, left: 0 }}
                animate={{
                  width: [0, 40, 0],
                  left: ["0%", "60%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  delay: 0.8,
                }}
              />
            </div>
          </motion.div>

          {/* Subtle floating pet icons in background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  y: 0,
                  opacity: 0.1,
                  x: `${Math.random() * 100}%`,
                  rotate: Math.random() * 360,
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0.1, 0.3, 0.1],
                  transition: {
                    duration: 5 + Math.random() * 5,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  },
                }}
                className="absolute text-gray-300"
                style={{
                  fontSize: `${10 + Math.random() * 20}px`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                <MdPets />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
