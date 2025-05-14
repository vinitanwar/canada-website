import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Topbar from "./component/Topbar";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { ToastContainer,Bounce } from "react-toastify";
import Providelayout from "./Providelayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Canada Wide Bookkeeping & Taxes",
  description: "Canada Wide Bookkeeping & Taxes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providelayout>
         <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}

        />
        <Topbar />
       
        <Navbar />
        {children}
        <Footer />   
        </Providelayout>    
      </body>
    </html>
  );
}
