import { Geist, Geist_Mono } from "next/font/google";
import ".././globals.css";

import { ClerkProvider, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import Loader from "@/components/Loader";
import Leftsidebar from "@/components/Leftsidebar";
import Rightsidebar from "@/components/Rightsidebar";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkLoading>
            <Loader/>
          </ClerkLoading>
        <ClerkLoaded>
        <div className="flex justify-between max-w-6xl mx-auto">
          <div className="hidden sm:inline sticky border-r pr-2 top-0 h-screen">
            <Leftsidebar/>
          </div>
          <div className="w-2xl flex-1">
          {children}
          </div>
            <Rightsidebar/>
          <div className="lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]">
            
          </div>
        </div>
        </ClerkLoaded>
      </body>
    </html>
    </ClerkProvider>
  );
}
