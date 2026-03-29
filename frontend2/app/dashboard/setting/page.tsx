"use client";

import React from "react";
import {
  User,
  Lock,
  Bell,
  Palette,
  Building2,
  Save,
  ShieldCheck,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Switch } from "@/components/ui/switch";

/* ================================
   1. CONFIG (SINGLE SOURCE OF TRUTH)
================================ */
const SETTINGS_MENU = [
  { key: "profile", label: "Profil", icon: User },
  { key: "security", label: "Keamanan", icon: Lock },
  { key: "notifications", label: "Notifikasi", icon: Bell },
  { key: "appearance", label: "Tampilan", icon: Palette },
  { key: "hospital", label: "Data RS", icon: Building2 },
];

/* ================================
   2. MAIN PAGE
================================ */
export default function SettingsPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <PageHeader />

      <Tabs
        defaultValue="profile"
        className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6"
      >
        <SidebarMenu />
        <ContentArea />
      </Tabs>
    </div>
  );
}

/* ================================
   3. HEADER
================================ */
function PageHeader() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Pengaturan Sistem</h1>
      <p className="text-slate-500 text-sm mt-1">
        Kelola akun, keamanan, dan preferensi aplikasi.
      </p>
    </div>
  );
}

/* ================================
   4. SIDEBAR MENU
================================ */
function SidebarMenu() {
  return (
    <TabsList className="flex flex-col gap-1 bg-transparent p-0">
      {SETTINGS_MENU.map((item) => {
        const Icon = item.icon;

        return (
          <TabsTrigger
            key={item.key}
            value={item.key}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500
                       data-[state=active]:bg-white
                       data-[state=active]:text-slate-900
                       data-[state=active]:shadow-sm"
          >
            <Icon className="w-4 h-4" />
            {item.label}
          </TabsTrigger>
        );
      })}
    </TabsList>
  );
}

/* ================================
   5. CONTENT AREA
================================ */
function ContentArea() {
  return (
    <div className="space-y-6">
      <TabsContent value="profile">
        <ProfileCard />
      </TabsContent>

      <TabsContent value="security">
        <SecurityCard />
      </TabsContent>
    </div>
  );
}

/* ================================
   6. PROFILE CARD
================================ */
function ProfileCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profil Pengguna</CardTitle>
        <CardDescription>Informasi identitas akun Anda.</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <FormRow>
          <FormField label="Nama Lengkap">
            <Input defaultValue="Budi Tjahjono" />
          </FormField>

          <FormField label="Email">
            <Input type="email" defaultValue="budi@healthive.com" />
          </FormField>
        </FormRow>

        <div className="flex justify-end">
          <Button className="gap-2">
            <Save className="w-4 h-4" />
            Simpan
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ================================
   7. SECURITY CARD
================================ */
function SecurityCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Keamanan</CardTitle>
        <CardDescription>Pengaturan keamanan akun Anda.</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* 2FA */}
        <div className="flex items-center justify-between border rounded-lg p-4">
          <div>
            <p className="font-medium">Autentikasi 2FA</p>
            <p className="text-sm text-slate-500">
              Aktifkan untuk keamanan tambahan.
            </p>
          </div>
          <Switch />
        </div>

        {/* Password */}
        <FormField label="Password Lama">
          <Input type="password" />
        </FormField>

        <FormField label="Password Baru">
          <Input type="password" />
        </FormField>

        <Button variant="outline" className="gap-2">
          <ShieldCheck className="w-4 h-4" />
          Update Password
        </Button>
      </CardContent>
    </Card>
  );
}

/* ================================
   8. FORM UTILITIES (CLEAN)
================================ */
function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}

function FormRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">{children}</div>
  );
}
