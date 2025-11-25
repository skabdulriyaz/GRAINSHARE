import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GrainShare – Reduce Food Waste",
  description: "Coordinate food donations and improve food security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <div className="min-h-screen flex flex-col">
          <header className="w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
              <a href="/" className="font-bold text-xl tracking-wider text-white hover:text-cyan-400 transition">
                GRAINSHARE
              </a>
              <nav>
                <ul className="flex gap-8 items-center text-sm font-medium">
                  <li>
                    <a href="/home" className="hover:text-cyan-400 transition">
                      HOME
                    </a>
                  </li>
                  <li>
                    <a href="/how-it-works" className="hover:text-cyan-400 transition">
                      HOW IT WORKS
                    </a>
                  </li>
                  <li>
                    <a href="/dashboard" className="hover:text-cyan-400 transition">
                      DASHBOARD
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-cyan-400 transition">
                      ABOUT
                    </a>
                  </li>
                  <li>
                    <a href="/donate-food" className="hover:text-cyan-400 transition">
                      DONATE
                    </a>
                  </li>
                  <li>
                    <a href="/request-food" className="hover:text-cyan-400 transition">
                      REQUEST
                    </a>
                  </li>
                  <li>
                    <a href="/auth" className="border border-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-black transition">
                      LOGIN
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
