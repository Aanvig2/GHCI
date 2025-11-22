import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

const History = () => {
  const transactions = [
    {
      id: "TXN001",
      type: "debit",
      from: "****4242",
      to: "****8888",
      amount: 250.00,
      purpose: "Rent Payment",
      status: "verified",
      time: "2024-01-15 10:30 AM"
    },
    {
      id: "TXN002",
      type: "credit",
      from: "****9999",
      to: "****4242",
      amount: 1500.00,
      purpose: "Salary Credit",
      status: "verified",
      time: "2024-01-14 09:00 AM"
    },
    {
      id: "TXN003",
      type: "debit",
      from: "****4242",
      to: "****7777",
      amount: 75.50,
      purpose: "Grocery Shopping",
      status: "pending",
      time: "2024-01-13 06:45 PM"
    },
    {
      id: "TXN004",
      type: "debit",
      from: "****4242",
      to: "****3333",
      amount: 5000.00,
      purpose: "Investment",
      status: "flagged",
      time: "2024-01-12 02:15 PM"
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "destructive" | "secondary" | "outline", label: string }> = {
      verified: { variant: "default", label: "Verified" },
      pending: { variant: "secondary", label: "Pending" },
      flagged: { variant: "destructive", label: "Flagged" }
    };
    const config = variants[status] || variants.pending;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Transaction History</h1>
        <p className="text-muted-foreground">View all your transaction records</p>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((txn) => (
              <div 
                key={txn.id}
                className="p-4 bg-gradient-card rounded-lg border border-border hover:shadow-card transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      txn.type === "credit" ? "bg-success/20" : "bg-primary/20"
                    }`}>
                      {txn.type === "credit" ? (
                        <ArrowDownLeft className="w-5 h-5 text-success" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">{txn.id}</span>
                        {getStatusBadge(txn.status)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {txn.from} → {txn.to}
                      </p>
                      <p className="text-sm text-muted-foreground">{txn.purpose}</p>
                      <p className="text-xs text-muted-foreground mt-1">{txn.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-xl font-bold ${
                      txn.type === "credit" ? "text-success" : "text-foreground"
                    }`}>
                      {txn.type === "credit" ? "+" : "-"}${txn.amount.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default History;