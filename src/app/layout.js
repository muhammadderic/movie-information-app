import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Information App",
  description: "My movie information app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} sm:p-4`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
