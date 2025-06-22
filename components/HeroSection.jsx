"use client";

import { motion } from "framer-motion";
import FadeInSection from "./FadeInsection";

export default function HeroSection() {
  return (
    <FadeInSection>
      <section
        id="home"
        className="h-auto min-h-screen flex flex-col justify-center px-6 py-20 text-white space-y-16"
      >
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-16">
          {/* Columna izquierda: texto */}
          <div className="flex-1 space-y-6">
            <motion.strong
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-orange-400 uppercase tracking-wider block"
            >
              • Inicio
            </motion.strong>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl font-medium text-gray-300"
            >
              Marcos Alejandro BP
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-orange-400 font-semibold"
            >
              Desarrollador Full Stack
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl font-bold leading-tight"
            >
              Construyendo soluciones web modernas y eficientes
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base text-gray-400 leading-relaxed max-w-xl"
            >
              Me ilusiona y cautiva la forma en que la tecnología crece y mejora
              nuestras vidas. Me apasiona contribuir a este avance a través del
              desarrollo de soluciones creativas y eficientes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <a href="#work" className="px-7 py-3 bg-white text-black rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">
                Ver Proyectos
              </a>
              <a href="#about" className="px-7 py-3 bg-white text-black rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">
                Ver Habilidades
              </a>
              <a href="#contact" className="px-7 py-3 bg-white text-black rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">
                Contactar
              </a>
            </motion.div>
          </div>

          {/* Columna derecha: imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <img
              src="/assets/videos/images/image.png"
              alt="Foto de Marcos Alejandro"
              className="rounded-3xl w-80 h-80 object-cover shadow-2xl border-2 border-gray-600 hover:scale-105 transition duration-300"
            />
          </motion.div>
        </div>
      </section>
    </FadeInSection>
  );
}
