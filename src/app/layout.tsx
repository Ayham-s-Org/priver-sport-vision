import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/components/providers/ReduxProvider";

export const metadata: Metadata = {
  title: "Priver Sport Vision",
  description: "Next.js app with TailwindCSS, Redux, and Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
