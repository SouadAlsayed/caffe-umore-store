import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / Caffè Umore Store",
    default: "Caffè Umore Store",
  },
  description:
    "Discover premium coffee made from the finest beans and roasted to perfection. Shop your favorite flavors with a clean, effortless shopping experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-coffee-50 text-coffee-900 min-h-screen overflow-x-hidden`}
      >
        <Header />

        <div className="max-w-7xl w-full mx-auto">
          <main className="w-[90%] max-w-7xl mx-auto">{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
