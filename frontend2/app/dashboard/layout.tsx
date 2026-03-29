import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  Bell,
  MonitorCheck,
  Medal,
  Book,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";

// -- Komponen Sidebar (Kiri) --
const Sidebar = () => {
  const menus = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      active: true,
    },
    { name: "Data Pengguna", icon: Users, href: "/dashboard/users" },
    { name: "Rekam Medis", icon: Book, href: "/dashboard/medical-record" },
    { name: "Farmasi & Logistik", icon: Medal, href: "/dashboard/farmasi" },
    { name: "Administrasi", icon: MonitorCheck, href: "/dashboard/billing" },
    { name: "Report", icon: MonitorCheck, href: "/dashboard/report" },
    { name: "Pengaturan", icon: Settings, href: "/dashboard/setting" },
  ];

  return (
    <aside className="w-64 bg-slate-50 border-r border-slate-200 p-6 flex flex-col h-screen sticky top-0">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">H</span>
        </div>
        <span className="text-xl font-bold text-slate-950">HealThive</span>
      </div>

      <nav className="flex-1 space-y-2">
        {menus.map((menu) => (
          <Link
            key={menu.name}
            href={menu.href!} // Mengambil path dari data menu
            className={`flex items-center gap-3.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              menu.active
                ? "bg-slate-100 text-slate-950"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
            }`}
          >
            <menu.icon className="w-5 h-5" />
            {menu.name}
          </Link>
        ))}
      </nav>

      <div className="border-t border-slate-200 pt-6 space-y-3">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3.5 text-slate-600 hover:text-red-600 hover:bg-red-50"
        >
          <LogOut className="w-5 h-5" />
          Keluar Akun
        </Button>
      </div>
    </aside>
  );
};

// -- Komponen Header (Atas) --
const Header = () => {};

// -- Halaman Utama --
export default function DashboardPage({
  children, // Ini adalah Page yang sedang dibuka (Farmasi/Billing/dll)
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Bagian Statis: Tidak berubah saat pindah halaman */}
      <aside className="w-64 border-r">
        <Sidebar />
      </aside>

      <main className="flex-1 overflow-y-auto">
        {/* Bagian Dinamis: Di sinilah Page akan muncul */}
        <section className="p-8">{children}</section>
      </main>
    </div>
  );
}
