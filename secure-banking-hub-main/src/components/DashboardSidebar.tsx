import { 
  LayoutDashboard, 
  UserPlus, 
  ArrowLeftRight, 
  History, 
  ShieldCheck, 
  Brain, 
  Blocks, 
  Settings, 
  LogOut,
  CreditCard,
  PiggyBank,
  BadgeDollarSign
} from "lucide-react";

import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Cards", url: "/dashboard/cards", icon: CreditCard },
  { title: "Open Account", url: "/dashboard/account", icon: UserPlus },
  { title: "Make Transaction", url: "/dashboard/transaction", icon: ArrowLeftRight },
  { title: "Transactions & Ledger", url: "/dashboard/history-ledger", icon: History },
  { title: "AI Assistant", url: "/dashboard/assistant", icon: Brain },
  { title: "Consent Management", url: "/dashboard/consent", icon: ShieldCheck },
  { title: "AI Risk Score", url: "/dashboard/risk", icon: Brain },

  // ⭐ NEW PAGES ADDED HERE
  { title: "Create FD", url: "/dashboard/fd-create", icon: PiggyBank },
  { title: "Apply Loan", url: "/dashboard/loan-apply", icon: BadgeDollarSign },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent>
        {/* Brand */}
        <div className="p-4 border-b border-sidebar-border">
          {!isCollapsed && (
            <h2 className="text-xl font-bold text-sidebar-foreground">SecureBank</h2>
          )}
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/dashboard"}
                      className="hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="w-5 h-5" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer Section */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink 
                    to="/dashboard/settings"
                    className="hover:bg-sidebar-accent"
                    activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  >
                    <Settings className="w-5 h-5" />
                    {!isCollapsed && <span>Settings</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Button
                  variant="ghost"
                  className="w-full justify-start hover:bg-sidebar-accent text-sidebar-foreground"
                  onClick={handleLogout}
                >
                  <LogOut className="w-5 h-5" />
                  {!isCollapsed && <span className="ml-2">Logout</span>}
                </Button>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
