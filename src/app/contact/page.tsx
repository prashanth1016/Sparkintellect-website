import type { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SparkIntellect. Reach our team in Chennai for enterprise AI solutions, software development, and digital transformation inquiries.",
  openGraph: {
    title: "Contact Us | SparkIntellect",
    description: "Contact SparkIntellect for enterprise technology solutions. Phone, email, and business hours listed.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
