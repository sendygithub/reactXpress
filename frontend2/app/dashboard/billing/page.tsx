"use client";

import React, { useState } from "react";
import {
  Wallet,
  CreditCard,
  Printer,
  CheckCircle2,
  Search,
  ArrowUpRight,
  Clock,
  Receipt,
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function BillingPage() {
  const [isProcessing, setIsProcessing] = useState(false);

  // Simulasi Proses Pembayaran
  const handlePayment = () => {
    setIsProcessing(true);

    // Simulasi loading 2 detik
    setTimeout(() => {
      setIsProcessing(false);

      // Cara memanggil toast yang benar di Sonner
      toast.success("Pembayaran Berhasil!", {
        description: "Transaksi telah diverifikasi oleh sistem.",
      });
    }, 2000);
  };

  return (
    <div className="flex min-h-screen bg-slate-50 p-8 flex-col gap-8">
      {/* 1. Ringkasan Transaksi Hari Ini */}
      <Toaster position="top-center" richColors />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-none shadow-sm bg-slate-900 text-white">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-400">
              Total Pendapatan Hari Ini
            </CardDescription>
            <CardTitle className="text-3xl font-bold">Rp 12.450.000</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-xs text-emerald-400 gap-1">
              <ArrowUpRight className="w-3 h-3" /> +12% dari kemarin
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader className="pb-2">
            <CardDescription>Transaksi Diproses</CardDescription>
            <CardTitle className="text-3xl font-bold">8</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-xs text-amber-500 gap-1">
              <Clock className="w-3 h-3" /> Menunggu verifikasi
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader className="pb-2">
            <CardDescription>Total Transaksi Selesai</CardDescription>
            <CardTitle className="text-3xl font-bold">142</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-xs text-slate-500 gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Berhasil
              dibukukan
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 2. Form Pembayaran */}
        <Card className="lg:col-span-1 border-none shadow-sm h-fit">
          <CardHeader>
            <CardTitle>Kasir & Pembayaran</CardTitle>
            <CardDescription>
              Pilih metode dan selesaikan tagihan.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <p className="text-sm text-slate-500">Total Tagihan</p>
              <p className="text-2xl font-bold text-slate-900">Rp 450.000</p>
            </div>

            <div className="space-y-3">
              <Label className="font-semibold">Metode Pembayaran</Label>
              <RadioGroup
                defaultValue="qris"
                className="grid grid-cols-2 gap-3"
              >
                <Label className="flex items-center gap-3 p-3 border rounded-md cursor-pointer hover:bg-slate-50">
                  <RadioGroupItem value="qris" /> QRIS / E-Wallet
                </Label>
                <Label className="flex items-center gap-3 p-3 border rounded-md cursor-pointer hover:bg-slate-50">
                  <RadioGroupItem value="bca" /> Bank BCA
                </Label>
                <Label className="flex items-center gap-3 p-3 border rounded-md cursor-pointer hover:bg-slate-50">
                  <RadioGroupItem value="mandiri" /> Mandiri
                </Label>
                <Label className="flex items-center gap-3 p-3 border rounded-md cursor-pointer hover:bg-slate-50">
                  <RadioGroupItem value="bri" /> BRI
                </Label>
              </RadioGroup>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <Button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-slate-900 hover:bg-slate-800 py-6"
              >
                {isProcessing ? "Memproses..." : "Konfirmasi Pembayaran"}
              </Button>
              <Button
                variant="outline"
                className="w-full gap-2 border-slate-300"
              >
                <Printer className="w-4 h-4" /> Cetak Struk (Thermal)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 3. Riwayat & Transaksi Sedang Proses */}
        <Card className="lg:col-span-2 border-none shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="w-5 h-5 text-slate-500" /> Transaksi Hari Ini
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead>No. Invoice</TableHead>
                  <TableHead>Pasien</TableHead>
                  <TableHead>Jumlah</TableHead>
                  <TableHead>Metode</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-mono text-xs">INV-8821</TableCell>
                  <TableCell className="font-medium">Andi Pratama</TableCell>
                  <TableCell>Rp 150.000</TableCell>
                  <TableCell>BCA</TableCell>
                  <TableCell>
                    <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                      Proses
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono text-xs">INV-8820</TableCell>
                  <TableCell className="font-medium">Siti Rahma</TableCell>
                  <TableCell>Rp 320.000</TableCell>
                  <TableCell>QRIS</TableCell>
                  <TableCell>
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                      Berhasil
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
