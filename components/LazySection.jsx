"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

const components = {
  HeroSection: dynamic(() => import("./HeroSection"), { ssr: false }),
  WorkSection: dynamic(() => import("./WorkSection"), { ssr: false }),
  AboutSection: dynamic(() => import("./AboutSection"), { ssr: false }),
  ContactSection: dynamic(() => import("./ContactSection"), { ssr: false }),
};

export default function LazySection({ component }) {
  const Component = useMemo(() => components[component], [component]);

  if (!Component) {
    return (
      <div className="w-full min-h-[50vh] flex items-center justify-center text-red-500 text-xl">
        No se pudo cargar la sección: {component}
      </div>
    );
  }

  return <Component />;
}
