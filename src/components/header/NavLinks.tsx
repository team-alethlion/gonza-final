"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Receipt, Package, DollarSign, HelpCircle, MessageSquare, Users, Wallet, Settings, CheckSquare, History as HistoryIcon, UserCircle, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { useProfiles } from '@/contexts/ProfileContext';

interface NavLink {
  name: string;
  path: string;
  icon: React.ReactNode;
  module?: string;
}

interface NavLinksProps {
  className?: string;
  onClick?: () => void;
  isSidebar?: boolean;
}

const NavLinks = ({ className = '', onClick, isSidebar = false }: NavLinksProps) => {
  const pathname = usePathname();

  const { hasPermission } = useProfiles();

  const mainLinks: NavLink[] = [
    { name: 'Dashboard', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'Sales', path: '/sales', icon: <Receipt className="w-4 h-4" />, module: 'sales' },
    { name: 'Inventory', path: '/inventory', icon: <Package className="w-4 h-4" />, module: 'inventory' },
    { name: 'Finance', path: '/cash', icon: <Wallet className="w-4 h-4" />, module: 'finance' },
    { name: 'Expenses', path: '/expenses', icon: <DollarSign className="w-4 h-4" />, module: 'expenses' },
    { name: 'Customers', path: '/customers', icon: <Users className="w-4 h-4" />, module: 'customers' },
    { name: 'Messages', path: '/messages', icon: <MessageSquare className="w-4 h-4" />, module: 'messages' },
    { name: 'Profiles', path: '/profiles', icon: <UserCircle className="w-4 h-4" />, module: 'profiles' },
    { name: 'Tasks', path: '/tasks', icon: <CheckSquare className="w-4 h-4" />, module: 'tasks' },
    { name: 'History', path: '/history', icon: <HistoryIcon className="w-4 h-4" /> },
  ].filter(link => !link.module || hasPermission(link.module, 'view'));

  const secondaryLinks: NavLink[] = [
    { name: 'Billing History', path: '/billing', icon: <CreditCard className="w-4 h-4" /> },
    { name: 'Settings', path: '/settings', icon: <Settings className="w-4 h-4" />, module: 'settings' },
    { name: 'Help', path: '/help', icon: <HelpCircle className="w-4 h-4" /> },
    { name: 'Privacy Policy', path: '/privacy-policy', icon: <HelpCircle className="w-4 h-4" /> },
  ].filter(link => !link.module || hasPermission(link.module, 'view'));

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  if (isSidebar) {
    return (
      <div className="flex flex-col justify-between h-full">
        <SidebarMenu className="w-full">
          {mainLinks.map((link) => (
            <SidebarMenuItem key={link.name}>
              <SidebarMenuButton
                asChild
                isActive={isActive(link.path)}
                tooltip={link.name}
                className="text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground data-[active=true]:bg-secondary data-[active=true]:text-secondary-foreground"
              >
                <Link href={link.path} onClick={onClick}>
                  {link.icon}
                  <span className="group-data-[collapsible=icon]:hidden">{link.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <SidebarMenu className="w-full">
          {secondaryLinks.map((link) => (
            <SidebarMenuItem key={link.name}>
              <SidebarMenuButton
                asChild
                isActive={isActive(link.path)}
                tooltip={link.name}
                className="text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground data-[active=true]:bg-secondary data-[active=true]:text-secondary-foreground"
              >
                <Link href={link.path} onClick={onClick}>
                  {link.icon}
                  <span className="group-data-[collapsible=icon]:hidden">{link.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </div>
    );
  }

  // For Mobile Menu
  const allLinks = [...mainLinks, ...secondaryLinks];

  return (
    <nav className={cn('flex flex-col space-y-1', className)}>
      {allLinks.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${isActive(link.path)
            ? 'bg-blue-50 text-blue-700'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          onClick={onClick}
        >
          {link.icon}
          <span>{link.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
