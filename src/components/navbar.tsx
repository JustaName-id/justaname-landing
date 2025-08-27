"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { siteConfig } from "@/lib/config";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: siteConfig.docs, label: "Docs", external: true },
    { href: siteConfig.playground, label: "Playground", external: true },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-5 py-6 w-full bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/justaname-logo.svg"
            alt="JustaName"
            width={140}
            height={44}
            priority
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "140px",
              maxHeight: "44px",
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-zinc-900 hover:text-zinc-700 transition-colors"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-3">
            <Button variant="outline" size="lg" asChild>
              <Link
                href={siteConfig.getStarted}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </Link>
            </Button>
            <Button size="lg" asChild>
              <Link
                href={siteConfig.bookDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="ml-2">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>

          {/* Mobile Menu Content */}
          <SheetContent side="right" className="w-full sm:w-[400px] p-0">
            <VisuallyHidden>
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription>
                Navigate through JustaName pages and resources
              </SheetDescription>
            </VisuallyHidden>
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="px-6 py-6 border-b border-zinc-200">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/justaname-logo.svg"
                    alt="JustaName"
                    width={120}
                    height={38}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "120px",
                      maxHeight: "38px",
                    }}
                  />
                </Link>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto">
                <div className="px-6 py-6">
                  <div className="space-y-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors"
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="border-t border-zinc-200 px-6 py-6 space-y-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-12 text-base"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link
                    href={siteConfig.getStarted}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="w-full h-12 text-base"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link
                    href={siteConfig.bookDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Demo
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
