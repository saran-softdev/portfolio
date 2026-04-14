import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Saran Kumar — Full Stack Web Developer",
  description:
    "Full Stack Developer specializing in React.js, Next.js, Node.js and MongoDB. Based in Chennai, India.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#0d0d0d] text-[#e5e5e5] antialiased">
        {children}
      </body>
    </html>
  );
}
