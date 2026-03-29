"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  HeartPulse,
  Award,
  Building2,
  Users,
  Microscope,
  Stethoscope,
  BedDouble,
  Syringe,
  MapPin,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Animation Variants (Konsisten dengan Landing Page)
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Data Dummy Milestones
const milestones = [
  { year: "2010", event: "Peletakan Batu Pertama & Pendirian Yayasan" },
  { year: "2012", event: "Resmi Beroperasi sebagai RS Tipe C" },
  { year: "2016", event: "Pencapaian Akreditasi Paripurna Pertama" },
  { year: "2019", event: "Pembangunan Gedung Paviliun Rawat Inap Baru" },
  { year: "2023", event: "Digitalisasi Penuh Layanan Rumah Sakit (SIMRS)" },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-slate-200">
      {/* --- HEADER SEKSYEN (Minimalis & Profesional) --- */}
      <section className="bg-white border-b py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Badge
              variant="secondary"
              className="px-4 py-1 text-sm bg-slate-100 text-slate-600 border-none mb-4"
            >
              Mengenal Lebih Dekat
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f172a] mb-6">
              Tentang RS ANNISA{" "}
              <span className="text-slate-400 font-light">CLONE</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Dedikasi kami adalah memberikan pelayanan kesehatan bermutu tinggi
              yang berfokus pada keselamatan pasien, didukung oleh teknologi
              medis terkini dan tenaga profesional yang berintegritas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SEJARAH & PENGANTAR (Layout Dua Kolom) --- */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-1 relative"
            >
              <div className="w-full aspect-[4/3] bg-slate-200 rounded-[2rem] overflow-hidden shadow-lg border-8 border-white flex items-center justify-center text-slate-400 italic">
                [Image: Gedung RS Annisa tampak depan]
              </div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute -bottom-8 -right-8 z-10 bg-[#0f172a] p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-700"
              >
                <Award className="w-10 h-10 text-slate-300" />
                <div>
                  <p className="text-xs text-slate-400 font-medium tracking-wide">
                    AKREDITASI KARS
                  </p>
                  <p className="font-bold text-white text-lg">PARIPURNA</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex-1 space-y-6"
            >
              <motion.h2
                variants={fadeIn}
                className="text-3xl font-bold text-[#0f172a]"
              >
                Sejarah Singkat & Nilai Kami
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-slate-600 leading-relaxed"
              >
                Berdiri sejak tahun 2010, RS Annisa Clone tumbuh dari sebuah
                klinik bersalin menjadi rumah sakit umum yang terpercaya. Kami
                memahami bahwa kesehatan adalah aset paling berharga, itulah
                sebabnya kami berkomitmen untuk melayani setiap pasien dengan
                kasih sayang, seperti keluarga sendiri.
              </motion.p>
              <motion.p
                variants={fadeIn}
                className="text-slate-600 leading-relaxed"
              >
                Kombinasi antara keahlian medis dan sentuhan kemanusiaan adalah
                inti dari operasional kami. Kami terus berinovasi untuk
                menghadirkan layanan yang efisien dan akurat bagi masyarakat.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="grid grid-cols-2 gap-4 pt-4"
              >
                {[
                  { icon: Building2, label: "Fasilitas Modern" },
                  { icon: Users, label: "Tim Profesional" },
                  { icon: Microscope, label: "Teknologi Terkini" },
                  { icon: HeartPulse, label: "Pelayanan Sepenuh Hati" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm"
                  >
                    <item.icon className="w-5 h-5 text-[#0f172a]" />
                    <span className="font-medium text-sm text-slate-800">
                      {item.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- VISI & MISI (Card-based Layout) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* VISI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-none bg-slate-50 shadow-sm h-full group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform" />
                <CardHeader className="relative z-10 flex flex-row items-center gap-4 pb-4">
                  <div className="p-3 bg-white rounded-xl shadow-inner text-[#0f172a]">
                    <Eye className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#0f172a]">
                    Visi Kami
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-xl font-semibold text-slate-800 leading-snug italic">
                    Menjadi Rumah Sakit Pilihan Utama di Indonesia yang Unggul
                    dalam Pelayanan, Keselamatan Pasien, dan Inovasi Medis
                    Berbasis Teknologi.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* MISI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-none bg-[#0f172a] shadow-sm h-full text-white">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className="p-3 bg-slate-800 rounded-xl text-slate-200">
                    <Target className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">
                    Misi Kami
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-slate-300">
                    {[
                      "Menyelenggarakan pelayanan kesehatan yang prima, aman, dan informatif bagi seluruh lapisan masyarakat.",
                      "Membangun sumber daya manusia yang kompeten, berintegritas, dan berorientasi pada kepuasan pasien.",
                      "Mengimplementasikan teknologi medis dan sistem informasi modern untuk efisiensi diagnostik dan terapi.",
                      "Menjalin kemitraan strategis dengan institusi kesehatan nasional dan internasional.",
                    ].map((misi, idx) => (
                      <li key={idx} className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-slate-500 mt-2 shrink-0" />
                        <span>{misi}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FASILITAS & TEKNOLOGI (Tabs-based Layout) --- */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#0f172a]">
              Fasilitas Modern Kami
            </h2>
            <p className="text-slate-500">
              Kami menginvestasikan sumber daya untuk memastikan lingkungan
              penyembuhan yang nyaman dan peralatan medis tercanggih.
            </p>
          </div>

          <Tabs defaultValue="medis" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-white border p-1 rounded-full h-14 gap-2 shadow-sm">
                <TabsTrigger
                  value="medis"
                  className="rounded-full px-8 data-[state=active]:bg-[#0f172a] data-[state=active]:text-white"
                >
                  Peralatan Medis
                </TabsTrigger>
                <TabsTrigger
                  value="rawat"
                  className="rounded-full px-8 data-[state=active]:bg-[#0f172a] data-[state=active]:text-white"
                >
                  Ruang Rawat
                </TabsTrigger>
                <TabsTrigger
                  value="umum"
                  className="rounded-full px-8 data-[state=active]:bg-[#0f172a] data-[state=active]:text-white"
                >
                  Fasilitas Umum
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Medis Content */}
            <TabsContent value="medis">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: Syringe,
                    title: "Laboratorium Patologi",
                    desc: "Analisis sampel akurat dengan hasil cepat (PCR, Imunologi).",
                  },
                  {
                    icon: Microscope,
                    title: "Radiologi Digital",
                    desc: "CT Scan 128 Slice, MRI 1.5 Tesla, dan X-Ray Digital.",
                  },
                  {
                    icon: Stethoscope,
                    title: "Poliklinik Spesialis",
                    desc: "Ruang konsultasi nyaman untuk 25+ spesialisasi medis.",
                  },
                ].map((item, idx) => (
                  <FasilitasCard key={idx} {...item} />
                ))}
              </motion.div>
            </TabsContent>

            {/* Rawat Content */}
            <TabsContent value="rawat">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: BedDouble,
                    title: "Paviliun VVIP",
                    desc: "Kamar rawat inap mewah dengan privasi tinggi dan fasilitas bak hotel bintang lima.",
                  },
                  {
                    icon: HeartPulse,
                    title: "ICU / NICU / PICU",
                    desc: "Ruang perawatan intensif dengan monitoring 24/7 dan peralatan penunjang hidup terkini.",
                  },
                  {
                    icon: Building2,
                    title: "Kamar Kelas 1, 2, 3",
                    desc: "Kamar rawat inap standar yang bersih, sejuk, dan memenuhi prinsip PPI (Pencegahan Infeksi).",
                  },
                ].map((item, idx) => (
                  <FasilitasCard key={idx} {...item} />
                ))}
              </motion.div>
            </TabsContent>

            {/* Umum Content */}
            <TabsContent value="umum">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: Users,
                    title: "Ruang Tunggu Luas",
                    desc: "Area tunggu yang nyaman dengan akses Wi-Fi gratis dan kafetaria.",
                  },
                  {
                    icon: MapPin,
                    title: "Parkir Gedung",
                    desc: "Fasilitas parkir bertingkat yang aman dan luas untuk kendaraan pasien.",
                  },
                  {
                    icon: Building2,
                    title: "Masjid",
                    desc: "Fasilitas ibadah yang bersih dan tenang di area rumah sakit.",
                  },
                ].map((item, idx) => (
                  <FasilitasCard key={idx} {...item} />
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* --- TIMELINE MILESTONES (Minimalis) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#0f172a]">
              Perjalanan Kami
            </h2>
            <p className="text-slate-500">
              Jejak langkah RS Annisa Clone dalam melayani masyarakat.
            </p>
          </div>
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5 before:bg-slate-100 before:content-['']">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12 flex items-center"
              >
                <div className="absolute left-0 w-8 h-8 bg-[#0f172a] rounded-full border-4 border-white shadow-md flex items-center justify-center text-xs font-bold text-white z-10">
                  {idx + 1}
                </div>
                <Card className="border-none bg-slate-50 flex-1 p-5 shadow-inner">
                  <p className="text-sm font-bold text-[#0f172a]">
                    {milestone.year}
                  </p>
                  <p className="text-slate-700 mt-1 font-medium">
                    {milestone.event}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-komponen Kecil untuk FasilitasCard
interface FasilitasCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
}

function FasilitasCard({ icon: Icon, title, desc }: FasilitasCardProps) {
  return (
    <Card className="border-none bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
      <div className="mb-4 text-[#0f172a] group-hover:scale-110 transition-transform origin-left">
        <Icon className="w-8 h-8" />
      </div>
      <CardTitle className="text-lg font-semibold mb-2">{title}</CardTitle>
      <CardDescription className="text-slate-500 leading-relaxed text-sm">
        {desc}
      </CardDescription>
    </Card>
  );
}
