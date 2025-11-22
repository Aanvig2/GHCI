import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// IMPORT ORIGINAL PAGES
import History from "./History";
import Ledger from "./Ledger";

export default function HistoryLedger() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Transactions & Ledger</h1>
      <p className="text-muted-foreground">View all financial activity in one place</p>

      <Tabs defaultValue="history" className="w-full">
        <TabsList className="bg-white shadow-sm border mb-4">
          <TabsTrigger 
            value="history"
            className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
          >
            Transaction History
          </TabsTrigger>

          <TabsTrigger 
            value="ledger"
            className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
          >
            Blockchain Ledger
          </TabsTrigger>
        </TabsList>

        {/* ⭐ ORIGINAL Transaction History UI */}
        <TabsContent value="history">
          <History />
        </TabsContent>

        {/* ⭐ ORIGINAL Blockchain Ledger UI */}
        <TabsContent value="ledger">
          <Ledger />
        </TabsContent>

      </Tabs>
    </div>
  );
}
