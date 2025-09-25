"use client";
import {useRouter} from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  return (
    <div>
      <h1>About Page</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded m-4" onClick={() => router.push('/')}>Go to Home</button>
    </div>
  );
}