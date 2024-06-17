import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard page",
  description:
    "Multi Level mock speaking for Prepare with IELTS Speaking Topics and Templates for IELTS Speaking Part 1, 2, & 3",
  keywords: ["mock spaking", "multi-level", "multi-level templates"],
  icons: {
    icon: "/svgs/dashboard-favicon.svg",
  },
};

export default function DashboardLayout({
  children,
  users,
}: {
  children: ReactNode;
  users: ReactNode;
}) {
  return (
    <section className="dashboard">
      {children}
      <div className="max-w-7xl mx-auto px-4">{users}</div>
    </section>
  );
}
