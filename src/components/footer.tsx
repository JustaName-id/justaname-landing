"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Github, Linkedin, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useState } from "react";
import { getAnalyticsClient } from "../../analytics";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address");
      setIsError(true);
      return;
    }

    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email address");
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Successfully subscribed to our newsletter!");
        setIsError(false);
        setEmail("");
      } else {
        setMessage("Failed to subscribe. Please try again.");
        setIsError(true);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-slate-50 px-5 lg:px-10 py-10 lg:py-20 w-full">
      <div className="max-w-8xl mx-auto flex flex-col gap-10">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left side - Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-5">
            {/* Column 1 */}
            <div className="flex flex-col gap-5">
              <Link
                href={siteConfig.home}
                className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors"
                onClick={() => getAnalyticsClient().track("LOGO_CLICKED", {})}
              >
                Home
              </Link>
              <Link
                href={siteConfig.docs}
                className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors"
                onClick={() => getAnalyticsClient().track("DOCS_CLICKED", {})}
              >
                Documentation
              </Link>
              <Link
                href={siteConfig.explorer}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors"
                onClick={() => getAnalyticsClient().track("APP_CLICKED", {})}
              >
                Explorer
              </Link>
              <Link
                href={siteConfig.dashboard}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors"
                onClick={() => getAnalyticsClient().track("ADMIN_CLICKED", {})}
              >
                Dashboard
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-5">
              <Link
                href={siteConfig.playground}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors"
                onClick={() => getAnalyticsClient().track("DEMO_CLICKED", {})}
              >
                Playground
              </Link>
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors"
                onClick={() => getAnalyticsClient().track("GITHUB_CLICKED", {})}
              >
                Github
              </Link>
              <Link
                href={siteConfig.contact}
                className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors"
                onClick={() => getAnalyticsClient().track("CONTACT_US_CLICKED", {})}
              >
                Contact Us
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-5">
              <Link
                href={siteConfig.xmtpAgents}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors"
                onClick={() => getAnalyticsClient().track("AI_AGENT_CLICKED", {})}
              >
                XMTP Agents
              </Link>
              <Link
                href={siteConfig.ensvolution}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors"
                onClick={() => getAnalyticsClient().track("ENSVOLUTION_CLICKED", {})}
              >
                ENSvolution
              </Link>
              <Link
                href={siteConfig.letstalk}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors"
                onClick={() => getAnalyticsClient().track("LETS_TALK_CLICKED", {})}
              >
                Letstalk
              </Link>
            </div>
          </div>

          {/* Right side - Newsletter */}
          <div className="flex flex-col gap-5 items-start lg:items-end">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg lg:text-[40px] font-light leading-tight lg:leading-10 text-slate-900 text-left lg:text-right">
                Stay Up to Date
              </h3>
              <p className="text-lg lg:text-[40px] font-light leading-tight lg:leading-10 text-slate-900 text-left lg:text-right">
                with our newsletter
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full lg:w-[377px]">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  className="bg-zinc-900 hover:bg-zinc-800 text-white cursor-pointer"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </div>
              {message && (
                <p className={`text-sm mt-2 ${isError ? 'text-red-600' : 'text-green-600'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-2.5 py-5 border-t border-zinc-200">
          {/* Social Icons */}
          <div className="flex gap-5 items-center">
            <Link
              href={siteConfig.twitter}
              target="_blank"
              className="text-zinc-900 hover:text-zinc-600 transition-colors"
              onClick={() => getAnalyticsClient().track("TWITTER_CLICKED", {})}
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href={siteConfig.github}
              target="_blank"
              className="text-zinc-900 hover:text-zinc-600 transition-colors"
              onClick={() => getAnalyticsClient().track("GITHUB_CLICKED", {})}
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              className="text-zinc-900 hover:text-zinc-600 transition-colors"
              onClick={() => getAnalyticsClient().track("LINKEDIN_CLICKED", {})}
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-black">Built by the Team at JustaLab</p>
          <p className="text-xs font-bold text-black">
            JustaName, Copyright, 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
