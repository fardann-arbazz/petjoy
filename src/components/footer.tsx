import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPaw,
} from "react-icons/fa";

const Footer = () => {
  const links = [
    {
      title: "Quick Links",
      items: ["Home", "About", "Services", "Products", "Contact"],
    },
    {
      title: "Services",
      items: [
        "Perawatan Anjing",
        "Kedokteran Hewan",
        "Penitipan Hewan",
        "Pelatihan",
        "Spa",
      ],
    },
    {
      title: "Products",
      items: ["Food", "Toys", "Accessories", "Health", "Grooming"],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <div className="flex items-center mb-6">
              <FaPaw className="text-petPink text-2xl mr-2" />
              <span className="text-2xl font-bold">PetJoy</span>
            </div>
            <p className="text-gray-400 mb-6">
              Toko serba ada untuk semua kebutuhan hewan peliharaan Anda. Kami
              menyediakan layanan berkualitas dan produk untuk menjaga hewan
              peliharaan Anda tetap bahagia dan sehat.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -5, color: "#4299E1" }}
                href="#"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook className="text-xl" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, color: "#F687B3" }}
                href="#"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram className="text-xl" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, color: "#68D391" }}
                href="#"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter className="text-xl" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5, color: "#FC8181" }}
                href="#"
                className="text-gray-400 hover:text-white"
              >
                <FaYoutube className="text-xl" />
              </motion.a>
            </div>
          </motion.div>

          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="md:w-1/4"
            >
              <h3 className="text-lg font-bold mb-6">{link.title}</h3>
              <ul className="space-y-3">
                {link.items.map((item, i) => (
                  <motion.li key={i} whileHover={{ x: 5 }}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-petPink transition-colors"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:w-1/4"
          >
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-petPink w-full"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-petPink px-4 py-3 rounded-r-lg font-medium"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} PetJoy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
