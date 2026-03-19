import Image from "next/image"
import Link from "next/link"
export default function NotFoundPage() {
    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen">
            <Image src="/not-found.png" alt="Not Found" width={300} height={300} />
            <h1 className="text-4xl font-bold text-black mt-4">Page Not Found</h1>
            <Link href="/dashboard-main" className="text-blue-500 mt-2">Go Back to Dashboard</Link>
        </div>

        </>
    )
}