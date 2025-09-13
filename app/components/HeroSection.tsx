"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-1/3 py-10 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Orlando Alexander
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Data Science BSc Penultimate Year & Junior Full-Stack Developer
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">
              React
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">
              Python
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">
              SQL
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">
              Machine Learning
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">
              Data Analytics
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
