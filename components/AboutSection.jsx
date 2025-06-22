"use client";

import { FaReact, FaLaravel, FaNodeJs, FaFigma, FaGitAlt } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInsection";

export default function AboutSection() {
  const tools = [
    { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} className="text-white" /> },
    { name: "Laravel", icon: <FaLaravel size={40} className="text-red-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-cyan-300" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={40} className="text-purple-400" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-400" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} className="text-blue-500" /> },
    { name: "MySQL", icon: <SiMysql size={40} className="text-orange-300" /> },
    { name: "Figma", icon: <FaFigma size={40} className="text-pink-400" /> },
    { name: "Git", icon: <FaGitAlt size={40} className="text-orange-400" /> },
  ];

  return (
    <FadeInSection>
      <section
        id="about"
        className="h-auto min-h-screen flex flex-col justify-center items-start px-10 py-20 text-white space-y-16"
      >
        <div className="flex flex-col space-y-4 max-w-6xl w-full">
          <strong className="text-orange-400 uppercase tracking-wider">
            • Sobre mí
          </strong>
          <h2 className="text-6xl font-bold animate-fadeIn">
            Acerca de mí
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-16 animate-fadeSlide">
          {/* Columna texto */}
          <motion.div
            className="flex-1 space-y-6 text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Para cada proyecto me pregunto:{" "}
              <span className="text-orange-400">¿qué cosas nuevas puedo aprender?</span>  
              y ¿cómo puedo lograr un mejor resultado?
            </p>
            <p>
              Soy una persona <span className="text-orange-400">alegre, sociable</span> y me encanta trabajar en equipo. Durante mi formación he aprendido a 
              valorar cada experiencia y buscar siempre el lado positivo de cada situación.
            </p>
            <p>
              Me apasiona el <span className="text-orange-400">desarrollo web y la tecnología</span>. Disfruto de los deportes, ver películas, escuchar música, y mantenerme en constante aprendizaje para mejorar mis habilidades como desarrollador.
            </p>
          </motion.div>

          {/* Columna herramientas */}
          <div className="flex-1 flex flex-col space-y-8">
            <h3 className="text-4xl font-semibold mb-2">Herramientas que utilizo</h3>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="grid grid-cols-3 sm:grid-cols-4 gap-6"
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center w-24 h-24 rounded-xl bg-black/30 hover:bg-orange-500 transition-all duration-300 shadow-lg cursor-pointer p-4 hover:scale-110"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                >
                  {tool.icon}
                  <p className="mt-2 text-sm text-center">{tool.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
