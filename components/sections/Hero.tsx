"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Cột Trái: Nội dung Text */}
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-2 text-brand text-sm font-bold tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
          Available for new opportunities
        </div>

        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight">
          Hi, I`m Phước Anh.
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
          A Java Backend Developer who loves building robust, scalable, and
          clean systems.
        </p>

        {/* Cụm Nút bấm */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="bg-brand text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-brand/25">
            View Projects
          </button>
          <button className="bg-surface border border-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all">
            Download CV (PDF)
          </button>
        </div>

        {/* Khối Thông tin Ngắn (Specialization, Core Stack...) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-slate-800 mt-12">
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">
              Specialization
            </p>
            <p className="font-medium text-slate-300">Microservices & APIs</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">
              Core Stack
            </p>
            <p className="font-medium text-slate-300">Java, Spring Boot, SQL</p>
          </div>
          <div className="hidden md:block">
            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">
              Approach
            </p>
            <p className="font-medium text-slate-300">Stability & Clean Code</p>
          </div>
        </div>
      </div>

      {/* Cột Phải: Hình ảnh & Badge */}
      <div className="flex-1 relative flex justify-center lg:justify-end">
        {/* Vòng tròn Background mờ ảo phía sau */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-brand/10 rounded-full blur-3xl -z-10"></div>

        <div className="relative">
          {/* Phần Hình ảnh Avatar */}
          <div className="w-72 h-72 md:w-100 md:h-100 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-900 relative z-10">
            <Image
              src="/avatar.jpg"
              alt="Phước Anh Avatar"
              fill
              className="object-cover"
              priority
            />
          </div>

          <motion.div
            className="absolute -bottom-6 -right-6 lg:-right-12 bg-surface border border-slate-700 p-4 rounded-xl shadow-2xl z-20 flex items-center gap-4"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 1.2,
            }}
          >
            <div className="w-10 h-10 bg-brand/20 rounded-full flex items-center justify-center text-brand">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-400">Reliability First</p>
              <p className="font-bold text-white font-mono text-sm">
                System Architect
              </p>
            </div>
          </motion.div>
          {/* ======================================================== */}
        </div>
      </div>
    </section>
  );
}
