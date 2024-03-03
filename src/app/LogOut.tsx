'use client'

import { useClerk } from "@clerk/nextjs"
import { useRouter } from "next/navigation";

export default function LogOut() {
    const { signOut } = useClerk();
    const router = useRouter()
    return (
        <button className="nav-link" onClick={() => signOut(() => router.push('/'))}>Log Out</button>
    )
}
