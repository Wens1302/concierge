import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Concierge ERP",
  description: "Base Phase 1 du ERP de conciergerie immobilière",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
        {children}
      </body>
    </html>
  );
}
