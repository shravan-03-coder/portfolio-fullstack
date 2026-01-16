import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motionVariants";

export default function FadeIn({ children }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
