"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Mail,
  Lock,
  User,
  ArrowRight,
  ChevronLeft,
  Activity,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  // Animasi Variabel
  const containerVariants = {
    hidden: { opacity: 0, x: isLogin ? -20 : 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, x: isLogin ? 20 : -20, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f8fafc] overflow-hidden relative font-sans">
      {/* --- BACKGROUND ANIMATION ELEMENTS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            y: [0, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-slate-200/50 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative z-10 flex items-center justify-center px-4">
        <Card className="w-full max-w-5xl grid lg:grid-cols-2 overflow-hidden border-none shadow-2xl bg-white/80 backdrop-blur-xl rounded-[2rem]">
          {/* --- LEFT SIDE: INFORMATIONAL (DESKTOP) --- */}
          <div className="hidden lg:flex flex-col justify-between p-12 bg-[#0f172a] text-white relative">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-12">
                <div className="bg-white/10 p-2 rounded-lg backdrop-blur-md">
                  <Stethoscope className="text-white w-6 h-6" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  RS ANNISA
                </span>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl font-bold leading-tight">
                  {isLogin
                    ? "Selamat Datang Kembali di Portal Pasien."
                    : "Mulai Perjalanan Sehat Anda Bersama Kami."}
                </h2>
                <p className="text-slate-400 text-lg">
                  Akses riwayat medis, jadwal dokter, dan pendaftaran online
                  dalam satu genggaman.
                </p>
              </div>
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-sm text-slate-300">
                  Data medis Anda terenkripsi dengan aman sesuai standar
                  internasional.
                </p>
              </div>
            </div>

            {/* Decorative Pulse Line */}
            <svg
              className="absolute bottom-0 left-0 w-full opacity-10"
              viewBox="0 0 100 20"
            >
              <path
                d="M0 10 H20 L25 5 L35 15 L40 10 H100"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div className="p-8 lg:p-16 flex flex-col justify-center bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? "login" : "register"}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#0f172a]">
                    {isLogin ? "Masuk ke Akun" : "Daftar Akun Baru"}
                  </h3>
                  <p className="text-slate-500 text-sm mt-2">
                    {isLogin
                      ? "Silakan masukkan kredensial Anda"
                      : "Lengkapi data untuk menikmati layanan kami"}
                  </p>
                </div>

                <form
                  className="space-y-5"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <Input
                          id="name"
                          placeholder="Budi Santoso"
                          className="pl-10 rounded-xl h-12 border-slate-200 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        className="pl-10 rounded-xl h-12 border-slate-200 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">Password</Label>
                      {isLogin && (
                        <button className="text-xs text-blue-600 hover:underline">
                          Lupa password?
                        </button>
                      )}
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10 rounded-xl h-12 border-slate-200 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <Button className="w-full h-12 bg-[#0f172a] hover:bg-slate-800 rounded-xl text-lg font-semibold group transition-all">
                    {isLogin ? "Masuk" : "Buat Akun"}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-slate-500 text-sm">
                    {isLogin ? "Belum punya akun?" : "Sudah memiliki akun?"}{" "}
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-blue-600 font-bold hover:underline ml-1"
                    >
                      {isLogin ? "Daftar Sekarang" : "Masuk di Sini"}
                    </button>
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="h-[1px] flex-1 bg-slate-100" />
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Atau
                  </span>
                  <div className="h-[1px] flex-1 bg-slate-100" />
                </div>

                <div className="mt-6 flex justify-center">
                  <Button
                    variant="ghost"
                    onClick={() => (window.location.href = "/")}
                    className="text-slate-500 hover:text-[#0f172a]"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" /> Kembali ke Beranda
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Card>
      </div>

      {/* --- FLOATING DECORATION --- */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-20 right-[15%] hidden xl:block bg-white p-4 rounded-2xl shadow-xl border border-slate-100"
      >
        <Activity className="w-8 h-8 text-red-500" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6, delay: 1 }}
        className="absolute bottom-20 left-[10%] hidden xl:block bg-white p-4 rounded-2xl shadow-xl border border-slate-100"
      >
        <HeartPulse className="w-8 h-8 text-blue-500" />
      </motion.div>
    </div>
  );
}
