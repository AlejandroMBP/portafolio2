import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaArrowRight,
} from "react-icons/fa6";
import FadeInSection from "./FadeInsection";

export default function ProfileCard() {
  return (
    <FadeInSection>
      <aside className="hidden lg:flex flex-col w-[500px] p-6 pl-10 sticky top-0 h-screen">
        <div className="bg-[#1a1a1a]/80 backdrop-blur rounded-3xl p-12 shadow-lg flex-1 overflow-auto">
          {/* Heading */}
          <div className="flex items-center justify-between mb-4">
            <img
              src="/assets/videos/images/logo.jpeg"
              alt="Logo"
              className="w-10 h-10 rounded-full border-amber-50/50 border-1"
            />

            <div className="flex items-center gap-2 px-3 py-2 border-amber-50/50 border-1 bg-gray-950/50 rounded-full text-sm text-white">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span>
                Habilitados{" "}
                <span className="font-semibold text-orange-400">
                  5 proyectos
                </span>
              </span>
            </div>
          </div>

          {/* Imagen perfil con nombre encima */}
          <div className="relative w-full rounded-xl overflow-hidden mb-6">
            <img
              src="/assets/videos/images/image.png"
              alt="Marcos Alejandro BP"
              className="rounded-xl w-full object-cover py-5"
            />
            <div className="absolute bottom-[-70px] left-1/2 -translate-x-1/2">
              <img
                src="/assets/videos/images/Marcos.png"
                alt="Marcos Alejandro BP"
                className="h-60 object-contain"
              />
            </div>
          </div>

          {/* Correo + ubicación */}
          <p className="text-center text-gray-400 mb-1">
            MarcosBerriosp@gmail.com
          </p>
          <p className="text-center text-gray-500 text-sm mb-6">
            Marcos Alejandro Berrios Pancata, BO.
          </p>

          {/* Redes sociales */}
          <div className="flex justify-center gap-4 mb-6 p-10">
            <a
              href="https://www.facebook.com/ariel.berrios.900/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-950/50 border-amber-50/50 border-1 hover:bg-orange-500 rounded-full flex items-center justify-center text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/marcos-alejandro-berrios-pancata-33a811317/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-950/50 border-amber-50/50 border-1 hover:bg-orange-500 rounded-full flex items-center justify-center text-white transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-950/50 border-amber-50/50 border-1 hover:bg-orange-500 rounded-full flex items-center justify-center text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-950/50 border-amber-50/50 border-1 hover:bg-orange-500 rounded-full flex items-center justify-center text-white transition"
            >
              <FaTiktok />
            </a>
          </div>

          {/* Botón */}
          <a
            href="#contact"
            className="w-full flex border-amber-50/50 border-1 items-center justify-between px-6 py-5 bg-gray-950/50 hover:bg-orange-500 rounded-full text-white text-lg font-medium transition"
          >
            Ir al contacto <FaArrowRight />
          </a>
        </div>
      </aside>
    </FadeInSection>
  );
}
