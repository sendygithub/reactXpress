"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  Bell,
  MonitorCheck,
  Medal,
  Book,
  ChevronRight,
  Sparkles,
  HeartPulse,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook untuk mendeteksi halaman aktif

// -- Komponen Sidebar Premium --
const Sidebar = () => {
  const pathname = usePathname(); // Mendapatkan path URL saat ini

  const menus = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Data Pengguna", icon: Users, href: "/dashboard/users" },
    { name: "Rekam Medis", icon: Book, href: "/dashboard/medical-record" },
    { name: "Farmasi & Logistik", icon: Medal, href: "/dashboard/farmasi" },
    { name: "Administrasi", icon: MonitorCheck, href: "/dashboard/billing" },
    { name: "Report", icon: MonitorCheck, href: "/dashboard/report" },
    { name: "Pengaturan", icon: Settings, href: "/dashboard/setting" },
  ];

  return (
    <aside className="w-64 bg-[#0f172a] p-6 flex flex-col h-screen sticky top-0 border-r border-slate-800">
      {/* --- LOGO: PREMIUM TOUCH --- */}
      <div className="flex items-center gap-3 mb-10 pb-4 border-b border-slate-800">
        <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/50">
          <HeartPulse className="text-white w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-white">
            Heal<span className="text-emerald-400 font-light">Thive</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
            Admin Panel
          </span>
        </div>
      </div>

      {/* --- NAVIGASI: INTERAKTIF DENGAN FRAMER MOTION --- */}
      <nav className="flex-1 space-y-2.5">
        {menus.map((menu) => {
          // Menentukan apakah menu ini aktif berdasarkan URL saat ini
          const isActive = pathname === menu.href;

          return (
            <Link
              key={menu.name}
              href={menu.href!}
              className={`group relative flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {/* Indikator Latar Belakang Aktif (Pill) */}
              {isActive && (
                <motion.div
                  layoutId="active-pill" // Kunci agar animasi "pindah" kotak latar belakang terjadi
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  className="absolute inset-0 bg-emerald-600 rounded-xl shadow-lg shadow-emerald-900/30"
                />
              )}

              {/* Ikon Menu (Z-index agar di atas pill) */}
              <div
                className={`relative z-10 p-1.5 rounded-lg transition-colors ${
                  isActive ? "bg-white/10" : "group-hover:bg-white/5"
                }`}
              >
                <menu.icon className="w-5 h-5" />
              </div>

              {/* Teks Menu (Z-index agar di atas pill) */}
              <span className="relative z-10 flex-1">{menu.name}</span>

              {isActive && (
                <ChevronRight className="relative z-10 w-4 h-4 text-emerald-100" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* --- FOOTER: USER & LOGOUT --- */}
      <div className="border-t border-slate-800 pt-6 space-y-5">
        {/* User Profile Card (Simulated) */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-bold text-white">dr. Adrian</p>
            <p className="text-xs text-slate-500">Super Admin</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto text-slate-500 hover:text-white"
          >
            <Bell className="w-4 h-4" />
          </Button>
        </div>

        <Button
          variant="ghost"
          className="w-full justify-start gap-3.5 h-12 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 active:scale-95 transition-all"
        >
          <LogOut className="w-5 h-5" />
          Keluar Akun
        </Button>
      </div>
    </aside>
  );
};

// -- Komponen Header Premium (Atas) --

// -- Halaman Utama --
export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#FCFDFE]">
      {/* Sidebar Statis */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Header Statis */}

        {/* Dynamic Page Content */}
        <section className="p-10">{children}</section>
      </main>
    </div>
  );
}
