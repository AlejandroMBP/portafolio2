"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function FadeInSection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // si quieres que se repita al volver a entrar
    threshold: 0.2, // % visible para activar
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
