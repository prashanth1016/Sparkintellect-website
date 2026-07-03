"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-white/95 p-3 shadow-premium-lg backdrop-blur-xl md:hidden">
      <div className="flex gap-2">
        <Button variant="secondary" className="flex-1" asChild>
          <Link href="/#services">Services</Link>
        </Button>
        <Button className="flex-1" asChild>
          <Link href="/contact">
            <Phone className="h-4 w-4" />
            Contact
          </Link>
        </Button>
      </div>
    </div>
  );
}
