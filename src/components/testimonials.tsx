import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Dog Owner",
    content:
      "PetJoy sangat luar biasa dengan anjing golden retriever saya. Layanan perawatan mereka adalah yang terbaik dan anjing saya selalu kembali dengan senang hati!",
    image:
      "https://i.pinimg.com/736x/08/81/ca/0881ca9b1b677d55689a6c3793fe0e3d.jpg",
    rating: 5,
    petType: "Dog",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Cat Owner",
    content:
      "Perawatan dokter hewan di sini sangat luar biasa. Mereka memperlakukan kucing saya dengan sangat hati-hati dan profesional. Sangat merekomendasikan!",
    image:
      "https://i.pinimg.com/736x/da/24/62/da24628ec15db648bb1c810f494e5bca.jpg",
    rating: 5,
    petType: "Cat",
  },
  {
    id: 3,
    name: "David Wilson",
    role: "Pet Lover",
    content:
      "Banyak pilihan produk dan staf yang ramah. Hewan peliharaan saya menyukai makanan yang saya beli di sini. Harganya juga masuk akal.",
    image:
      "https://i.pinimg.com/736x/cf/d4/13/cfd413c84851920d5dbc820610176e41.jpg",
    rating: 4,
    petType: "Rabbit",
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-blue-50 to-pink-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Dicintai oleh <span className="text-pink-400">Hewan</span> &{" "}
            <span className="text-blue-400">Pemilik</span>
          </h2>
          <p className="sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Dengarkan apa yang dikatakan komunitas kami tentang pengalaman
            PetJoy mereka
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: index * 0.15 },
                    }
                  : {}
              }
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
              }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden"
            >
              {/* Pet type indicator */}
              <div
                className={`absolute top-0 right-0 px-4 py-1 text-xs font-medium rounded-bl-lg ${
                  testimonial.petType === "Dog"
                    ? "bg-blue-100 text-blue-600"
                    : testimonial.petType === "Cat"
                    ? "bg-pink-100 text-pink-600"
                    : "bg-amber-100 text-amber-600"
                }`}
              >
                {testimonial.petType} Owner
              </div>

              <div className="flex items-start mb-6">
                <div className="relative mr-4 flex-shrink-0">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        testimonial.petType === "Dog"
                          ? "bg-blue-400"
                          : testimonial.petType === "Cat"
                          ? "bg-pink-400"
                          : "bg-amber-400"
                      }`}
                    >
                      <FaQuoteLeft className="text-white text-xs" />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <motion.p
                className="text-gray-600 mb-6 pl-2 border-l-2 border-blue-200"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.15 }}
              >
                {testimonial.content}
              </motion.p>

              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {testimonial.rating}.0 rating
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `-${activeTestimonial * 100}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-start mb-6">
                    <div className="relative mr-4 flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            testimonial.petType === "Dog"
                              ? "bg-blue-400"
                              : testimonial.petType === "Cat"
                              ? "bg-pink-400"
                              : "bg-amber-400"
                          }`}
                        >
                          <FaQuoteLeft className="text-white text-xs" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 pl-2 border-l-2 border-blue-200">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "text-amber-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {testimonial.rating}.0 rating
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeTestimonial
                    ? "bg-pink-400 w-6"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {["Google Reviews", "Trustpilot", "Facebook Ratings"].map(
            (badge, i) => (
              <motion.div
                key={badge}
                whileHover={{ y: -5 }}
                className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 flex items-center"
              >
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${
                    i === 0
                      ? "bg-blue-400"
                      : i === 1
                      ? "bg-green-400"
                      : "bg-amber-400"
                  }`}
                />
                <span className="text-sm font-medium text-gray-700">
                  {badge}
                </span>
                <span className="ml-2 text-sm font-bold text-pink-500">
                  4.9+
                </span>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
