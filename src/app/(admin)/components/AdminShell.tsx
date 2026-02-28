"use client";

import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  LayoutDashboard,
  LogOut,
  Building2,
  Package,
  User,
  Menu,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { usePathname } from "next/navigation";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AdminShellProps {
  children: React.ReactNode;
}

export default function AdminShell({ children }: AdminShellProps) {
  const { user, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Businesses", icon: Building2 },
    { href: "/packages", label: "Subscription Tiers", icon: Package },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] flex font-geist overflow-x-hidden">
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <aside
        className={cn(
          "w-56 border-r border-border/40 bg-white flex flex-col fixed inset-y-0 z-50 transition-transform duration-300 lg:translate-x-0",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}>
        <div className="h-16 flex items-center px-6 border-b border-border/5 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-primary rounded flex items-center justify-center">
              <LayoutDashboard className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-foreground">
              Console
            </span>
          </div>
        </div>

        <div className="px-4 py-2">
          <p className="px-3 mb-2 text-[10px] font-bold text-muted-foreground/50 uppercase tracking-[0.2em]">
            Management
          </p>
          <nav className="space-y-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-1.5 rounded-[5px] text-[11px] font-bold uppercase tracking-wider transition-colors",
                    isActive 
                      ? "bg-primary/5 text-primary" 
                      : "text-muted-foreground hover:bg-muted/50"
                  )}>
                  <item.icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-4 border-t border-border/40 bg-[#fafafa]/50">
          <div className="flex items-center gap-3 px-3 py-2 mb-3">
            <div className="w-7 h-7 rounded bg-white border border-border/40 flex items-center justify-center shrink-0">
              <User className="w-3.5 h-3.5 text-muted-foreground/60" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-foreground truncate uppercase tracking-tight">
                {user?.username}
              </p>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-green-500" />
                <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">
                  Online
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => signOut()}
            className="w-full flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-[5px] text-[10px] font-bold uppercase tracking-widest transition-colors">
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign out</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 lg:pl-56 w-full">
        {/* Mobile Header */}
        <header className="h-16 border-b border-border/40 bg-white/80 backdrop-blur-md sticky top-0 z-20 px-4 flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 -ml-2 hover:bg-muted rounded transition-colors">
            <Menu className="w-4 h-4 text-foreground" />
          </button>
          <h1 className="ml-3 text-[10px] font-bold text-foreground uppercase tracking-[0.2em]">
            Console
          </h1>
        </header>

        <div className="min-h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
