import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import DashboardLayout from "./pages/DashboardLayout";
import Dashboard from "./pages/Dashboard";

// Dashboard pages
import Cards from "./pages/dashboard/Cards";
import OpenAccount from "./pages/dashboard/OpenAccount";
import Transaction from "./pages/dashboard/Transaction";
import Consent from "./pages/dashboard/Consent";
import RiskScore from "./pages/dashboard/RiskScore";
import Settings from "./pages/dashboard/Settings";

// ⭐ NEW IMPORTS
import FDCreate from "./pages/dashboard/FDCreate";
import LoanApply from "./pages/dashboard/LoanApply";
import HistoryLedger from "./pages/dashboard/HistoryLedger";
import ChatAssistant from "./pages/dashboard/ChatAssistant";
import FloatingCallButton from "./components/FloatingCallButton";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        {/* ⭐ FLOATING CALL BUTTON (GLOBAL) */}
        <FloatingCallButton />

        {/* APP ROUTES */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />

          {/* Dashboard Layout */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="cards" element={<Cards />} />
            <Route path="assistant" element={<ChatAssistant />} />
            <Route path="account" element={<OpenAccount />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="history-ledger" element={<HistoryLedger />} />
            <Route path="consent" element={<Consent />} />
            <Route path="risk" element={<RiskScore />} />
            <Route path="settings" element={<Settings />} />

            {/* ⭐ NEW ROUTES */}
            <Route path="fd-create" element={<FDCreate />} />
            <Route path="loan-apply" element={<LoanApply />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
