import React from "react";
import {
  ClipboardList,
  Search,
  User,
  Calendar,
  Stethoscope,
  Pill,
  FileText,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// -- Dummy Data Rekam Medis Spesifik --
const medicalHistory = [
  {
    tgl: "2026-03-15",
    dokter: "dr. Siska Amelia, Sp.PD",
    diagnosa: "Hipertensi Grade I",
    keluhan: "Sakit kepala bagian belakang dan tengkuk terasa berat.",
    obat: ["Amlodipine 5mg (1x1)", "Paracetamol 500mg (k/p)"],
    status: "Selesai",
  },
  {
    tgl: "2026-02-10",
    dokter: "dr. Andi Wijaya",
    diagnosa: "Common Cold",
    keluhan: "Demam, batuk berdahak, dan pilek selama 3 hari.",
    obat: ["GG & DMP (3x1)", "Vitamin C 500mg"],
    status: "Selesai",
  },
];

export default function MedicalRecordPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <main className="flex-1 p-8 space-y-8">
        {/* Header dengan Pencarian Pasien */}
        <header className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-slate-950">
              Rekam Medis Pasien
            </h1>
            <p className="text-sm text-slate-500">
              Pencarian dan manajemen riwayat klinis pasien.
            </p>
          </div>
          <div className="relative w-80">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Masukkan No. RM atau Nama..."
              className="pl-10 bg-white border-slate-200"
            />
          </div>
        </header>

        {/* Info Ringkas & Alergi */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="md:col-span-3 border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="w-5 h-5 text-slate-500" /> Informasi Pasien
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-slate-500">Nama Lengkap</p>
                <p className="font-semibold text-slate-900">Andi Pratama</p>
              </div>
              <div>
                <p className="text-slate-500">No. Rekam Medis</p>
                <p className="font-semibold text-slate-900">RM-2026-0012</p>
              </div>
              <div>
                <p className="text-slate-500">Golongan Darah</p>
                <Badge
                  variant="outline"
                  className="text-red-600 border-red-200 bg-red-50"
                >
                  B Rh+
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-amber-50 border-l-4 border-l-amber-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold text-amber-800 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> Riwayat Alergi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium text-amber-900">
                Antibiotik (Penicillin)
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tabel Riwayat Kunjungan */}
        <Card className="border-none shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-slate-500" /> Timeline
              Pemeriksaan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="w-[150px]">Tanggal & Jam</TableHead>
                  <TableHead>Dokter Pemeriksa</TableHead>
                  <TableHead>Diagnosa & Keluhan</TableHead>
                  <TableHead>Terapi Obat</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {medicalHistory.map((row, index) => (
                  <TableRow key={index} className="hover:bg-slate-50/50">
                    <TableCell className="align-top">
                      <div className="flex items-center gap-2 text-slate-900 font-medium">
                        <Calendar className="w-3 h-3 text-slate-400" />{" "}
                        {row.tgl}
                      </div>
                    </TableCell>
                    <TableCell className="align-top">
                      <div className="flex items-center gap-2 font-semibold text-slate-900">
                        <Stethoscope className="w-3 h-3 text-blue-500" />{" "}
                        {row.dokter}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <p className="font-bold text-slate-900">{row.diagnosa}</p>
                      <p className="text-xs text-slate-500 italic mt-1">
                        `{row.keluhan}`
                      </p>
                    </TableCell>
                    <TableCell className="align-top">
                      <div className="space-y-1">
                        {row.obat.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-1 text-xs text-slate-700"
                          >
                            <Pill className="w-3 h-3 text-emerald-500" /> {item}
                          </div>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <FileText className="w-4 h-4" /> Detail
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
