import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import AOSInitializer from "@/components/AOSInitializer";
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AquaSwims",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} scrollbar-hide antialiased`}
        >
          <ToastContainer />
          <NavBar/>
        <main className=" bg-center scrollbar-hide overflow-auto" >
          <AOSInitializer/>
        {children}
        </main>
        
      <Footer/>
      </body>
    </html>
  );
}
