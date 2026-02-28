"use client";

import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  LayoutDashboard,
  LogOut,
  Search,
  Building2,
  Package,
  User,
  Snowflake,
  Trash2,
  TriangleAlert,
  Filter,
  Loader2,
  RefreshCw,
  Menu,
  Phone,
  Settings2,
} from "lucide-react";
import { format } from "date-fns";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { 
  getPlatformUserSummary, 
  toggleUserFreeze, 
  deletePlatformUserAccount 
} from "@/app/actions/admin";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LocationRecord {
  id: string;
  onboarding_id: string | null;
  name: string;
  address: string | null;
  completed: boolean;
  business_email: string;
  business_phone: string;
  billing_amount?: number;
  billing_duration?: string;
  days_remaining?: number;
  next_billing_date?: string;
  last_active_at?: string;
  created_at: string;
}

interface UserSummary {
  user_id: string;
  email: string;
  business_name: string;
  business_phone: string;
  location_count: number;
  locations: LocationRecord[];
  is_frozen: boolean;
  created_at: string;
  billing_amount: number;
  billing_duration: string;
  days_remaining: number;
  next_billing_date: string;
}

export default function AdminDashboardClient() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "verified" | "provisioning"
  >("all");
  const [confirmModal, setConfirmModal] = useState<{
    show: boolean;
    type: "edit" | "delete" | "freeze" | "unfreeze";
    targetId: string | null;
    targetName: string | null;
    isFrozen?: boolean;
  }>({ show: false, type: "edit", targetId: null, targetName: null });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const queryClient = useQueryClient();

  const { data: users, isLoading } = useQuery<UserSummary[]>({
    queryKey: ["admin-user-summary"],
    queryFn: async () => {
      const result = await getPlatformUserSummary();
      if (!result.success) {
        throw new Error(result.error);
      }
      return result.data as UserSummary[];
    },
    refetchInterval: 30000,
    refetchOnWindowFocus: true,
  });

  const filteredUsers = users?.filter((u) => {
    const matchesSearch =
      (u.email?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (u.business_name?.toLowerCase() || "").includes(searchTerm.toLowerCase());

    const hasVerified = u.locations?.some((loc) => loc.completed);
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "verified" && hasVerified) ||
      (statusFilter === "provisioning" && !hasVerified);

    return matchesSearch && matchesStatus;
  });

  const handleAction = (
    type: "edit" | "delete" | "freeze" | "unfreeze",
    target: UserSummary,
  ) => {
    const targetName = target.business_name || target.email;

    setConfirmModal({
      show: true,
      type,
      targetId: target.user_id,
      targetName,
      isFrozen: target.is_frozen,
    });
  };

  const executeAction = async () => {
    if (!confirmModal.targetId) return;

    try {
      if (confirmModal.type === "freeze" || confirmModal.type === "unfreeze") {
        const result = await toggleUserFreeze(
          confirmModal.targetId,
          confirmModal.type === "freeze"
        );

        if (!result.success) throw new Error(result.error);
        toast.success(
          `User account ${
            confirmModal.type === "freeze" ? "Frozen" : "Unsuspended"
          } Successfully`,
        );
        queryClient.invalidateQueries({ queryKey: ["admin-user-summary"] });
      } else if (confirmModal.type === "delete") {
        const result = await deletePlatformUserAccount(confirmModal.targetId);

        if (!result.success) throw new Error(result.error);
        toast.success(`User account and all data deleted successfully`);
        queryClient.invalidateQueries({ queryKey: ["admin-user-summary"] });
      } else {
        toast.info(
          `Action ${confirmModal.type} executed for ${confirmModal.targetName}`,
        );
      }
    } catch (err: any) {
      console.error("Action failed:", err);
      toast.error(err.message || "Action failed");
    }

    setConfirmModal({
      show: false,
      type: "edit",
      targetId: null,
      targetName: null,
    });
  };

  const exportCSV = () => {
    if (!filteredUsers) return;
    const headers = [
      "Admin Email",
      "Primary Business",
      "Contact Number",
      "Location Count",
      "Status",
      "Billing Amount (UGX)",
      "Billing Cycle",
      "Days Remaining",
      "Next Billing Date",
      "Joined Date",
    ];
    const rows = filteredUsers.map((u) => {
      const primary = u.locations?.[0];
      return [
        `"${u.email}"`,
        `"${(u.business_name || "N/A").replace(/"/g, '""')}"`,
        `"${u.business_phone || ""}"`,
        u.location_count,
        u.is_frozen ? "Frozen" : "Active",
        primary?.billing_amount ?? 0,
        `"${primary?.billing_duration ?? ""}"`,
        primary?.days_remaining ?? 0,
        primary?.next_billing_date
          ? format(new Date(primary.next_billing_date), "yyyy-MM-dd")
          : "",
        format(new Date(u.created_at || new Date()), "yyyy-MM-dd"),
      ];
    });
    const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `gonza_records_${format(new Date(), "yyyyMMdd")}.csv`;
    link.click();
    toast.success("CSV Exported");
  };

  const exportPDF = async () => {
    if (!filteredUsers) return;
    toast.info("Generating PDF...");
    try {
      const pdf = new jsPDF("l", "mm", "a4");

      pdf.setFontSize(18);
      pdf.text("Gonza Records Summary", 14, 22);
      pdf.setFontSize(10);
      pdf.setTextColor(100);
      pdf.text(
        `Generated on ${format(new Date(), "MMMM dd, yyyy HH:mm")}`,
        14,
        30,
      );

      const tableData = filteredUsers.map((u) => {
        const primary = u.locations?.[0];
        return [
          u.email,
          u.business_name || "N/A",
          u.business_phone || "",
          String(u.location_count),
          u.is_frozen ? "Suspended" : "Active",
          primary?.billing_amount
            ? `UGX ${primary.billing_amount.toLocaleString()}`
            : "—",
          primary?.billing_duration ?? "—",
          primary?.days_remaining != null
            ? String(primary.days_remaining)
            : "—",
          primary?.next_billing_date
            ? format(new Date(primary.next_billing_date), "MMM dd, yyyy")
            : "—",
          format(new Date(u.created_at || new Date()), "MMM dd, yyyy"),
        ];
      });

      autoTable(pdf, {
        startY: 40,
        head: [
          [
            "Email",
            "Business",
            "Contact",
            "Locs",
            "Status",
            "Billing Amt",
            "Cycle",
            "Days Left",
            "Next Billing",
            "Joined",
          ],
        ],
        body: tableData,
        theme: "striped",
        headStyles: { fillColor: [41, 128, 185], textColor: 255, fontSize: 8 },
        bodyStyles: { fontSize: 8 },
        alternateRowStyles: { fillColor: [245, 245, 245] },
        margin: { top: 40 },
      });

      pdf.save(`gonza_records_${format(new Date(), "yyyyMMdd")}.pdf`);
      toast.success("PDF Exported");
    } catch (error: any) {
      console.error("PDF Export Error:", error);
      toast.error(error.message || "Failed to generate PDF");
    }
  };

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
        <div className="h-16 flex items-center px-6">
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
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-1.5 bg-primary/5 text-primary rounded-[5px] text-[11px] font-bold uppercase tracking-wider transition-colors">
              <Building2 className="w-3.5 h-3.5" />
              <span>Businesses</span>
            </Link>
            <Link
              href="/packages"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-1.5 text-muted-foreground hover:bg-muted/50 rounded-[5px] text-[11px] font-bold uppercase tracking-wider transition-colors">
              <Package className="w-3.5 h-3.5" />
              <span>Subscription Tiers</span>
            </Link>
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
        <header className="h-auto lg:h-16 border-b border-border/40 bg-white/80 backdrop-blur-md sticky top-0 z-20 px-4 py-4 lg:py-0 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="p-2 -ml-2 lg:hidden hover:bg-muted rounded transition-colors">
                  <Menu className="w-4 h-4 text-foreground" />
                </button>
                <h1 className="text-[10px] font-bold text-foreground uppercase tracking-[0.2em]">
                  Dashboard
                </h1>
              </div>

              <div className="flex items-center gap-1 lg:hidden">
                <button
                  onClick={exportPDF}
                  className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground">
                  <div className="text-[8px] font-bold uppercase tracking-tighter">
                    PDF
                  </div>
                </button>
                <button
                  onClick={exportCSV}
                  className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground">
                  <div className="text-[8px] font-bold uppercase tracking-tighter">
                    CSV
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-3">
              <div className="relative w-full lg:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/60" />
                <input
                  type="text"
                  placeholder="Search entities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="linear-input pl-9 w-full lg:w-56 bg-muted/20 border-transparent focus:bg-white focus:border-border/60 h-9 transition-all"
                />
              </div>
              <button
                onClick={() => {
                  queryClient.invalidateQueries({
                    queryKey: ["admin-user-summary"],
                  });
                  toast.success("Syncing latest data...");
                }}
                className="flex items-center gap-2 h-9 px-4 bg-white border border-border/40 hover:bg-muted rounded-[5px] text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95"
                title="Force Sync">
                <RefreshCw
                  className={cn("w-3 h-3", isLoading && "animate-spin")}
                />
                <span className="hidden sm:inline">Refresh Data</span>
              </button>
              <div className="hidden lg:block h-8 w-px bg-border/40 mx-1" />
              <div className="hidden lg:flex items-center gap-2 bg-white border border-border/40 rounded-[5px] p-1">
                <button
                  onClick={exportPDF}
                  className="p-1 px-2.5 text-[9px] font-bold uppercase tracking-widest hover:bg-muted rounded transition-colors flex items-center gap-2">
                  Export PDF
                </button>
                <button
                  onClick={exportCSV}
                  className="p-1 px-2.5 text-[9px] font-bold uppercase tracking-widest hover:bg-muted rounded transition-colors flex items-center gap-2">
                  Export CSV
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 lg:p-10 max-w-[1400px] mx-auto space-y-6 lg:space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Platform Users",
                value: users?.length || 0,
                icon: User,
                color: "text-primary",
              },
              {
                label: "Total Locations",
                value:
                  users?.reduce((acc, u) => acc + u.location_count, 0) || 0,
                icon: Building2,
                color: "text-green-600",
              },
              {
                label: "Frozen Accounts",
                value: users?.filter((u) => u.is_frozen).length || 0,
                icon: Snowflake,
                color: "text-blue-500",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="linear-card p-6 bg-white group hover:border-primary/20">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[9px] uppercase tracking-[0.15em] font-bold text-muted-foreground opacity-60">
                    {stat.label}
                  </p>
                  <div
                    className={cn(
                      "p-1.5 rounded bg-muted/30 transition-colors",
                      stat.color,
                    )}>
                    <stat.icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </h3>
              </div>
            ))}
          </div>

          <div className="linear-card overflow-hidden bg-white">
            <div className="px-4 lg:px-6 py-3 border-b border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted/[0.15]">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <Filter className="w-3 h-3 text-muted-foreground" />
                  <span className="text-[9px] font-bold text-foreground uppercase tracking-widest">
                    Filters
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {(["all", "verified", "provisioning"] as const).map(
                    (status) => (
                      <button
                        key={status}
                        onClick={() => setStatusFilter(status)}
                        className={cn(
                          "px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest rounded transition-all",
                          statusFilter === status
                            ? "bg-primary text-white"
                            : "text-muted-foreground hover:bg-muted",
                        )}>
                        {status}
                      </button>
                    ),
                  )}
                </div>
              </div>
              <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-[0.1em]">
                {filteredUsers?.length || 0} Managed Users
              </span>
            </div>

            <div className="overflow-x-auto" id="records-table-container">
              <table
                className="w-full text-left min-w-[800px]"
                id="records-table">
                <thead>
                  <tr>
                    <th className="linear-table-header">User Account</th>
                    <th className="linear-table-header">Business Identity</th>
                    <th className="linear-table-header">Primary Contact</th>
                    <th className="linear-table-header text-center">Nodes</th>
                    <th className="linear-table-header text-center">Status</th>
                    <th className="linear-table-header">Subscription</th>
                    <th className="linear-table-header text-center">Expiry</th>
                    <th className="linear-table-header text-right">Settings</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-20 text-center">
                        <Loader2 className="w-6 h-6 animate-spin mx-auto text-primary/40 mb-3" />
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                          Aggregating User Data...
                        </p>
                      </td>
                    </tr>
                  ) : (
                    filteredUsers?.map((u) => {
                      const detailId = u.user_id;

                      return (
                        <tr
                          key={u.user_id}
                          className="linear-table-row group/row cursor-pointer"
                          onClick={() => router.push(`/records/${u.user_id}`)}>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                                <User className="w-3.5 h-3.5 text-primary/40" />
                              </div>
                              <div className="min-w-0">
                                <p className="font-bold text-foreground text-[11px] truncate uppercase tracking-tight">
                                  {u.email}
                                </p>
                                <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-[0.1em]">
                                  Admin
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded bg-[#f1f1f1] border border-border/20 flex items-center justify-center shrink-0 group-hover/row:border-primary/20 transition-colors">
                                <Building2 className="w-3.5 h-3.5 text-muted-foreground/40 group-hover/row:text-primary/40" />
                              </div>
                              <div className="min-w-0">
                                <p className="font-bold text-foreground text-[10px] uppercase tracking-tight truncate">
                                  {u.business_name || "Individual Entity"}
                                </p>
                                <p className="text-[8px] text-muted-foreground uppercase font-medium tracking-widest truncate">
                                  {u.location_count > 1
                                    ? `${u.location_count} Branches`
                                    : "Primary Node"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-muted/30 flex items-center justify-center shrink-0">
                                <Phone className="w-2.5 h-2.5 text-muted-foreground/60" />
                              </div>
                              <span className="text-[10px] font-bold text-foreground uppercase tracking-tight">
                                {u.business_phone || "—"}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-muted/40 rounded-[4px] text-[10px] font-bold text-muted-foreground uppercase tracking-wider border border-border/10">
                              {u.location_count}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            {u.is_frozen ? (
                              <div className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-[8px] uppercase tracking-tighter bg-blue-50/50 px-2 py-0.5 rounded border border-blue-100/50">
                                <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                                Frozen
                              </div>
                            ) : (
                              <div className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-[8px] uppercase tracking-tighter bg-emerald-50/50 px-2 py-0.5 rounded border border-emerald-100/50">
                                <div className="w-1 h-1 rounded-full bg-emerald-500" />
                                Active
                              </div>
                            )}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex flex-col">
                              <span className="text-[11px] font-bold text-foreground">
                                UGX {u.billing_amount?.toLocaleString() ?? "0"}
                              </span>
                              <span className="text-[9px] text-muted-foreground uppercase font-medium tracking-widest">
                                {u.billing_duration || "Monthly"}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <div className="flex flex-col items-center gap-1">
                              <div
                                className={cn(
                                  "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wider border",
                                  (u.days_remaining ?? 0) <= 0
                                    ? "bg-red-50 text-red-600 border-red-100"
                                    : (u.days_remaining ?? 0) <= 5
                                    ? "bg-amber-50 text-amber-600 border-amber-100"
                                    : "bg-green-50 text-green-600 border-green-100",
                                )}>
                                {(u.days_remaining ?? 0) <= 0
                                  ? "Expired"
                                  : `${u.days_remaining} Days`}
                              </div>
                              <span className="text-[8px] text-muted-foreground font-medium">
                                {u.next_billing_date
                                  ? format(
                                      new Date(u.next_billing_date),
                                      "MMM dd",
                                    )
                                  : "No Date"}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <div className="flex items-center justify-end gap-1">
                              {detailId && (
                                <Link
                                  href={`/records/${detailId}/edit`}
                                  onClick={(e) => e.stopPropagation()}
                                  className="p-1.5 hover:bg-primary/5 rounded text-muted-foreground hover:text-primary transition-all active:scale-90"
                                  title="Edit Record">
                                  <Settings2 className="w-4 h-4" />
                                </Link>
                              )}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleAction(
                                    u.is_frozen ? "unfreeze" : "freeze",
                                    u,
                                  );
                                }}
                                className={cn(
                                  "p-1.5 hover:bg-muted rounded transition-colors",
                                  u.is_frozen
                                    ? "text-blue-600"
                                    : "text-muted-foreground hover:text-amber-600",
                                )}
                                title={
                                  u.is_frozen
                                    ? "Unsuspend User"
                                    : "Suspend User Account"
                                }>
                                <Snowflake
                                  className={cn(
                                    "w-3.5 h-3.5",
                                    u.is_frozen && "animate-pulse",
                                  )}
                                />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleAction("delete", u);
                                }}
                                className="p-1.5 hover:bg-muted rounded text-muted-foreground hover:text-destructive transition-colors"
                                title="Delete Account">
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {confirmModal.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-sm rounded border border-border/40 shadow-2xl p-6 animate-in zoom-in-95 duration-200">
            <div className="flex flex-col items-center text-center mb-6">
              <div
                className={cn(
                  "w-12 h-12 rounded flex items-center justify-center mb-4 shadow-sm",
                  confirmModal.type === "delete"
                    ? "bg-red-50 text-red-600 border border-red-100"
                    : confirmModal.type === "freeze" ||
                      confirmModal.type === "unfreeze"
                    ? "bg-blue-50 text-blue-600 border border-blue-100"
                    : "bg-primary/5 text-primary border border-primary/10",
                )}>
                <TriangleAlert className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-foreground uppercase tracking-widest">
                Confirm {confirmModal.type}
              </h3>
              <p className="text-[13px] text-muted-foreground mt-2 leading-relaxed">
                Proceed with action for
                <br />
                <span className="font-bold text-foreground">
                  {confirmModal.targetName}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() =>
                  setConfirmModal({
                    show: false,
                    type: "edit",
                    targetId: null,
                    targetName: null,
                  })
                }
                className="px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:bg-muted rounded transition-colors">
                Cancel
              </button>
              <button
                onClick={executeAction}
                className={cn(
                  "px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-white rounded shadow-sm transition-all active:scale-[0.98]",
                  confirmModal.type === "delete"
                    ? "bg-red-600 hover:bg-red-700"
                    : confirmModal.type === "freeze" ||
                      confirmModal.type === "unfreeze"
                    ? "bg-amber-600 hover:bg-amber-700"
                    : "bg-primary hover:bg-primary/95",
                )}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
