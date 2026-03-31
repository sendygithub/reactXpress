"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  UserPlus,
  Clock,
  CheckCircle2,
  MoreVertical,
  ArrowUpRight,
  TrendingUp,
  CalendarDays,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Data Dummy dengan sentuhan warna dinamis
const dataKunjungan = [
  { day: "Sen", total: 45 },
  { day: "Sel", total: 52 },
  { day: "Rab", total: 38 },
  { day: "Kam", total: 65 },
  { day: "Jum", total: 48 },
  { day: "Sab", total: 30 },
  { day: "Min", total: 15 },
];

const antreanPasien = [
  {
    id: "A-01",
    nama: "Budi Santoso",
    poli: "Umum",
    jam: "09:00",
    status: "Menunggu",
  },
  {
    id: "B-04",
    nama: "Siti Aminah",
    poli: "Gigi",
    jam: "09:15",
    status: "Diperiksa",
  },
  {
    id: "A-02",
    nama: "Agus Pratama",
    poli: "Umum",
    jam: "09:30",
    status: "Menunggu",
  },
];

export default function DashboardMain() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* --- 1. STATISTIC CARDS (PREMIUM STYLE) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Pasien"
          value="1,284"
          icon={<Users className="w-5 h-5" />}
          trend="+12.5%"
          isPositive={true}
        />
        <StatCard
          title="Pasien Baru"
          value="45"
          icon={<UserPlus className="w-5 h-5" />}
          trend="Hari ini"
          isPositive={null}
        />
        <StatCard
          title="Dalam Antrean"
          value="12"
          icon={<Clock className="w-5 h-5" />}
          trend="3 Emergency"
          isPositive={false}
        />
        <StatCard
          title="Selesai"
          value="28"
          icon={<CheckCircle2 className="w-5 h-5" />}
          trend="82% Target"
          isPositive={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* --- 2. CHART SECTION: TREND KUNJUNGAN --- */}
        <Card className="lg:col-span-2 border-none shadow-xl shadow-slate-200/50 bg-white rounded-[2rem] overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-8">
            <div>
              <CardTitle className="text-xl font-serif text-[#0f172a]">
                Tren Kunjungan Pasien
              </CardTitle>
              <CardDescription className="flex items-center gap-2 mt-1">
                <CalendarDays className="w-4 h-4" /> 7 Hari Terakhir
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Badge
                variant="outline"
                className="rounded-lg bg-emerald-50 text-emerald-700 border-emerald-100"
              >
                <TrendingUp className="w-3 h-3 mr-1" /> Peak: Kamis
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="h-[350px] pl-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataKunjungan}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={1} />
                    <stop offset="100%" stopColor="#059669" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 500 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                />
                <Tooltip
                  cursor={{ fill: "#f8fafc", radius: 8 }}
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                    padding: "12px",
                  }}
                />
                <Bar dataKey="total" radius={[8, 8, 0, 0]} barSize={32}>
                  {dataKunjungan.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.total > 50 ? "url(#barGradient)" : "#0f172a"}
                      className="transition-all duration-300"
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* --- 3. QUEUE SECTION: ANTREAN TERKINI --- */}
        <Card className="border-none shadow-xl shadow-slate-200/50 bg-white rounded-[2rem]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-serif text-[#0f172a]">
                  Antrean Live
                </CardTitle>
                <CardDescription>Pasien sedang menunggu</CardDescription>
              </div>
              <Button variant="ghost" size="icon" className="rounded-xl">
                <MoreVertical className="w-5 h-5 text-slate-400" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {antreanPasien.map((pasien, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={pasien.id}
                  className="flex items-center justify-between p-4 border border-slate-50 rounded-2xl bg-slate-50/30 hover:bg-white hover:shadow-lg hover:border-emerald-100 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-bold text-xs text-emerald-600 shadow-sm border border-slate-100">
                      {pasien.id}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {pasien.nama}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                        {pasien.poli} • {pasien.jam}
                      </span>
                    </div>
                  </div>
                  <Badge
                    className={`rounded-lg px-2 py-0.5 text-[10px] font-bold ${
                      pasien.status === "Diperiksa"
                        ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-100 border-none"
                    }`}
                  >
                    {pasien.status}
                  </Badge>
                </motion.div>
              ))}
              <Button
                variant="outline"
                className="w-full h-12 rounded-xl text-slate-500 font-bold border-slate-100 hover:bg-[#0f172a] hover:text-white transition-all"
              >
                Tampilkan Semua Antrean
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

// --- SUB-COMPONENT: STAT CARD ---
function StatCard({ title, value, icon, trend, isPositive }: any) {
  return (
    <Card className="border-none shadow-xl shadow-slate-200/50 bg-white rounded-[2rem] overflow-hidden relative group">
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
        {React.cloneElement(icon, { className: "w-24 h-24" })}
      </div>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          {title}
        </CardTitle>
        <div className="p-2.5 bg-slate-50 rounded-xl text-[#0f172a] shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-[#0f172a] tracking-tight">
          {value}
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          {isPositive !== null && (
            <div
              className={`p-0.5 rounded-full ${isPositive ? "bg-emerald-100" : "bg-red-100"}`}
            >
              <ArrowUpRight
                className={`w-3 h-3 ${isPositive ? "text-emerald-600" : "text-red-600 rotate-90"}`}
              />
            </div>
          )}
          <p
            className={`text-xs font-bold ${isPositive === true ? "text-emerald-600" : isPositive === false ? "text-red-500" : "text-slate-400"}`}
          >
            {trend}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
