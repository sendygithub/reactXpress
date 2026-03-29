"use client";

import React from "react";
import {
  Users,
  UserPlus,
  Clock,
  CheckCircle2,
  MoreVertical,
  Search,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Data Dummy untuk Grafik 📊
const dataKunjungan = [
  { day: "Sen", total: 45 },
  { day: "Sel", total: 52 },
  { day: "Rab", total: 38 },
  { day: "Kam", total: 65 },
  { day: "Jum", total: 48 },
  { day: "Sab", total: 30 },
  { day: "Min", total: 15 },
];

// Data Dummy untuk Antrean 📑
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
    <div className="space-y-8">
      {/* 1. Angka Statistik 🔢 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Pasien"
          value="1,284"
          icon={<Users className="w-4 h-4" />}
          desc="+12% dari bulan lalu"
        />
        <StatCard
          title="Pasien Baru"
          value="45"
          icon={<UserPlus className="w-4 h-4" />}
          desc="Hari ini"
        />
        <StatCard
          title="Dalam Antrean"
          value="12"
          icon={<Clock className="w-4 h-4" />}
          desc="Pasien menunggu"
        />
        <StatCard
          title="Selesai"
          value="28"
          icon={<CheckCircle2 className="w-4 h-4" />}
          desc="Hari ini"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 2. Grafik Kunjungan Pasien 📈 */}
        <Card className="lg:col-span-2 border-none shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-lg">Tren Kunjungan Pasien</CardTitle>
            <CardDescription>
              Jumlah pasien dalam 7 hari terakhir
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataKunjungan}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />
                <Tooltip
                  cursor={{ fill: "#f8fafc" }}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar
                  dataKey="total"
                  fill="#0f172a"
                  radius={[4, 4, 0, 0]}
                  barSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* 3. Antrean Terkini 📑 */}
        <Card className="border-none shadow-sm bg-white">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Antrean Hari Ini</CardTitle>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {antreanPasien.map((pasien) => (
                <div
                  key={pasien.id}
                  className="flex items-center justify-between p-3 border rounded-lg bg-slate-50/50"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-400">
                      {pasien.id}
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      {pasien.nama}
                    </span>
                    <span className="text-xs text-slate-500">
                      {pasien.poli} • {pasien.jam}
                    </span>
                  </div>
                  <Badge
                    variant={
                      pasien.status === "Diperiksa" ? "default" : "outline"
                    }
                    className="text-[10px]"
                  >
                    {pasien.status}
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full text-xs">
                Lihat Semua Antrean
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Komponen Kecil untuk Statistik Card
function StatCard({
  title,
  value,
  icon,
  desc,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  desc: string;
}) {
  return (
    <Card className="border-none shadow-sm bg-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-500">
          {title}
        </CardTitle>
        <div className="p-2 bg-slate-100 rounded-lg text-slate-900">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-slate-900">{value}</div>
        <p className="text-xs text-slate-400 mt-1">{desc}</p>
      </CardContent>
    </Card>
  );
}
