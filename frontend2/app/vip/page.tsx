"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Coffee,
  Wifi,
  Tv,
  ShieldCheck,
  UserRoundCheck,
  Bed,
  UtensilsCrossed,
  Car,
  DoorOpen,
  Maximize,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
const vips = [
  {
    title: "Presidential Suite",
    size: "85 sqm",
    features: [
      "Ruang Tamu Privat",
      "Kitchenette",
      "Kamar Ajudan",
      'Smart TV 65"',
    ],
    desc: "Kamar rawat inap termewah dengan standar hotel bintang 5. Dilengkapi dengan balkon pribadi yang menghadap taman zen untuk ketenangan pemulihan.",
    price: "Premium Rate",
  },
  {
    title: "Executive VVIP",
    size: "60 sqm",
    features: ["Sofa Bed Keluarga", "Meja Makan", "Premium Coffee Maker"],
    desc: "Keseimbangan sempurna antara fungsionalitas medis dan kenyamanan rumah. Ideal bagi pasien yang ingin tetap terhubung dengan keluarga.",
    price: "Executive Rate",
  },
];

const amenities = [
  {
    icon: <UserRoundCheck />,
    label: "Personal Butler",
    detail: "Asisten pribadi 24 jam untuk kebutuhan non-medis.",
  },
  {
    icon: <UtensilsCrossed />,
    label: "Fine Dining",
    detail: "Menu kustom dari Chef profesional sesuai anjuran gizi.",
  },
  {
    icon: <Car />,
    label: "Valet & Limousine",
    detail: "Layanan jemputan eksklusif dari dan menuju bandara/rumah.",
  },
  {
    icon: <ShieldCheck />,
    label: "High Security",
    detail: "Akses kartu RFID khusus dan area yang sangat privat.",
  },
];

export default function VIPFacilitiesPage() {
  return (
    <div className="min-h-screen bg-[#FCFDFE] text-slate-900 font-sans selection:bg-emerald-100">
      {/* --- HERO SECTION: ELEGANT ENTRANCE --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631217816660-ad483a97614e?q=80&w=2000')] bg-cover bg-center opacity-40 mix-blend-overlay scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/50 to-[#FCFDFE]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 mb-6 px-6 py-2 rounded-full backdrop-blur-md">
            The Pinnacle of Healthcare Luxury
          </Badge>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Fasilitas Rawat Inap <br />
            <span className="italic font-light text-emerald-300">
              Kelas Dunia.
            </span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
            Kami mendefinisikan ulang pemulihan medis dengan memadukan teknologi
            kesehatan mutakhir dan kenyamanan hospitalitas tanpa batas.
          </p>
        </motion.div>
      </section>

      {/* --- BENTO GRID: ROOM SHOWCASE --- */}
      <section className="container mx-auto px-6 -mt-24 relative z-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Large Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="lg:col-span-8 bg-white rounded-[3rem] shadow-2xl shadow-slate-200 overflow-hidden border border-slate-100"
          >
            <div className="h-[400px] bg-slate-200 relative group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1500')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-6 left-6 flex gap-2">
                <Badge className="bg-white/90 text-[#0f172a] backdrop-blur-md border-none px-4">
                  Most Exclusive
                </Badge>
              </div>
            </div>
            <div className="p-12">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-4xl font-serif text-[#0f172a] mb-2">
                    {vips[0].title}
                  </h2>
                  <p className="text-emerald-600 font-bold flex items-center gap-2 tracking-widest uppercase text-xs">
                    <Maximize className="w-4 h-4" /> {vips[0].size}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-400 uppercase font-bold tracking-tighter">
                    Status
                  </p>
                  <p className="text-emerald-600 font-bold">Tersedia</p>
                </div>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 font-light italic">
                {vips[0].desc}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {vips[0].features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-[#0f172a] font-semibold bg-slate-50 p-3 rounded-xl border border-slate-100"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{" "}
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Side Premium Services */}
          <div className="lg:col-span-4 space-y-8">
            <Card className="rounded-[3rem] bg-[#0f172a] text-white border-none p-10 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="bg-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <Sparkles className="text-white w-8 h-8" />
                </div>
                <h3 className="text-3xl font-serif leading-tight">
                  Layanan Concierge 24 Jam
                </h3>
                <p className="text-slate-400 font-light leading-relaxed">
                  Tim kami siap melayani reservasi restoran, pengaturan
                  perjalanan keluarga, hingga kebutuhan laundry kilat untuk
                  Anda.
                </p>
              </div>
              <Button className="mt-8 bg-white text-[#0f172a] hover:bg-emerald-50 rounded-2xl h-14 font-bold transition-all">
                Hubungi Butler
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* --- AMENITIES: DETAILED INFORMATION --- */}
      <section className="py-32 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-[#0f172a] mb-6">
              Fasilitas Penunjang VIP
            </h2>
            <p className="text-slate-500 text-lg font-light">
              Setiap detail dirancang untuk melampaui ekspektasi Anda,
              memberikan pengalaman medis yang menenangkan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="text-emerald-600 mb-6 group-hover:scale-110 transition-transform origin-left">
                  {/* Cloning icon with custom size */}
                  {React.cloneElement(item.icon as React.ReactElement, {
                    className: "w-12 h-12",
                  })}
                </div>
                <h4 className="text-xl font-bold text-[#0f172a] mb-3">
                  {item.label}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INFRASTRUCTURE HIGHLIGHT: PREMIUM GALLERY STYLE --- */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-10">
              <Badge className="bg-slate-100 text-slate-500 border-none font-bold tracking-widest uppercase">
                Technology & Comfort
              </Badge>
              <h3 className="text-4xl md:text-5xl font-serif text-[#0f172a] leading-tight">
                Infrastruktur Medis <br /> Berstandar Global.
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Smart Bed System",
                    desc: "Tempat tidur otomatis yang menyesuaikan kontur tubuh untuk mencegah luka tekan (decubitus).",
                  },
                  {
                    title: "HEPA Filter 14",
                    desc: "Sistem filtrasi udara tingkat tinggi untuk menjaga sterilitas ruangan 99.9%.",
                  },
                  {
                    title: "Integrated Monitoring",
                    desc: "Pemantauan tanda vital pasien yang terhubung langsung ke gadget dokter spesialis secara real-time.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-emerald-600 font-serif text-2xl opacity-30 group-hover:opacity-100 transition-opacity">
                      0{i + 1}
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-[#0f172a] mb-1">
                        {item.title}
                      </h5>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="h-64 rounded-[2.5rem] bg-slate-200 overflow-hidden shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1538108197794-88c0ad06ca55?q=80&w=600"
                      className="w-full h-full object-cover"
                      alt="VIP Hall"
                      width={960}
                      height={960}
                    />
                  </div>
                  <div className="h-48 rounded-[2.5rem] bg-emerald-600 flex items-center justify-center p-8 text-white text-center italic">
                    Keamanan Anda adalah Prioritas, Kenyamanan Anda adalah
                    Keharusan.
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-48 rounded-[2.5rem] bg-slate-100 overflow-hidden border border-slate-200 flex items-center justify-center">
                    <DoorOpen className="w-16 h-16 text-slate-300" />
                  </div>
                  <div className="relative w-full h-full">
                    <Image
                      src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600"
                      alt="Medical Tech"
                      fill // Mengisi container div-nya
                      className="object-cover rounded-[2.5rem]"
                      priority // Tambahkan ini jika gambar ada di bagian atas (Hero) agar dimuat duluan
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VIP CALL TO ACTION --- */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#0f172a] rounded-[4rem] p-16 text-center space-y-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
            <h2 className="text-3xl md:text-5xl font-serif text-white">
              Ingin Melihat Fasilitas Kami Secara Langsung?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-light">
              Daftarkan diri Anda untuk *Private Tour* fasilitas VIP kami
              dipandu oleh petugas eksklusif kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-500 rounded-2xl h-16 px-10 text-lg font-bold transition-all shadow-xl shadow-emerald-900/40"
              >
                Jadwalkan Private Tour
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-2xl h-16 px-10"
              >
                Download Brosur VIP (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
