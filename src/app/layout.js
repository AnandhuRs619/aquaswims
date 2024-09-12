import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import AOSInitializer from "@/components/AOSInitializer";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* <NavBar/> */}
        <main className="overflow-hidden ">
          <AOSInitializer/>
        {children}
        </main>
        
      <Footer/>
      </body>
    </html>
  );
}
