import Hero from "@/components/common/Hero";
import NavBar from "@/components/common/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-appBackground">
      <NavBar />
      <Hero />
    </main>
  );
}
