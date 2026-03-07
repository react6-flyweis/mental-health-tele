"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const patientRegisterSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Include at least one uppercase letter")
      .regex(/[0-9]/, "Include at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    acceptTerms: z.boolean().refine(function validateTerms(value) {
      return value;
    }, "You must accept the terms to continue"),
  })
  .refine(
    function validatePasswords(values) {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    },
  );

type PatientRegisterFormValues = z.infer<typeof patientRegisterSchema>;

export default function PatientRegisterCard() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<PatientRegisterFormValues>({
    resolver: zodResolver(patientRegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  function handleSubmit(values: PatientRegisterFormValues) {
    console.log("patient registered", values);
    router.push("/dashboard");
  }

  return (
    <div className="w-full max-w-[520px] mx-auto">
      <button
        onClick={function handleBackClick() {
          router.back();
        }}
        className="flex items-center gap-2 text-[#4A5565] mb-5"
      >
        <ArrowLeft size={18} />
        Back to login
      </button>

      <div className="bg-white rounded-[16px] p-6 shadow-[0px_3.9px_5.86px_-3.9px_#0000001A,0px_9.76px_14.64px_-2.93px_#0000001A]">
        <h2 className="text-[30px] font-bold text-center text-[#1E2939] mb-2">
          Create Patient Account
        </h2>

        <p className="text-center text-[16px] text-[#4A5565] mb-8">
          Start your care journey in just a few steps.
        </p>

        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
          <FieldGroup className="gap-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="firstName" className="w-auto border-0 p-0">
                  First Name
                </FieldLabel>
                <Input
                  id="firstName"
                  placeholder="John"
                  className="h-12 rounded-[14px]"
                  {...form.register("firstName")}
                />
                <FieldError errors={[form.formState.errors.firstName]} />
              </Field>

              <Field>
                <FieldLabel htmlFor="lastName" className="w-auto border-0 p-0">
                  Last Name
                </FieldLabel>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  className="h-12 rounded-[14px]"
                  {...form.register("lastName")}
                />
                <FieldError errors={[form.formState.errors.lastName]} />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="email" className="w-auto border-0 p-0">
                Email Address
              </FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-12 rounded-[14px]"
                {...form.register("email")}
              />
              <FieldError errors={[form.formState.errors.email]} />
            </Field>

            <Field>
              <FieldLabel htmlFor="password" className="w-auto border-0 p-0">
                Password
              </FieldLabel>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className="h-12 rounded-[14px] pr-11"
                  {...form.register("password")}
                />
                <button
                  type="button"
                  onClick={function togglePasswordVisibility() {
                    setShowPassword(function updateVisibility(previousState) {
                      return !previousState;
                    });
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <FieldError errors={[form.formState.errors.password]} />
            </Field>

            <Field>
              <FieldLabel
                htmlFor="confirmPassword"
                className="w-auto border-0 p-0"
              >
                Confirm Password
              </FieldLabel>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  className="h-12 rounded-[14px] pr-11"
                  {...form.register("confirmPassword")}
                />
                <button
                  type="button"
                  onClick={function toggleConfirmPasswordVisibility() {
                    setShowConfirmPassword(
                      function updateVisibility(previousState) {
                        return !previousState;
                      },
                    );
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
              <FieldError errors={[form.formState.errors.confirmPassword]} />
            </Field>

            <Field>
              <Controller
                name="acceptTerms"
                control={form.control}
                render={function renderAcceptTermsField({ field }) {
                  return (
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="acceptTerms"
                        checked={field.value}
                        onCheckedChange={function handleCheckedChange(checked) {
                          field.onChange(Boolean(checked));
                        }}
                      />
                      <label
                        htmlFor="acceptTerms"
                        className="text-sm text-[#4A5565] leading-relaxed"
                      >
                        I agree to the terms and understand that this
                        registration starts my patient profile setup.
                      </label>
                    </div>
                  );
                }}
              />
              <FieldError errors={[form.formState.errors.acceptTerms]} />
            </Field>
          </FieldGroup>

          <Button
            type="submit"
            className="w-full h-12 rounded-[14px] text-white font-semibold text-base bg-[linear-gradient(256.76deg,#219580_18.35%,#346079_55.12%)] hover:opacity-95"
          >
            Create Account
          </Button>
        </form>

        <p className="text-center mt-6 text-[#4A5565] text-sm">
          Already have an account?{" "}
          <Link href="/patient-login" className="text-[#219580] font-medium">
            Sign in
          </Link>
        </p>
      </div>

      <p className="text-center mt-4 text-sm text-[#6A7282]">
        Your information is secure and encrypted
      </p>
    </div>
  );
}
