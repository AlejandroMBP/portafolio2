"use client";

import { useState, useEffect } from "react";
import {
  FaRocket,
  FaBriefcase,
  FaUser,
  FaEnvelope,
} from "react-icons/fa6";

export default function SidebarDots() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["home", "work", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      console.log("Observando sección:", id, el);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="hidden lg:flex flex-col space-y-6 fixed right-8 top-1/2 -translate-y-1/2 z-20 pr-12">
      <NavItem
        href="#home"
        icon={<FaRocket />}
        label="Inicio"
        isActive={activeSection === "home"}
      />

      <NavItem
        href="#work"
        icon={<FaBriefcase />}
        label="Proyectos"
        isActive={activeSection === "work"}
      />

      <NavItem
        href="#about"
        icon={<FaUser />}
        label="Sobre mí"
        isActive={activeSection === "about"}
      />

      <NavItem
        href="#contact"
        icon={<FaEnvelope />}
        label="Contacto"
        isActive={activeSection === "contact"}
      />
    </div>
  );
}

function NavItem({ href, icon, label, isActive }) {
  return (
    <div className="flex flex-row-reverse items-center justify-end gap-3 group">
      <a
        href={href}
        title={label}
        className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition-colors ${
          isActive ? "bg-orange-500" : "bg-white/10 hover:bg-orange-500"
        }`}
      >
        {icon}
      </a>
      <span
        className={`min-w-[60px] text-right text-sm transition-colors ${
          isActive
            ? "text-orange-400"
            : "text-white/50 group-hover:text-orange-400"
        }`}
      >
        <a href={href}>{label}</a>
      </span>
    </div>
  );
}
