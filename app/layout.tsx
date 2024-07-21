import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import AboutUs from "./routing/productlist/page";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ItemsProvider } from "./context/itemsContext";
import { UserProvider } from "./components/userContext/context";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
      <ItemsProvider>
        <Header/>
          {children}
        <Footer/>
        </ItemsProvider>
        </UserProvider>
        </body>
    </html>
  );
}
