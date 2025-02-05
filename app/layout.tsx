
import type { Metadata } from "next";
import {Flavors} from "next/font/google"
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const flavors = Flavors({
  variable: '--font-flavors',
  weight: '400',
  subsets: ['latin'],
})



const FontsVariable = `font-family: ${flavors.style.fontFamily} `;


export const metadata: Metadata = {
  title: "Taskify I To-do list Apps",
  description: "taskify to-do list apps by ervin arviandi",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${FontsVariable}  antialiased`}
      >
        <NextTopLoader color="#a684ff"/>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
