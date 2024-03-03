import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import LogOut from "./LogOut";

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
    const { userId } = auth();
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <div className="p-8 bg-teal-600 flex items-center justify-between">
                        <Link href="/"><h1 className="inline">Video-Uploader</h1></Link>
                        <nav className="flex items-center justify-end gap-4">
                            <Link className="nav-link" href="/">Home</Link>
                            <Link className="nav-link" href="/explore">Explore</Link>
                            {userId ? (
                                <>
                                    <Link className="nav-link" href="/profile">Profile</Link>
                                    <LogOut />
                                </>
                            ) : (
                                <Link className="nav-link" href="/sign-in">Sign in</Link>
                            )}
                        </nav>
                    </div>
                    <main className="">
                        {children}
                    </main>
                </body>
            </html>
        </ClerkProvider>
    );
}
