import type { Metadata } from "next";
import { Suspense } from "react";

import SplashScreenProvider from "@/providers/SplashScreenProvider";
import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: "Graphite",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Suspense>
          <SplashScreenProvider>{children}</SplashScreenProvider>
        </Suspense>
      </body>
    </html>
  );
}
