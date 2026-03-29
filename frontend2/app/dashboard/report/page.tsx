"use client";

import React, { useState } from "react";
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
  Legend,
} from "recharts";
import {
  TrendingUp,
  Calendar,
  Table as TableIcon,
  BarChart3,
  LineChart as LineIcon,
  Download,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// Tambahkan parameter data agar fungsi ini bisa menerima array apa pun
const exportToPDF = (data: typeof monthlyData) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Laporan Pendapatan Bulanan - HealThive", 14, 22);

  const tableRows = data.map((item) => [
    item.bulan,
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(item.pendapatan),
    "Terverifikasi",
  ]);

  // Hitung total untuk baris penutup agar tabel tidak kosong 📊
  const totalPendapatan = data.reduce((sum, item) => sum + item.pendapatan, 0);
  const totalRow = [
    "TOTAL",
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(totalPendapatan),
    "-",
  ];

  autoTable(doc, {
    startY: 45,
    head: [["Bulan", "Total Pendapatan", "Status"]],
    body: [...tableRows, totalRow], // Gabungkan data dengan baris total
    theme: "striped",
    headStyles: { fillStyle: "#0f172a" },
    // Tambahkan gaya khusus untuk baris terakhir (Total)
    didParseCell: (data) => {
      if (data.row.index === tableRows.length) {
        data.cell.styles.fontStyle = "bold";
        data.cell.styles.fillColor = [241, 245, 249];
      }
    },
  });

  doc.save("Laporan_Finansial_HealThive.pdf");
};
// -- Data Dummy Pendapatan Bulanan --
const monthlyData = [
  { bulan: "Jan", pendapatan: 45000000 },
  { bulan: "Feb", pendapatan: 52000000 },
  { bulan: "Mar", pendapatan: 48000000 },
  { bulan: "Apr", pendapatan: 61000000 },
  { bulan: "Mei", pendapatan: 55000000 },
  { bulan: "Jun", pendapatan: 67000000 },
];

export default function ReportsPage() {
  const [viewType, setViewType] = useState("bar");

  // Fungsi untuk memformat angka ke Rupiah
  const formatIDR = (val: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <div className="flex min-h-screen bg-slate-50 p-8 flex-col gap-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-950">
            Laporan Finansial
          </h1>
          <p className="text-sm text-slate-500">
            Analisis pertumbuhan pendapatan bulanan rumah sakit.
          </p>
        </div>
        <Button
          variant="outline"
          className="gap-2"
          onClick={() => exportToPDF(monthlyData)}
        >
          <Download className="w-4 h-4" /> Ekspor Laporan
        </Button>
      </header>

      <Card className="border-none shadow-sm bg-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-500" /> Tren
              Pendapatan 2026
            </CardTitle>
            <CardDescription>
              Visualisasi data berdasarkan periode semester pertama.
            </CardDescription>
          </div>

          {/* Kontrol untuk merubah model grafik/tabel */}
          <Tabs
            value={viewType}
            onValueChange={setViewType}
            className="w-[300px]"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="bar" className="gap-2">
                <BarChart3 className="w-4 h-4" /> Bar
              </TabsTrigger>
              <TabsTrigger value="line" className="gap-2">
                <LineIcon className="w-4 h-4" /> Line
              </TabsTrigger>
              <TabsTrigger value="table" className="gap-2">
                <TableIcon className="w-4 h-4" /> Tabel
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="h-[400px] w-full">
            {viewType === "bar" && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f1f5f9"
                  />
                  <XAxis
                    dataKey="bulan"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    tickFormatter={(val) => `Rp${val / 1000000}jt`}
                  />
                  <Tooltip
                    formatter={(value: number) => [
                      formatIDR(value),
                      "Pendapatan",
                    ]}
                  />
                  <Bar
                    dataKey="pendapatan"
                    fill="#0f172a"
                    radius={[4, 4, 0, 0]}
                    barSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            )}

            {viewType === "line" && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f1f5f9"
                  />
                  <XAxis
                    dataKey="bulan"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    tickFormatter={(val) => `Rp${val / 1000000}jt`}
                  />
                  <Tooltip formatter={(value: number) => formatIDR(value)} />
                  <Line
                    type="monotone"
                    dataKey="pendapatan"
                    stroke="#0f172a"
                    strokeWidth={3}
                    dot={{ r: 6, fill: "#0f172a" }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}

            {viewType === "table" && (
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader className="bg-slate-50">
                    <TableRow>
                      <TableHead>Bulan Periode</TableHead>
                      <TableHead className="text-right">
                        Total Pendapatan
                      </TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {monthlyData.map((item) => (
                      <TableRow key={item.bulan}>
                        <TableCell className="font-medium">
                          {item.bulan} 2026
                        </TableCell>
                        <TableCell className="text-right">
                          {formatIDR(item.pendapatan)}
                        </TableCell>
                        <TableCell className="text-right text-emerald-600 text-xs font-bold">
                          Terverifikasi
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
