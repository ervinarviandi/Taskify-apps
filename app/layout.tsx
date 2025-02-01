
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import {Roboto} from "next/font/google"
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const robotoVariable = `font-family: ${roboto.style.fontFamily}`;



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
        className={`${robotoVariable}   antialiased`}
      >
        <NextTopLoader color="#c27aff"/>
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
