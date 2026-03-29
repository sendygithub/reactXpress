/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Bell, PlusCircle, Search, Edit2, Trash2 } from "lucide-react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
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

// -- Dummy Data Pengguna --
const usersData = [
  {
    id: 1,
    nama: "Andi Pratama",
    email: "andi.p@email.com",
    nohp: "08123456789",
    alamat: "Jakarta",
    role: "Pasien",
  },
  {
    id: 2,
    nama: "Siti Rahmawati",
    email: "siti.r@email.com",
    nohp: "08569876543",
    alamat: "Bandung",
    role: "Pasien",
  },
  {
    id: 3,
    nama: "Budi Tjahjono",
    email: "budi.t@email.com",
    nohp: "08112233445",
    alamat: "Surabaya",
    role: "Admin",
  },
  {
    id: 4,
    nama: "Dewi Lestari",
    email: "dewi.l@email.com",
    nohp: "08775566778",
    alamat: "Yogyakarta",
    role: "Pasien",
  },
  {
    id: 5,
    nama: "Eko Prasetyo",
    email: "eko.p@email.com",
    nohp: "08134455667",
    alamat: "Medan",
    role: "Pasien",
  },
];

// -- Komponen Header (Kopi dari Dashboard, sesuaikan Judul) --
const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur border-b border-slate-200 py-4 px-8 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-950">
            Manajemen Data Pengguna
          </h1>
          <p className="text-sm text-slate-500">
            Lihat, tambah, edit, atau hapus data pengguna sistem.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full relative"
          >
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          <Separator orientation="vertical" className="h-8" />
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>BT</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-slate-950">
                Budi Tjahjono
              </p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// -- Komponen Form Input (Dalam Dialog) --
const TambahUserForm = () => {
  const initialForm = {
    id: "",
    nama: "",
    email: "",
    nohp: "",
    alamat: "",
    role: "",
    password: "",
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/users", {
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
    <form
      className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4"
      onSubmit={handleSubmit}
    >
      <div className="space-y-1.5 col-span-2">
        <Label htmlFor="nama" className="text-sm text-slate-700">
          Nama Lengkap
        </Label>
        <Input
          id="nama"
          name="nama" // TAMBAHKAN INI
          placeholder="Andi Pratama"
          onChange={handleChange}
          value={form.nama}
          className="border-slate-200"
        />
      </div>

      <div className="space-y-1.5 col-span-2 md:col-span-1">
        <Label htmlFor="email" className="text-sm text-slate-700">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          name="email" // TAMBAHKAN INI
          placeholder="andi.p@email.com"
          onChange={handleChange}
          value={form.email}
          className="border-slate-200"
        />
      </div>

      <div className="space-y-1.5 col-span-2 md:col-span-1">
        <Label htmlFor="nohp" className="text-sm text-slate-700">
          Nomor Handphone
        </Label>
        <Input
          id="nohp"
          placeholder="0812xxxx"
          name="nohp" // TAMBAHKAN INI
          className="border-slate-200"
          onChange={handleChange}
          value={form.nohp}
        />
      </div>

      <div className="space-y-1.5 col-span-2">
        <Label htmlFor="alamat" className="text-sm text-slate-700">
          Alamat
        </Label>
        <Input
          id="alamat"
          name="alamat" // TAMBAHKAN INI
          placeholder="Jl. Merdeka No. 10, Jakarta"
          className="border-slate-200"
          onChange={handleChange}
          value={form.alamat}
        />
      </div>

      <div className="space-y-1.5 col-span-2">
        <Label htmlFor="pass" className="text-sm text-slate-700">
          Password Sementara
        </Label>
        <Input
          id="pass"
          name="password" // TAMBAHKAN INI
          type="password"
          placeholder="******"
          className="border-slate-200"
          onChange={handleChange}
          value={form.password}
        />
      </div>

      <DialogFooter className="pt-6">
        <Button variant="outline" className="border-slate-300">
          Batal
        </Button>
        <Button type="submit" className="bg-slate-900 hover:bg-slate-800 px-8">
          Simpan
        </Button>
      </DialogFooter>
    </form>
  );
};

// -- Halaman Utama Data Pengguna --
export default function UsersPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className="flex-1">
        <Header />

        <main className="p-8 space-y-8">
          <Card className="border-none shadow-sm bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div className="space-y-1">
                <CardTitle className="text-xl font-semibold">
                  Daftar Pengguna Aktif
                </CardTitle>
                <CardDescription>
                  Total {usersData.length} pengguna terdaftar.
                </CardDescription>
              </div>

              <div className="flex items-center gap-3">
                {/* Search Bar */}
                <div className="relative w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    placeholder="Cari nama atau email..."
                    className="pl-10 border-slate-200 bg-slate-50 focus-visible:ring-slate-300"
                  />
                </div>

                {/* Dialog/Modal Tambah User */}
                <Dialog>
                  <DialogTrigger>
                    <Button className="gap-2 bg-slate-900 hover:bg-slate-800">
                      <PlusCircle className="w-4 h-4" />
                      Tambah Pengguna
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                      <DialogTitle>Tambah Pengguna Baru</DialogTitle>
                      <DialogDescription>
                        Isi data di bawah untuk membuat akun pengguna baru.
                        Pastikan email aktif.
                      </DialogDescription>
                    </DialogHeader>
                    <TambahUserForm />
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-slate-50/50">
                  <TableRow className="border-slate-100">
                    <TableHead className="w-[80px] pl-6 text-slate-600">
                      ID
                    </TableHead>
                    <TableHead className="text-slate-600">
                      Nama Lengkap
                    </TableHead>
                    <TableHead className="text-slate-600">Email</TableHead>
                    <TableHead className="text-slate-600">No. HP</TableHead>
                    <TableHead className="text-slate-600">Alamat</TableHead>
                    <TableHead className="text-slate-600">Role</TableHead>
                    <TableHead className="w-[80px] text-right pr-6 text-slate-600">
                      Aksi
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {usersData.map((user, index) => (
                    <TableRow
                      key={user.id}
                      className={`${index % 2 === 0 ? "bg-white" : "bg-slate-50/30"} border-slate-100 hover:bg-slate-100/50 transition-colors`}
                    >
                      <TableCell className="font-medium text-slate-600 pl-6">{`#${String(user.id).padStart(3, "0")}`}</TableCell>
                      <TableCell className="font-semibold text-slate-950">
                        {user.nama}
                      </TableCell>
                      <TableCell className="text-slate-700">
                        {user.email}
                      </TableCell>
                      <TableCell className="text-slate-700">
                        {user.nohp}
                      </TableCell>
                      <TableCell className="text-slate-700">
                        {user.alamat}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium ${user.role === "Admin" ? "bg-sky-50 text-sky-700" : "bg-emerald-50 text-emerald-700"}`}
                        >
                          {user.role}
                        </span>
                      </TableCell>
                      <TableCell className="text-right pr-6 relative">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-slate-500 hover:text-slate-950 hover:bg-slate-200/70"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-slate-500 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination Placeholder */}
              <div className="flex items-center justify-between p-6 border-t border-slate-100">
                <p className="text-sm text-slate-500">
                  Menampilkan 1-5 dari 1,284 pengguna
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-200"
                  >
                    Sebelumnya
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-200"
                  >
                    Selanjutnya
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
