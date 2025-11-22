import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hash, Clock, Blocks } from "lucide-react";

const Ledger = () => {
  const blocks = [
    {
      blockNumber: 45231,
      hash: "0x8f7d...3a2c",
      transactions: 3,
      timestamp: "2024-01-15 10:30:45",
      miner: "0x1234...5678"
    },
    {
      blockNumber: 45230,
      hash: "0x2b9e...7f4d",
      transactions: 5,
      timestamp: "2024-01-15 10:25:32",
      miner: "0x8765...4321"
    },
    {
      blockNumber: 45229,
      hash: "0x4c1a...9e6b",
      transactions: 2,
      timestamp: "2024-01-15 10:20:18",
      miner: "0x9876...1234"
    }
  ];

  const recentTransactions = [
    {
      txHash: "0xa7c3...2d8f",
      block: 45231,
      from: "0x1234...5678",
      to: "0x8765...4321",
      amount: "$250.00",
      status: "confirmed"
    },
    {
      txHash: "0xb8d4...3e9g",
      block: 45231,
      from: "0x2345...6789",
      to: "0x7654...3210",
      amount: "$1,500.00",
      status: "confirmed"
    },
    {
      txHash: "0xc9e5...4f0h",
      block: 45230,
      from: "0x3456...7890",
      to: "0x6543...2109",
      amount: "$75.50",
      status: "confirmed"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Blockchain Ledger</h1>
        <p className="text-muted-foreground">View immutable transaction records on the blockchain</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Blocks className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Total Blocks</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-foreground">45,231</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Hash className="w-5 h-5 text-accent" />
              <CardTitle className="text-lg">Transactions</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-foreground">128,453</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-success" />
              <CardTitle className="text-lg">Avg Block Time</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-foreground">5.2s</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Blocks</CardTitle>
          <CardDescription>Latest blocks added to the chain</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {blocks.map((block) => (
              <div 
                key={block.blockNumber}
                className="p-4 bg-gradient-card rounded-lg border border-border hover:shadow-card transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Blocks className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Block #{block.blockNumber}</p>
                      <p className="text-sm text-muted-foreground">{block.timestamp}</p>
                    </div>
                  </div>
                  <Badge variant="default">{block.transactions} txns</Badge>
                </div>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Hash:</span>
                    <span className="ml-2 text-foreground font-mono">{block.hash}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Miner:</span>
                    <span className="ml-2 text-foreground font-mono">{block.miner}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest transactions on the blockchain</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((tx) => (
              <div 
                key={tx.txHash}
                className="p-4 bg-gradient-card rounded-lg border border-border"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <Hash className="w-4 h-4 text-primary" />
                    <span className="font-mono text-sm text-foreground">{tx.txHash}</span>
                  </div>
                  <Badge variant="default">{tx.status}</Badge>
                </div>
                <div className="grid md:grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Block:</span>
                    <span className="ml-2 text-foreground">#{tx.block}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">From:</span>
                    <span className="ml-2 text-foreground font-mono">{tx.from}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">To:</span>
                    <span className="ml-2 text-foreground font-mono">{tx.to}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-lg font-bold text-foreground">{tx.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ledger;