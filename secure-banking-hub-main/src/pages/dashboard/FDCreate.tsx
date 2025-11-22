import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const FDCreate = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Create Fixed Deposit</h2>

      <Card className="shadow-md border border-gray-200">
        <CardHeader>
          <CardTitle className="text-xl">FD Account Details</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Account Type Requested */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Account Type Requested</Label>
              <Input placeholder="Savings / Current / NRO / NRE" />
            </div>

            {/* Initial Deposit Amount */}
            <div className="space-y-2">
              <Label>Initial Deposit Amount</Label>
              <Input type="number" placeholder="₹ Amount" />
            </div>
          </div>

          {/* Monthly Income */}
          <div className="space-y-2">
            <Label>Monthly Income</Label>
            <Input type="number" placeholder="₹ Monthly Income" />
          </div>

          {/* Nominee Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Nominee Name</Label>
              <Input placeholder="Full Name" />
            </div>

            <div className="space-y-2">
              <Label>Nominee Relation</Label>
              <Input placeholder="e.g., Father, Mother, Spouse, Brother" />
            </div>
          </div>

          {/* FD Start Date */}
          <div className="space-y-2">
            <Label>FD Start Date</Label>
            <div className="rounded-md border p-3 w-fit">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md shadow-sm"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              Create Fixed Deposit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FDCreate;
