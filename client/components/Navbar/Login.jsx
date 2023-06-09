"use client"
import Link from "next/link"
export default function Login() {
    return (
        <>
        <Link type="button" 
        href="/login"
        class="
        normal-case
        btn btn-ghost
        shadow-orange
        text-white 
        bg-gradient-to-br from-[#6a38cf] to-pink-500 
        hover:bg-gray-950 
        focus:outline-none  
        focus:ring-none
        font-bold 
        rounded-lg 
        text-sm 
        px-10 py-3 
        mr-2 mb-2 
        dark:bg-gray-950  
        dark:focus:ring-none 
        dark:border-none"
        >
        Get Started 
        </Link>
        </>
    )
}