import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // You can add any other weights needed
  display: "swap",
});

export const metadata = {
  title: "New Life Dream Foundation",
  description:
    "Transforming lives and restoring hope",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <main>{children}</main>
        <Toaster/>
      </body>
    </html>
  );
}
