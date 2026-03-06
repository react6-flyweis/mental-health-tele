"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// PHQ-9 questions
const PHQ_QUESTIONS = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself or that you are a failure or have let yourself or your family down",
  "Trouble concentrating on things, such as reading the newspaper or watching television",
  "Moving or speaking so slowly that other people could have noticed? Or the opposite being so fidgety or restless that you have been moving around a lot more than usual",
  "Thoughts that you would be better off dead or of hurting yourself in some way",
];

const intakeFormSchema = z.object({
  // basic info
  firstName: z.string().min(1),
  middleInitial: z.string().optional(),
  lastName: z.string().min(1),
  sex: z.string().min(1),
  dob: z.string().min(1),
  primaryPhone: z.string().optional(),
  mobilePhone: z.string().optional(),
  workPhone: z.string().optional(),
  email: z.string().email().optional(),
  address1: z.string().optional(),
  address2: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  maritalStatus: z.string().optional(),
  drivingLicense: z.string().optional(),

  // emergency contact
  emergency: z.object({
    relationship: z.string().optional(),
    firstName: z.string().optional(),
    middleName: z.string().optional(),
    lastName: z.string().optional(),
    primaryPhone: z.string().optional(),
    mobilePhone: z.string().optional(),
    workPhone: z.string().optional(),
    email: z.string().optional(),
    address1: z.string().optional(),
    address2: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
  }),

  // medical questions
  medicalHistory: z.array(z.string()).optional(),
  currentMedications: z.array(z.string()).optional(),
  medicationAllergies: z.array(z.string()).optional(),
  preferredPharmacies: z.array(z.string()).optional(),
  pharmacyName: z.string().optional(),
  pharmacyAddress: z.string().optional(),
  heardFrom: z.string().optional(),

  // phq
  phq: z.record(z.number()).optional(),
  difficulty: z.string().optional(),
});

type IntakeFormValues = z.infer<typeof intakeFormSchema>;

export default function MedicalIntakePage() {
  const router = useRouter();
  const form = useForm<IntakeFormValues>({
    resolver: zodResolver(intakeFormSchema),
    defaultValues: {
      sex: "",
      phq: {},
    },
  });

  // dynamic lists
  const [newMedicalHistory, setNewMedicalHistory] = useState("");
  const [newMed, setNewMed] = useState("");
  const [newAllergy, setNewAllergy] = useState("");
  const [newPharmacy, setNewPharmacy] = useState("");

  function addToArray(
    field:
      | "medicalHistory"
      | "currentMedications"
      | "medicationAllergies"
      | "preferredPharmacies",
    value: string,
  ) {
    if (!value) return;
    const current = form.getValues(field) || [];
    form.setValue(field, [...current, value]);
  }

  function onSubmit(data: IntakeFormValues) {
    console.log("intake form data", data);
    // navigate to success confirmation screen
    router.push("/appointment/medical-intake/success");
  }

  return (
    <div className="relative max-w-6xl mx-auto p-5 pt-16 py-8 space-y-4 bg-[#E6E8EE]">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute h-10 w-10 top-3 rounded-full bg-[#eef7f6] text-primary hover:bg-[#e0f0ef]"
        onClick={() => router.back()}
        aria-label="Go back"
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* basic information */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium text-primary">
              Basic Information
            </h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input {...form.register("firstName")} />
              </div>
              <div className="space-y-2">
                <Label>Middle Initial</Label>
                <Input {...form.register("middleInitial")} />
              </div>
              <div className="space-y-2">
                <Label>Last Name</Label>
                <Input {...form.register("lastName")} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Sex</Label>
                <Select onValueChange={(v) => form.setValue("sex", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>DOB</Label>
                <Input type="date" {...form.register("dob")} />
              </div>
              <div className="space-y-2">
                <Label>Marital Status</Label>
                <Input {...form.register("maritalStatus")} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Primary Phone Number</Label>
                <Input {...form.register("primaryPhone")} />
              </div>
              <div className="space-y-2">
                <Label>Mobile Number</Label>
                <Input {...form.register("mobilePhone")} />
              </div>
              <div className="space-y-2">
                <Label>Work Phone Number</Label>
                <Input {...form.register("workPhone")} />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" {...form.register("email")} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Address</Label>
                <Input {...form.register("address1")} />
              </div>
              <div className="space-y-2">
                <Label>Address 2</Label>
                <Input {...form.register("address2")} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>City</Label>
                <Input {...form.register("city")} />
              </div>
              <div className="space-y-2">
                <Label>State</Label>
                <Input {...form.register("state")} />
              </div>
              <div className="space-y-2">
                <Label>Zip</Label>
                <Input {...form.register("zip")} />
              </div>
            </div>

            <div className="space-y-2">
              <Label>State Driving License / State Id</Label>
              <div className="flex gap-4 items-center">
                <Input
                  className="flex-1"
                  {...form.register("drivingLicense")}
                />
                <Button variant="outline" size="sm">
                  Upload Here
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* emergency contact */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium text-primary">
              Emergency Contact
            </h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Relationship To Contact</Label>
                <Input {...form.register("emergency.relationship")} />
              </div>
              <div className="space-y-2">
                <Label>First Name</Label>
                <Input {...form.register("emergency.firstName")} />
              </div>
              <div className="space-y-2">
                <Label>Middle Name</Label>
                <Input {...form.register("emergency.middleName")} />
              </div>
              <div className="space-y-2">
                <Label>Last Name</Label>
                <Input {...form.register("emergency.lastName")} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Primary Phone Number</Label>
                <Input {...form.register("emergency.primaryPhone")} />
              </div>
              <div className="space-y-2">
                <Label>Mobile Number</Label>
                <Input {...form.register("emergency.mobilePhone")} />
              </div>
              <div className="space-y-2">
                <Label>Work Phone Number</Label>
                <Input {...form.register("emergency.workPhone")} />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" {...form.register("emergency.email")} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Address Line 1</Label>
                <Input {...form.register("emergency.address1")} />
              </div>
              <div className="space-y-2">
                <Label>Address Line 2</Label>
                <Input {...form.register("emergency.address2")} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>City</Label>
                <Input {...form.register("emergency.city")} />
              </div>
              <div className="space-y-2">
                <Label>State</Label>
                <Input {...form.register("emergency.state")} />
              </div>
              <div className="space-y-2">
                <Label>Zip</Label>
                <Input {...form.register("emergency.zip")} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* medical questions */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium text-primary">
              Medical Question
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* dynamic fields */}
              <div>
                <Label>List Your Past Medical History</Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    value={newMedicalHistory}
                    onChange={(e) => setNewMedicalHistory(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    size="sm"
                    onClick={() => {
                      addToArray("medicalHistory", newMedicalHistory);
                      setNewMedicalHistory("");
                    }}
                  >
                    Add
                  </Button>
                </div>
                <div className="mt-2 space-y-1 text-sm text-slate-600">
                  {(form.getValues("medicalHistory") || []).map((item, i) => (
                    <div key={i}>{item}</div>
                  ))}
                </div>
              </div>

              <div>
                <Label>Current Medications</Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    value={newMed}
                    onChange={(e) => setNewMed(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    size="sm"
                    onClick={() => {
                      addToArray("currentMedications", newMed);
                      setNewMed("");
                    }}
                  >
                    Add
                  </Button>
                </div>
                <div className="mt-2 space-y-1 text-sm text-slate-600">
                  {(form.getValues("currentMedications") || []).map(
                    (item, i) => (
                      <div key={i}>{item}</div>
                    ),
                  )}
                </div>
              </div>

              <div>
                <Label>Medications Allergy</Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    value={newAllergy}
                    onChange={(e) => setNewAllergy(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    size="sm"
                    onClick={() => {
                      addToArray("medicationAllergies", newAllergy);
                      setNewAllergy("");
                    }}
                  >
                    Add
                  </Button>
                </div>
                <div className="mt-2 space-y-1 text-sm text-slate-600">
                  {(form.getValues("medicationAllergies") || []).map(
                    (item, i) => (
                      <div key={i}>{item}</div>
                    ),
                  )}
                </div>
              </div>

              <div>
                <Label>Your Preferred Pharmacies</Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    value={newPharmacy}
                    onChange={(e) => setNewPharmacy(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    size="sm"
                    onClick={() => {
                      addToArray("preferredPharmacies", newPharmacy);
                      setNewPharmacy("");
                    }}
                  >
                    Add
                  </Button>
                </div>
                <div className="mt-2 space-y-1 text-sm text-slate-600">
                  {(form.getValues("preferredPharmacies") || []).map(
                    (item, i) => (
                      <div key={i}>{item}</div>
                    ),
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Pharmacy Name</Label>
                  <Input {...form.register("pharmacyName")} />
                </div>
                <div className="space-y-2">
                  <Label>Pharmacy Address</Label>
                  <Input {...form.register("pharmacyAddress")} />
                </div>
              </div>

              <div className="space-y-2">
                <Label>How Did You Hear About Us?</Label>
                <Input {...form.register("heardFrom")} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PHQ-9 */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium text-primary">
              Patient Health Questionnaire-9
            </h2>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full table-fixed text-sm border border-slate-200">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-2" colSpan={3}>
                      Over the last 2 weeks, how often have you been bothered by
                      any of the following problems? (Use &quot;√&quot; to
                      indicate your answer)
                    </th>
                    {[
                      "Not At All",
                      "Several Days",
                      "More Than Half The Days",
                      "Nearly Every Day",
                    ].map((h) => (
                      <th key={h} className="p-2 text-center">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PHQ_QUESTIONS.map((q, index) => {
                    const key = `phq.${index + 1}` as const;
                    return (
                      <tr
                        key={index}
                        className="border-t border-slate-200 py-2"
                      >
                        <td className="p-2 py-3 text-sm" colSpan={3}>
                          {index + 1}. {q}
                        </td>
                        {[0, 1, 2, 3].map((val) => (
                          <td key={val} className="p-2 py-3 text-center">
                            <Controller
                              control={form.control}
                              name={key}
                              render={({ field }) => (
                                <input
                                  type="radio"
                                  value={val}
                                  checked={Number(field.value) === val}
                                  onChange={() => field.onChange(val)}
                                />
                              )}
                            />
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="border-t border-slate-200">
              <div className="p-2">
                If you checked off any problems, how difficult have these
                problems made it for you to do your work, take care of things at
                home, or get along with other people?
                <div className="mt-2 flex flex-wrap gap-4">
                  {[
                    "Not Difficult At All",
                    "Somewhat Difficult",
                    "Very Difficult",
                    "Extremely Difficult",
                  ].map((opt) => (
                    <div key={opt} className="flex items-center gap-2">
                      <Controller
                        control={form.control}
                        name="difficulty"
                        render={({ field }) => (
                          <div className="flex flex-col items-center bg-[#F4F9F8B2] rounded p-4 gap-1">
                            <span className="text-sm">{opt}</span>
                            <input
                              type="radio"
                              value={opt}
                              checked={field.value === opt}
                              onChange={() => field.onChange(opt)}
                            />
                          </div>
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                size="lg"
                className="bg-gradient-dash h-10 px-8"
                type="submit"
              >
                Submit Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
