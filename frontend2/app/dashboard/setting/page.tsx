"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Stethoscope,
  LayoutGrid,
  FileText,
  Plus,
  Save,
  Trash2,
  Image as ImageIcon,
  Clock,
  CheckCircle2,
  Settings2,
  ChevronRight,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function SettingsManagementPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif text-[#0f172a]">
            Management Center
          </h1>
          <p className="text-slate-500 font-light">
            Konfigurasi operasional rumah sakit dan konten publikasi.
          </p>
        </div>
        <Badge
          variant="outline"
          className="w-fit h-fit px-4 py-1.5 border-emerald-200 text-emerald-700 bg-emerald-50 rounded-full font-bold"
        >
          <Settings2 className="w-3.5 h-3.5 mr-2" /> Live System Active
        </Badge>
      </div>

      <Tabs defaultValue="jadwal" className="w-full space-y-8">
        <div className="flex justify-start">
          <TabsList className="bg-slate-100/50 p-1 rounded-2xl h-14 border border-slate-200/50">
            <TabsTrigger
              value="jadwal"
              className="rounded-xl px-6 data-[state=active]:bg-[#0f172a] data-[state=active]:text-white"
            >
              <Calendar className="w-4 h-4 mr-2" /> Jadwal Dokter
            </TabsTrigger>
            <TabsTrigger
              value="vip"
              className="rounded-xl px-6 data-[state=active]:bg-[#0f172a] data-[state=active]:text-white"
            >
              <LayoutGrid className="w-4 h-4 mr-2" /> Fasilitas VIP
            </TabsTrigger>
            <TabsTrigger
              value="artikel"
              className="rounded-xl px-6 data-[state=active]:bg-[#0f172a] data-[state=active]:text-white"
            >
              <FileText className="w-4 h-4 mr-2" /> Artikel & Blog
            </TabsTrigger>
          </TabsList>
        </div>

        {/* --- SECTION 1: JADWAL DOKTER --- */}
        <TabsContent value="jadwal">
          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] bg-white overflow-hidden">
            <CardHeader className="p-10 pb-0">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-2xl font-serif">
                    Monitoring Jadwal Dokter
                  </CardTitle>
                  <CardDescription>
                    Atur ketersediaan dan jam jaga dokter spesialis.
                  </CardDescription>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-500 rounded-xl px-6 gap-2">
                  <Plus className="w-4 h-4" /> Tambah Jadwal
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Label>Pilih Dokter</Label>
                  <Select>
                    <SelectTrigger className="rounded-xl h-12 bg-slate-50 border-none">
                      <SelectValue placeholder="Pilih Dokter Spesialis" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="adrian">
                        dr. Adrian Wijaya, Sp.JP
                      </SelectItem>
                      <SelectItem value="sarah">
                        dr. Sarah Anindita, Sp.A
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-4">
                  <Label>Status Kehadiran</Label>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1 rounded-xl h-12 border-emerald-500 text-emerald-600 bg-emerald-50"
                    >
                      Available
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 rounded-xl h-12 text-slate-400 border-slate-200"
                    >
                      On Leave
                    </Button>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-50 grid grid-cols-1 md:grid-cols-3 gap-6">
                {["Senin", "Selasa", "Rabu"].map((day) => (
                  <div
                    key={day}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#0f172a]">{day}</span>
                      <Badge className="bg-white text-emerald-600 border-slate-100">
                        Aktif
                      </Badge>
                    </div>
                    <Input
                      type="time"
                      defaultValue="09:00"
                      className="bg-white border-none rounded-lg"
                    />
                    <Input
                      type="time"
                      defaultValue="15:00"
                      className="bg-white border-none rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* --- SECTION 2: FASILITAS VIP --- */}
        <TabsContent value="vip">
          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] bg-white">
            <CardHeader className="p-10 pb-0">
              <CardTitle className="text-2xl font-serif">
                Update Ruangan VIP
              </CardTitle>
              <CardDescription>
                Kelola inventaris kamar dan fasilitas tambahan.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4 md:col-span-2">
                  <Label>Nama Ruangan</Label>
                  <Input
                    placeholder="Contoh: Presidential Suite - Floor 12"
                    className="rounded-xl h-12 bg-slate-50 border-none"
                  />
                </div>
                <div className="space-y-4">
                  <Label>Nomor Kamar</Label>
                  <Input
                    placeholder="VIP-101"
                    className="rounded-xl h-12 bg-slate-50 border-none"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label>Daftar Fasilitas (Gunakan koma untuk pemisah)</Label>
                <Textarea
                  placeholder="Smart TV 65 Inch, Butler 24 Jam, Private Kitchen, Terrace View..."
                  className="rounded-2xl min-h-[100px] bg-slate-50 border-none p-4"
                />
              </div>

              <div className="flex items-center gap-6 p-8 border-2 border-dashed border-slate-200 rounded-[2rem] hover:border-emerald-300 transition-colors cursor-pointer group text-center flex-col">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-all">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold text-[#0f172a]">
                    Upload Foto Ruangan
                  </p>
                  <p className="text-sm text-slate-400">
                    Rekomendasi ukuran 1200x800px (Max 5MB)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* --- SECTION 3: ARTIKEL --- */}
        <TabsContent value="artikel">
          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] bg-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
              {/* Form Input Artikel */}
              <div className="lg:col-span-7 p-10 space-y-8 border-r border-slate-50">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0f172a]">
                    Tulis Artikel Baru
                  </h3>
                  <p className="text-sm text-slate-400">
                    Konten ini akan langsung muncul di landing page publik.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Judul Artikel</Label>
                    <Input
                      placeholder="Tips menjaga kesehatan jantung di usia 40-an..."
                      className="rounded-xl h-12 bg-slate-50 border-none text-lg font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Kategori</Label>
                      <Select>
                        <SelectTrigger className="rounded-xl bg-slate-50 border-none">
                          <SelectValue placeholder="Kesehatan Umum" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="edukasi">
                            Edukasi Pasien
                          </SelectItem>
                          <SelectItem value="berita">Berita RS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Author</Label>
                      <Input
                        defaultValue="Admin Media"
                        className="rounded-xl bg-slate-50 border-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Isi Konten</Label>
                    <Textarea
                      placeholder="Mulai menulis konten edukasi di sini..."
                      className="rounded-2xl min-h-[300px] bg-slate-50 border-none p-4"
                    />
                  </div>
                </div>
              </div>

              {/* Preview & Publish */}
              <div className="lg:col-span-5 p-10 bg-slate-50/50 flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#0f172a]">
                      Publishing
                    </h3>
                    <p className="text-sm text-slate-400">
                      Review status sebelum publikasi.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-3xl border border-slate-100 space-y-6 shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">
                        Preview Mode
                      </span>
                      <Badge className="bg-emerald-500 text-white">Ready</Badge>
                    </div>
                    <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 italic text-xs">
                      [Thumbnail Preview]
                    </div>
                    <div className="space-y-2">
                      <p className="font-bold text-[#0f172a] line-clamp-1">
                        Tips menjaga kesehatan jantung...
                      </p>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        Langkah awal yang bisa dilakukan adalah dengan mengatur
                        pola makan...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full h-14 bg-[#0f172a] hover:bg-emerald-700 rounded-2xl font-bold shadow-xl shadow-slate-200 transition-all gap-2">
                    <Save className="w-5 h-5" /> Publikasikan Sekarang
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full text-red-500 hover:bg-red-50 rounded-2xl h-12 font-bold"
                  >
                    <Trash2 className="w-4 h-4 mr-2" /> Batalkan Draft
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
