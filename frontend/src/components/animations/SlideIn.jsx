import { motion } from "framer-motion";

export default function SlideIn({ children, direction = "left" }) {
  const x = direction === "left" ? -60 : 60;

  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
