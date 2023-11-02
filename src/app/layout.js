import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/(shared)/Navbar/Navbar";
import Footar from "@/Components/(shared)/Footar/Footar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DCSC",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="Pagecss">
          <Navbar></Navbar>
          {children}
          <Footar></Footar>
        </div>
      </body>
    </html>
  );
}
