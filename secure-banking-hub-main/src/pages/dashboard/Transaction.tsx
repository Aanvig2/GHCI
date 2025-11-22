import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Transaction = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Transaction submitted for processing!");
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Make a Transaction</h1>
        <p className="text-muted-foreground">Transfer funds securely to another account</p>
      </div>

      <Card className="shadow-card max-w-2xl">
        <CardHeader>
          <CardTitle>Transaction Details</CardTitle>
          <CardDescription>All transactions are encrypted and verified on blockchain</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fromAccount">From Account *</Label>
              <Input 
                id="fromAccount" 
                placeholder="Select or enter account number" 
                defaultValue="****4242"
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="toAccount">To Account *</Label>
              <Input 
                id="toAccount" 
                placeholder="Enter beneficiary account number" 
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount *</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  $
                </span>
                <Input 
                  id="amount" 
                  type="number" 
                  placeholder="0.00" 
                  className="pl-8"
                  step="0.01"
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="purpose">Purpose / Description *</Label>
              <Textarea 
                id="purpose" 
                placeholder="Enter transaction purpose"
                className="min-h-24"
                required 
              />
            </div>

            <div className="bg-accent/10 border border-accent rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <div className="text-sm text-foreground">
                  <p className="font-medium mb-1">Security Notice</p>
                  <p className="text-muted-foreground">
                    This transaction will be verified by our AI fraud detection system 
                    and recorded on the blockchain ledger for transparency.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Processing Transaction..." : "Submit Transaction"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transaction;