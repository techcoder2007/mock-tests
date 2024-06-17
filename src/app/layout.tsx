import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import WithMainLayout from "@/components/layout-components/withMainLayout";
import { ReduxProvider } from "@/providers/redux-provider";

const popinsFont = Poppins({
  variable: "--popins",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Multi Level",
  description:
    "Multi Level mock speaking for Prepare with IELTS Speaking Topics and Templates for IELTS Speaking Part 1, 2, & 3",
  keywords: [
    "mock spaking",
    "multi-level",
    "multi-level templates",
    "mock-tests",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased font-bold",
          popinsFont.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <WithMainLayout>
            <ReduxProvider>{children}</ReduxProvider>
          </WithMainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
