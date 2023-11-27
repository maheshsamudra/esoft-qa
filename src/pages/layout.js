import { Nunito_Sans as Font } from "next/font/google";
import "./globals.css";

const font = Font({ subsets: ["latin"] });

export const metadata = {
  title: "ESOFT Q&A",
  description: "Created by @maheshsamudra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
