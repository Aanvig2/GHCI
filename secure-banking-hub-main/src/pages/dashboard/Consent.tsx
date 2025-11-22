import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const Consent = () => {
  const [consents, setConsents] = useState([
    {
      id: 1,
      bank: "ABC Bank",
      purpose: "Account aggregation",
      status: "active",
      grantedDate: "2024-01-01",
      expiryDate: "2025-01-01",
      enabled: true
    },
    {
      id: 2,
      bank: "XYZ Financial Services",
      purpose: "Loan application verification",
      status: "active",
      grantedDate: "2024-01-10",
      expiryDate: "2024-07-10",
      enabled: true
    },
    {
      id: 3,
      bank: "Credit Bureau Inc",
      purpose: "Credit score assessment",
      status: "expired",
      grantedDate: "2023-06-01",
      expiryDate: "2024-06-01",
      enabled: false
    }
  ]);

  const handleToggleConsent = (id: number) => {
    setConsents(consents.map(consent => {
      if (consent.id === id) {
        const newEnabled = !consent.enabled;
        toast.success(newEnabled ? "Consent granted" : "Consent revoked");
        return { ...consent, enabled: newEnabled, status: newEnabled ? "active" : "revoked" };
      }
      return consent;
    }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Consent Management</h1>
        <p className="text-muted-foreground">Manage data sharing permissions with third parties</p>
      </div>

      <div className="space-y-4">
        {consents.map((consent) => (
          <Card key={consent.id} className="shadow-card">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{consent.bank}</CardTitle>
                  <CardDescription>{consent.purpose}</CardDescription>
                </div>
                <Badge 
                  variant={
                    consent.status === "active" ? "default" :
                    consent.status === "expired" ? "secondary" : "destructive"
                  }
                >
                  {consent.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Granted Date:</span>
                    <span className="ml-2 text-foreground font-medium">{consent.grantedDate}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Expiry Date:</span>
                    <span className="ml-2 text-foreground font-medium">{consent.expiryDate}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-medium text-foreground">
                      {consent.enabled ? "Active" : "Revoked"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {consent.enabled 
                        ? "This organization can access your data" 
                        : "This organization cannot access your data"
                      }
                    </p>
                  </div>
                  <Switch
                    checked={consent.enabled}
                    onCheckedChange={() => handleToggleConsent(consent.id)}
                    disabled={consent.status === "expired"}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-card bg-accent/10 border-accent">
        <CardHeader>
          <CardTitle>About Consent Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            You have full control over who can access your financial data. You can grant or revoke 
            consent at any time. All consent activities are logged and can be audited for security purposes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Consent;