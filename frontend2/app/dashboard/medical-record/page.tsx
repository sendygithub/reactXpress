"use client";

import React, { useState } from "react";
import {
  ClipboardList,
  Search,
  User,
  Calendar,
  Stethoscope,
  Pill,
  FileText,
  AlertCircle,
  Activity,
  Thermometer,
  Droplets,
  Printer,
  CheckCircle2,
  Clock,
  Info,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

const medicalHistory = [
  {
    id: "REC-001",
    tgl: "2026-03-15",
    jam: "10:30",
    dokter: "dr. Siska Amelia, Sp.PD",
    diagnosa: "Hipertensi Grade I",
    keluhan: "Sakit kepala bagian belakang dan tengkuk terasa berat.",
    tindakan: "Pemeriksaan fisik & EKG",
    vital: {
      tensi: "150/95 mmHg",
      suhu: "36.5°C",
      berat: "72 kg",
      nadi: "88x/menit",
    },
    obat: ["Amlodipine 5mg (1x1)", "Paracetamol 500mg (k/p)"],
    catatan:
      "Pasien disarankan diet rendah garam dan kontrol kembali dalam 2 minggu.",
    status: "Selesai",
  },
  {
    id: "REC-002",
    tgl: "2026-02-10",
    jam: "08:15",
    dokter: "dr. Andi Wijaya",
    diagnosa: "Common Cold",
    keluhan: "Demam, batuk berdahak, dan pilek selama 3 hari.",
    tindakan: "Pemberian obat jalan",
    vital: {
      tensi: "120/80 mmHg",
      suhu: "38.2°C",
      berat: "71 kg",
      nadi: "92x/menit",
    },
    obat: ["GG & DMP (3x1)", "Vitamin C 500mg"],
    catatan: "Istirahat cukup dan banyak minum air putih.",
    status: "Selesai",
  },
];

export default function MedicalRecordPage() {
  const [selectedRecord, setSelectedRecord] = useState<
    (typeof medicalHistory)[0] | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDetail = (record: (typeof medicalHistory)[0]) => {
    setSelectedRecord(record);
    setIsDialogOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-[#FCFDFE]">
      <main className="flex-1 p-8 space-y-8 font-sans">
        {/* --- HEADER --- */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl font-serif text-[#0f172a]">
              Rekam Medis Pasien
            </h1>
            <p className="text-slate-500 font-light mt-1">
              Manajemen riwayat klinis dan data kesehatan pasien terintegrasi.
            </p>
          </div>
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
            <Input
              placeholder="Cari No. RM, Nama, atau Diagnosa..."
              className="pl-11 h-12 bg-white rounded-xl border-none shadow-sm focus-visible:ring-2 focus-visible:ring-emerald-500 text-sm"
            />
          </div>
        </header>

        {/* --- INFO PASIEN --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card className="lg:col-span-3 border-none shadow-xl shadow-slate-200/50 rounded-[2rem] bg-white overflow-hidden">
            <CardHeader className="bg-slate-50/50 pb-4">
              <CardTitle className="text-lg flex items-center gap-2 font-serif text-slate-700">
                <User className="w-5 h-5 text-emerald-600" /> Profil Pasien
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
              <InfoItem label="Nama Lengkap" value="Andi Pratama" />
              <InfoItem label="No. Rekam Medis" value="RM-2026-0012" />
              <InfoItem label="Usia / Gender" value="34 Thn / Laki-laki" />
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.1em] text-slate-400 font-bold">
                  Gol. Darah
                </p>
                <Badge
                  variant="outline"
                  className="text-red-600 border-red-200 bg-red-50 font-bold px-3"
                >
                  B Rh+
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl shadow-amber-200/20 bg-amber-50 rounded-[2rem] border-l-8 border-l-amber-400 flex flex-col justify-center p-6">
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <h3 className="font-bold text-amber-900 text-sm">
                Riwayat Alergi
              </h3>
            </div>
            <p className="text-xs font-semibold text-amber-800 leading-relaxed italic">
              Antibiotik (Penicillin)
            </p>
          </Card>
        </div>

        {/* --- TABLE --- */}
        <Card className="border-none shadow-xl shadow-slate-200/50 bg-white rounded-[2rem] overflow-hidden">
          <CardHeader className="p-8 border-b border-slate-50">
            <CardTitle className="text-xl font-serif flex items-center gap-2 text-slate-700">
              <ClipboardList className="w-6 h-6 text-emerald-600" /> Timeline
              Pemeriksaan
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow className="border-none">
                  <TableHead className="pl-8 py-5">Tanggal</TableHead>
                  <TableHead>Dokter</TableHead>
                  <TableHead>Diagnosa</TableHead>
                  <TableHead className="text-right pr-8">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {medicalHistory.map((row, index) => (
                  <TableRow
                    key={index}
                    className="group hover:bg-slate-50/80 transition-colors border-slate-50"
                  >
                    <TableCell className="pl-8">
                      <div className="flex flex-col">
                        <span className="font-bold text-[#0f172a] text-sm">
                          {row.tgl}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {row.jam} WIB
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                        <Stethoscope className="w-4 h-4 text-blue-500" />{" "}
                        {row.dokter}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-emerald-50 text-emerald-700 border-none hover:bg-emerald-100 text-[10px]">
                        {row.diagnosa}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right pr-8">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleOpenDetail(row)}
                        className="rounded-xl hover:bg-[#0f172a] hover:text-white gap-2 text-xs"
                      >
                        <FileText className="w-3.5 h-3.5" /> Detail
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* --- REFINED DIALOG --- */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden border-none shadow-2xl rounded-[2.5rem] bg-white">
            {/* Header Dialog: Dark Mode Premium */}
            <DialogHeader className="bg-[#0f172a] p-10 text-white relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-3">
                  <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 text-[10px] tracking-[0.2em] font-bold uppercase">
                    Medical Summary
                  </Badge>
                  <DialogTitle className="text-3xl md:text-5xl font-serif">
                    {selectedRecord?.diagnosa}
                  </DialogTitle>
                  <div className="flex items-center gap-4 text-slate-400 text-sm font-light">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-emerald-400" />{" "}
                      {selectedRecord?.tgl}
                    </span>
                    <span className="w-1 h-1 bg-slate-600 rounded-full" />
                    <span>ID: {selectedRecord?.id}</span>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 min-w-[220px]">
                  <p className="text-[10px] tracking-widest text-emerald-400 uppercase font-bold mb-1">
                    Attending Doctor
                  </p>
                  <p className="text-lg font-bold text-white">
                    {selectedRecord?.dokter}
                  </p>
                </div>
              </div>
            </DialogHeader>

            {/* Body Dialog: Spacious Grid */}
            <div className="p-10 max-h-[65vh] overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Kolom Kiri: Vital Signs */}
                <div className="lg:col-span-4 space-y-8">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-emerald-600" /> Vital
                      Indicators
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      <VitalItem
                        icon={<Activity />}
                        label="Tekanan Darah"
                        value={selectedRecord?.vital.tensi}
                      />
                      <VitalItem
                        icon={<Thermometer />}
                        label="Suhu Tubuh"
                        value={selectedRecord?.vital.suhu}
                      />
                      <VitalItem
                        icon={<Droplets />}
                        label="Denyut Nadi"
                        value={selectedRecord?.vital.nadi}
                      />
                      <VitalItem
                        icon={<Scale />}
                        label="Berat Badan"
                        value={selectedRecord?.vital.berat}
                      />
                    </div>
                  </div>
                  <div className="p-6 rounded-[2rem] bg-emerald-50/50 border border-emerald-100 flex flex-col items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest text-center">
                      Rekam Terverifikasi
                    </p>
                  </div>
                </div>

                {/* Kolom Kanan: Detail Klinis */}
                <div className="lg:col-span-8 space-y-10">
                  <section>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">
                      Anamnesa & Keluhan
                    </h4>
                    <div className="relative pl-6">
                      <span className="absolute left-0 top-0 text-5xl text-emerald-100 font-serif italic leading-none">
                        “
                      </span>
                      <p className="text-xl text-[#0f172a] leading-relaxed italic font-light">
                        {selectedRecord?.keluhan}
                      </p>
                    </div>
                  </section>

                  <Separator className="opacity-50" />

                  <section>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
                      Resep & Terapi
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {selectedRecord?.obat.map((o, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group transition-all hover:border-emerald-200"
                        >
                          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-emerald-600 group-hover:scale-110 transition-transform">
                            <Pill className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-sm font-bold text-slate-900 block">
                              {o}
                            </span>
                            <span className="text-[10px] text-slate-400 uppercase font-bold">
                              Oral Medication
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="bg-[#0f172a] rounded-[2rem] p-10 text-white relative overflow-hidden">
                    <FileText className="absolute top-0 right-0 w-32 h-32 opacity-5 -translate-y-4 translate-x-4" />
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-4 flex items-center gap-2">
                      <Info className="w-4 h-4" /> Instruksi Dokter
                    </h4>
                    <p className="text-slate-300 leading-relaxed text-base font-light">
                      {selectedRecord?.catatan}
                    </p>
                  </section>
                </div>
              </div>
            </div>

            {/* Footer Dialog */}
            <DialogFooter className="p-8 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-slate-400 italic text-[11px]">
                <Clock className="w-3.5 h-3.5" /> Dibuat pada{" "}
                {selectedRecord?.tgl} 10:30 AM
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="rounded-xl px-8 h-14 font-bold text-slate-500"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Tutup
                </Button>
                <Button className="bg-[#0f172a] hover:bg-emerald-700 text-white rounded-xl h-14 px-10 gap-2 font-bold shadow-2xl transition-all active:scale-95">
                  <Printer className="w-5 h-5" /> Cetak Laporan
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] uppercase tracking-[0.1em] text-slate-400 font-bold">
        {label}
      </p>
      <p className="text-sm font-bold text-[#0f172a]">{value}</p>
    </div>
  );
}

function VitalItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-emerald-100">
      <div className="text-emerald-600 bg-emerald-50 p-2.5 rounded-lg">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
          {label}
        </p>
        <p className="text-sm font-black text-[#0f172a]">{value ?? "-"}</p>
      </div>
    </div>
  );
}
