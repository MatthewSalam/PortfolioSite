import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToasterProvider from "../components/ToasterProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Matthew Salam - Developer",
  description: "Matthew Salam's personal portfolio website showcasing his skills, projects, and experience as a developer.  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;document.documentElement.classList.toggle('dark',d)}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-white text-black dark:bg-[#0a0a0a] dark:text-white">
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}
