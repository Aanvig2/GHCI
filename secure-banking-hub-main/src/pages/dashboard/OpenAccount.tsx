import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const OpenAccount = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account application submitted successfully!");
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Open New Account</h1>
        <p className="text-muted-foreground">Complete the KYC process to open your account</p>
      </div>

      <Card className="shadow-card max-w-3xl">
        <CardHeader>
          <CardTitle>Account Application Form</CardTitle>
          <CardDescription>Please provide accurate information for verification</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" placeholder="+1 234 567 8900" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="aadhar">Aadhar Number *</Label>
                <Input id="aadhar" placeholder="1234 5678 9012" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pan">PAN Number *</Label>
                <Input id="pan" placeholder="ABCDE1234F" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Residential Address *</Label>
              <Textarea 
                id="address" 
                placeholder="Enter your complete address"
                className="min-h-24"
                required 
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input id="city" placeholder="City" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input id="state" placeholder="State" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pincode">PIN Code *</Label>
                <Input id="pincode" placeholder="123456" required />
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Processing..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OpenAccount;