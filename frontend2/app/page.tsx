"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  Stethoscope,
  Clock,
  ShieldCheck,
  Phone,
  Calendar,
  MapPin,
  ArrowRight,
  Menu,
  Search,
  UserCheck,
  Award,
  Activity,
  HeartPulse,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DoctorMarquee from "@/components/ui/DoctorMarquee";

// Animation Variants - Smoother for Premium Feel
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function LuxuryHospitalLanding() {
  return (
    <div className="min-h-screen bg-[#FCFDFE] text-slate-900 font-sans selection:bg-emerald-100">
      {/* --- TOP BAR (PREMIUM INFO) --- */}
      <div className="hidden lg:block bg-[#0f172a] text-white/70 py-2 text-xs tracking-widest uppercase">
        <div className="container mx-auto flex justify-between px-6">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-emerald-400" /> Tangerang, Banten
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-emerald-400" /> Emergency 24/7
              Available
            </span>
          </div>
          <div className="flex gap-4 italic text-white">
            Premium Healthcare Experience
          </div>
        </div>
      </div>

      {/* --- NAVIGATION (GLASSMORPHISM) --- */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/70 backdrop-blur-xl">
        <div className="container mx-auto flex h-24 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-600 p-2.5 rounded-xl shadow-lg shadow-emerald-200">
              <HeartPulse className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-[#0f172a]">
                ANNISA<span className="text-emerald-600">PREMIUM</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">
                Healthcare Center
              </span>
            </div>
          </div>

          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-8">
                {[
                  "Layanan Eksklusif",
                  "Jadwal Dokter",
                  "Fasilitas VIP",
                  "Artikel",
                ].map((item) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors cursor-pointer">
                      {item}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="hidden md:flex font-bold text-slate-600"
            >
              Login
            </Button>
            <Button className="bg-[#0f172a] hover:bg-emerald-700 text-white rounded-full px-8 h-12 shadow-xl shadow-slate-200 transition-all active:scale-95">
              Reservasi Online
            </Button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION (MINIMALIST & CLEAN) --- */}
      <section className="relative pt-16 pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-50/50 rounded-l-[100px]" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex-1 space-y-8"
            >
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                Best Private Hospital 2026
              </Badge>
              <h1 className="text-6xl lg:text-8xl font-serif font-medium text-[#0f172a] leading-[1.1]">
                Kesehatan Anda Adalah <br />
                <span className="italic font-light text-emerald-600">
                  Prioritas Utama.
                </span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-light">
                Menghadirkan standar pelayanan internasional dengan sentuhan
                personal yang hangat. Fasilitas modern kelas dunia untuk
                kenyamanan pemulihan Anda.
              </p>

              <div className="flex flex-wrap gap-5 pt-4">
                <Button
                  size="lg"
                  className="bg-[#0f172a] rounded-full h-16 px-10 text-lg group shadow-2xl"
                >
                  Buat Janji Temu
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex items-center gap-4 px-6">
                  <div className="w-12 h-12 rounded-full border-2 border-emerald-600 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                      Konsultasi
                    </p>
                    <p className="text-lg font-bold text-[#0f172a]">
                      021-888-ANNS
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 relative"
            >
              <div className="relative z-10 w-full aspect-[4/5] bg-slate-200 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 to-transparent" />
              </div>

              {/* Floating Success Card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="absolute -bottom-10 -left-10 z-20 bg-white p-8 rounded-3xl shadow-2xl border border-slate-50 space-y-4 max-w-[280px]"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">99%</p>
                    <p className="text-xs text-slate-400 font-bold">
                      Pasien Puas
                    </p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[99%] bg-emerald-500" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-20 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Dokter Spesialis", val: "85+" },
              { label: "Tahun Melayani", val: "25" },
              { label: "Kapasitas Bed VIP", val: "120" },
              { label: "Sertifikasi Intl", val: "JCI" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-4xl lg:text-5xl font-serif text-[#0f172a]">
                  {stat.val}
                </p>
                <p className="text-xs uppercase tracking-widest font-bold text-emerald-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DoctorMarquee />

      {/* --- LUXURY SERVICES GRID --- */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif text-[#0f172a]">
                Layanan Unggulan Eksklusif
              </h2>
              <p className="text-slate-500 text-lg font-light italic">
                Menggabungkan keahlian medis terbaik dengan kenyamanan
                hospitality bintang lima.
              </p>
            </div>
            <Button
              variant="link"
              className="text-emerald-600 font-bold p-0 group"
            >
              Lihat Semua Layanan{" "}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cardiovascular Center",
                icon: <Activity className="w-10 h-10" />,
                desc: "Penanganan jantung komprehensif dengan teknologi kateterisasi jantung terbaru.",
              },
              {
                title: "Executive Health Check",
                icon: <UserCheck className="w-10 h-10" />,
                desc: "Skrining kesehatan menyeluruh dalam satu hari dengan fasilitas lounge VIP privat.",
              },
              {
                title: "Precision Surgery",
                icon: <ShieldCheck className="w-10 h-10" />,
                desc: "Bedah minimal invasif dengan tingkat akurasi tinggi untuk pemulihan lebih cepat.",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="group border-none bg-slate-50/50 hover:bg-[#0f172a] transition-all duration-500 rounded-[2.5rem] p-4 cursor-pointer overflow-hidden"
              >
                <CardHeader className="p-8 space-y-6">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                  <div className="space-y-4">
                    <CardTitle className="text-2xl font-serif group-hover:text-white transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-500 group-hover:text-slate-400 text-base leading-relaxed">
                      {service.desc}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- VIP CTA --- */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="bg-[#0f172a] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                Rasakan Standar{" "}
                <span className="italic text-emerald-400 underline underline-offset-8">
                  Kemewahan
                </span>{" "}
                Dalam Pemulihan.
              </h2>
              <p className="text-slate-400 text-xl font-light">
                Kami menyediakan fasilitas kamar suite dengan pemandangan kota,
                layanan butler privat, dan diet kustom oleh chef profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full h-16 px-12 text-lg font-bold shadow-xl shadow-emerald-900/20">
                  Virtual Tour Fasilitas
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full h-16 px-12 text-lg font-medium"
                >
                  Hubungi Concierge
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LUXURY FOOTER --- */}
      <footer className="bg-white pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-600 p-2 rounded-xl">
                  <HeartPulse className="text-white w-5 h-5" />
                </div>
                <span className="text-2xl font-black text-[#0f172a]">
                  ANNISA<span className="text-emerald-600">PREMIUM</span>
                </span>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed font-light">
                Memberikan pengalaman medis terbaik bagi Anda yang mengutamakan
                kualitas, keamanan, dan privasi. Terakreditasi Paripurna sejak
                2005.
              </p>
            </div>

            {["Services", "Hospital", "Concierge"].map((title) => (
              <div key={title}>
                <h4 className="text-[#0f172a] font-bold text-sm uppercase tracking-widest mb-8">
                  {title}
                </h4>
                <ul className="space-y-5 text-slate-500 font-medium">
                  {[
                    "Exclusive Care",
                    "Telemedicine",
                    "Executive Lounge",
                    "Pricing",
                  ]
                    .slice(0, 4)
                    .map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="hover:text-emerald-600 transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400 font-bold uppercase tracking-tighter">
            <p>© 2026 RS ANNISA PREMIUM. PRIVACY POLICY — TERMS OF SERVICE</p>
            <div className="flex gap-8">
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
