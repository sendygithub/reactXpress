"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  TrendingUp,
  Calendar,
  Table as TableIcon,
  BarChart3,
  LineChart as LineIcon,
  Download,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  PieChart as PieIcon,
  Activity,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// -- Data Dummy Pendapatan Bulanan --
const monthlyData = [
  { bulan: "Jan", pendapatan: 45000000, target: 40000000, pasien: 120 },
  { bulan: "Feb", pendapatan: 52000000, target: 40000000, pasien: 150 },
  { bulan: "Mar", pendapatan: 48000000, target: 50000000, pasien: 135 },
  { bulan: "Apr", pendapatan: 61000000, target: 50000000, pasien: 180 },
  { bulan: "Mei", pendapatan: 55000000, target: 55000000, pasien: 165 },
  { bulan: "Jun", pendapatan: 67000000, target: 55000000, pasien: 210 },
];

const exportToPDF = (data: typeof monthlyData) => {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42);
  doc.text("HEALTHIVE - LAPORAN FINANSIAL SEMESTER 1", 14, 22);

  const tableRows = data.map((item) => [
    item.bulan + " 2026",
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(item.pendapatan),
    item.pasien.toString() + " Pasien",
    "Terverifikasi",
  ]);

  autoTable(doc, {
    startY: 35,
    head: [["Periode", "Total Pendapatan", "Volume Pasien", "Status"]],
    body: tableRows,
    theme: "grid",
    headStyles: { fillColor: [15, 23, 42], textColor: [255, 255, 255] },
  });

  doc.save("Laporan_HealThive_2026.pdf");
};

export default function ReportsPage() {
  const [viewType, setViewType] = useState("bar");

  const formatIDR = (val: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex min-h-screen bg-[#FCFDFE] p-8 flex-col gap-8 font-sans"
    >
      {/* --- HEADER --- */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif text-[#0f172a]">
            Laporan Finansial
          </h1>
          <p className="text-slate-500 font-light mt-1">
            Analisis performa keuangan dan statistik pasien semester pertama
            2026.
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Button
            variant="outline"
            className="rounded-xl border-slate-200 gap-2 flex-1 md:flex-none"
          >
            <Filter className="w-4 h-4" /> Filter Periode
          </Button>
          <Button
            className="bg-[#0f172a] hover:bg-emerald-700 rounded-xl gap-2 flex-1 md:flex-none shadow-lg shadow-slate-200 transition-all"
            onClick={() => exportToPDF(monthlyData)}
          >
            <Download className="w-4 h-4" /> Ekspor PDF
          </Button>
        </div>
      </header>

      {/* --- 1. KPI CARDS (ISI DETAIL) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard
          title="Total Pendapatan"
          value={formatIDR(328000000)}
          trend="+18.4%"
          isUp={true}
          icon={<Wallet className="text-emerald-600" />}
        />
        <KPICard
          title="Rata-rata Bulanan"
          value={formatIDR(54600000)}
          trend="+5.2%"
          isUp={true}
          icon={<Activity className="text-blue-600" />}
        />
        <KPICard
          title="Efisiensi Target"
          value="94.2%"
          trend="-2.1%"
          isUp={false}
          icon={<PieIcon className="text-amber-600" />}
        />
      </div>

      {/* --- 2. MAIN CHART SECTION --- */}
      <Card className="border-none shadow-xl shadow-slate-200/50 bg-white rounded-[2.5rem] overflow-hidden">
        <CardHeader className="p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-50">
          <div className="space-y-1">
            <CardTitle className="text-xl font-serif flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-emerald-500" />
              Statistik Pertumbuhan
            </CardTitle>
            <CardDescription className="font-light">
              Perbandingan pendapatan riil terhadap target bulanan.
            </CardDescription>
          </div>

          <Tabs
            value={viewType}
            onValueChange={setViewType}
            className="bg-slate-100 p-1 rounded-xl"
          >
            <TabsList className="bg-transparent gap-1">
              <TabsTrigger
                value="bar"
                className="rounded-lg data-[state=active]:bg-white shadow-none"
              >
                <BarChart3 className="w-4 h-4 mr-2" /> Bar
              </TabsTrigger>
              <TabsTrigger
                value="line"
                className="rounded-lg data-[state=active]:bg-white shadow-none"
              >
                <LineIcon className="w-4 h-4 mr-2" /> Line
              </TabsTrigger>
              <TabsTrigger
                value="table"
                className="rounded-lg data-[state=active]:bg-white shadow-none"
              >
                <TableIcon className="w-4 h-4 mr-2" /> Tabel
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>

        <CardContent className="p-8">
          <div className="h-[450px] w-full">
            {viewType === "bar" && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f1f5f9"
                  />
                  <XAxis
                    dataKey="bulan"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                    tickFormatter={(val) => `Rp${val / 1000000}jt`}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "16px",
                      border: "none",
                      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                    }}
                    formatter={(value: number) => formatIDR(value)}
                  />
                  <Bar
                    dataKey="pendapatan"
                    fill="#0f172a"
                    radius={[10, 10, 0, 0]}
                    barSize={45}
                  />
                  <Bar
                    dataKey="target"
                    fill="#e2e8f0"
                    radius={[10, 10, 0, 0]}
                    barSize={45}
                  />
                </BarChart>
              </ResponsiveContainer>
            )}

            {viewType === "line" && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient
                      id="colorIncome"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f1f5f9"
                  />
                  <XAxis
                    dataKey="bulan"
                    axisLine={false}
                    tickLine={false}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(val) => `Rp${val / 1000000}jt`}
                  />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="pendapatan"
                    stroke="#10b981"
                    strokeWidth={4}
                    fillOpacity={1}
                    fill="url(#colorIncome)"
                  />
                  <Line
                    type="monotone"
                    dataKey="target"
                    stroke="#cbd5e1"
                    strokeDasharray="5 5"
                    strokeWidth={2}
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}

            {viewType === "table" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border rounded-[2rem] overflow-hidden bg-slate-50/30"
              >
                <Table>
                  <TableHeader className="bg-slate-100/50">
                    <TableRow className="border-none">
                      <TableHead className="font-bold py-6">
                        Bulan Periode
                      </TableHead>
                      <TableHead className="text-right font-bold">
                        Realisasi
                      </TableHead>
                      <TableHead className="text-right font-bold">
                        Target
                      </TableHead>
                      <TableHead className="text-right font-bold">
                        Pencapaian
                      </TableHead>
                      <TableHead className="text-right font-bold">
                        Status
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {monthlyData.map((item) => {
                      const percent = Math.round(
                        (item.pendapatan / item.target) * 100,
                      );
                      return (
                        <TableRow
                          key={item.bulan}
                          className="hover:bg-white transition-colors border-slate-50"
                        >
                          <TableCell className="font-medium py-4">
                            {item.bulan} 2026
                          </TableCell>
                          <TableCell className="text-right font-bold">
                            {formatIDR(item.pendapatan)}
                          </TableCell>
                          <TableCell className="text-right text-slate-400">
                            {formatIDR(item.target)}
                          </TableCell>
                          <TableCell className="text-right">
                            <Badge
                              variant={percent >= 100 ? "default" : "secondary"}
                              className={percent >= 100 ? "bg-emerald-500" : ""}
                            >
                              {percent}%
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <div
                                className={`w-2 h-2 rounded-full ${percent >= 100 ? "bg-emerald-500" : "bg-amber-400"}`}
                              />
                              <span className="text-xs font-bold text-slate-600">
                                Terverifikasi
                              </span>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// --- KPI CARD COMPONENT ---
function KPICard({ title, value, trend, isUp, icon }: any) {
  return (
    <Card className="border-none shadow-xl shadow-slate-200/50 bg-white rounded-[2.5rem] p-8 group overflow-hidden relative">
      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-all duration-500 scale-150 rotate-12">
        {icon}
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-[#0f172a] group-hover:text-white transition-all">
          {React.cloneElement(icon, { className: "w-6 h-6" })}
        </div>
        <Badge
          className={`rounded-full px-3 ${isUp ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"} border-none flex gap-1 font-bold`}
        >
          {isUp ? (
            <ArrowUpRight className="w-3 h-3" />
          ) : (
            <ArrowDownRight className="w-3 h-3" />
          )}
          {trend}
        </Badge>
      </div>
      <div className="space-y-1">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          {title}
        </p>
        <p className="text-3xl font-bold text-[#0f172a]">{value}</p>
      </div>
    </Card>
  );
}
