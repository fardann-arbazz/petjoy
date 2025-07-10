import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPaw, FaHeart, FaAward, FaSmile } from "react-icons/fa";

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const features = [
    {
      icon: <FaPaw className="text-3xl text-pink-400" />,
      title: "Ahli Hewan Peliharaan",
      description:
        "Tim kami terdiri dari para profesional bersertifikat dengan pengalaman bertahun-tahun dalam perawatan hewan peliharaan.",
    },
    {
      icon: <FaHeart className="text-3xl text-red-400" />,
      title: "Perawatan Penuh Kasih",
      description:
        "Kami memperlakukan setiap hewan peliharaan seolah-olah mereka adalah hewan peliharaan kami sendiri, dengan kesabaran dan pengertian.",
    },
    {
      icon: <FaAward className="text-3xl text-amber-400" />,
      title: "Jaminan Kualitas",
      description:
        "Hanya produk dan layanan terbaik untuk anggota keluarga berbulu Anda.",
    },
    {
      icon: <FaSmile className="text-3xl text-blue-400" />,
      title: "Pelanggan Senang",
      description:
        "Ribuan hewan peliharaan dan pemilik yang puas mempercayai kami untuk kebutuhan mereka.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gradient-to-br from-blue-50 to-pink-50 relative"
    >
      {/* Top blur effect to connect with Hero section */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent backdrop-blur-sm -mt-1"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Mengapa Memilih <span className="text-petBlue">PetJoy</span>?
          </h2>
          <p className="sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Kami bukan hanya sekedar toko hewan peliharaan - kami adalah mitra
            Anda dalam pengasuhan hewan peliharaan
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img
                src="https://i.pinimg.com/1200x/ce/89/0f/ce890fef867729f5e8a1f8cc47a52abd.jpg"
                alt="Happy pets at PetJoy"
                className="rounded-2xl shadow-xl w-full"
              />

              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="absolute -bottom-6 -right-2 sm:-right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center">
                  <div className="bg-pink-100 p-3 rounded-full mr-3">
                    <FaHeart className="text-pink-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">5,000+</p>
                    <p className="text-sm text-gray-600">Happy Pets</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Cerita <span className="text-blue-400">Kami</span>
            </h3>

            <p className="text-gray-600 mb-8">
              Didirikan pada tahun 2018, PetJoy berawal dari sebuah toko hewan
              peliharaan kecil di Jakarta dengan misi sederhana: memberikan
              perawatan terbaik bagi hewan peliharaan dan ketenangan pikiran
              bagi pemiliknya. Berawal dari sebuah toko sederhana, PetJoy kini
              telah berkembang menjadi pusat perawatan hewan peliharaan yang
              komprehensif, namun nilai-nilai inti kami tetap sama.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-start">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="mr-4"
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
