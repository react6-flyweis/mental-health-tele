"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/medical-health-tele-logo.png";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import userIcon from "@/assets/icons/user-icon.svg";

export function Header() {
  const navItems = [
    {
      label: "Conditions",
      to: "/conditions",
      items: [
        { label: "ADHD", to: "/conditions/adhd" },
        { label: "Anxiety", to: "/conditions/anxiety" },
        { label: "Depression", to: "/conditions/depression" },
        { label: "Insomnia", to: "/conditions/insomnia" },
        { label: "OCD", to: "/conditions/ocd" },
      ],
    },
    {
      label: "Services",
      to: "/services",
      items: [
        { label: "Medication Refill", to: "/services/medication-refill" },
        {
          label: "Treatments Management",
          to: "/services/treatments-management",
        },
        { label: "Work Excuse Letter", to: "/services/work-excuse-letter" },
      ],
    },
    { label: "Blog", to: "/blog", items: [{ label: "Latest", to: "/blog" }] },
    {
      label: "Company",
      to: "/about",
      items: [
        { label: "About Us", to: "/about" },
        { label: "Careers", to: "/careers" },
        { label: "Contact Us", to: "/contact" },
        { label: "Providers", to: "/providers" },
        { label: "Reviews", to: "/reviews" },
      ],
    },
    { label: "FAQs", to: "/faqs", items: [{ label: "General", to: "/faqs" }] },
  ];

  const pathname = usePathname();
  return (
    <header>
      <div className="container mx-auto flex items-center gap-6 px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Mental Health Tele logo"
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-4">
          {navItems.map((nav) => {
            const navActive = pathname?.startsWith(nav.to);

            return (
              <DropdownMenu key={nav.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn("px-3", navActive && "")}
                  >
                    <span className="mr-2">{nav.label}</span>
                    <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start" className="w-48">
                  {nav.items.map((item) => {
                    const itemActive = pathname?.startsWith(item.to);

                    return (
                      <Link
                        key={item.to}
                        className={cn(itemActive && "text-primary")}
                        href={item.to}
                      >
                        <DropdownMenuItem>{item.label}</DropdownMenuItem>
                      </Link>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link href="/dashboard">
            <Button className="bg-accent ">
              <Image src={userIcon} alt="User Icon" className="size-4" />

              <span className="bg-clip-text text-transparent bg-gradient-primary">
                Sign In
              </span>
            </Button>
          </Link>

          <Link href="/">
            <Button className="bg-gradient-primary">
              Get Started
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
      <Separator />
    </header>
  );
}
