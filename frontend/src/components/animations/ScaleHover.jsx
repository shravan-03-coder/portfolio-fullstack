import { motion } from "framer-motion";

export default function ScaleHover({ children }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      {children}
    </motion.div>
  );
}
