import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact page",
  description: "Contact of AC",
  keywords: ["Contact"],
};

export default function ContactPage() {
  return (
    <div>
      <h2 className="text-4xl">Contact</h2>
    </div>
  );
}
