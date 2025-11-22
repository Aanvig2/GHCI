import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const LoanApply = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Apply for a Loan</h2>

      <Card className="shadow-md border border-gray-200">
        <CardHeader>
          <CardTitle className="text-xl">Loan Application Form</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">

          {/* Loan Type */}
          <div className="space-y-2">
            <Label>Loan Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Loan Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="home">Home Loan</SelectItem>
                <SelectItem value="personal">Personal Loan</SelectItem>
                <SelectItem value="education">Education Loan</SelectItem>
                <SelectItem value="vehicle">Vehicle Loan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Loan Amount */}
            <div className="space-y-2">
              <Label>Loan Amount</Label>
              <Input type="number" placeholder="₹ Amount Required" />
            </div>

            {/* Annual Income */}
            <div className="space-y-2">
              <Label>Annual Income</Label>
              <Input type="number" placeholder="₹ Annual Income" />
            </div>
          </div>

          {/* Employment Type */}
          <div className="space-y-2">
            <Label>Employment Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Employment Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="salaried">Salaried</SelectItem>
                <SelectItem value="self">Self Employed</SelectItem>
                <SelectItem value="student">Student</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Liabilities */}
          <div className="space-y-2">
            <Label>Existing Liabilities (if any)</Label>
            <Input placeholder="e.g., EMI, Credit Card Dues, Other Loans" />
          </div>

          {/* Tenure */}
          <div className="space-y-2">
            <Label>Tenure (in Months)</Label>
            <Input type="number" placeholder="12, 24, 36, 60…" />
          </div>

          {/* Interest type */}
          <div className="space-y-2">
            <Label>Interest Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Interest Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fixed">Fixed</SelectItem>
                <SelectItem value="floating">Floating</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              Submit Loan Application
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoanApply;
