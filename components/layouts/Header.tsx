import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
        { label: "Overview", to: "/conditions" },
        { label: "Anxiety", to: "/conditions/anxiety" },
      ],
    },
    {
      label: "Services",
      to: "/services",
      items: [
        { label: "Therapy", to: "/services/therapy" },
        { label: "Medication", to: "/services/medication" },
      ],
    },
    { label: "Blog", to: "/blog", items: [{ label: "Latest", to: "/blog" }] },
    {
      label: "Company",
      to: "/company",
      items: [
        { label: "About", to: "/about" },
        { label: "Careers", to: "/company/careers" },
      ],
    },
    { label: "FAQs", to: "/faqs", items: [{ label: "General", to: "/faqs" }] },
  ];

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
          {navItems.map((nav) => (
            <DropdownMenu key={nav.label}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="px-3">
                  <span className="mr-2">{nav.label}</span>
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start" className="w-48">
                {nav.items.map((item) => (
                  <DropdownMenuItem key={item.to}>
                    <Link href={item.to}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link href="/signin">
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
