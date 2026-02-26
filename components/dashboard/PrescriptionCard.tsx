import { RefreshCcw, Download, Pill } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PrescriptionItem } from "./types";

const refillBadgeColorMap: Record<string, string> = {
  low: "bg-amber-100 text-amber-700",
  medium: "bg-emerald-100 text-emerald-700",
  none: "bg-slate-100 text-slate-600",
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(-2)
    .map((part) => part[0])
    .join("");
}

function getRefillBadgeClassName(refillsLeft: number) {
  if (refillsLeft <= 0) return refillBadgeColorMap.none;
  if (refillsLeft === 1) return refillBadgeColorMap.low;
  return refillBadgeColorMap.medium;
}

export function PrescriptionCard({ item }: { item: PrescriptionItem }) {
  return (
    <Card className="px-4 py-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
            <Pill className="size-5" />
          </div>

          <div>
            <h2 className="text-base font-medium">
              {item.medication} {item.dosage}
            </h2>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {item.schedule}
            </p>

            <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Avatar size="sm" className="size-5">
                <AvatarFallback className="text-[10px]">
                  {getInitials(item.provider)}
                </AvatarFallback>
              </Avatar>
              <span>Prescribed by {item.provider}</span>
            </div>
          </div>
        </div>

        <Badge
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-normal",
            getRefillBadgeClassName(item.refillsLeft),
          )}
        >
          {item.refillsLeft > 0
            ? `${item.refillsLeft} refills left`
            : "No refills left"}
        </Badge>
      </div>

      <div className="mt-4 rounded-md bg-muted p-3">
        <p className="text-xs font-medium">Instructions:</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {item.instructions}
        </p>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-xs text-muted-foreground">Prescribed Date</p>
          <p className="mt-1 text-sm">{item.prescribedDate}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Next Refill Available</p>
          <p className="mt-1 text-sm">{item.nextRefillDate}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Button className="bg-gradient-dash text-white hover:opacity-90">
          <RefreshCcw className="mr-1.5 size-3.5" />
          Request Refill
        </Button>
        <Button variant="outline">
          <Download className="mr-1.5 size-3.5" />
          Download
        </Button>
      </div>
    </Card>
  );
}
