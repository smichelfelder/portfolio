import type { Metadata } from "next";
import { Header } from "@/components/header";
import { About } from "@/components/about";
import { Approach } from "@/components/approach";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "About · Stephanie Michelfelder",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <About />
        <Approach />
      </main>
      <Footer />
    </>
  );
}
