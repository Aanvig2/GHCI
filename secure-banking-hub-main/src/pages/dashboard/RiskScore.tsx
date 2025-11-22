import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle, Activity } from "lucide-react";

const RiskScore = () => {
  const riskScore = 8.5;
  const anomalies = [
    { type: "Unusual Amount", severity: "low", description: "Transaction of $5,000 detected" },
    { type: "Unknown Location", severity: "medium", description: "Login from new IP address" }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">AI Risk Score</h1>
        <p className="text-muted-foreground">Real-time fraud detection and risk analysis</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Overall Risk Score</CardTitle>
            <CardDescription>Lower score indicates safer account activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center py-8">
                <div className="text-6xl font-bold text-success">{riskScore}</div>
                <div className="text-muted-foreground text-lg">/100</div>
                <div className="mt-4">
                  <span className="px-4 py-2 bg-success/20 text-success rounded-full text-sm font-medium">
                    Low Risk
                  </span>
                </div>
              </div>
              <Progress value={riskScore} className="h-3" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Risk Factors</CardTitle>
            <CardDescription>Analysis of your account activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-success" />
                <div>
                  <p className="font-medium text-foreground">Account Age</p>
                  <p className="text-sm text-muted-foreground">Established account (2+ years)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-success" />
                <div>
                  <p className="font-medium text-foreground">Transaction Pattern</p>
                  <p className="text-sm text-muted-foreground">Consistent spending behavior</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                <CheckCircle className="w-5 h-5 text-success" />
                <div>
                  <p className="font-medium text-foreground">Verification Status</p>
                  <p className="text-sm text-muted-foreground">Full KYC verified</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Anomaly Alerts</CardTitle>
          <CardDescription>Recent unusual activities detected</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {anomalies.map((anomaly, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border ${
                  anomaly.severity === "medium" 
                    ? "bg-warning/10 border-warning" 
                    : "bg-accent/10 border-accent"
                }`}
              >
                <div className="flex items-start gap-3">
                  {anomaly.severity === "medium" ? (
                    <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                  ) : (
                    <Activity className="w-5 h-5 text-accent mt-0.5" />
                  )}
                  <div>
                    <p className="font-medium text-foreground">{anomaly.type}</p>
                    <p className="text-sm text-muted-foreground mt-1">{anomaly.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Transaction Summary (Last 30 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 bg-gradient-card rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Total Transactions</p>
              <p className="text-2xl font-bold text-foreground">247</p>
            </div>
            <div className="p-4 bg-gradient-card rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Average Amount</p>
              <p className="text-2xl font-bold text-foreground">$342.50</p>
            </div>
            <div className="p-4 bg-gradient-card rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Flagged Count</p>
              <p className="text-2xl font-bold text-foreground">3</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiskScore;