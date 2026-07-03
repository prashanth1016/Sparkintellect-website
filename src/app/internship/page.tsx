import type { Metadata } from "next";
import { InternshipClient } from "./internship-client";

export const metadata: Metadata = {
  title: "Internship Program",
  description:
    "Join SparkIntellect's internship program. Gain hands-on experience in AI, web development, full stack, cloud, and more with expert mentorship and live projects.",
  openGraph: {
    title: "Internship Program | SparkIntellect",
    description:
      "Launch your career with SparkIntellect. Hands-on learning, expert mentorship, and live project experience.",
  },
};

export default function InternshipPage() {
  return <InternshipClient />;
}
