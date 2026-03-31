"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

// Data dokter specialist - Sesuaikan dengan kebutuhan
const doctors = [
  {
    name: "dr. Adrian Wijaya, Sp.JP",
    specialist: "Jantung & Pembuluh Darah",
    hospital: "Harvard Medical School",
  },
  {
    name: "dr. Sarah Anindita, Sp.A",
    specialist: "Spesialis Anak (Pediatri)",
    hospital: "University of Tokyo",
  },
  {
    name: "dr. Farhan Malik, Sp.OT",
    specialist: "Bedah Ortopedi",
    hospital: "Stanford Medicine",
  },
  {
    name: "dr. Elena Rose, Sp.OG",
    specialist: "Kebidanan & Kandungan",
    hospital: "Johns Hopkins",
  },
  {
    name: "dr. Budi Santoso, Sp.PD",
    specialist: "Penyakit Dalam",
    hospital: "Universitas Indonesia",
  },
  {
    name: "dr. Jessica Lee, Sp.KK",
    specialist: "Dermatologi & Estetika",
    hospital: "Seoul National University",
  },
];

export default function DoctorMarquee() {
  // Kita duplikasi listnya agar animasinya tidak terputus (infinite)
  const duplicatedDoctors = [...doctors, ...doctors];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h3 className="text-sm uppercase tracking-[0.3em] text-emerald-600 font-bold mb-3">
          Our Elite Medical Team
        </h3>
        <h2 className="text-3xl md:text-4xl font-serif text-[#0f172a]">
          Panel Dokter Spesialis Internasional
        </h2>
      </div>

      {/* Container utama dengan efek blur di pinggir (Gradient Mask) */}
      <div className="relative flex overflow-hidden group">
        {/* Overlay Gradient untuk kesan "Fade" di kiri dan kanan */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Jalur Animasi */}
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"], // Berjalan setengah dari total lebar (karena data diduplikasi)
          }}
          transition={{
            duration: 30, // Kecepatan (makin besar makin lambat/premium)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedDoctors.map((doc, idx) => (
            <div
              key={idx}
              className="inline-flex flex-col min-w-[300px] p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-emerald-50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
                  {/* Placeholder Avatar - Ganti dengan Image asli jika ada */}
                  <div className="w-full h-full bg-[#0f172a] flex items-center justify-center text-white font-serif text-xl">
                    {doc.name.charAt(4)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#0f172a] text-lg">
                    {doc.name}
                  </h4>
                  <p className="text-emerald-600 text-xs font-bold uppercase tracking-wider">
                    {doc.specialist}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200/50">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">
                  Alumni
                </p>
                <p className="text-sm text-slate-600 font-medium italic">
                  {doc.hospital}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
