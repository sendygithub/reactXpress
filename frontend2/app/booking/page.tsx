"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Calendar,
  Clock,
  Star,
  ChevronRight,
  X,
  Award,
  ShieldCheck,
  Stethoscope,
  MapPin,
  HeartPulse,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

// Mock Data Dokter (Bisa ditarik dari database/Prisma nanti)
const doctorsData = [
  {
    id: 1,
    name: "dr. Adrian Wijaya, Sp.JP",
    specialist: "Cardiology & Vascular",
    rating: 4.9,
    reviews: 120,
    experience: "15 Years",
    education: "Harvard Medical School",
    bio: "Spesialis dalam intervensi jantung koroner dan manajemen gagal jantung kronis dengan pendekatan teknologi minimal invasif.",
    available: [
      { day: "Senin", time: "09:00 - 12:00" },
      { day: "Rabu", time: "14:00 - 17:00" },
      { day: "Jumat", time: "09:00 - 15:00" },
    ],
    image: "A", // Placeholder
  },
  {
    id: 2,
    name: "dr. Sarah Anindita, Sp.A",
    specialist: "Pediatrician (Anak)",
    rating: 5.0,
    reviews: 85,
    experience: "10 Years",
    education: "University of Tokyo",
    bio: "Berfokus pada tumbuh kembang anak dan imunologi. Dikenal sangat ramah dan tenang dalam menangani pasien balita.",
    available: [
      { day: "Selasa", time: "10:00 - 15:00" },
      { day: "Kamis", time: "10:00 - 15:00" },
      { day: "Sabtu", time: "08:00 - 12:00" },
    ],
    image: "S",
  },
  // Tambahkan dokter lain di sini...
];

export default function DoctorSchedulePage() {
  const [selectedDoctor, setSelectedDoctor] = useState<
    (typeof doctorsData)[0] | null
  >(null);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-[#FCFDFE] pb-20 font-sans">
      {/* --- HEADER --- */}
      <section className="bg-[#0f172a] pt-32 pb-20 px-6 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            Jadwal & Profil Dokter
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Temukan spesialis terbaik kami dan atur janji temu eksklusif Anda
            dengan mudah.
          </p>

          {/* Advanced Search Bar */}
          <div className="mt-12 max-w-3xl mx-auto relative group">
            <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex bg-white rounded-2xl p-2 shadow-2xl items-center border border-white/10">
              <Search className="ml-4 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari nama dokter atau spesialisasi..."
                className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-3 text-[#0f172a] font-medium"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button className="bg-emerald-600 hover:bg-emerald-500 rounded-xl px-8 h-12 font-bold">
                Cari
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- DOCTOR GRID --- */}
      <section className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorsData
            .filter(
              (doc) =>
                doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                doc.specialist.toLowerCase().includes(searchTerm.toLowerCase()),
            )
            .map((doctor) => (
              <motion.div
                key={doctor.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-xl shadow-slate-200/50 cursor-pointer transition-all hover:border-emerald-200"
                onClick={() => setSelectedDoctor(doctor)}
              >
                <div className="flex gap-5 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl font-serif text-[#0f172a] border border-slate-50">
                    {doctor.image}
                  </div>
                  <div className="flex-1">
                    <Badge className="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border-none px-3 py-1 mb-2 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                      Available Today
                    </Badge>
                    <h3 className="text-xl font-bold text-[#0f172a]">
                      {doctor.name}
                    </h3>
                    <p className="text-slate-400 text-sm font-medium">
                      {doctor.specialist}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold text-[#0f172a]">
                      {doctor.rating}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      ({doctor.reviews})
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-emerald-600 font-bold group p-0"
                  >
                    Lihat Detail{" "}
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* --- DETAIL MODAL / DRAWER --- */}
      <AnimatePresence>
        {selectedDoctor && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-0">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoctor(null)}
              className="absolute inset-0 bg-[#0f172a]/60 backdrop-blur-md"
            />

            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
            >
              {/* Left Side: Photo & Quick Info */}
              <div className="lg:w-1/3 bg-slate-50 p-10 flex flex-col items-center text-center">
                <div className="w-40 h-40 bg-white rounded-[2rem] shadow-xl flex items-center justify-center text-6xl font-serif text-[#0f172a] mb-6 border-4 border-white">
                  {selectedDoctor.image}
                </div>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-2">
                  {selectedDoctor.name}
                </h2>
                <p className="text-emerald-600 font-bold text-sm uppercase tracking-wider mb-8">
                  {selectedDoctor.specialist}
                </p>

                <div className="w-full space-y-4">
                  <div className="flex justify-between text-sm p-4 bg-white rounded-2xl border border-slate-100">
                    <span className="text-slate-400 font-medium">
                      Pengalaman
                    </span>
                    <span className="font-bold text-[#0f172a]">
                      {selectedDoctor.experience}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm p-4 bg-white rounded-2xl border border-slate-100">
                    <span className="text-slate-400 font-medium">Rating</span>
                    <span className="font-bold text-[#0f172a] flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />{" "}
                      {selectedDoctor.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Details & Booking */}
              <div className="lg:w-2/3 p-10 lg:p-14 overflow-y-auto">
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <X className="w-6 h-6 text-slate-400" />
                </button>

                <div className="space-y-10">
                  {/* Bio */}
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 mb-4 flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-600" /> Tentang
                      Dokter
                    </h4>
                    <p className="text-slate-600 leading-relaxed italic">
                      {selectedDoctor.bio}
                    </p>
                    <p className="mt-4 text-sm font-bold text-[#0f172a]">
                      Alumni:{" "}
                      <span className="font-medium text-slate-500">
                        {selectedDoctor.education}
                      </span>
                    </p>
                  </div>

                  {/* Schedule */}
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 mb-6 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-600" /> Jadwal
                      Praktik
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {selectedDoctor.available.map((sched, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-2xl border-2 border-slate-50 bg-slate-50/50 hover:border-emerald-100 transition-colors"
                        >
                          <p className="text-xs font-bold text-emerald-600 mb-1">
                            {sched.day}
                          </p>
                          <p className="text-sm font-bold text-[#0f172a]">
                            {sched.time}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking Action */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 h-16 bg-[#0f172a] hover:bg-emerald-700 text-lg font-bold rounded-2xl shadow-xl shadow-slate-200">
                      Buat Perjanjian Sekarang
                    </Button>
                    <Button
                      variant="outline"
                      className="h-16 rounded-2xl px-8 border-slate-200 text-[#0f172a] font-bold"
                    >
                      Tanya Via WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
