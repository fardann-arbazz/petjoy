import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPaw, FaHeart, FaUsers, FaAward, FaDog, FaCat } from "react-icons/fa";
import { GiSittingDog, GiCat } from "react-icons/gi";

const AboutPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const stats = [
    {
      value: "5+",
      label: "Years Experience",
      icon: <FaAward className="text-amber-400" />,
    },
    {
      value: "5000+",
      label: "Happy Pets",
      icon: <FaHeart className="text-pink-400" />,
    },
    {
      value: "50+",
      label: "Professional Staff",
      icon: <FaUsers className="text-blue-400" />,
    },
    {
      value: "24/7",
      label: "Customer Support",
      icon: <FaPaw className="text-green-400" />,
    },
  ];

  const teamMembers = [
    {
      name: "Budi Santoso",
      role: "Founder & Veterinarian",
      bio: "Passionate about animal health with 10+ years of experience in pet care.",
      image: "/assets/images/team1.jpg",
      specialty: (
        <>
          <FaDog className="inline mr-1" /> Dog Specialist
        </>
      ),
    },
    {
      name: "Anita Wijaya",
      role: "Head Groomer",
      bio: "Certified master groomer with a gentle touch for anxious pets.",
      image: "/assets/images/team2.jpg",
      specialty: (
        <>
          <GiSittingDog className="inline mr-1" /> Grooming Expert
        </>
      ),
    },
    {
      name: "Dewi Kurnia",
      role: "Feline Specialist",
      bio: "Behavioral expert who understands even the most temperamental cats.",
      image: "/assets/images/team3.jpg",
      specialty: (
        <>
          <FaCat className="inline mr-1" /> Cat Whisperer
        </>
      ),
    },
  ];

  return (
    <div className="font-poppins bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-blue-50 to-green-50 overflow-hidden">
        {/* Floating paws decoration */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 20, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              className="absolute text-gray-400 text-xl"
            >
              <FaPaw />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
                whileInView={{
                  color: ["#2D3748", "#4299E1", "#2D3748"],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                Our <span className="text-pink-400">Story</span> &{" "}
                <span className="text-blue-400">Passion</span>
              </motion.h1>

              <motion.p
                className="text-lg text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                PetJoy was born from a simple love for animals. What started as
                a small pet store in Jakarta has grown into a comprehensive pet
                care center serving thousands of happy pets and their owners.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 relative"
            >
              <div className="relative">
                <motion.img
                  src="/assets/images/about-hero.jpg"
                  alt="PetJoy team with animals"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.02 }}
                />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-center">
                    <div className="bg-pink-100 p-3 rounded-full mr-3">
                      <FaHeart className="text-pink-500" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Since 2018</p>
                      <p className="text-sm text-gray-600">Serving with love</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-blue-400">Mission</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To provide exceptional care and create joyful experiences for pets
              and their families
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaPaw className="text-blue-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Compassionate Care
              </h3>
              <p className="text-gray-600">
                We treat every pet as if they were our own, with patience,
                kindness, and understanding.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-pink-50 to-amber-50 p-8 rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaHeart className="text-pink-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Expert Knowledge
              </h3>
              <p className="text-gray-600">
                Our team undergoes continuous training to provide the most
                current and effective care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaUsers className="text-green-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Community Focus
              </h3>
              <p className="text-gray-600">
                We actively support local animal shelters and pet adoption
                initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-green-400 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2 flex items-center justify-center">
                  {stat.icon}
                  <span className="ml-2">{stat.value}</span>
                </div>
                <p className="text-lg opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our <span className="text-pink-400">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to your pet's wellbeing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="text-pink-200">{member.role}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex items-center text-sm text-blue-500 font-medium">
                    {member.specialty}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our <span className="text-green-400">Values</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaPaw className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Integrity
                    </h3>
                    <p className="text-gray-600">
                      We're honest and transparent in all our interactions,
                      always putting pets' needs first.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaHeart className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Compassion
                    </h3>
                    <p className="text-gray-600">
                      Every animal deserves kindness and understanding,
                      regardless of breed or behavior.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-pink-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaAward className="text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Excellence
                    </h3>
                    <p className="text-gray-600">
                      We continuously improve our services and stay updated with
                      the latest in pet care.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="relative">
                <img
                  src="/assets/images/about-values.jpg"
                  alt="Happy pets at PetJoy"
                  className="rounded-2xl shadow-xl w-full"
                />
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-pink-400 to-blue-400 p-3 rounded-full mr-4">
                      <GiCat className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">100%</p>
                      <p className="text-sm text-gray-600">
                        Satisfaction Guarantee
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
