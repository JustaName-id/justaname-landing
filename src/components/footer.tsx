import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-slate-50 px-5 lg:px-10 py-10 lg:py-20 w-full">
      <div className="max-w-8xl mx-auto flex flex-col gap-10">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left side - Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-5">
            {/* Column 1 */}
            <div className="flex flex-col gap-5">
              <Link href={siteConfig.home} className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors">
                Home
              </Link>
              <Link href={siteConfig.docs} className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors">
                Documentation
              </Link>
              <Link href={siteConfig.explorer} target="_blank" rel="noopener noreferrer" className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors">
                Explorer
              </Link>
              <Link href={siteConfig.dashboard} target="_blank" rel="noopener noreferrer" className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors">
                Dashboard
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-5">
              <Link href={siteConfig.playground} target="_blank" rel="noopener noreferrer" className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors">
                Playground
              </Link>
              <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors">
                Github
              </Link>
              <Link href={siteConfig.contact} className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-5">
              <Link href={siteConfig.xmtpAgents} target="_blank" rel="noopener noreferrer" className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors">
                XMTP Agents
              </Link>
              <Link href={siteConfig.ensvolution} target="_blank" rel="noopener noreferrer" className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors">
                ENSvolution
              </Link>
              <Link href={siteConfig.letstalk} target="_blank" rel="noopener noreferrer" className="text-base lg:text-lg text-zinc-900 hover:text-zinc-600 transition-colors">
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
            
            <div className="flex gap-2 w-full lg:w-[377px]">
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1"
              />
              <Button className="bg-zinc-900 hover:bg-zinc-800 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-2.5 py-5 border-t border-zinc-200">
          {/* Social Icons */}
          <div className="flex gap-5 items-center">
            <Link href={siteConfig.twitter} target="_blank" className="text-zinc-900 hover:text-zinc-600 transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href={siteConfig.github} target="_blank" className="text-zinc-900 hover:text-zinc-600 transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href={siteConfig.linkedin} target="_blank" className="text-zinc-900 hover:text-zinc-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-black">
            Built by the Team at justalab
          </p>
          <p className="text-xs font-bold text-black">
            JustaName, Copyright, 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}