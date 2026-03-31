"use client";

import React from "react";
import { PlusCircle, Search, Pill, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

import {
  Package,
  Tag,
  Layers,
  Calendar as CalendarIcon,
  Info,
  Beaker,
  Stethoscope,
  ShieldAlert,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

// -- Data Mock Inventaris Farmasi --
const inventoryData = [
  {
    id: "OBT-001",
    nama: "Paracetamol 500mg",
    kategori: "Analgetik",
    stok: 450,
    satuan: "Tablet",
    exp: "2027-05-12",
    status: "Aman",
  },
  {
    id: "OBT-002",
    nama: "Amoxicillin",
    kategori: "Antibiotik",
    stok: 12,
    satuan: "Strip",
    exp: "2026-01-20",
    status: "Kritis",
  },
  {
    id: "OBT-003",
    nama: "Cetirizine",
    kategori: "Antihistamin",
    stok: 80,
    satuan: "Tablet",
    exp: "2025-11-05",
    status: "Menipis",
  },
  {
    id: "ALK-001",
    nama: "Spuit 3cc",
    kategori: "Alkes",
    stok: 1200,
    satuan: "Pcs",
    exp: "-",
    status: "Aman",
  },
];

export default function PharmacyPage() {
  const initialForm = {
    id: "",
    namaobat: "",
    kategori: "",
    sku: "",
    stokawal: "",
    satuan: "",
    tanggal: "",
  };

  const [form, setForm] = useState(initialForm);
  const [selectKategori, setSelectedKategori] = useState("obat-keras");

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/farmasi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data);
    alert("data berhasil di simpan");
    setForm(initialForm);
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar & Header diasumsikan sudah ada dari komponen sebelumnya */}

      <main className="flex-1 p-8 space-y-8">
        <form onSubmit={handleSubmit}>
          <header className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-950">
                Farmasi & Logistik
              </h1>
              <p className="text-sm text-slate-500">
                Pantau stok obat dan logistik alat kesehatan secara real-time.
              </p>
            </div>
            <Dialog>
              <DialogTrigger>
                <Button className="gap-2 bg-slate-900">
                  <PlusCircle className="w-4 h-4" /> Tambah Barang
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Input Inventaris Baru</DialogTitle>
                  <DialogDescription>
                    Masukkan detail obat atau alat kesehatan sesuai manifest
                    gudang.
                  </DialogDescription>
                </DialogHeader>
                {/* Form Input Profesional */}
                <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-50 max-w-2xl mx-auto">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
                      <Package className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0f172a]">
                        Input Inventaris Baru
                      </h3>
                      <p className="text-sm text-slate-400 font-light">
                        Pastikan data batch dan kedaluwarsa sesuai fisik barang.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    {/* --- Nama Barang --- */}
                    <div className="col-span-2 space-y-3">
                      <Label className="text-slate-600 font-bold ml-1">
                        Nama Barang / Obat
                      </Label>
                      <div className="relative group">
                        <Beaker className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                        <Input
                          name="namaobat"
                          onChange={handleChange}
                          value={form.namaobat}
                          placeholder="Contoh: Insulin Glargine"
                          className="pl-12 h-14 rounded-2xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-emerald-500 transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    {/* --- Kategori: Menggunakan Radio Group with Style --- */}
                    <div className="col-span-2 space-y-4">
                      <Label className="text-slate-600 font-bold ml-1">
                        Kategori Barang
                      </Label>
                      <RadioGroup
                        defaultValue="obat-keras"
                        name="kategori"
                        onChange={handleChange}
                        value={form.kategori}
                        className="grid grid-cols-3 gap-4"
                      >
                        {[
                          {
                            id: "obat-keras",
                            label: "Obat Keras",
                            icon: <ShieldAlert className="w-4 h-4" />,
                          },
                          {
                            id: "obat-bebas",
                            label: "Obat Bebas",
                            icon: <Tag className="w-4 h-4" />,
                          },
                          {
                            id: "alkes",
                            label: "Alkes",
                            icon: <Stethoscope className="w-4 h-4" />,
                          },
                        ].map((item) => (
                          <Label
                            key={item.id}
                            htmlFor={item.id}
                            className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 border-slate-50 bg-slate-50/50 cursor-pointer hover:bg-white hover:border-emerald-100 transition-all [&:has([data-state=checked])]:border-emerald-500 [&:has([data-state=checked])]:bg-emerald-50/50"
                          >
                            <RadioGroupItem
                              value={item.id}
                              id={item.id}
                              className="sr-only"
                            />
                            <div className="text-emerald-600">{item.icon}</div>
                            <span className="text-xs font-bold text-slate-600">
                              {item.label}
                            </span>
                          </Label>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* --- SKU & Stok --- */}
                    <div className="space-y-3">
                      <Label className="text-slate-600 font-bold ml-1 text-sm">
                        Kode SKU / Batch
                      </Label>
                      <Input
                        name="sku"
                        onChange={handleChange}
                        value={form.sku}
                        placeholder="BCH-12345"
                        className="h-12 rounded-xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-slate-600 font-bold ml-1 text-sm">
                        Stok Awal
                      </Label>
                      <div className="relative">
                        <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          type="number"
                          name="stok"
                          onChange={handleChange}
                          value={form.stokawal}
                          placeholder="0"
                          className="pl-12 h-12 rounded-xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        />
                      </div>
                    </div>

                    {/* --- Satuan: Menggunakan Select --- */}
                    <div className="space-y-3">
                      <Label className="text-slate-600 font-bold ml-1 text-sm">
                        Satuan
                      </Label>
                      <Select>
                        <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500">
                          <SelectValue placeholder="Pilih Satuan" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-slate-100 shadow-xl">
                          <SelectItem value="botol">Botol</SelectItem>
                          <SelectItem value="tablet">Tablet / Strip</SelectItem>
                          <SelectItem value="pcs">Pcs / Unit</SelectItem>
                          <SelectItem value="box">Box / Dus</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* --- Expired Date --- */}
                    <div className="space-y-3">
                      <Label className="text-slate-600 font-bold ml-1 text-sm">
                        Tanggal Expired
                      </Label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          name="tanggal"
                          onChange={handleChange}
                          value={form.tanggal}
                          type="date"
                          className="pl-12 h-12 rounded-xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-emerald-500 text-slate-600"
                        />
                      </div>
                    </div>

                    {/* --- Information Note --- */}
                    <div className="col-span-2 p-4 bg-blue-50/50 rounded-2xl flex gap-3 border border-blue-100">
                      <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <p className="text-[11px] text-blue-600 leading-relaxed font-medium">
                        Sistem akan otomatis memberikan notifikasi 6 bulan
                        sebelum tanggal kedaluwarsa tiba untuk produk
                        obat-obatan keras.
                      </p>
                    </div>
                  </div>
                </div>

                <DialogFooter>
                  <Button className="bg-slate-900 w-full">
                    Simpan ke Gudang
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </header>

          {/* Ringkasan Status Stok */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Item
                </CardTitle>
                <Package className="h-4 w-4 text-slate-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,420</div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm border-l-4 border-l-red-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Stok Kritis
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">12</div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Mendekati Expired
                </CardTitle>
                <Pill className="h-4 w-4 text-orange-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
              </CardContent>
            </Card>
          </div>

          {/* Tabel Inventaris */}
          <Card className="border-none shadow-sm bg-white">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Daftar Inventaris Gudang</CardTitle>
                <div className="relative w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Cari obat..."
                    className="pl-8 bg-slate-50 border-none"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID Barang</TableHead>
                    <TableHead>Nama Item</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Sisa Stok</TableHead>
                    <TableHead>Expired</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventoryData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-mono text-xs">
                        {item.id}
                      </TableCell>
                      <TableCell className="font-medium">{item.nama}</TableCell>
                      <TableCell>{item.kategori}</TableCell>
                      <TableCell>
                        {item.stok} {item.satuan}
                      </TableCell>
                      <TableCell>{item.exp}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            item.status === "Kritis"
                              ? "destructive"
                              : "secondary"
                          }
                        >
                          {item.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </form>
      </main>
    </div>
  );
}
