import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaDog, FaCat, FaClinicMedical, FaBath } from "react-icons/fa";
import { GiSittingDog, GiHealthNormal } from "react-icons/gi";

const services = [
  {
    icon: <FaDog className="text-4xl text-petBlue" />,
    title: "Perawatan Anjing",
    description:
      "Layanan perawatan profesional untuk menjaga anjing Anda tetap bersih dan sehat.",
    color: "bg-petBlue/10",
  },
  {
    icon: <FaCat className="text-4xl text-petPink" />,
    title: "Perawatan Kucing",
    description:
      "Perawatan khusus untuk teman kucing Anda dengan tim ahli kami.",
    color: "bg-petPink/10",
  },
  {
    icon: <FaClinicMedical className="text-4xl text-petGreen" />,
    title: "Kedokteran Hewan",
    description:
      "Perawatan medis yang komprehensif dari dokter hewan berlisensi kami.",
    color: "bg-petGreen/10",
  },
  {
    icon: <FaBath className="text-4xl text-secondary" />,
    title: "Perawatan Spa",
    description:
      "Perawatan spa yang menenangkan untuk memanjakan hewan peliharaan Anda.",
    color: "bg-secondary/10",
  },
  {
    icon: <GiSittingDog className="text-4xl text-primary" />,
    title: "Penitipan Hewan",
    description:
      "Penitipan hewan peliharaan yang dapat dipercaya saat Anda pergi.",
    color: "bg-primary/10",
  },
  {
    icon: <GiHealthNormal className="text-4xl text-accent" />,
    title: "Pemeriksaan Kesehatan",
    description: "Pemeriksaan kesehatan rutin untuk mencegah penyakit.",
    color: "bg-accent/10",
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section id="services" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                  },
                }
              : {}
          }
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-4"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            Layanan <span className="text-petPink">Kami</span>
          </motion.h2>
          <motion.p
            className="sm:text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    transition: { delay: 0.2 },
                  }
                : {}
            }
          >
            Kami menawarkan berbagai macam layanan untuk memenuhi semua
            kebutuhan hewan peliharaan Anda. Perawatan berkualitas dengan cinta
            dan perhatian.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring" as const,
                    damping: 10,
                    stiffness: 100,
                  },
                },
              }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                boxShadow: "0 8px 25px -5px rgba(0, 0, 0, 0.1)",
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
              whileTap={{ scale: 0.98 }}
              className={`p-8 rounded-xl ${service.color} cursor-pointer transition-all duration-300 relative overflow-hidden`}
            >
              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-xl"
                whileHover={{
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  transition: { duration: 0.4 },
                }}
              />

              <div className="sm:mb-6 mb-3 flex sm:flex-col items-center gap-3">
                <motion.div
                  whileHover={{
                    rotate: 5,
                    scale: 1.1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                    },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {service.icon}
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  {service.title}
                </motion.h3>
              </div>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        transition: { delay: 0.3 + index * 0.05 },
                      }
                    : {}
                }
                whileHover={{
                  x: 3,
                  transition: { duration: 0.2 },
                }}
              >
                {service.description}
              </motion.p>

              {/* Subtle pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 0.1,
                  backgroundColor: service.color
                    .replace("bg-", "")
                    .split("/")[0],
                  transition: { duration: 0.4 },
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
