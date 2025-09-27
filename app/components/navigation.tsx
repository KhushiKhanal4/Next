"use client";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname= usePathname();
    return (
        <nav className="flex space-x-16 bg-gray-200 justify-center">
            <Link className={`text-gray-600 hover:text-gray-900 py-2 ${pathname === '/' ? 'font-semibold' : ''}`} href="/">Home</Link>
            <Link className={`text-gray-600 hover:text-gray-900 py-2 ${pathname === '/about' ? 'font-semibold' : ''}`} href="/about">About</Link>
            <Link className={`text-gray-600 hover:text-gray-900 py-2 ${pathname.startsWith('/products/1') ? 'font-semibold' : ''}`} href="/products/1">Product 1</Link>
            <Link className={`text-gray-600 hover:text-gray-900 py-2 ${pathname.startsWith('/products/2') ? 'font-semibold' : ''}`} href="/products/2">Product 2</Link>
            <Link className={`text-gray-600 hover:text-gray-900 py-2 ${pathname === '/register' ? 'font-semibold' : ''}`} href="/register">Register</Link>
            <SignInButton mode="modal"/>
        </nav>
    );
}
