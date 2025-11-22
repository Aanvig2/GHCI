import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Lock, Unlock, Plus } from "lucide-react";
import { toast } from "sonner";

const Cards = () => {
  const [cards, setCards] = useState([
    { id: 1, type: "Debit", last4: "4242", status: "active", balance: "$12,453" },
    { id: 2, type: "Credit", last4: "8888", status: "active", limit: "$25,000" }
  ]);

  const handleBlockCard = (id: number) => {
    setCards(cards.map(card => 
      card.id === id ? { ...card, status: "blocked" } : card
    ));
    toast.success("Card blocked successfully");
  };

  const handleUnblockCard = (id: number) => {
    setCards(cards.map(card => 
      card.id === id ? { ...card, status: "active" } : card
    ));
    toast.success("Card unblocked successfully");
  };

  const handleGenerateCard = () => {
    toast.success("New card request submitted. You'll receive it in 5-7 business days.");
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">My Cards</h1>
          <p className="text-muted-foreground">Manage your debit and credit cards</p>
        </div>
        <Button onClick={handleGenerateCard}>
          <Plus className="w-4 h-4 mr-2" />
          Generate New Card
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <Card key={card.id} className={`shadow-card ${card.status === "blocked" ? "opacity-60" : ""}`}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{card.type} Card</CardTitle>
                  <CardDescription>•••• •••• •••• {card.last4}</CardDescription>
                </div>
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gradient-card rounded-lg">
                <span className="text-muted-foreground">
                  {card.type === "Debit" ? "Balance" : "Credit Limit"}
                </span>
                <span className="text-2xl font-bold text-foreground">
                  {card.type === "Debit" ? card.balance : card.limit}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  card.status === "active" 
                    ? "bg-success/20 text-success" 
                    : "bg-destructive/20 text-destructive"
                }`}>
                  {card.status === "active" ? "Active" : "Blocked"}
                </span>
                {card.status === "active" ? (
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleBlockCard(card.id)}
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Block Card
                  </Button>
                ) : (
                  <Button 
                    variant="default" 
                    size="sm"
                    onClick={() => handleUnblockCard(card.id)}
                  >
                    <Unlock className="w-4 h-4 mr-2" />
                    Unblock Card
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;