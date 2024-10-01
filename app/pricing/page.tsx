import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Princing page",
  description: "Pricing of AC",
  keywords: ["Pricing"],
};

export default function PricingPage() {
  return (
    <div>
      <h2 className="text-4xl">Pricing</h2>
    </div>
  );
}
