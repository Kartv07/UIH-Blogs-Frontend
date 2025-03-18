import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar_Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable : '--font-poppins',
  subsets: ['latin'],
  weight : ['400']
})

export const metadata = {
  title: "Until Its Happen",
  description: "One Stop Solution for all your DSA, System Design, and Software Development needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${poppins.variable} ${geistMono.variable} antialiased flex text-white bg-black`}
      >
        <div className="h-full z-[10] fixed left-0 top-0 border-r-2 border-[#1d1e24]">
          <Sidebar />
        </div>

        <div className="flex-grow h-full overflow-y-auto md:ml-64 mt-14 md:mt-0">
          {children}
        </div>
      </body>
    </html>
  );
}
