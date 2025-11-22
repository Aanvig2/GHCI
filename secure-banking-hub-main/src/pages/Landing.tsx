import { Button } from "@/components/ui/button";
import { Shield, Lock, TrendingUp, Blocks } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your data is protected with enterprise-level encryption and security protocols"
    },
    {
      icon: Lock,
      title: "Blockchain Verified",
      description: "Every transaction is recorded on an immutable blockchain ledger"
    },
    {
      icon: TrendingUp,
      title: "AI Risk Analysis",
      description: "Advanced AI monitors transactions for fraud and suspicious activity in real-time"
    },
    {
      icon: Blocks,
      title: "Consent Management",
      description: "Full control over your data sharing with complete transparency"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Banking Reimagined with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Blockchain & AI
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of secure banking with AI-powered fraud detection,
              blockchain transparency, and complete control over your finances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg"
                onClick={() => navigate("/auth")}
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg"
                onClick={() => navigate("/auth")}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Built for Security & Transparency
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 border border-border"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-primary rounded-2xl p-12 text-center shadow-elegant">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Banking?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust our platform for secure, transparent banking.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg"
              onClick={() => navigate("/auth")}
            >
              Open Your Account Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;