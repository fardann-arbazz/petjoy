import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaWhatsapp, FaStar, FaHeart, FaShare } from "react-icons/fa";
import { IoPaw } from "react-icons/io5";

const products = [
  {
    id: 1,
    name: "Makanan Anjing Premium",
    price: "15.000",
    rating: 4.8,
    image:
      "https://i.pinimg.com/1200x/c9/1b/b9/c91bb9bcfe29a8e8e1c34af60c3a71d4.jpg",
    category: "Food",
    description:
      "Formula organik dan bebas biji-bijian untuk kesehatan anjing yang optimal",
  },
  {
    id: 2,
    name: "Kotak Kotoran Kucing",
    price: "79.000",
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/bd/7e/f8/bd7ef8408050cca7e160ea2c91ac6771.jpg",
    category: "Accessories",
    description: "Membersihkan sendiri dengan teknologi pengontrol bau",
  },
  {
    id: 3,
    name: "Chew Toy",
    price: "2.975",
    rating: 4.9,
    image:
      "https://i.pinimg.com/736x/db/d2/6e/dbd26ed3e571277043b09db514f83ac0.jpg",
    category: "Toys",
    description: "Karet tahan lama untuk pengunyah yang agresif",
  },
  {
    id: 4,
    name: "Pet Carrier",
    price: "99.000",
    rating: 4.7,
    image:
      "https://i.pinimg.com/1200x/c5/5e/49/c55e496878240e5193506d763ccb5181.jpg",
    category: "Accessories",
    description: "Disetujui oleh maskapai dengan jendela ventilasi",
  },
];

const Products = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const handleWhatsAppOrder = (product: any) => {
    const message = `Hi! I'm interested in purchasing ${product.name} ($${product.price}). Can you provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/yourphonenumber?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section
      id="products"
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <IoPaw className="text-petPink text-3xl mr-2" />
            <h2 className="text-4xl font-bold text-gray-800">
              Beberapa <span className="text-petBlue">Product</span> Kami
            </h2>
            <IoPaw className="text-petPink text-3xl ml-2" />
          </div>
          <p className="sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Pilihan produk hewan peliharaan premium yang telah dikurasi yang
            akan disukai oleh hewan peliharaan Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white p-2 rounded-full shadow-md cursor-pointer"
                  >
                    <FaHeart className="text-petPink" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white p-2 rounded-full shadow-md cursor-pointer"
                  >
                    <FaShare className="text-petBlue" />
                  </motion.button>
                </div>

                <div className="absolute bottom-4 left-4 bg-petGreen text-white text-xs px-3 py-1 rounded-full shadow">
                  {product.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {product.name}
                  </h3>
                  <span className="text-xl font-bold text-petBlue">
                    Rp{product.price}
                  </span>
                </div>

                <div className="pb-2">{product.description}</div>

                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-sm ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.rating} ({Math.floor(Math.random() * 100) + 20}{" "}
                    reviews)
                  </span>
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "#25D366",
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleWhatsAppOrder(product)}
                  className="w-full cursor-pointer bg-green-500 text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>Order via WhatsApp</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#4299E1",
              boxShadow: "0 5px 15px rgba(66, 153, 225, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-petBlue text-white px-8 py-4 rounded-xl font-medium text-lg flex items-center mx-auto space-x-2"
          >
            <IoPaw className="text-xl" />
            <span>Explore More Pet Products</span>
          </motion.button>

          <motion.p
            whileHover={{ scale: 1.01 }}
            className="mt-6 text-gray-500 text-sm"
          >
            Need help choosing? Our pet experts are available 9AM-9PM daily
          </motion.p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Products;
