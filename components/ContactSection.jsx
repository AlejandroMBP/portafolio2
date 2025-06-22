"use client";

import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInsection";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const whatsapp = form.whatsapp.value;
    const institution = form.institution.value;
    const reference = form.reference.value;
    const message = form.message.value;

    const body = `
Nombre: ${name}
Email: ${email}
WhatsApp: ${whatsapp}
Institución: ${institution}
Referencia: ${reference}

Mensaje:
${message}
    `;

    const mailtoLink = `mailto:marcosberriosp@gmail.com?subject=Contacto de ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <FadeInSection>
      <section
        id="contact"
        className="h-auto min-h-screen flex flex-col justify-center px-6 py-20 text-white space-y-16"
      >
        <div className="flex flex-col space-y-4 max-w-6xl w-full">
          <strong className="text-orange-400 uppercase tracking-wider">
            • Contacto
          </strong>
          <h2 className="text-6xl font-bold animate-fadeIn">
            Contacto para Trabajo
          </h2>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="w-full max-w-6xl bg-[#0f0f0f]/90 backdrop-blur rounded-3xl p-12 shadow-xl space-y-12 animate-fadeInUp"
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
            }}
          >
            {[
              { id: "email", label: "Tu Email", type: "email", required: true },
              { id: "whatsapp", label: "Tu WhatsApp", type: "text", pattern: "^[0-9+\\s()-]*$", required: true },
              { id: "name", label: "Nombre de contacto / encargado", type: "text", required: true },
              { id: "institution", label: "Institución o empresa", type: "text", required: true },
              { id: "reference", label: "¿Cómo nos encontraste?", type: "text", required: true, fullWidth: true },
            ].map((field, index) => (
              <motion.div
                key={index}
                className={`relative group ${field.fullWidth ? "md:col-span-2" : ""}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  required={field.required}
                  pattern={field.pattern || undefined}
                  className="peer w-full bg-transparent border-b border-gray-600 py-5 text-white placeholder-transparent focus:outline-none focus:border-orange-500 transition"
                  placeholder={field.label}
                />
                <label
                  htmlFor={field.id}
                  className="absolute left-0 text-gray-500 text-sm transition-all
                  top-2 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:-top-2 peer-focus:text-sm peer-focus:text-orange-400
                  peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-orange-400"
                >
                  {field.label}
                </label>
              </motion.div>
            ))}

            {/* Mensaje */}
            <motion.div
              className="md:col-span-2 relative group"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="peer w-full bg-transparent border-b border-gray-600 py-5 text-white placeholder-transparent focus:outline-none focus:border-orange-500 transition"
                placeholder="Mensaje"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 text-gray-500 text-sm transition-all
                top-2 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:-top-2 peer-focus:text-sm peer-focus:text-orange-400
                peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-orange-400"
              >
                Tu mensaje
              </label>
            </motion.div>
          </motion.div>

          {/* Botón enviar */}
          <motion.div
            className="flex justify-center pt-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <button
              type="submit"
              className="flex items-center justify-center gap-4 px-10 py-5 bg-white text-black hover:bg-orange-500 hover:text-white rounded-full text-lg font-semibold transition-transform hover:scale-105 duration-300"
            >
              Enviar mensaje
              <FaArrowRight className="ml-2" />
            </button>
          </motion.div>
        </motion.form>
      </section>
    </FadeInSection>
  );
}
