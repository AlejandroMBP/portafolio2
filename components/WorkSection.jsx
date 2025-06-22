"use client";

import { useState, useMemo } from "react";
import { FaReact } from "react-icons/fa6";
import {
  SiLaravel,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiReact,
} from "react-icons/si";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInsection";

const useProjects = () => {
  return [
    { title: "Web Administracion de empresas UPEA", tech: ["React", "Next.js","Tailwind","TypeScript"], image: "/assets/videos/images/admEmpresas.png", link: "https://admemp.upea.edu.bo/" },
    { title: "correo institucional UPEA", tech: ["Laravel", "Bootstrap"], image: "/assets/videos/images/correos.png", link: "https://micuenta.upea.edu.bo/" },
    { title: "secretaria general", tech: ["React", "Tailwind","TypeScript","Laravel"], image: "/assets/videos/images/secGeneral.png", link: "https://archivosecretariageneral.upea.bo" },
    { title: "Web carrera de Derecho UPEA", tech: ["React","Next.js", "TypeScript"], image: "/assets/videos/images/derecho.png", link: "https://derecho.upea.edu.bo/" },
    { title: "Proyecto 5", tech: ["React Native"], image: "/assets/videos/images/image.png", link: "#" },

  ];
};

export default function WorkSection() {
  const allProjects = useProjects();

  const technologies = [
    { name: "Todos", icon: null },
    { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "React Native", icon: FaReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-300" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  ];

  const [selectedTech, setSelectedTech] = useState("Todos");
  const [page, setPage] = useState(1);
  const projectsPerPage = 6;

  const filteredProjects = useMemo(() => {
    if (selectedTech === "Todos") return allProjects;
    return allProjects.filter((proj) => proj.tech.includes(selectedTech));
  }, [selectedTech, allProjects]);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const currentProjects = useMemo(() => {
    const start = (page - 1) * projectsPerPage;
    return filteredProjects.slice(start, start + projectsPerPage);
  }, [filteredProjects, page]);

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
    setPage(1);
  };

  return (
    <FadeInSection>
      <section
        id="work"
        className="h-auto min-h-screen flex flex-col justify-center px-6 py-20 text-white space-y-16"
      >
        {/* Título */}
        <div className="flex flex-col space-y-4 w-full mx-auto">
          <strong className="text-orange-400 uppercase tracking-wider">
            • Proyectos
          </strong>
          <h2 className="text-6xl font-bold animate-fadeIn">
            Mis Proyectos
          </h2>
        </div>

        {/* Barra de tecnologías */}
        <div className="flex flex-wrap justify-center gap-6 text-4xl mb-8 animate-fadeIn delay-100">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            const isActive = selectedTech === tech.name;

            return (
              <div
                key={tech.name}
                className="relative flex flex-col items-center justify-center"
              >
                {/* Título superpuesto */}
                {isActive && (
                  <span className="absolute -top-6 text-sm font-medium text-orange-500">
                    {tech.name}
                  </span>
                )}

                {/* Botón con icono */}
                <button
                  onClick={() => handleTechClick(tech.name)}
                  className={`transition transform ${
                    isActive
                      ? "scale-110 text-orange-500"
                      : "hover:text-orange-400 text-white/70"
                  }`}
                  title={tech.name}
                >
                  {Icon ? (
                    <Icon
                      className={`text-4xl ${
                        isActive ? "text-orange-500" : tech.color
                      }`}
                    />
                  ) : (
                    <span
                      className={`text-base font-medium ${
                        isActive
                          ? "text-orange-500 scale-110"
                          : "hover:text-orange-400 text-white/70"
                      }`}
                    >
                      Todos
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Galería de proyectos */}
        <motion.div
          key={selectedTech + page}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl"
        >
          {currentProjects.map((proj, index) => (
            <motion.a
              key={index}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-3xl shadow-lg hover:scale-[1.06] hover:shadow-2xl transition-transform duration-500"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-60 object-cover group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 text-lg font-semibold text-white">
                {proj.title}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex gap-3 pt-8 animate-fadeIn delay-200">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-full border border-orange-500 ${
                  page === i + 1
                    ? "bg-orange-500 text-white"
                    : "text-orange-500 hover:bg-orange-600 hover:text-white"
                } transition`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>
    </FadeInSection>
  );
}
