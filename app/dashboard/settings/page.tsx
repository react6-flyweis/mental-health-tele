"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const settingsTabs = [
  "Profile",
  "Password",
  "Notifications",
  "Payment",
  "Privacy",
] as const;

const timeZoneOptions = [
  "Pacific Time (PT)",
  "Mountain Time (MT)",
  "Central Time (CT)",
  "Eastern Time (ET)",
] as const;

const settingsSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(7, "Phone number is required"),
  dateOfBirth: z.string().optional(),
  address: z.string().min(1, "Address is required"),
  timeZone: z.enum(timeZoneOptions, {
    message: "Please select a time zone",
  }),
});

type SettingsFormValues = z.infer<typeof settingsSchema>;

type TextFieldConfig = {
  key: "email" | "phoneNumber" | "dateOfBirth" | "address";
  label: string;
  placeholder: string;
};

const fullWidthFields: TextFieldConfig[] = [
  { key: "email", label: "Email", placeholder: "sarah.j@email.com" },
  {
    key: "phoneNumber",
    label: "Phone Number",
    placeholder: "+1 (555) 123-4567",
  },
  { key: "dateOfBirth", label: "Date of Birth", placeholder: "" },
  {
    key: "address",
    label: "Address",
    placeholder: "123 Main Street, San Francisco, CA 94102",
  },
];

export default function Page() {
  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah.j@email.com",
      phoneNumber: "+1 (555) 123-4567",
      dateOfBirth: "",
      address: "123 Main Street, San Francisco, CA 94102",
      timeZone: "Pacific Time (PT)",
    },
  });

  function onSubmit(values: SettingsFormValues) {
    console.log("settings updated", values);
  }

  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-medium text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Manage your account preferences and security
        </p>
      </header>

      <Tabs defaultValue="Profile">
        <TabsList className="h-fit! w-full rounded-full bg-muted p-1 mb-5">
          {settingsTabs.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              // disabled={index !== 0}
              className="rounded-full h-8 px-4 py-1 text-sm data-[state=active]:bg-linear-to-t data-[state=active]:from-[#346079] data-[state=active]:to-[#219580] data-[state=active]:text-white data-[state=active]:shadow-none data-[state=inactive]:hover:bg-muted/80"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="Profile">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-base">Profile Information</CardTitle>
            </CardHeader>

            <CardContent>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div className="flex flex-wrap items-center gap-4">
                  <Avatar className="size-16">
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>

                  <div className="space-y-1">
                    <Button
                      type="button"
                      className="bg-gradient-dash text-white"
                    >
                      Upload New Photo
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      JPG, PNG or GIF. Max size 5MB
                    </p>
                  </div>
                </div>

                <FieldGroup className="gap-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Field>
                      <FieldLabel
                        htmlFor="firstName"
                        className="w-auto border-0 p-0"
                      >
                        First Name
                      </FieldLabel>
                      <Input
                        id="firstName"
                        placeholder="Sarah"
                        className="bg-muted"
                        {...form.register("firstName")}
                      />
                      <FieldError errors={[form.formState.errors.firstName]} />
                    </Field>

                    <Field>
                      <FieldLabel
                        htmlFor="lastName"
                        className="w-auto border-0 p-0"
                      >
                        Last Name
                      </FieldLabel>
                      <Input
                        id="lastName"
                        placeholder="Johnson"
                        className="bg-muted"
                        {...form.register("lastName")}
                      />
                      <FieldError errors={[form.formState.errors.lastName]} />
                    </Field>
                  </div>

                  {fullWidthFields.map(function renderField(fieldConfig) {
                    return (
                      <Field key={fieldConfig.key}>
                        <FieldLabel
                          htmlFor={fieldConfig.key}
                          className="w-auto border-0 p-0"
                        >
                          {fieldConfig.label}
                        </FieldLabel>
                        <Input
                          id={fieldConfig.key}
                          placeholder={fieldConfig.placeholder}
                          className="bg-muted"
                          {...form.register(fieldConfig.key)}
                        />
                        <FieldError
                          errors={[form.formState.errors[fieldConfig.key]]}
                        />
                      </Field>
                    );
                  })}

                  <Field>
                    <FieldLabel className="w-auto border-0 p-0">
                      Time Zone
                    </FieldLabel>
                    <Controller
                      name="timeZone"
                      control={form.control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full bg-muted">
                            <SelectValue placeholder="Select time zone" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeZoneOptions.map(
                              function renderTimeZone(option) {
                                return (
                                  <SelectItem key={option} value={option}>
                                    {option}
                                  </SelectItem>
                                );
                              },
                            )}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    <FieldError errors={[form.formState.errors.timeZone]} />
                  </Field>
                </FieldGroup>

                <Button type="submit" className="bg-gradient-dash text-white">
                  Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
