"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Globe, ShieldIcon } from "lucide-react";

export const privacySchema = z.object({
  shareDataForResearch: z.boolean(),
  marketingCommunications: z.boolean(),
});

export type PrivacyFormValues = z.infer<typeof privacySchema>;

interface PrivacySettingsFormProps {
  defaultValues?: Partial<PrivacyFormValues>;
  onSubmit?: (values: PrivacyFormValues) => void;
}

export function PrivacySettingsForm({
  defaultValues,
  onSubmit,
}: PrivacySettingsFormProps) {
  const form = useForm<PrivacyFormValues>({
    resolver: zodResolver(privacySchema),
    defaultValues: {
      shareDataForResearch: false,
      marketingCommunications: true,
      ...defaultValues,
    },
  });

  function handleSubmit(values: PrivacyFormValues) {
    console.log("privacy preferences saved", values);
    onSubmit?.(values);
  }

  function handleDownloadData() {
    // placeholder: real implementation would trigger API download
    console.log("download data");
  }

  function handleViewPrivacyPolicy() {
    // placeholder: navigate to privacy policy page
    console.log("view privacy policy");
  }

  function handleDeleteAccount() {
    // placeholder: show confirmation modal before deletion
    console.log("delete account");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Privacy &amp; Security</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-6">
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-2"
          >
            <Controller
              name="shareDataForResearch"
              control={form.control}
              render={({ field }) => (
                <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                  <div>
                    <p className="font-medium">Share data for research</p>
                    <p className="text-sm text-muted-foreground">
                      Help improve mental health care (anonymized data only)
                    </p>
                  </div>
                  <Switch
                    id="share-data-for-research"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </div>
              )}
            />

            <Controller
              name="marketingCommunications"
              control={form.control}
              render={({ field }) => (
                <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                  <div>
                    <p className="font-medium">Marketing Communications</p>
                    <p className="text-sm text-muted-foreground">
                      Receive updates about new features and services
                    </p>
                  </div>
                  <Switch
                    id="marketing-communications"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </div>
              )}
            />

            {/* <Button type="submit" size="lg" className="bg-gradient-dash">
                Save Preferences
              </Button> */}
          </form>
        </div>

        <div className="space-y-2">
          <h3 className="text-base">Account Actions</h3>
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={handleDownloadData}
            >
              <ShieldIcon />
              Download My Data
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={handleViewPrivacyPolicy}
            >
              <Globe />
              View Privacy Policy
            </Button>
          </div>
        </div>

        <div className="pt-4 border-t border-muted"></div>

        <div className="space-y-2">
          <h3 className="text-base text-destructive">Danger Zone</h3>
          <div>
            <p className="text-sm ">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
            <Button
              variant="outline"
              className="border-destructive text-destructive mt-1"
              onClick={handleDeleteAccount}
            >
              Delete Account
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
