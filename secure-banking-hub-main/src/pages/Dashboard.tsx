import { useState } from "react";
import { 
  Card, CardContent, CardHeader, CardTitle 
} from "@/components/ui/card";
import { 
  DollarSign, Activity, AlertTriangle, Clock, Blocks, CreditCard 
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  // PIN-based balance reveal
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [pinDialogOpen, setPinDialogOpen] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");
  const [pinError, setPinError] = useState("");

  const correctPin = "3421";

  const handleVerifyPin = () => {
    if (enteredPin === correctPin) {
      setBalanceVisible(true);
      setPinError("");
      setPinDialogOpen(false);
      setEnteredPin("");
    } else {
      setPinError("Incorrect PIN. Try again.");
    }
  };

  const stats = [
    {
      title: "Total Balance",
      value: balanceVisible ? "$124,532.00" : "•••••••••",
      icon: DollarSign,
      change: "+12.5%",
      positive: true,
      isBalance: true,
    },
    {
      title: "Credit Score",
      value: "743",
      icon: CreditCard,
      change: "Good Standing",
      positive: true,
    },
    {
      title: "Total Transactions",
      value: "1,247",
      icon: Activity,
      change: "+8.2%",
      positive: true,
    },
    {
      title: "Fraud Alerts",
      value: "3",
      icon: AlertTriangle,
      change: "-2",
      positive: true,
    },
    {
      title: "Last Login",
      value: "2 hours ago",
      icon: Clock,
      change: "Today",
      positive: true,
    },
    {
      title: "Ledger Blocks",
      value: "45,231",
      icon: Blocks,
      change: "+124",
      positive: true,
    },
  ];

  return (
    <div className="space-y-8">
      
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your account overview.</p>
      </div>

      {/* Top Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <Card 
            key={index} 
            className="shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer"
            onClick={() => stat.isBalance && !balanceVisible && setPinDialogOpen(true)}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <p 
                className={`text-sm mt-1 ${
                  stat.positive ? "text-success" : "text-destructive"
                }`}
              >
                {stat.change}
              </p>

              {/* Show Balance Button */}
              {stat.isBalance && !balanceVisible && (
                <button
                  onClick={() => setPinDialogOpen(true)}
                  className="text-blue-600 underline text-sm mt-2"
                >
                  Show Balance
                </button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity + Alerts */}
      <div className="grid gap-6 md:grid-cols-2">

        {/* Recent Activity */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-foreground">Transaction #{1234 + i}</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">-$250.00</p>
                    <p className="text-sm text-success">Verified</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Security Alerts */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Security Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-warning/10 border border-warning rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Unusual Transaction Detected</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      A transaction of $5,000 from an unknown location requires verification
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-success/10 border border-success rounded-lg">
                <div className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Security Check Passed</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your account passed the weekly security audit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* ⭐ Embedded Google Sheet */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>My Linked Sheet</CardTitle>
        </CardHeader>
        <CardContent>
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTTcRZdOZ6J4cd0Z-rO_T9TA5z-QrYFnAU_q-_d24sEgOCms_VZFH-JGzEnOVaGEpCFBmVfMH_k4TdG/pubhtml?gid=0&single=true"
            width="100%"
            height="600px"
            className="rounded-lg border"
          ></iframe>
        </CardContent>
      </Card>

      {/* PIN Dialog */}
      <Dialog open={pinDialogOpen} onOpenChange={setPinDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enter PIN</DialogTitle>
            <DialogDescription>
              Enter your 4-digit PIN to view your balance.
            </DialogDescription>
          </DialogHeader>

          <Input
            type="password"
            maxLength={4}
            value={enteredPin}
            onChange={(e) => setEnteredPin(e.target.value)}
          />

          {pinError && (
            <p className="text-red-500 text-sm">{pinError}</p>
          )}

          <Button 
            className="w-full mt-2 bg-teal-600 hover:bg-teal-700"
            onClick={handleVerifyPin}
          >
            Verify PIN
          </Button>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default Dashboard;
