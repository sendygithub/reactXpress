import React from "react";
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  Bell,
  PlusCircle,
  Search,
  Pill,
  Package,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar & Header diasumsikan sudah ada dari komponen sebelumnya */}

      <main className="flex-1 p-8 space-y-8">
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
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="col-span-2 space-y-1">
                  <Label>Nama Barang</Label>
                  <Input placeholder="Contoh: Insulin Glargine" />
                </div>
                <div className="space-y-1">
                  <Label>Kategori</Label>
                  <Input placeholder="Obat Keras / Bebas / Alkes" />
                </div>
                <div className="space-y-1">
                  <Label>Kode Batch / SKU</Label>
                  <Input placeholder="BCH-12345" />
                </div>
                <div className="space-y-1">
                  <Label>Jumlah Stok Awal</Label>
                  <Input type="number" placeholder="0" />
                </div>
                <div className="space-y-1">
                  <Label>Satuan</Label>
                  <Input placeholder="Botol / Tablet / Pcs" />
                </div>
                <div className="col-span-2 space-y-1">
                  <Label>Tanggal Kedaluwarsa (Expired)</Label>
                  <Input type="date" />
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
              <CardTitle className="text-sm font-medium">Total Item</CardTitle>
              <Package className="h-4 w-4 text-slate-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,420</div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm border-l-4 border-l-red-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Stok Kritis</CardTitle>
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
                          item.status === "Kritis" ? "destructive" : "secondary"
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
      </main>
    </div>
  );
}
